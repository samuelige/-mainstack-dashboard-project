import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { persistConfig, rootReducer } from "./rootReducers";

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
