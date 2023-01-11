import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";

/**
 * 기존 redux의 createStore를 추상화한 것
 *
 * 아래처럼 선언하면 기본 미들웨어로 redux-thunk를 추가하고 리덕스 개발자 도구 활성화해줌
 */
export const store = configureStore({
  reducer,
});

// 컴포넌트에서 사용될 state type
export type RootState = ReturnType<typeof store.getState>;

// 컴포넌트에서 사용될 dispatch type
export type AppDispatch = typeof store.dispatch;
