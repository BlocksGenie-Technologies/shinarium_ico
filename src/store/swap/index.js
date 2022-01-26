import { createSlice } from "@reduxjs/toolkit";

export const Field = {
  INPUT: "input",
  OUTPUT: "output"
};

const initialState = {
  [Field.INPUT]: { currencyId: "" },
  [Field.OUTPUT]: { currencyId: "" },
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
    switchInputOutput: (state) => ({
      ...state,
      independentField:
        state.independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT,
      [Field.INPUT]: { currencyId: state[Field.OUTPUT].currencyId },
      [Field.OUTPUT]: { currencyId: state[Field.INPUT].currencyId }
    })
  }
});

export const { typeValue, switchInputOutput } = counterSlice.actions;

export default counterSlice.reducer;
