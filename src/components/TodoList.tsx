import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

function TodoList({
    todos,
    onToggle,
    onDelete,
}: TodoListProps) {
    if (todos.length === 0) {
        return (
            <p className="empty-message">
                표시할 Todo가 없습니다.
            </p>
        );
    }
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default TodoList;