'use client'

import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState<boolean>(true)
    const handleThemeToggle = () => setDarkMode(!darkMode)

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <div 
            className="relative h-8 flex items-center gap-10 dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1 text-white z-[999]"
            onClick={handleThemeToggle}
        >
            <p>DARK</p>
            <p>LIGHT</p>
        </div>
    )
}
