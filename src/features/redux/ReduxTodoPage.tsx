import TodoFilter from "../../components/TodoFilter";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import TodoSummary from "../../components/TodoSummary";

import {
    useAppDispatch,
    useAppSelector,
} from "./hooks"

import {
    addTodo,
    deleteTodo,
    setFilter,
    toggleTodo,
} from "./todoSlice";

function ReduxTodoPage() {
    const dispatch = useAppDispatch();

    const todos = useAppSelector(
        (state) => state.todo.todos,
    );

    const filter = useAppSelector(
        (state) => state.todo.filter,
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

    const handleAddTodo = (title: string) => {
        dispatch(addTodo(title));
    };

    const handleToggleTodo = (id: string) => {
        dispatch(toggleTodo(id));
    };

    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id));
    };

    const handleChangeFilter = (
        filter: "all" | "active" | "completed",
    ) => {
        dispatch(setFilter(filter));
    };

    return (
        <section className="todo-page">
            <div className="page-title">
                <div>
                <span className="library-label">
                    Redux Toolkit
                </span>

                <h2>Redux Toolkit Todo</h2>
                </div>

                <p>
                Redux Toolkit Store를 사용하는 Todo입니다.
                </p>
            </div>

            <TodoForm
                onAdd={handleAddTodo}
            />

            <TodoFilter
                filter={filter}
                onChangeFilter={handleChangeFilter}
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
        </section>
    );
}

export default ReduxTodoPage;