import React, { useState } from "react";

import Header from "./../components/Header";
import TokenInput from "./../components/TokenInput";
import InterchangeButton from "./../components/InterchangeButton";
import MainButton from "./../components/MainButton";
import SelectToken from "./../components/SelectToken";
import useLateralPanel from "./../hooks/useLateralPanel";

const App = () => {
  const [inputToken, setInputToken] = useState(null);
  const [openPanelInput] = useLateralPanel({
    title: "Select a token",
    content: <SelectToken />,
    onClose: (tokenData) => setInputToken(tokenData)
  });

  const [outputToken, setOutputToken] = useState(null);
  const [openPanelOutput] = useLateralPanel({
    title: "Select a token",
    content: <SelectToken />,
    onClose: (tokenData) => setOutputToken(tokenData)
  });

  return (
    <>
      <Header />
      <TokenInput tokenData={inputToken} changeToken={openPanelInput} />
      <InterchangeButton />
      <TokenInput tokenData={outputToken} changeToken={openPanelOutput} />
      <MainButton />
    </>
  );
};

export default App;
