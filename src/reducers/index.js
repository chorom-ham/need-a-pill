import { combineReducers } from "redux"; // 여러 리듀서들을 하나로 합쳐준다.

const rootReducer = combineReducers({
  // 여기에 다른 리듀서들을 더 적으면 된다!
});

export default rootReducer; // _app.js에서 reducer로 사용된다!
