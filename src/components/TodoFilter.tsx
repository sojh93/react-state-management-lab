import type { TodoFilter as TodoFilterType } from "../types/todo";

interface TodoFilterProps {
    filter: TodoFilterType;
    onChangeFilter: (filter: TodoFilterType) => void;
}

function TodoFilter({
    filter,
    onChangeFilter,
}: TodoFilterProps) {
    return (
        <div className="todo-filter">
            <button
                type="button"
                className={filter === "all" ? "active" : ""}
                onClick={() => onChangeFilter("all")}
            >
                전체
            </button>
            <button
                type="button"
                className={filter === "active" ? "active" : ""}
                onClick={() => onChangeFilter("active")}
            >
                미완료
            </button>
            <button
                type="button"
                className={filter === "completed" ? "active" : ""}
                onClick={() => onChangeFilter("completed")}
            >
                완료
            </button>
        </div>
    );
}

export default TodoFilter;