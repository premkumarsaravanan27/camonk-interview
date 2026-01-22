# CA Monk Blog & Task Manager

A modern, full-featured blog and task management application built with React, TanStack Query, Tailwind CSS, and shadcn/ui components.

## 🌟 Features

### 📝 Blog Management
- **Browse Articles**: View all blog posts with beautiful card layouts
- **Read Full Articles**: Click any blog to read the complete content
- **Create New Posts**: Add new blog articles with title, description, categories, cover image, and content
- **Category Tags**: Organize posts with multiple category tags
- **Search Interface**: Search bar for filtering articles (UI ready)

### ✅ Task Management (Todo)
- **Create Tasks**: Add new tasks with title, description, priority, and due date
- **Priority Levels**: Organize tasks by Low, Medium, or High priority with color-coded badges
- **Due Date Tracking**: Set due dates with visual indicators for upcoming and overdue tasks
- **Toggle Completion**: Mark tasks as complete/incomplete with a single click
- **Delete Tasks**: Remove tasks with hover-to-reveal delete button
- **Smart Organization**: Automatic separation of active and completed tasks
- **Empty States**: Friendly messages when no tasks exist

### 🎨 Dark Mode
- **Toggle Theme**: Switch between light and dark modes with navbar button
- **Purple Accent Theme**: Modern purple/blue gradient color scheme
- **Persistent Preference**: Theme choice saved in localStorage
- **System Detection**: Automatically detects system dark mode preference
- **Smooth Transitions**: Beautiful animations when switching themes
- **Premium Design**: Glassmorphism effects and subtle glows in dark mode

### 🎯 User Experience
- **Tabbed Interface**: Switch between Articles and Tasks seamlessly
- **Loading States**: Elegant loading spinners for all async operations
- **Error Handling**: Clear error messages when things go wrong
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **Optimistic Updates**: Instant UI feedback with TanStack Query
- **Smooth Animations**: Polished transitions throughout the app

## 🚀 Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite** - Lightning-fast build tool and dev server
- **TanStack Query v5** - Powerful data fetching and caching
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful, consistent icon set
- **JSON Server** - Mock REST API for development

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pratavanan27/camonk-interview.git
   cd camonk-interview
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server** (in one terminal)
   ```bash
   npm run server
   ```
   This starts the mock API server on `http://localhost:3001`

4. **Start the development server** (in another terminal)
   ```bash
   npm run dev
   ```
   This starts the Vite dev server on `http://localhost:5173`

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🗂️ Project Structure

```
camonk-interview/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.jsx
│   │   │   ├── checkbox.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── input.jsx
│   │   │   ├── select.jsx
│   │   │   ├── tabs.jsx
│   │   │   └── ...
│   │   ├── BlogDetail.jsx   # Blog article viewer
│   │   ├── BlogList.jsx     # Blog list component
│   │   ├── CreateBlogForm.jsx
│   │   ├── CreateTodoForm.jsx
│   │   ├── Navbar.jsx       # Navigation with dark mode toggle
│   │   ├── TodoItem.jsx     # Individual todo component
│   │   └── TodoList.jsx     # Todo list with sections
│   ├── services/
│   │   ├── blogService.js   # Blog API calls
│   │   └── todoService.js   # Todo API calls
│   ├── lib/
│   │   └── utils.js         # Utility functions
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles & theme
├── db.json                  # JSON Server database
├── package.json
└── README.md
```

## 🎨 Color Scheme

### Light Mode
- Primary: Purple (#8B5CF6)
- Background: White (#FFFFFF)
- Text: Dark Gray (#0A0A0A)

### Dark Mode
- Primary: Purple (#A78BFA)
- Background: Dark Blue-Gray (#0A0A0F)
- Text: White (#FAFAFA)
- Accents: Purple/Blue gradients with glow effects

## 📝 API Endpoints

The JSON Server provides the following endpoints:

- `GET /blogs` - Get all blogs
- `GET /blogs/:id` - Get single blog
- `POST /blogs` - Create new blog
- `GET /todos` - Get all todos
- `GET /todos/:id` - Get single todo
- `POST /todos` - Create new todo
- `PATCH /todos/:id` - Update todo
- `DELETE /todos/:id` - Delete todo

## 🧪 Testing

See [TESTING.md](./TESTING.md) for a comprehensive testing checklist.

## 🤝 Contributing

This is an interview project, but suggestions are welcome!

## 📄 License

MIT

## 👨‍💻 Author

Built with ❤️ for CA Monk
