import { useSwapState } from "../store/swap/hooks";
import { Field } from "../store/swap";

const useDerivatedSwapInfo = () => {
  const { independentField, amount } = useSwapState();

  const dependentField =
    Field.INPUT === independentField ? Field.OUTPUT : Field.INPUT;

  const formattedAmounts = {
    [independentField]: amount,
    [dependentField]: amount * 2 || ""
  };

  return { formattedAmounts };
};

export default useDerivatedSwapInfo;
