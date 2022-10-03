import { configureStore } from "@reduxjs/toolkit";
import historyListReducer from "./historyUrlListSlice";

export const store = configureStore({
  reducer: {
    list: historyListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
