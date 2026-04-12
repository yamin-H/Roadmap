"use client"

import Link from "next/link"
import { Route, SunMedium, MoonStar } from "lucide-react"
import { useTheme } from "next-themes"

const navLinks = [
    { label: "Features", href: "/feature" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Teams", href: "/team" },
];

export default function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <nav className="w-full sticky top-0 z-50 bg-white/70 dark:bg-[#020817]/70 border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-xl transition-colors duration-300">
            <div className="w-3/5 mx-auto h-16 flex items-center justify-between">

                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="bg-linear-to-br from-blue-500 to-indigo-600 p-2 rounded-xl border border-blue-400/20 shadow-sm shadow-blue-500/20 transition-all duration-300">
                        <Route size={20} color="white" />
                    </div>
                    <span className="text-lg tracking-tight font-black text-slate-900 dark:text-white">
                        Roadly
                    </span>
                </Link>

                {/* Right: everything else in one group */}
                <div className="flex items-center gap-1">

                    {/* Nav links */}
                    {navLinks.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            className="rounded-full px-4 py-2 text-sm text-gray-600 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-all duration-200"
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Divider */}
                    <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-2" />

                    {/* Theme toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                    >
                        {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
                    </button>

                    {/* Log in */}
                    <Link
                        href="/login"
                        className="text-sm text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 transition-colors duration-200"
                    >
                        Log in
                    </Link>

                    {/* Get Started */}
                    <Link
                        href="/signup"
                        className="text-sm bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-200 shadow-sm shadow-indigo-500/30"
                    >
                        Get Started
                    </Link>

                </div>
            </div>
        </nav>
    );
}