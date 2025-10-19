import { useState } from "react";

interface Todo {
    id: number;
    text: string;
}

function Todolist() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTodos((prevTodos) => {
            return prevTodos.concat({
                text: input,
                id: Math.floor(Math.random() * 10000)
            });
        });
        setInput("");
    };

    const removetodo = (id: number) =>
        setTodos(todos => todos.filter((e) => e.id !== id));

    return (
        <div className="max-w-md mx-auto mt-8 p-5 bg-white rounded-lg shadow-md">
            <h1 className="text-xl font-semibold text-center mb-4 text-gray-800">Todo List</h1>

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex gap-2">
                    <input
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your text"
                        value={input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                        type="text"
                    />
                    <button
                        className="px-3 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </form>

            <ul className="space-y-2">
                {todos.map(({ text, id }) => (
                    <li key={id} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                        <span className="text-sm text-gray-800 font-medium">{text}</span>
                        <button
                            className="w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition-colors text-xs"
                            onClick={() => removetodo(id)}
                            type="button"
                        >
                            ×
                        </button>
                    </li>
                ))}
            </ul>

            {todos.length === 0 && (
                <p className="text-center text-xs text-gray-500 mt-4">No todos yet. Add one above!</p>
            )}
        </div>
    );
}

export default Todolist;