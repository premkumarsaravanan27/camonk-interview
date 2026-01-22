import { TodoItem } from "./TodoItem"
import { Loader2, CheckCircle2, ListTodo } from "lucide-react"

export function TodoList({ todos, isLoading }) {
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center py-16 space-y-4">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Loading tasks...</p>
            </div>
        )
    }

    if (!todos || todos.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <ListTodo className="w-8 h-8 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">No tasks yet</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        Create your first task to get started
                    </p>
                </div>
            </div>
        )
    }

    const activeTodos = todos.filter(todo => !todo.completed)
    const completedTodos = todos.filter(todo => todo.completed)

    return (
        <div className="space-y-6">
            {activeTodos.length > 0 && (
                <div className="space-y-3">
                    <div className="flex items-center gap-2 px-2">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Active Tasks
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                            {activeTodos.length}
                        </span>
                    </div>
                    <div className="space-y-2">
                        {activeTodos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
            )}

            {completedTodos.length > 0 && (
                <div className="space-y-3">
                    <div className="flex items-center gap-2 px-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Completed
                        </h3>
                        <span className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full font-medium">
                            {completedTodos.length}
                        </span>
                    </div>
                    <div className="space-y-2">
                        {completedTodos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
