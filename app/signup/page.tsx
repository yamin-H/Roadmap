"use client"

import { Reveal } from "@/components/animation/Reveal"
import { Sparkles, User, Mail, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Loader from "@/components/Loader";
import Link from "next/link";

export default function Signup() {

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#020817] text-slate-900 dark:text-slate-50 p-4 selection:bg-blue-500/30 overflow-hidden relative">
            <div className="absolute top-[10%] right-[-7%] w-125 h-125 bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen z-0"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-125 h-125 bg-indigo-500/20 dark:bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen z-0" />

            <div className="w-full max-w-md relative z-10 pt-12 pb-12">
                <Reveal delay={0.1}>
                    <div className="mb-10 text-center">
                        <p className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 shadow-sm dark:border-blue-500/20 dark:bg-blue-900/20 dark:text-blue-300 backdrop-blur-md mb-4">
                            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                            Join the Community
                        </p>
                        <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-4xl text-slate-900 dark:text-white">
                            Create your{" "}
                            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400 drop-shadow-sm">
                                Account
                            </span>

                        </h1>
                        <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                            Start mapping your knowledge today.
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
                        <form action="#" className="relative space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2" htmlFor="name">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <User className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                    
                                        className="block w-full rounded-xl border border-slate-200 bg-white/50 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white transition-all backdrop-blur-sm placeholder-slate-400 dark:placeholder-slate-600"
                                        placeholder="John Doe"
                                        
                                    />
                                </div>
                            </div>

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
                                        id="email"
                                        className="block w-full rounded-xl border border-slate-200 bg-white/50 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white transition-all backdrop-blur-sm placeholder-slate-400 dark:placeholder-slate-600"
                                        placeholder="you@domain.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        className="block w-full rounded-xl border border-slate-200 bg-white/50 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white transition-all backdrop-blur-sm placeholder-slate-400 dark:placeholder-slate-600"
                                        placeholder="At least 6 characters"
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-400 to-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-blue-600/40 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
                                    whileHover={{ scale: loading ? 1 : 1.02 }}
                                    whileTap={{ scale: loading ? 1 : 0.98 }}
                                >
                                    {
                                        loading ? (<Loader />) : (
                                            <>
                                                Create Account
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
                        Already hane an account?{" "}
                        <Link href="/login" className="font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors">
                            Log in
                        </Link>
                    </p>
                </Reveal>

            </div>

        </main>
    );
}