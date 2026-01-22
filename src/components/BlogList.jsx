import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"

export function BlogList({ blogs, isLoading, selectedId, onSelect }) {
    if (isLoading) {
        return (
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden border-none shadow-none bg-accent/5">
                        <CardContent className="p-4 space-y-3">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-4 w-full" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    }

    return (
        <ScrollArea className="h-[calc(100vh-280px)] pr-4">
            <div className="space-y-4">
                {blogs?.map((blog) => (
                    <Card
                        key={blog.id}
                        className={`cursor-pointer transition-all hover:ring-2 hover:ring-primary/20 ${selectedId === blog.id ? 'ring-2 ring-primary bg-accent/50' : 'bg-card border shadow-sm'
                            }`}
                        onClick={() => onSelect(blog.id)}
                    >
                        <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex gap-2">
                                    {blog.category.map(cat => (
                                        <span key={cat} className="text-[10px] font-bold text-primary tracking-widest uppercase">
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                                    {new Date(blog.date).toLocaleDateString()}
                                </span>
                            </div>
                            <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                                {blog.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {blog.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </ScrollArea>
    )
}
