import React, { createContext, useState } from "react";

export const SwapActionsHandlerContext = createContext({});

const SwapActionsHandlerProvider = ({ children }) => {
  const [inputToken, setInputToken] = useState(null);
  const [outputToken, setOutputToken] = useState(null);

  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");

  const interchangeInputAndOutput = () => {
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
    interchangeInputAndOutput
  };

  return (
    <SwapActionsHandlerContext.Provider value={value}>
      {children}
    </SwapActionsHandlerContext.Provider>
  );
};

export default SwapActionsHandlerProvider;
