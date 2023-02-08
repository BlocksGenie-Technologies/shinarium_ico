import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { typeValue, Field } from ".";

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

 

  return {
    setInputAmount,
    setOutputAmount
  };
};
