"use client"

import { motion } from 'framer-motion'
import { Compass, Lightbulb, Target, Sparkles } from 'lucide-react'
import { InteractiveGrid } from '@/components/animation/InteractiveGrid'
import { Reveal, RevealList, RevealItem } from '@/components/animation/Reveal'

export default function AboutPage() {
    return (
        <main className="min-h-screen font-sans text-slate-900 dark:text-slate-50 selection:bg-blue-500/30 overflow-hidden relative">
            <InteractiveGrid />

            <div className="max-w-6xl mx-auto px-6 relative z-10 pt-32 pb-32">
                
                {/* Header */}
                <div className="text-center mb-32 max-w-4xl mx-auto">
                    <Reveal>
                        <p className="inline-block text-xs font-black uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/10 px-5 py-2 rounded-full border border-blue-100/50 dark:border-blue-500/20 backdrop-blur-md mb-8">
                            <Sparkles className="inline-block h-3.5 w-3.5 mr-2 -mt-0.5 animate-pulse" />
                            Our Mission
                        </p>
                    </Reveal>
                    
                    <Reveal delay={0.1}>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-10 leading-[1.05]">
                            Mapping the <br />
                            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 drop-shadow-sm">Future</span> of Learning
                        </h1>
                    </Reveal>
                    
                    <Reveal delay={0.2}>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
                            We believe that complex ideas are best understood visually. Roadly was built to turn overwhelming journeys into clear, actionable, and beautiful roadmaps.
                        </p>
                    </Reveal>
                </div>

                {/* Values Grid */}
                <RevealList className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    
                    <RevealItem className="h-full">
                        <motion.div 
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="h-full bg-white/60 dark:bg-slate-950/40 p-10 rounded-[3rem] border border-slate-200/60 dark:border-slate-800/60 shadow-xl shadow-slate-200/10 backdrop-blur-3xl hover:border-blue-500/30 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
                            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 text-white mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <Compass size={32} />
                            </span>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">Clarity First</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-lg">
                                No more endless wikis. We force structure and hierarchy so that anyone can understand complex architectures at a glance.
                            </p>
                        </motion.div>
                    </RevealItem>

                    <RevealItem className="h-full">
                        <motion.div 
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="h-full bg-white/60 dark:bg-slate-950/40 p-10 rounded-[3rem] border border-slate-200/60 dark:border-slate-800/60 shadow-xl shadow-slate-200/10 backdrop-blur-3xl hover:border-indigo-500/30 transition-all group relative overflow-hidden border-indigo-500/10"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl" />
                            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-indigo-600 text-white mb-8 shadow-lg shadow-indigo-500/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <Target size={32} />
                            </span>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">Actionable</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-lg">
                                A map is useless if you don't walk the path. We build tools that bridge the gap between planning and persistent execution.
                            </p>
                        </motion.div>
                    </RevealItem>

                    <RevealItem className="h-full">
                        <motion.div 
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="h-full bg-white/60 dark:bg-slate-950/40 p-10 rounded-[3rem] border border-slate-200/60 dark:border-slate-800/60 shadow-xl shadow-slate-200/10 backdrop-blur-3xl hover:border-cyan-500/30 transition-all group relative overflow-hidden border-slate-200/60"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl" />
                            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-cyan-600 text-white mb-8 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <Lightbulb size={32} />
                            </span>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">Aesthetic Driven</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-lg">
                                You spend hours staring at your tools. They should be gorgeous, fast, and feel incredible to interact with.
                            </p>
                        </motion.div>
                    </RevealItem>

                </RevealList>
            </div>
        </main>
    )
}