import { useState } from "react";

import TodoFilter from "../../components/TodoFilter";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import TodoSummary from "../../components/TodoSummary";

import type {
    type,
    TodoFilter as TodoFilterType,
} from "../../types/todo";

function UseStateTodoPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<TodoFilterType>("all");

    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: crypto.randomUUID,
            title,
            completed: false,
        };

        setTodos((prevTodos) => [
            ...prevTodos,
            newTodo,
        ]);
    };

    const toggleTodo = (id: string) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => 
                todo.id === id
                    ? {
                        ...todo,
                        completed: !todo.completed,
                    }
                    : todo,
            ),
        );
    };

    const deleteTodo = (id: string) => {
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== id),
        );
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") {
            return !todo.completed;
        }

        if (filter === "completed") {
            return todo.completed;
        }

        return true;
    });

    const totalCount = todos.length;

    const completedCount = todos.filter(
        (todo) => todo.completed,
    ).length;

    const activeCount = totalCount - completedCount;

    return (
        <section className="todo-page">
            <div className="page-title">
                <div>
                    <span className="library-label">
                        React
                    </span>

                    <h2>useState Todo</h2>
                </div>
                <p>
                    React의 기본 상태관리만 사용한 구현입니다.
                </p>
            </div>

            <TodoForm onAdd={addTodo} />

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
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />
        </section>
    );
}

export default UseStateTodoPage;