import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../types/todo";

const initialState = [] as ITodo[];

/**
 * createSlice를 사용하면 createAction, createReducer 함수가 내부적으로 사용되며,
 * 선언된 슬라이스 이름을 따라서 리듀서와 그에 상응하는 액션 생성자와 액션 타입을 자동으로 생성한다
 */
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // 액션 타입은 슬라이스 이름을 접두어로 사용해서 자동 생성됨 -> todo/addTodo
    // 이에 상응하는 액션 타입을 가진 액션이 디스패치 되면 리듀서가 실행됨
    addTodo: (state, action: PayloadAction<ITodo>) => {
      return [...state, action.payload];
    },
    // 액션 타입 -> todo/deleteTodo
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

// 컴포넌트에서 사용하기 위한 action export
export const { addTodo, deleteTodo } = todoSlice.actions;

// store에 등록할 reducer export
export default todoSlice.reducer;
