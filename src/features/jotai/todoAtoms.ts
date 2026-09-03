import { atom } from "jotai";

import type {
    Todo,
    TodoFilter,
} from "../../types/todo";

export const todosAtom = atom<Todo[]>([]);

export const filterAtom = atom<TodoFilter>("all");

export const filteredTodosAtom = atom(
    (get) => {
        const todos = get(todosAtom);
        const filter = get(filterAtom);
        
        if (filter === "active") {
            return todos.filter(
                (todo) => !todo.completed,
            );
        }

        if (filter === "completed") {
            return todos.filter(
                (todo) => todo.completed,
            );
        }

        return todos;
    },
);

export const todoSummaryAtom = atom(
  (get) => {
    const todos =
      get(todosAtom);

    const totalCount =
      todos.length;

    const completedCount =
      todos.filter(
        (todo) => todo.completed,
      ).length;

    const activeCount =
      totalCount - completedCount;

    return {
      totalCount,
      activeCount,
      completedCount,
    };
  },
);

export const addTodoAtom = atom(
  null,
  (
    _get,
    set,
    title: string,
  ) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    set(
      todosAtom,
      (prevTodos) => [
        ...prevTodos,
        newTodo,
      ],
    );
  },
);

export const toggleTodoAtom = atom(
// 첫번째 인자는 읽기, 두번째 인자는 쓰기. 읽을 값이 없기 때문에 null처리.
  null,
  (
    // _표시는 관례적 미사용 인자 표시.
    _get,
    set,
    id: string,
  ) => {
    set(
      todosAtom,
      (prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                completed:
                  !todo.completed,
              }
            : todo,
        ),
    );
  },
);


export const deleteTodoAtom = atom(
  null,
  (
    _get,
    set,
    id: string,
  ) => {
    set(
      todosAtom,
      (prevTodos) =>
        prevTodos.filter(
          (todo) =>
            todo.id !== id,
        ),
    );
  },
);