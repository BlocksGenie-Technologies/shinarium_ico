import {React, useState, useEffect} from "react";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Header from "./components/Header";
import { ethers, providers } from "ethers";
import abi from "./ABIs/sale";
import styles from "./styles.module.css";
import "./app.css";


const App = () => {
  const[amount, setAmount]= useState(0);
  const [web3Modal, setWeb3Modal] = useState(null);
  const [load, setLoad] = useState(false);
  const contractAddress = "0xa18e82eAC46084BcFA5332683B2e29234afF9cC4";

  useEffect(() => {
    // initiate web3modal
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            56: 'https://bsc-dataseed.binance.org/',
          },
          network: 'binance',
        }
      },
    };

    const newWeb3Modal = new Web3Modal({
      cacheProvider: true, // very important
      network: "binance",
      providerOptions,
    });

    setWeb3Modal(newWeb3Modal)
  }, [])
  

  const handleSale = async () => {
    const provider = await web3Modal.connect();
    const ethersProvider = new providers.Web3Provider(provider);
    if (window.ethereum) {
      if(amount <= 0.00001) { alert("BNB amount is low"); return };
        const signer = ethersProvider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          abi,
          signer
        );

      const txn = await contract.buyTokens(
        signer.getAddress(),{value: ethers.utils.parseEther(amount)});
      setLoad(true);
      await txn.wait();
      alert("SHINA PURCHASED SUCCESSFULLY!!!");
      setLoad(false);
    }
  };

  return (
    <div className="app">
      <div className="swapContainer">
          <Header />
          <div className={styles.inputWrapper}>
            <input
              id="token"
              className={styles.input}
              inputMode="decimal"
              autoComplete="off"
              autoCorrect="off"
              type="text"
              pattern="^[0-9]*[.,]?[0-9]*$"
              placeholder="0.0"
              minLength="1"
              maxLength="79"
              spellCheck="false"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className={styles.changeAsset}>
              <img width={22} src={"https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850"} alt="" />
              <span className={styles.symbol}>{"BNB"}</span>
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              ▼▲
            </button>
          </div>
          <div className={styles.inputWrapper}>
            <input
              id="token"
              className={styles.input}
              value={(amount * 3622222).toFixed(3)}
              disabled
            />
            <button className={styles.changeAsset}>
              <img width={22} src={"https://i.imgur.com/PbLgy6N.jpeg"} alt="" />
              <span className={styles.symbol}>{"SHINA"}</span>
            </button>
          </div>
          <button className={styles.mainButton} onClick={handleSale}>
            {load ? "Purchasing..." : "Buy SHINA"}
          </button>
      </div>
    </div>
  );
};

export default App;
