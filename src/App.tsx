import "./App.css";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./stores/modules/todoSlice";
import { ReducerType } from "./stores/rootReducer";
import { ITodo } from "./types/todo";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  // useSelector는 스토어에서 값을 조회해온다
  // 근데.. 상태 트리가 갱신되어 컴포넌트를 다시 render 해야하는 경우 새로운 인스턴스를 생성하게 된다
  // 메모이제이션이 필요하다 (createSelector로 활용가능)
  const todos = useSelector<ReducerType, ITodo[]>((state) => state.todoReducer);
  const dispatch = useDispatch();

  const addHandler = () => {
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    const content = inputRef.current?.value || "";

    dispatch(
      addTodo({
        id,
        content,
      })
    );

    inputRef.current!.value = "";
  };

  const deleteHandler = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <input name="content" ref={inputRef} />
      <button onClick={addHandler}>추가하기</button>

      {todos.map((t) => (
        <div className="todo" key={t.id}>
          <p>
            {t.id} - {t.content}
          </p>

          <button
            onClick={() => {
              deleteHandler(t.id);
            }}
          >
            삭제
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
