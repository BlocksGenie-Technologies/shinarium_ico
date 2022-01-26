import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { typeValue, switchInputOutput, Field } from ".";

export const useSwapState = () => useSelector((state) => state.swap);

export const useSwapActionsHandler = () => {
  const { amount } = useSwapState();
  const dispatch = useDispatch();

  const [inputToken, setInputToken] = useState(null);
  const [outputToken, setOutputToken] = useState(null);

  const inputAmount = amount;
  const outputAmount = amount;

  const setInputAmount = useCallback(
    (amount) => dispatch(typeValue({ field: Field.INPUT, amount })),
    []
  );

  const setOutputAmount = useCallback(
    (amount) => dispatch(typeValue({ field: Field.OUTPUT, amount })),
    []
  );

  const switchInputAndOutput = useCallback(
    () => dispatch(switchInputOutput()),
    []
  );

  return {
    inputToken,
    setInputToken,
    outputToken,
    setOutputToken,
    inputAmount,
    setInputAmount,
    outputAmount,
    setOutputAmount,
    switchInputAndOutput
  };
};
