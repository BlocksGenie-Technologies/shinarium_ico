import { useContext } from "react";
import { SwapActionsHandlerContext } from "../providers/SwapActionsHandlerProvider";

const useSwapActionsHandler = () => useContext(SwapActionsHandlerContext);

export default useSwapActionsHandler;
