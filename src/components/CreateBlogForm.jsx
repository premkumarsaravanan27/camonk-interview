import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { blogService } from "@/services/blogService"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PlusCircle, Loader2 } from "lucide-react"

export function CreateBlogForm() {
    const [open, setOpen] = useState(false)
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: blogService.createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] })
            setOpen(false)
            // Reset form would be better, but we'll stick to basic for now
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = {
            title: formData.get("title"),
            description: formData.get("description"),
            category: formData.get("category").split(",").map(c => c.trim()),
            coverImage: formData.get("coverImage") || "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
            content: formData.get("content"),
        }
        mutation.mutate(data)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="rounded-full gap-2 shadow-lg hover:shadow-xl transition-all">
                    <PlusCircle className="w-4 h-4" /> New Article
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">Create New Blog Post</DialogTitle>
                        <DialogDescription>
                            Share your insights with the CA Monk community.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 py-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" placeholder="e.g. The Future of Fintech" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="category">Categories (comma separated)</Label>
                                <Input id="category" name="category" placeholder="FINANCE, TECH" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="coverImage">Cover Image URL</Label>
                                <Input id="coverImage" name="coverImage" placeholder="https://images.pexels.com/..." />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Short Description</Label>
                            <Input id="description" name="description" placeholder="A brief summary of the blog" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="content">Full Content</Label>
                            <Textarea
                                id="content"
                                name="content"
                                placeholder="Write your blog post here..."
                                className="min-h-[200px] resize-none"
                                required
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={mutation.isPending}>
                            {mutation.isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Creating...
                                </>
                            ) : (
                                "Publish Post"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
