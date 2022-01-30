import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import { useSwapState } from "../store/swap/hooks";
import { Field } from "../store/swap";
import RouterABI from "../ABIs/Router";
import useNetworkEnviroment from "./useNetworkEnviroment";

const { Contract, utils } = ethers;

const useDerivatedSwapInfo = () => {
  const { [Field.INPUT]: inputToken, [Field.OUTPUT]: outputToken } =
    useSwapState();

  const [dependentAmount, seDependentAmount] = useState("");
  const { independentField, amount, input, output } = useSwapState();
  const { platformId, routerAddress } = useNetworkEnviroment();
  const { library } = useWeb3React();

  useEffect(() => {
    const calculate = async () => {
      const inputAddress = input.platforms[platformId];
      const outputAddress = output.platforms[platformId];
      if (!library || !inputAddress || !outputAddress)
        return seDependentAmount("");

      const router = new Contract(routerAddress, RouterABI, library);
      const parseAmount = utils.parseUnits(amount.toString(), 18);
      const swapDetails = [parseAmount, [inputAddress, outputAddress]];
      let result;
      if (independentField === Field.INPUT) {
        [, result] = await router.getAmountsOut(...swapDetails);
      } else {
        [result] = await router.getAmountsIn(...swapDetails);
      }
      const formattedOutput = utils.formatUnits(result, 18);
      seDependentAmount(formattedOutput);
    };

    calculate();
  }, [input, output, amount, library]);

  const dependentField =
    Field.INPUT === independentField ? Field.OUTPUT : Field.INPUT;
  const formattedAmounts = {
    [independentField]: amount,
    [dependentField]: dependentAmount
  };
  const inputAmount = formattedAmounts[Field.INPUT];
  const outputAmount = formattedAmounts[Field.OUTPUT];

  return {
    inputToken,
    outputToken,
    inputAmount,
    outputAmount
  };
};

export default useDerivatedSwapInfo;
