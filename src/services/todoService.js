const BASE_URL = 'http://localhost:3001';

export const todoService = {
    getAllTodos: async () => {
        const response = await fetch(`${BASE_URL}/todos`);
        if (!response.ok) throw new Error('Failed to fetch todos');
        return response.json();
    },

    getTodoById: async (id) => {
        const response = await fetch(`${BASE_URL}/todos/${id}`);
        if (!response.ok) throw new Error('Failed to fetch todo');
        return response.json();
    },

    createTodo: async (todoData) => {
        const response = await fetch(`${BASE_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...todoData,
                completed: false,
                createdAt: new Date().toISOString(),
            }),
        });
        if (!response.ok) throw new Error('Failed to create todo');
        return response.json();
    },

    updateTodo: async ({ id, ...todoData }) => {
        const response = await fetch(`${BASE_URL}/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todoData),
        });
        if (!response.ok) throw new Error('Failed to update todo');
        return response.json();
    },

    deleteTodo: async (id) => {
        const response = await fetch(`${BASE_URL}/todos/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete todo');
        return response.json();
    },

    toggleTodo: async (id, completed) => {
        const response = await fetch(`${BASE_URL}/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed }),
        });
        if (!response.ok) throw new Error('Failed to toggle todo');
        return response.json();
    },
};
