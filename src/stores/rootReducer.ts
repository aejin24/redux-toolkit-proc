import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./modules/todoSlice";

const reducer = combineReducers({
  todoReducer,
});

// 컴포넌트에서 사용될 reducer type
export type ReducerType = ReturnType<typeof reducer>;

export default reducer;
