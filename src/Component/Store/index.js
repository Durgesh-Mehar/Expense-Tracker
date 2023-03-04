import {configureStore} from '@reduxjs/toolkit';
import darkslice from './DarkSlicer';
import authSlice from './AuthSlicer';
import expensesSlice from './ExpenseSlicer';
import activeSlice from './ActiveSlicer';

const store = configureStore({
    reducer:{auth:authSlice.reducer,
            expense:expensesSlice.reducer,dark:darkslice.reducer,primium:activeSlice.reducer},
});

export default store;