import React from "react";

import Header from "./../components/Header";
import TokenInput from "./../components/TokenInput";
import InterchangeButton from "./../components/InterchangeButton";
import MainButton from "./../components/MainButton";
import { useSwapActionsHandler } from "../store/swap/hooks";
import useDerivatedSwapInfo from "../hooks/useDerivatedSwapInfo";
import { Field } from "../store/swap";

const App = () => {
  const {
    inputToken,
    setInputToken,
    outputToken,
    setOutputToken,
    setInputAmount,
    setOutputAmount
  } = useSwapActionsHandler();

  const { formattedAmounts } = useDerivatedSwapInfo();

  return (
    <>
      <Header />
      <TokenInput
        token={inputToken}
        setToken={setInputToken}
        amount={formattedAmounts[Field.INPUT]}
        setAmount={setInputAmount}
      />
      <InterchangeButton />
      <TokenInput
        token={outputToken}
        setToken={setOutputToken}
        amount={formattedAmounts[Field.OUTPUT]}
        setAmount={setOutputAmount}
      />
      <MainButton />
    </>
  );
};

export default App;
