import { useContext } from "react";
import { SwapInputsContext } from "../providers/SwapInputsProvider";

const useSwapInputs = () => useContext(SwapInputsContext);

export default useSwapInputs;
