"use client"

import { motion } from 'framer-motion'
import { LayoutGrid, Share2, Zap, Layers, Lock, Smartphone, Plus, ArrowRight } from 'lucide-react'
import { InteractiveGrid } from '@/components/animation/InteractiveGrid'
import { SpotlightCard } from '@/components/animation/SpotlightCard'
import { ConnectionDemo } from '@/components/animation/ConnectionDemo'
export default function FeaturesPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 selection:bg-blue-500/30 overflow-hidden">
            <InteractiveGrid />
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                    <div className="flex justify-center mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase">
                            <Plus size={14} />
                            Latest Updates
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
                        Built for <br />
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">Digital Architects</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Precision tools designed to map complex logic, visualize global infrastructures, and master your learning curve.
                    </p>
                </motion.div>
            </div>

            {/* Bento Grid */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                    {/* Feature 1 (Large) */}
                    <SpotlightCard className="md:col-span-2 md:row-span-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="h-full group relative overflow-hidden rounded-[2.5rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-10 hover:border-blue-500/30 transition-all duration-500 shadow-xl shadow-slate-200/20 dark:shadow-none flex flex-col"
                        >
                            <div className="flex flex-col md:flex-row gap-10 h-full">
                                <div className="flex-1 flex flex-col">
                                    <div className="mb-auto">
                                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shadow-inner mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                            <LayoutGrid size={32} />
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-4">
                                        Infinite Interactive Canvas
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
                                        Expand your horizons. Our canvas supports unlimited nodes, dynamic snapping, and fluid pan-and-zoom mechanics perfect for giant workflows.
                                    </p>
                                </div>
                                <div className="flex-1 relative">
                                    <ConnectionDemo />
                                </div>
                            </div>
                        </motion.div>
                    </SpotlightCard>

                    {/* Feature 2 (Small) */}
                    <SpotlightCard>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-full group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 to-blue-700 p-8 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-500 text-white"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />

                            <div className="relative z-10 h-full flex flex-col">
                                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md mb-auto group-hover:rotate-12 transition-transform duration-500">
                                    <Zap size={28} className="text-white" />
                                </span>
                                <h3 className="text-2xl font-bold mb-2">Real-time Sync</h3>
                                <p className="text-blue-100 font-medium opacity-90 text-sm">
                                    Every edit is saved automatically. Collaborate with absolute confidence and zero latency.
                                </p>
                            </div>
                        </motion.div>
                    </SpotlightCard>

                    {/* Feature 3 (Small) */}
                    <SpotlightCard>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="h-full group relative overflow-hidden rounded-[2rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 hover:border-indigo-500/30 transition-all duration-500 shadow-lg shadow-slate-200/10 dark:shadow-none"
                        >
                            <div className="relative z-10 h-full flex flex-col">
                                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-auto group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                                    <Share2 size={28} />
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Instant Sharing</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                                    Generate public links to showcase your mind-maps and roadmaps to the entire world.
                                </p>
                            </div>
                        </motion.div>
                    </SpotlightCard>

                    {/* Feature 4 (Medium Horizontal) */}
                    <SpotlightCard className="md:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="group relative overflow-hidden rounded-[2rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-10 hover:border-cyan-500/30 transition-all duration-500 shadow-lg shadow-slate-200/10 dark:shadow-none flex flex-col md:flex-row items-center gap-10"
                        >
                            <div className="flex-1 relative z-10">
                                <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                                    <Layers size={32} />
                                </span>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Rich Context Nodes</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-lg font-medium mb-6">
                                    Maps are more than lines and boxes. Embed markdown, images, rich-text, and metadata inside every single node.
                                </p>
                                <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold group/btn">
                                    Explore Node Types <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            <div className="flex-1 w-full h-full min-h-[200px] rounded-2xl bg-white/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 relative overflow-hidden hidden md:block group-hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)]" />

                                <motion.div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-2xl w-64 z-10"
                                    animate={{
                                        y: ["-50%", "-55%", "-50%"],
                                        rotateZ: [0, 2, 0]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="h-2 w-12 bg-blue-500 rounded-full mb-3" />
                                    <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-md mb-2" />
                                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800/60 rounded-md mb-1" />
                                    <div className="h-2 w-5/6 bg-slate-100 dark:bg-slate-800/60 rounded-md" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </SpotlightCard>

                </div>
            </div>

        </main>
    )
}