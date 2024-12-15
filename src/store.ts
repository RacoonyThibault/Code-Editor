import { configureStore } from "@reduxjs/toolkit";
import tabs from "./features/tabs";
import preview from "./features/preview";

export const store = configureStore({
  reducer: {
    tabs,
    preview,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
