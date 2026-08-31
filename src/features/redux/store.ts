// app 폴더 아래에 Redux Store를 만들어서 애플리케이션 전체 Redux 상태를 조립하는 최상위 객체가 되어야함.
// 본 프로젝트에서는, 상태관리 라이브러리 비교를 위해 redux 폴더 아래에 두기로 함.

import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState =
  ReturnType<typeof store.getState>;

export type AppDispatch =
  typeof store.dispatch;