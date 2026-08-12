import { useState } from "react";


interface TodoFormProps {
    onAdd: (title: string) => void;
}

function TodoForm({ onAdd }: TodoFormProps) {
    const [title, setTitle] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedTitle = title.trim();

        if (!trimmedTitle) {
            return;
        }

        onAdd(trimmedTitle);

        setTitle("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                placeholder="할 일을 입력하세요."
                onChange={(event) => setTitle(event.target.value)}
            />

            <button type="submit">추가</button>
        </form>
    )
}

export default TodoForm;