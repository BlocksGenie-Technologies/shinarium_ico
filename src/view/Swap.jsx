import React, { useState } from "react";

import Header from "./../components/Header";
import TokenInput from "./../components/TokenInput";
import InterchangeButton from "./../components/InterchangeButton";
import MainButton from "./../components/MainButton";

const App = () => {
  const [inputToken, setInputToken] = useState(null);
  const [outputToken, setOutputToken] = useState(null);

  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");

  const swapInputAndOutput = () => {
    const inputTokenCopy = { ...inputToken };
    setInputToken(outputToken);
    setOutputToken(inputTokenCopy);

    const inputAmountCopy = inputAmount;
    setInputAmount(outputAmount);
    setOutputAmount(inputAmountCopy);
  };

  return (
    <>
      <Header />
      <TokenInput
        token={inputToken}
        setToken={setInputToken}
        amount={inputAmount}
        setAmount={setInputAmount}
      />
      <InterchangeButton onClick={swapInputAndOutput} />
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
