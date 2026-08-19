import TodoFilter from "../../components/TodoFilter";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import TodoSummary from "../../components/TodoSummary";

import { useTodoStore } from "./todoStore";

function ZustandTodoPage() {
    const todos = useTodoStore(
        (state) => state.todos,
    );

    const filter = useTodoStore(
        (state) => state.filter,
    );

    const addTodo = useTodoStore(
        (state) => state.addTodo,
    );

    const toggleTodo = useTodoStore(
        (state) => state.toggleTodo,
    );

    const deleteTodo = useTodoStore(
        (state) => state.deleteTodo,
    );

    const setFilter = useTodoStore(
        (state) => state.setFilter,
    );

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
                        Zustand
                    </span>
                    <h2>Zustand Todo</h2>
                </div>
                
                <p>
                    Zustand Store를 사용하는 Todo 입니다.
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

export default ZustandTodoPage;