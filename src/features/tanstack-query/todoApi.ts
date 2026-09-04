import type { Todo } from "../../types/todo";

const BASE_URL = "http://localhost:3001/todos";

export const getTodos = async (): Promise<Todo[]> => {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
        throw new Error("Todo 목록 조회에 실패했습니다.");
    }

    return response.json();
};

export const createTodo = async (
    title: string,
): Promise<Todo> => {
    const response = await fetch(BASE_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            title,
            completed: false,
        }),
    });

    if (!response.ok) {
        throw new Error("Todo 추가에 실패했습니다.");
    }

    return response.json();;
};

export const toggleTodo = async (
    todo: Todo,
): Promise<Todo> => {
    const response = await fetch(
        `${BASE_URL}/${todo.id}`,
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                completed: !todo.completed,
            }),
        },
    );

    if (!response.ok) {
        throw new Error("Todo 상태 변경에 실패했습니다.");
    }

    return response.json();
};

export const deleteTodo = async (
  id: string,
): Promise<void> => {
  const response = await fetch(
    `${BASE_URL}/${id}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("Todo 삭제에 실패했습니다.");
  }
};