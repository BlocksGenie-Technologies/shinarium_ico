import React, { useState } from "react";

import Header from "./../components/Header";
import TokenInput from "./../components/TokenInput";
import InterchangeButton from "./../components/InterchangeButton";
import MainButton from "./../components/MainButton";

const App = () => {
  const [inputToken, setInputToken] = useState(null);
  const [outputToken, setOutputToken] = useState(null);

  const swapInputAndOutput = () => {
    const inputTokenCopy = { ...inputToken };
    setInputToken(outputToken);
    setOutputToken(inputTokenCopy);
  };

  return (
    <>
      <Header />
      <TokenInput token={inputToken} setToken={setInputToken} />
      <InterchangeButton onClick={swapInputAndOutput} />
      <TokenInput token={outputToken} setToken={setOutputToken} />
      <MainButton />
    </>
  );
};

export default App;
