import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import LateralPanelProvider from "./providers/LateralPanelProvider";
import AuthProvider from "./providers/AuthProvider";
import SwapInputsProvider from "./providers/SwapInputsProvider";
import Swap from "./view/Swap";
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
            <SwapInputsProvider>
              <LateralPanelProvider>
                <Swap />
              </LateralPanelProvider>
            </SwapInputsProvider>
          </AuthProvider>
        </Web3ReactProvider>
      </div>
    </div>
  );
};

export default App;
