import React from "react";

import Header from "./../components/Header";
import TokenInput from "./../components/TokenInput";
import InterchangeButton from "./../components/InterchangeButton";
import MainButton from "./../components/MainButton";
import { useSwapActionsHandler, useSwapState } from "../store/swap/hooks";
import useDerivatedSwapInfo from "../hooks/useDerivatedSwapInfo";
import { Field } from "../store/swap";

const App = () => {
  const { INPUT, OUTPUT } = Field;
  const { [INPUT]: inputToken, [OUTPUT]: outputToken } = useSwapState();
  const { setInputToken, setOutputToken, setInputAmount, setOutputAmount } =
    useSwapActionsHandler();

  const { formattedAmounts } = useDerivatedSwapInfo();

  return (
    <>
      <Header />
      <TokenInput
        token={inputToken}
        setToken={setInputToken}
        amount={formattedAmounts[INPUT]}
        setAmount={setInputAmount}
      />
      <InterchangeButton />
      <TokenInput
        token={outputToken}
        setToken={setOutputToken}
        amount={formattedAmounts[OUTPUT]}
        setAmount={setOutputAmount}
      />
      <MainButton />
    </>
  );
};

export default App;
