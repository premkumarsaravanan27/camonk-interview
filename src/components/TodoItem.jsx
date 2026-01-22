import { useMutation, useQueryClient } from "@tanstack/react-query"
import { todoService } from "@/services/todoService"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2, Calendar, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function TodoItem({ todo }) {
    const queryClient = useQueryClient()

    const toggleMutation = useMutation({
        mutationFn: () => todoService.toggleTodo(todo.id, !todo.completed),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] })
        },
    })

    const deleteMutation = useMutation({
        mutationFn: () => todoService.deleteTodo(todo.id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] })
        },
    })

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const now = new Date()
        const diffTime = date - now
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        if (diffDays < 0) return "Overdue"
        if (diffDays === 0) return "Today"
        if (diffDays === 1) return "Tomorrow"
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high':
                return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20'
            case 'medium':
                return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20'
            case 'low':
                return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20'
            default:
                return 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20'
        }
    }

    const isOverdue = new Date(todo.dueDate) < new Date() && !todo.completed

    return (
        <div
            className={cn(
                "group relative p-4 rounded-2xl border transition-all duration-200",
                "bg-white dark:bg-zinc-900 hover:shadow-lg",
                todo.completed
                    ? "border-zinc-200 dark:border-zinc-800 opacity-60"
                    : "border-zinc-200 dark:border-zinc-800 hover:border-primary/20"
            )}
        >
            <div className="flex items-start gap-3">
                <Checkbox
                    id={`todo-${todo.id}`}
                    checked={todo.completed}
                    onCheckedChange={() => toggleMutation.mutate()}
                    disabled={toggleMutation.isPending}
                    className="mt-1"
                />
                <div className="flex-1 min-w-0">
                    <label
                        htmlFor={`todo-${todo.id}`}
                        className={cn(
                            "block font-semibold text-sm cursor-pointer transition-colors",
                            todo.completed
                                ? "line-through text-muted-foreground"
                                : "text-foreground"
                        )}
                    >
                        {todo.title}
                    </label>
                    {todo.description && (
                        <p className={cn(
                            "text-xs mt-1 line-clamp-2",
                            todo.completed
                                ? "text-muted-foreground/70"
                                : "text-muted-foreground"
                        )}>
                            {todo.description}
                        </p>
                    )}
                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                        <span className={cn(
                            "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border",
                            getPriorityColor(todo.priority)
                        )}>
                            {todo.priority}
                        </span>
                        {todo.dueDate && (
                            <span className={cn(
                                "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
                                isOverdue
                                    ? "bg-red-500/10 text-red-600 dark:text-red-400"
                                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                            )}>
                                {isOverdue && <AlertCircle className="w-3 h-3" />}
                                <Calendar className="w-3 h-3" />
                                {formatDate(todo.dueDate)}
                            </span>
                        )}
                    </div>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => deleteMutation.mutate()}
                    disabled={deleteMutation.isPending}
                >
                    <Trash2 className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
