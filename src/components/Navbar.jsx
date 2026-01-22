import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function Navbar() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Check if dark mode is already set
        const isDarkMode = document.documentElement.classList.contains('dark')
        setIsDark(isDarkMode)
    }, [])

    const toggleDarkMode = () => {
        const newIsDark = !isDark
        setIsDark(newIsDark)

        if (newIsDark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <nav className="border-b sticky top-0 z-50 bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold">M</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight">CA MONK</span>
                        </div>
                        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                            <a href="#" className="hover:text-primary transition-colors">Tools</a>
                            <a href="#" className="hover:text-primary transition-colors">Practice</a>
                            <a href="#" className="hover:text-primary transition-colors">Events</a>
                            <a href="#" className="hover:text-primary transition-colors">Job Board</a>
                            <a href="#" className="hover:text-primary transition-colors">Points</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleDarkMode}
                            className="rounded-full hover:bg-primary/10"
                        >
                            {isDark ? (
                                <Sun className="h-5 w-5 text-yellow-500" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full">Profile</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
