import React from "react";

import Header from "./../components/Header";
import TokenInput from "./../components/TokenInput";
import InterchangeButton from "./../components/InterchangeButton";
import MainButton from "./../components/MainButton";
import useSwapInputs from "../hooks/useSwapInputs";

const App = () => {
  const {
    inputToken,
    setInputToken,
    outputToken,
    setOutputToken,
    inputAmount,
    setInputAmount,
    outputAmount,
    setOutputAmount
  } = useSwapInputs();

  return (
    <>
      <Header />
      <TokenInput
        token={inputToken}
        setToken={setInputToken}
        amount={inputAmount}
        setAmount={setInputAmount}
      />
      <InterchangeButton />
      <TokenInput
        token={outputToken}
        setToken={setOutputToken}
        amount={outputAmount}
        setAmount={setOutputAmount}
      />
      <MainButton />
    </>
  );
};

export default App;
