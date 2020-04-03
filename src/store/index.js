import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState, options) {
  const middlewares = []; // 미들웨어들을 넣으면 된다.
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, initialState, enhancer);
  return store;
}
