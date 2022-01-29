import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { typeValue, switchInputOutput, Field, setContractAddress } from ".";

export const useSwapState = () => useSelector((state) => state.swap);

export const useSwapActionsHandler = () => {
  const dispatch = useDispatch();

  const setInputAmount = useCallback(
    (amount) => dispatch(typeValue({ field: Field.INPUT, amount })),
    []
  );

  const setOutputAmount = useCallback(
    (amount) => dispatch(typeValue({ field: Field.OUTPUT, amount })),
    []
  );

  const setInputToken = useCallback(
    (address) => dispatch(setContractAddress({ field: Field.INPUT, address })),
    []
  );

  const setOutputToken = useCallback(
    (address) => dispatch(setContractAddress({ field: Field.OUTPUT, address })),
    []
  );

  const switchInputAndOutput = useCallback(
    () => dispatch(switchInputOutput()),
    []
  );

  return {
    setInputToken,
    setOutputToken,
    setInputAmount,
    setOutputAmount,
    switchInputAndOutput
  };
};
