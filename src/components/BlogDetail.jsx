import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { ThumbsUp, MessageSquare, Share2, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlogDetail({ blog, isLoading }) {
    if (isLoading) {
        return (
            <div className="space-y-8 animate-pulse">
                <Skeleton className="w-full aspect-video rounded-2xl" />
                <div className="space-y-4">
                    <Skeleton className="h-12 w-3/4" />
                    <div className="flex gap-4">
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-6 w-24" />
                    </div>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                </div>
            </div>
        )
    }

    if (!blog) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground min-h-[400px]">
                <div className="w-16 h-16 bg-accent rounded-full mb-4 flex items-center justify-center">
                    <Share2 className="w-8 h-8 opacity-20" />
                </div>
                <p className="text-lg font-medium">Select an article to read</p>
            </div>
        )
    }

    return (
        <ScrollArea className="h-[calc(100vh-280px)] pr-6">
            <article className="space-y-8 pb-12">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border shadow-lg">
                    <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-xs font-semibold text-primary uppercase tracking-widest">
                            {blog.category.join(" & ")}
                            <span className="text-muted-foreground">•</span>
                            <span className="flex items-center gap-1 font-medium capitalize">
                                <Clock className="w-3 h-3" /> 5 min read
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                            {blog.title}
                        </h1>

                        <Button className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2">
                            <Share2 className="w-4 h-4" /> Share Article
                        </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 p-6 bg-accent/30 rounded-2xl border">
                        <div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Category</p>
                            <p className="text-sm font-semibold">{blog.category.join(" & ")}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Read Time</p>
                            <p className="text-sm font-semibold">5 Mins</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Date</p>
                            <p className="text-sm font-semibold">{new Date(blog.date).toLocaleDateString()}</p>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground">
                        {blog.content.split('\n\n').map((para, i) => (
                            <p key={i} className="mb-6 leading-relaxed whitespace-pre-wrap">
                                {para}
                            </p>
                        ))}
                    </div>

                    <div className="pt-8 border-t flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-sm">AM</div>
                            <div>
                                <p className="text-sm font-bold">Written by Arjun Mehta</p>
                                <p className="text-xs text-muted-foreground">Senior Financial Analyst</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary">
                                <ThumbsUp className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary">
                                <MessageSquare className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </article>
        </ScrollArea>
    )
}
