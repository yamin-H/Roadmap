"use client"

import { Reveal } from "@/components/animation/Reveal"
import { Sparkles, Mail, Lock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"
import Loader from "@/components/Loader"
import { useRouter } from "next/navigation"

type LoginType = {
    email: string;
    password: string;
}

export default function Login() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<LoginType>({
        email: "",
        password: ""
    });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData)

        if (formData.password.length < 6) {
            setError("Password must have at least 6 charecter");
            return;
        }

        try {
            
            setLoading(true);
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });
            const data = await response.json();
            setLoading(false);
            if (response.ok) {
                router.refresh();
                setTimeout(() => {
                    router.push("/onboarding");
                }, 50);
            }

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#020817] font-sans text-slate-900 dark:text-slate-50 p-4 selection:bg-blue-500/30 overflow-hidden relative">
            <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-indigo-500/20 dark:bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen z-0" />

            <div className="w-full max-w-md relative z-10">
                <Reveal delay={0.1}>
                    <div className="mb-10 text-center">
                        <p className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 shadow-sm dark:border-blue-500/20 dark:bg-blue-900/20 dark:text-blue-300 backdrop-blur-md mb-4">
                            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                            Welcome Back
                        </p>
                        <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-4xl text-slate-900 dark:text-white">
                            Log in to{" "}
                            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400 drop-shadow-sm">
                                Roadly
                            </span>
                        </h1>
                        <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                            Ready to continue your journey?
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <motion.div
                        className="relative overflow-hidden rounded-4xl border border-slate-200/70 bg-white/80 p-6 shadow-2xl shadow-blue-900/5 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/80 sm:p-10"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                    >
                        <form action="#" onSubmit={handleSubmit} className="relative space-y-6">

                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <Mail className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={formData.email}
                                        id="email"
                                        className="block w-full rounded-xl border border-slate-200 bg-white/50 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white transition-all backdrop-blur-sm placeholder-slate-400 dark:placeholder-slate-600"
                                        placeholder="you@domain.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="password">
                                        Password
                                    </label>
                                    <Link href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={formData.password}
                                        id="password"
                                        className="block w-full rounded-xl border border-slate-200 bg-white/50 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white transition-all backdrop-blur-sm placeholder-slate-400 dark:placeholder-slate-600"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-400 to-blue-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-blue-600/40 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    whileHover={{ scale: loading ? 1 : 1.02 }}
                                    whileTap={{ scale: loading ? 1 : 0.98 }}
                                >
                                    {
                                        loading ? (<Loader />) : (
                                            <>
                                                Log in
                                                <ArrowRight className="w-4 h-4" />
                                            </>
                                        )
                                    }
                                </motion.button>
                            </div>
                            
                        </form>

                    </motion.div>
                </Reveal>

                <Reveal delay={0.3}>
                    <p className="mt-8 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
                        Don't have an account?{" "}
                        <Link href="/signup" className="font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors">
                            Sign up
                        </Link>
                    </p>
                </Reveal>

            </div>

        </main>
    )
}