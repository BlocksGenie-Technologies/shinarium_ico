import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

const { Contract } = ethers;

const useContract = (address, ABI) => {
  const [contract, setContract] = useState(null);
  const { library } = useWeb3React();

  useEffect(() => {
    const getContract = async () => {
      if (!library || !address) return setContract(null);
      const contractInstance = await new Contract(address, ABI, library);
      setContract(contractInstance);
    };
    getContract();
  }, [library, address]);

  return [contract];
};

export default useContract;
