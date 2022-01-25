import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import Swap from "./view/Swap";
import LateralPanelProvider from "./providers/LateralPanelProvider";
import AuthProvider from "./providers/AuthProvider";
import "./app.css";

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

const App = () => {
  return (
    <div className="app">
      <div className="swapContainer">
        <Web3ReactProvider getLibrary={getLibrary}>
          <AuthProvider>
            <LateralPanelProvider>
              <Swap />
            </LateralPanelProvider>
          </AuthProvider>
        </Web3ReactProvider>
      </div>
    </div>
  );
};

export default App;
