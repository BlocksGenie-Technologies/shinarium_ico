import { ethers } from "ethers";

import RouterABI from "../ABIs/Router";
import useContract from "./useContract";
import useNetworkEnviroment from "./useNetworkEnviroment";

const { utils } = ethers;

const useDEX = () => {
  const { routerAddress } = useNetworkEnviroment();
  const [router] = useContract(routerAddress, RouterABI);

  const getAmounts = (cb) => async (amount, path) => {
    if (!router || !amount) return null;
    const parseAmount = utils.parseUnits(amount.toString(), 18);
    const result = await cb(router, parseAmount, path);
    return utils.formatUnits(result, 18);
  };

  const getAmountsIn = getAmounts(async (routerContract, ...params) => {
    const [result] = await routerContract.getAmountsIn(...params);
    return result;
  });

  const getAmountsOut = getAmounts(async (routerContract, ...params) => {
    const [, result] = await routerContract.getAmountsOut(...params);
    return result;
  });

  return { router, getAmountsIn, getAmountsOut };
};

export default useDEX;
