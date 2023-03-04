import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  expenses: [],
  total: 0,
};

const expensesSlice = createSlice({
  name: "expensesSlice",
  initialState: initialValues,
  reducers: {
    setExpenses(state, action) {
      state.expenses = action.payload;
      state.total = action.payload;
    },
  },
});

export const expensesActions = expensesSlice.actions;

export default expensesSlice;
