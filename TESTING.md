# Testing Checklist for CA Monk Blog App

## ✅ Todo Feature Tests

### Basic Functionality
- [x] Todo list displays correctly with sample data
- [x] Active and completed todos are separated into sections
- [x] Empty state shows when no todos exist

### Create Todo
- [x] "New Task" button opens create dialog
- [x] Form includes all fields: title, description, priority, due date
- [x] Priority dropdown has Low/Medium/High options
- [x] Due date picker prevents selecting past dates
- [x] Form validation works (title is required)
- [x] New todo appears in the list after creation
- [x] Dialog closes after successful creation

### Todo Item Features
- [x] Checkbox toggles completion status
- [x] Completed todos show strikethrough text
- [x] Priority badges display with correct colors:
  - High: Red
  - Medium: Yellow
  - Low: Green
- [x] Due date displays with calendar icon
- [x] Overdue todos show red warning with alert icon
- [x] Delete button appears on hover
- [x] Delete removes todo from list

### UI/UX
- [x] Tabs switch between Articles and Tasks
- [x] Loading states show spinner
- [x] Error states display error messages
- [x] Smooth animations and transitions
- [x] Responsive design works on mobile

## ✅ Dark Mode Tests

### Toggle Functionality
- [x] Moon/Sun icon in navbar toggles dark mode
- [x] Theme persists in localStorage
- [x] Theme loads from localStorage on page refresh
- [x] System preference detection works on first visit

### Visual Design
- [x] Purple accent color (#8B5CF6) applied throughout
- [x] Dark background has subtle blue tint
- [x] All text is readable with proper contrast
- [x] Buttons and inputs styled correctly in dark mode
- [x] Borders and shadows visible in dark mode
- [x] Smooth transitions between light/dark modes

### Components in Dark Mode
- [x] Navbar displays correctly
- [x] Blog cards styled properly
- [x] Todo items styled properly
- [x] Dialogs/modals styled properly
- [x] Form inputs styled properly
- [x] Tabs styled properly

## ✅ Blog Feature Tests (Existing)

### Display
- [x] Blog list shows all blogs
- [x] Blog detail shows selected blog
- [x] Search input present (UI only)
- [x] Category badges display

### Create Blog
- [x] "New Article" button opens dialog
- [x] Form includes all fields
- [x] New blog appears after creation

## ✅ Integration Tests

### Data Persistence
- [x] JSON Server running on port 3001
- [x] Blogs endpoint: http://localhost:3001/blogs
- [x] Todos endpoint: http://localhost:3001/todos
- [x] TanStack Query caching works
- [x] Optimistic updates work

### Error Handling
- [x] Network errors display error messages
- [x] Loading states prevent duplicate submissions
- [x] Form validation prevents invalid data

## 🚀 Git & Deployment

### Version Control
- [x] Changes committed with clear messages
- [x] Commit 1: "feat: Add todo feature with full CRUD operations"
- [x] Changes pushed to remote repository
- [x] Repository: https://github.com/pratavanan27/camonk-interview.git

## 📝 Notes

### What Was Added
1. **Todo Service** (`src/services/todoService.js`)
   - Full CRUD operations
   - Toggle completion status
   - RESTful API integration

2. **Todo Components**
   - `TodoItem.jsx`: Individual todo with actions
   - `TodoList.jsx`: List with active/completed sections
   - `CreateTodoForm.jsx`: Form with priority and date

3. **UI Components**
   - `checkbox.jsx`: Radix UI checkbox
   - `select.jsx`: Radix UI select dropdown
   - `tabs.jsx`: Radix UI tabs

4. **Dark Mode**
   - Enhanced CSS theme with purple accents
   - Dark mode toggle in navbar
   - localStorage persistence
   - System preference detection
   - Smooth transitions

5. **Database**
   - Added todos collection to `db.json`
   - 3 sample todos with different priorities and states

### Dependencies Added
- @radix-ui/react-checkbox
- @radix-ui/react-select
- @radix-ui/react-tabs

### All Features Working ✅
- ✅ Blogs (read, create)
- ✅ Todos (create, read, update, delete, toggle)
- ✅ Dark mode toggle
- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling
- ✅ Data persistence
