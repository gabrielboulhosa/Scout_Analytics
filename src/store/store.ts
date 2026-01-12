import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import { footballApi } from "../Services/api";

export const store = configureStore({
  reducer: {
    form: formReducer,
    [footballApi.reducerPath]: footballApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(footballApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
