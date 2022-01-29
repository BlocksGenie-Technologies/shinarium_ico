import { createSlice } from "@reduxjs/toolkit";

export const Field = {
  INPUT: "input",
  OUTPUT: "output"
};

const initialState = {
  [Field.INPUT]: { meta: {}, platforms: {} },
  [Field.OUTPUT]: { meta: {}, platforms: {} },
  independentField: Field.INPUT,
  amount: "",
  recipient: null
};

export const counterSlice = createSlice({
  name: "swap",
  initialState,
  reducers: {
    typeValue: (state, { payload: { field, amount } }) => ({
      ...state,
      independentField: field,
      amount
    }),
    setContractAddress: (state, { payload: { field, address } }) => ({
      ...state,
      [field]: address
    }),
    switchInputOutput: (state) => ({
      ...state,
      independentField:
        state.independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT,
      [Field.INPUT]: state[Field.OUTPUT],
      [Field.OUTPUT]: state[Field.INPUT]
    })
  }
});

export const { typeValue, setContractAddress, switchInputOutput } =
  counterSlice.actions;

export default counterSlice.reducer;
