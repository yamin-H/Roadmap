"use client"

import { ArrowRight, LayoutGrid, Sparkles, FileText, CheckCircle2 } from "lucide-react";
import { InteractiveCard, Reveal } from "@/components/animation/Reveal";
import { motion } from 'framer-motion';
import { RevealList, RevealItem } from "@/components/animation/Reveal"
import { useRouter } from "next/navigation";
import { InteractiveGrid } from "@/components/animation/InteractiveGrid";
import { HomePlayground } from "@/components/HomePlayground";

export default function Home() {
    const router = useRouter();

    return (
        <main className="min-h-screen font-sans text-slate-900 dark:text-slate-50 selection:bg-blue-500/30 overflow-hidden">
            <InteractiveGrid />
            <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-20 overflow-hidden md:overflow-visible">
                {/* Background Ambient Lights */}
                <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full point-events-none mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute bottom-1/4 right-0 translate-x-1/3 w-[600px] h-[600px] bg-indigo-500/20 dark:bg-indigo-600/10 blur-[130px] rounded-full point-events-none mix-blend-multiply dark:mix-blend-screen" />

                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 relative z-10">
                    <div>
                        <Reveal>
                            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 px-3 py-1 font-semibold text-[13px] text-blue-700 shadow-sm dark:border-blue-500/20 dark:bg-blue-900/20 dark:text-blue-300 backdrop-blur-md">
                                <Sparkles className="h-3.5 w-3.5 text-blue-500 animate-pulse" />
                                Interactive, node-based learning roadmaps
                            </p>
                        </Reveal>

                        <Reveal delay={0.05} >
                            <h1 className="mt-5 text-balance text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
                                <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 drop-shadow-sm">
                                    Map Your Knowledge. Master Your Journey.
                                </span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.03}>
                            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                                The ultimate interactive canvas to build, track, and share your
                                learning roadmaps. Drag, drop, and conquer your goals with unparalleled clarity.
                            </p>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                                <motion.a
                                    onClick={() => router.push('/onboarding')}
                                    className="inline-flex items-center cursor-pointer justify-center gap-2 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40"
                                    whileHover={{ scale: 1.05, boxShadow: "0 15px 35px -10px rgba(37,99,235,0.6)" }}
                                    whileTap={{ scale: 0.96 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    Create Your Roadmap
                                    <ArrowRight className="h-4 w-4" />
                                </motion.a>
                                <motion.a
                                    href="#features"
                                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/60 px-7 py-3.5 text-sm font-bold text-slate-900 shadow-sm transition backdrop-blur-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white"
                                    whileHover={{ scale: 1.05, backgroundColor: "var(--tw-colors-blue-50)", borderColor: "var(--tw-colors-blue-200)" }}
                                    whileTap={{ scale: 0.96 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    View Examples
                                </motion.a>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                                <span className="inline-flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                                    Infinite canvas
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                                    Notes + resources
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                    Progress tracking
                                </span>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.12}>
                        <div id="examples" className="relative group perspective-1000">
                            {/* Deeper ambient glow */}
                            <div className="absolute -inset-10 bg-linear-to-r from-blue-500/10 via-indigo-500/10 to-transparent blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            
                            <div className="relative overflow-hidden rounded-[3rem] border border-slate-200/50 bg-white/40 shadow-[0_40px_100px_-20px_rgba(37,99,235,0.15)] dark:border-slate-800/50 dark:bg-slate-950/40 backdrop-blur-3xl transition-all duration-700 hover:border-blue-500/40 hover:shadow-[0_50px_120px_-30px_rgba(37,99,235,0.3)]">
                                {/* Browser Chrome */}
                                <div className="relative border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/50 px-6 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-slate-200 dark:bg-slate-800" />
                                        <div className="h-3 w-3 rounded-full bg-slate-200 dark:bg-slate-800" />
                                        <div className="h-3 w-3 rounded-full bg-slate-200 dark:bg-slate-800" />
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800/50">
                                        <Sparkles className="w-3 h-3 text-blue-500 animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Live Workspace Preview</span>
                                    </div>
                                    <div className="flex items-center gap-4 opacity-40">
                                        <div className="h-1.5 w-8 rounded-full bg-slate-300 dark:bg-slate-700" />
                                        <div className="h-1.5 w-12 rounded-full bg-slate-300 dark:bg-slate-700" />
                                    </div>
                                </div>

                                <div className="p-4 md:p-8">
                                    <HomePlayground />
                                </div>

                                {/* Bottom label for interactivity status */}
                                <div className="absolute bottom-4 right-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/5 px-3 py-1 rounded-full border border-blue-500/20">
                                        Fully Interactive Demo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </section>

            <section className="border-y border-slate-200/60 bg-white/50 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-900/30 relative z-10">
                <div className="mx-auto max-w-6xl sm:px-6">
                    <RevealList className="grid grid-cols-2 divide-x divide-slate-200/60 dark:divide-slate-800/60 md:grid-cols-4">
                        {
                            [
                                { value: "12k+", label: "Roadmaps created" },
                                { value: "4.9", label: "Average rating" },
                                { value: "50+", label: "Node templates" },
                                { value: "99.9%", label: "Uptime" },
                            ]
                                .map((stat) => (
                                    <RevealItem key={stat.label} className="px-4 py-8 text-center sm:py-12 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors" >
                                        <p className="text-4xl font-black tracking-tight bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400 drop-shadow-sm">
                                            {stat.value}
                                        </p>

                                        <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            {stat.label}
                                        </p>
                                    </RevealItem>
                                ))
                        }
                    </RevealList>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 relative z-10">
                <Reveal>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="inline-block text-xs font-black uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-100 dark:border-blue-500/20">
                            Core Capabilities
                        </p>
                        <h2 className="text-4xl font-black mt-6 tracking-tight sm:text-5xl text-slate-900 dark:text-white">
                            Everything you need to visualize your path.
                        </h2>
                    </div>
                </Reveal>

                <RevealList className="grid gap-6 md:grid-cols-3">
                    <RevealItem className="h-full">
                        <InteractiveCard className="group cursor-pointer h-full rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-xl shadow-slate-200/20 dark:border-slate-800/80 dark:bg-slate-900/80 backdrop-blur-xl dark:shadow-none hover:border-blue-500/30 transition-all duration-500">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                                <LayoutGrid className="h-7 w-7" strokeWidth={2} />
                            </span>
                            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Drag &amp; Drop Canvas</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400 font-medium">
                                Build intuitive, hierarchical trees with a fluid, infinite workspace that feels completely natural.
                            </p>
                        </InteractiveCard>
                    </RevealItem>

                    <RevealItem className="h-full">
                        <InteractiveCard className="group h-full cursor-pointer rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-xl shadow-slate-200/20 dark:border-slate-800/80 dark:bg-slate-900/80 backdrop-blur-xl dark:shadow-none hover:border-indigo-500/30 transition-all duration-500">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                                <FileText className="h-7 w-7" strokeWidth={2} />
                            </span>
                            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Deep Contextual Notes</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400 font-medium">
                                Click any node to open a rich-text panel for notes, markdown, and embedded external links.
                            </p>
                        </InteractiveCard>
                    </RevealItem>

                    <RevealItem className="h-full">
                        <InteractiveCard className="group h-full cursor-pointer rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-xl shadow-slate-200/20 dark:border-slate-800/80 dark:bg-slate-900/80 backdrop-blur-xl dark:shadow-none hover:border-cyan-500/30 transition-all duration-500">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                                <CheckCircle2 className="h-7 w-7" strokeWidth={2} />
                            </span>
                            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Track Your Progress</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400 font-medium">
                                Color-coded nodes update automatically as you master new skills, giving you visual momentum.
                            </p>
                        </InteractiveCard>
                    </RevealItem>

                </RevealList>
            </section>

            <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 relative z-10">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-900 px-6 py-16 text-center text-white shadow-2xl shadow-blue-900/20 sm:py-24 sm:px-16 border border-blue-500/30">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_40%)]" />
                        
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-balance text-4xl font-black tracking-tight sm:text-5xl drop-shadow-sm">
                                Ready to map your next chapter?
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-blue-100/90 leading-relaxed">
                                Spin up your first roadmap in minutes. Start free, and upgrade when Roadly becomes your default learning canvas.
                            </p>
                            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                                <motion.a
                                    onClick={() => router.push('/onboarding')}
                                    className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-black text-blue-700 shadow-xl shadow-black/10 transition-all"
                                    whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    Start for free
                                    <ArrowRight className="h-4 w-4" />
                                </motion.a>
                                <motion.a
                                    href="/pricing"
                                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all"
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.3)" }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    View Pricing
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

        </main>
    );
}
