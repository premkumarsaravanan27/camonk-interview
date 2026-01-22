const BASE_URL = 'http://localhost:3001';

export const blogService = {
    getAllBlogs: async () => {
        const response = await fetch(`${BASE_URL}/blogs`);
        if (!response.ok) throw new Error('Failed to fetch blogs');
        return response.json();
    },

    getBlogById: async (id) => {
        const response = await fetch(`${BASE_URL}/blogs/${id}`);
        if (!response.ok) throw new Error('Failed to fetch blog');
        return response.json();
    },

    createBlog: async (blogData) => {
        const response = await fetch(`${BASE_URL}/blogs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...blogData,
                date: new Date().toISOString(),
            }),
        });
        if (!response.ok) throw new Error('Failed to create blog');
        return response.json();
    },
};
