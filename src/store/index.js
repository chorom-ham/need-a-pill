import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const enhancedReducer = persistReducer(persistConfig, reducer);

export default function configureStore(initialState, options) {
  const middlewares = []; // 미들웨어들을 넣으면 된다.
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(enhancedReducer, initialState, enhancer);
  return store;
}
