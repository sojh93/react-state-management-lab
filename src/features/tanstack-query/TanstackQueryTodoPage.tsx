import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  useState,
} from "react";

import TodoFilter from "../../components/TodoFilter";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import TodoSummary from "../../components/TodoSummary";

import type {
  TodoFilter as TodoFilterType,
} from "../../types/todo";

import {
  createTodo,
  deleteTodo,
  getTodos,
  toggleTodo,
} from "./todoApi";


function TanstackQueryTodoPage() {
  const queryClient =
    useQueryClient();

  const [filter, setFilter] =
    useState<TodoFilterType>("all");


  const {
    data: todos = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });


  const addTodoMutation =
    useMutation({
      mutationFn: createTodo,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["todos"],
        });
      },
    });


  const toggleTodoMutation =
    useMutation({
      mutationFn: toggleTodo,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["todos"],
        });
      },
    });


  const deleteTodoMutation =
    useMutation({
      mutationFn: deleteTodo,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["todos"],
        });
      },
    });


  const handleAddTodo = (
    title: string,
  ) => {
    addTodoMutation.mutate(title);
  };


  const handleToggleTodo = (
    id: string,
  ) => {
    const todo = todos.find(
      (todo) => todo.id === id,
    );

    if (!todo) {
      return;
    }

    toggleTodoMutation.mutate(todo);
  };


  const handleDeleteTodo = (
    id: string,
  ) => {
    deleteTodoMutation.mutate(id);
  };


  const filteredTodos =
    todos.filter((todo) => {
      if (filter === "active") {
        return !todo.completed;
      }

      if (filter === "completed") {
        return todo.completed;
      }

      return true;
    });


  const totalCount =
    todos.length;

  const completedCount =
    todos.filter(
      (todo) => todo.completed,
    ).length;

  const activeCount =
    totalCount - completedCount;


  if (isPending) {
    return (
      <section className="todo-page">
        <p>Todo 데이터를 불러오는 중입니다.</p>
      </section>
    );
  }


  if (isError) {
    return (
      <section className="todo-page">
        <p>
          오류가 발생했습니다:
          {" "}
          {error.message}
        </p>
      </section>
    );
  }


  return (
    <section className="todo-page">
      <div className="page-title">
        <div>
          <span className="library-label">
            TanStack Query
          </span>

          <h2>
            TanStack Query Todo
          </h2>
        </div>

        <p>
          서버 상태를 관리하는 Todo입니다.
        </p>
      </div>


      <TodoForm
        onAdd={handleAddTodo}
      />


      <TodoFilter
        filter={filter}
        onChangeFilter={setFilter}
      />


      <TodoSummary
        totalCount={totalCount}
        activeCount={activeCount}
        completedCount={completedCount}
      />


      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />


      {addTodoMutation.isPending && (
        <p>Todo를 추가하는 중입니다.</p>
      )}
    </section>
  );
}


export default TanstackQueryTodoPage;