"use client";

import Link from "next/link";
import { Route, SunMedium, MoonStar, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Features", href: "/feature" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Teams", href: "/team" },
];

export default function Header() {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathName = usePathname();

    // ✅ Fetch user
    const fetchUser = async () => {
        try {
            const response = await fetch("/api/auth/me");

            if (!response.ok) {
                throw new Error("Failed to fetch user");
            }

            const data = await response.json();
            setUser(data.user);
        } catch (error) {
            console.error("Auth error:", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [pathName]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", {
                method: "POST",
            });

            setUser(null); 
            router.push("/");
            
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    if (!mounted) {
        return (
            <nav className="w-full sticky top-0 z-50 bg-white/70 dark:bg-[#020817]/70 border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-xl">
                <div className="w-3/5 mx-auto h-16 flex items-center justify-between">
                    <div className="h-6 w-24 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                    <div className="h-6 w-32 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                </div>
            </nav>
        );
    }

    return (
        <nav className="w-full sticky top-0 z-50 bg-white/70 dark:bg-[#020817]/70 border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-xl transition-colors duration-300">
            <div className="w-3/5 mx-auto h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="bg-linear-to-br from-blue-500 to-indigo-600 p-2 rounded-xl border border-blue-400/20 shadow-sm shadow-blue-500/20">
                        <Route size={20} color="white" />
                    </div>
                    <span className="text-lg tracking-tight font-black text-slate-900 dark:text-white">
                        Roadly
                    </span>
                </Link>

                <div className="flex items-center gap-1">

                    {/* Nav Links */}
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

                    {/* Theme Toggle */}
                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        {theme === "dark" ? (
                            <SunMedium size={18} />
                        ) : (
                            <MoonStar size={18} />
                        )}
                    </button>

                    {loading ? null : user ? (
                        <>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer">
                                <div className="w-6 h-6 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold uppercase">
                                    {user?.email?.charAt(0)}
                                </div>

                                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                                    {user?.name || user?.email.split("@")[0]}
                                </span>
                            </div>

                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 hover:border-red-200 dark:hover:border-red-900 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 cursor-pointer ml-1"
                            >
                                <LogOut size={14} />
                                <span className="hidden sm:inline">Log out</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 transition-colors duration-200"
                            >
                                Log in
                            </Link>

                            <Link
                                href="/signup"
                                className="text-sm bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-200 shadow-sm shadow-indigo-500/30"
                            >
                                Get Started
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </nav>
    );
}