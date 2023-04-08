import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import sidebarShowReducer from "./reducers/sidebarShowReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: "",
};

const rootReducer = combineReducers({
  nav: sidebarShowReducer,
});

export { persistConfig, rootReducer };
