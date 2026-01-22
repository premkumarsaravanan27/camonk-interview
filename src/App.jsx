import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { blogService } from "@/services/blogService"
import { Navbar } from "@/components/Navbar"
import { BlogList } from "@/components/BlogList"
import { BlogDetail } from "@/components/BlogDetail"
import { CreateBlogForm } from "@/components/CreateBlogForm"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

function App() {
  const [selectedId, setSelectedId] = useState(null)

  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: blogService.getAllBlogs,
  })

  // Selected blog query
  const { data: selectedBlog, isLoading: isBlogLoading } = useQuery({
    queryKey: ['blogs', selectedId],
    queryFn: () => blogService.getBlogById(selectedId),
    enabled: !!selectedId,
  })

  // Set initial selection
  if (!selectedId && blogs?.length > 0) {
    setSelectedId(blogs[0].id)
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-zinc-950 font-sans selection:bg-primary/10">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-foreground">
            CA Monk Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Stay updated with the latest trends in finance, accounting, and career growth
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Blog List */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold flex items-center gap-2">
                Latest Articles
              </h2>
              <CreateBlogForm />
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10 rounded-full bg-white dark:bg-zinc-900 border-none shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-800"
              />
            </div>

            {error && (
              <div className="p-4 bg-destructive/10 text-destructive rounded-xl text-sm font-medium border border-destructive/20">
                Error loading blogs: {error.message}
              </div>
            )}

            <BlogList
              blogs={blogs}
              isLoading={isLoading}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          </div>

          {/* Right Column: Blog Detail */}
          <div className="lg:col-span-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] p-4 lg:p-10 shadow-xl border border-zinc-100 dark:border-zinc-800 ring-1 ring-zinc-200/50 dark:ring-zinc-800/50">
            <BlogDetail
              blog={selectedBlog}
              isLoading={isBlogLoading}
            />
          </div>
        </div>
      </main>

      <footer className="border-t bg-zinc-900 text-zinc-400 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="col-span-2 md:col-span-1 space-y-6">
              <div className="flex items-center gap-2 text-white">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">M</span>
                </div>
                <span className="font-bold text-xl tracking-tight">CA MONK</span>
              </div>
              <p className="text-sm leading-relaxed">
                Empowering the next generation of financial leaders with tools, community, and knowledge.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Platform</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Job Board</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Practice Tests</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center text-xs">
            <p>© 2026 CA Monk. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
