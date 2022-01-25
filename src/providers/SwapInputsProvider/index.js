import React, { createContext, useState } from "react";

export const SwapInputsContext = createContext({});

const SwapInputsProvider = ({ children }) => {
  const [inputToken, setInputToken] = useState(null);
  const [outputToken, setOutputToken] = useState(null);

  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");

  const swapInputAndOutput = () => {
    const inputTokenCopy = inputToken ? { ...inputToken } : null;
    setInputToken(outputToken);
    setOutputToken(inputTokenCopy);

    const inputAmountCopy = inputAmount;
    setInputAmount(outputAmount);
    setOutputAmount(inputAmountCopy);
  };

  const value = {
    inputToken,
    setInputToken,
    outputToken,
    setOutputToken,
    inputAmount,
    setInputAmount,
    outputAmount,
    setOutputAmount,
    swapInputAndOutput
  };

  return (
    <SwapInputsContext.Provider value={value}>
      {children}
    </SwapInputsContext.Provider>
  );
};

export default SwapInputsProvider;
