import { create } from "zustand";

import type {
    Todo,
    TodoFilter,
} from "../../types/todo";

interface TodoState {
    todos: Todo[];
    filter: TodoFilter;

    addTodo: (title: string) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    setFilter: (filter: TodoFilter) => void;
}

export const useTodoStore = create<TodoState>()((set) => ({
    todos: [],
    filter: "all",

    addTodo: (title) => {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            title,
            completed: false,
        };

        set((state) => ({
            todos: [
                ...state.todos,
                newTodo,
            ],
        }));
    },

    toggleTodo: (id) => {
        set((state) => ({
            todos: state.todos.map((todo) => 
                todo.id === id
                    ? {
                        ...todo,
                        completed: !todo.completed,
                    }
                : todo,
            ),
        }));
    },

    deleteTodo: (id) => {
        set((state) => ({
            todos: state.todos.filter(
                (todo) => todo.id !== id,
            ),
        }));
    },

    setFilter: (filter) => {
        set({
            filter,
        });
    },
}));