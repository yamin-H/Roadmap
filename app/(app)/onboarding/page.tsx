"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animation/Reveal";
import { InteractiveGrid } from "@/components/animation/InteractiveGrid";
import { Sparkles, ArrowRight, LayoutGrid, FileText, AlertCircle } from "lucide-react";
import Loader from "@/components/Loader";

export default function Onboarding() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await fetch("/api/roadmap", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to create roadmap");
            }

            const roadmap = await res.json();
            router.push(`/roadmap/${roadmap.id}`);
        } catch (err: any) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden selection:bg-blue-500/30">
            <InteractiveGrid />
            
            <div className="w-full max-w-2xl relative z-10">
                <Reveal delay={0.1}>
                    <div className="text-center mb-10">
                        <p className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm dark:border-blue-500/20 dark:bg-blue-900/20 dark:text-blue-300 backdrop-blur-md mb-6">
                            <Sparkles className="h-3.5 w-3.5 text-blue-500 animate-pulse" />
                            Initialize Your Journey
                        </p>
                        <h1 className="text-4xl font-black tracking-tight sm:text-5xl text-slate-900 dark:text-white">
                            What are we{" "}
                            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400 drop-shadow-sm">
                                building
                            </span>
                            {" "}today?
                        </h1>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium">
                            Every master was once a beginner. Start by naming your path.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <motion.div 
                        className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-white/70 p-8 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl dark:border-slate-800/70 dark:bg-slate-900/70 sm:p-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                        
                        <form onSubmit={handleSubmit} className="relative space-y-8">
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center gap-3 rounded-2xl border border-red-200/50 bg-red-50/80 px-5 py-4 text-sm font-semibold text-red-700 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400 backdrop-blur-md"
                                >
                                    <AlertCircle className="h-5 w-5 shrink-0" />
                                    <p>{error}</p>
                                </motion.div>
                            )}

                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                                    <LayoutGrid className="w-4 h-4 text-blue-500" />
                                    Roadmap Title
                                </label>
                                <input
                                    required
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g. Master React & Next.js"
                                    className="block w-full rounded-2xl border border-slate-200 bg-white/50 px-6 py-4 text-lg font-bold text-slate-900 placeholder-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-600 backdrop-blur-sm"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                                    <FileText className="w-4 h-4 text-indigo-500" />
                                    Short Description
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={4}
                                    placeholder="Tell us a bit about your goals..."
                                    className="block w-full rounded-2xl border border-slate-200 bg-white/50 px-6 py-4 text-base font-medium text-slate-900 placeholder-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder-slate-600 backdrop-blur-sm resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={loading || !title}
                                className="relative group w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-px shadow-xl shadow-blue-500/20 transition-all hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="relative flex items-center justify-center gap-3 rounded-[15px] bg-transparent px-8 py-5 text-lg font-black text-white transition-colors">
                                    {loading ? (
                                        <Loader />
                                    ) : (
                                        <>
                                            Launch Roadmap
                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </>
                                    )}
                                </div>
                            </motion.button>
                        </form>
                    </motion.div>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="mt-12 flex items-center justify-center gap-12 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                        <div className="text-center">
                            <p className="text-2xl font-black text-slate-900 dark:text-white">100%</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Customizable</p>
                        </div>
                        <div className="h-8 w-px bg-slate-300 dark:bg-slate-800" />
                        <div className="text-center">
                            <p className="text-2xl font-black text-slate-900 dark:text-white">Save</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Auto-Drafts</p>
                        </div>
                        <div className="h-8 w-px bg-slate-300 dark:bg-slate-800" />
                        <div className="text-center">
                            <p className="text-2xl font-black text-slate-900 dark:text-white">Share</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">With Peers</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </main>
    );
}