import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import { useSwapState } from "../store/swap/hooks";
import { Field } from "../store/swap";
import RouterABI from "../ABIs/Router";

const { Contract, utils } = ethers;

const useDerivatedSwapInfo = () => {
  const [dependentAmount, seDependentAmount] = useState("");
  const { independentField, amount, input, output } = useSwapState();
  const { library } = useWeb3React();

  useEffect(() => {
    const calculate = async () => {
      const inputAddress = input.platforms["binance-smart-chain"];
      const outputAddress = output.platforms["binance-smart-chain"];
      if (!library || !inputAddress || !outputAddress)
        return seDependentAmount("");

      const router = new Contract(
        "0x10ED43C718714eb63d5aA57B78B54704E256024E",
        RouterABI,
        library
      );
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

  return { formattedAmounts };
};

export default useDerivatedSwapInfo;
