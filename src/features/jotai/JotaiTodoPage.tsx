import {
    useAtomValue,
    useSetAtom,
} from "jotai";

import TodoFilter from "../../components/TodoFilter";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import TodoSummary from "../../components/TodoSummary";

import {
    addTodoAtom,
    deleteTodoAtom,
    filterAtom,
    filteredTodosAtom,
    todoSummaryAtom,
    toggleTodoAtom,
} from "./todoAtoms";

function JotaiTodoPage() {

    const filter = useAtomValue(filterAtom);

    const filteredTodos = useAtomValue(filteredTodosAtom);

    const {
        totalCount,
        activeCount,
        completedCount,
    } = useAtomValue(todoSummaryAtom);

    const setFilter = useSetAtom(filterAtom);

    const addTodo = useSetAtom(addTodoAtom);

    const toggleTodo = useSetAtom(toggleTodoAtom);

    const deleteTodo = useSetAtom(deleteTodoAtom);

    return (
        <section className="todo-page">
            <div className="page-title">
                <div>
                <span className="library-label">
                    Jotai
                </span>

                <h2>Jotai Todo</h2>
                </div>

                <p>
                Atom 기반으로 상태를 관리하는 Todo입니다.
                </p>
            </div>

            <TodoForm
                onAdd={addTodo}
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
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />
        </section>
    );
}

export default JotaiTodoPage;