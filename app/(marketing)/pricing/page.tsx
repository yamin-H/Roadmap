"use client"

import { motion } from 'framer-motion'
import { CheckCircle2, Rocket, Zap, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { InteractiveGrid } from '@/components/animation/InteractiveGrid'
import { Reveal } from '@/components/animation/Reveal'

export default function PricingPage() {
    return (
        <main className="min-h-screen font-sans text-slate-900 dark:text-slate-50 selection:bg-blue-500/30 overflow-hidden relative">
            <InteractiveGrid />

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 text-center pt-32 pb-20 relative z-10">
                <Reveal>
                    <p className="inline-block text-xs font-black uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/10 px-5 py-2 rounded-full border border-blue-100/50 dark:border-blue-500/20 backdrop-blur-md mb-8">
                        <Sparkles className="inline-block h-3.5 w-3.5 mr-2 -mt-0.5 animate-pulse" />
                        Sensible Pricing
                    </p>
                </Reveal>
                
                <Reveal delay={0.1}>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
                        Start for Free, <br />
                        <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 drop-shadow-sm">
                            Scale to Pro
                        </span>
                    </h1>
                </Reveal>
                
                <Reveal delay={0.2}>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        No hidden fees. No complicated tiers. Choose the plan that perfectly matches your workflow needs.
                    </p>
                </Reveal>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-5xl mx-auto px-6 pb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
                    
                    {/* Free Plan */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
                        className="group rounded-[3rem] bg-white/60 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 p-10 lg:p-12 flex flex-col hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 shadow-xl shadow-slate-200/10 backdrop-blur-3xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-slate-200/50 to-transparent dark:via-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="mb-10">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                <Zap size={28} />
                            </span>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Starter</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">For individuals exploring the canvas.</p>
                        </div>

                        <div className="mb-10">
                            <div className="flex items-baseline gap-1">
                                <span className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">$0</span>
                                <span className="text-slate-500 dark:text-slate-400 font-bold text-lg uppercase tracking-widest"> / forever</span>
                            </div>
                        </div>

                        <ul className="space-y-5 mb-12 flex-1">
                            {['Up to 3 roadmaps', 'Unlimited nodes per map', 'Basic customization', 'Community support'].map((feature, i) => (
                                <li key={i} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium">
                                    <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-1">
                                        <CheckCircle2 size={18} className="text-slate-400 dark:text-slate-500" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link href="/signup" passHref>
                            <motion.button 
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                                whileTap={{ scale: 0.96 }}
                                className="w-full py-5 rounded-full border-2 border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white font-black text-sm uppercase tracking-[0.15em] hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300"
                            >
                                Get Started Free
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="relative rounded-[3rem] bg-white dark:bg-slate-950 p-0.5 shadow-[0_40px_100px_-20px_rgba(37,99,235,0.25)] group"
                    >
                        {/* Animated Gradient Border */}
                        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-500 to-cyan-500 rounded-[3rem] opacity-100" />
                        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-500 to-cyan-500 rounded-[3rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                        
                        <div className="relative h-full rounded-[calc(3rem-2px)] bg-white dark:bg-slate-950 p-10 lg:p-12 flex flex-col overflow-hidden backdrop-blur-3xl">
                            {/* Inner ambient glow */}
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-600/20 transition-colors" />

                            <div className="absolute top-8 right-8">
                                <span className="bg-linear-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full shadow-lg shadow-blue-600/30">
                                    Most Popular
                                </span>
                            </div>

                            <div className="mb-10 relative z-10">
                                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-white mb-8 shadow-xl shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <Rocket size={28} />
                                </span>
                                <h3 className="text-3xl font-black bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 mb-3 tracking-tight">Pro</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed">For professionals and teams going deeper.</p>
                            </div>

                            <div className="mb-10 relative z-10">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">$12</span>
                                    <span className="text-slate-500 dark:text-slate-400 font-bold text-lg uppercase tracking-widest"> / month</span>
                                </div>
                            </div>

                            <ul className="space-y-5 mb-12 flex-1 relative z-10">
                                {['Unlimited roadmaps', 'Real-time collaboration', 'Advanced markdown features', 'Export to PDF/PNG', 'Priority support'].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium">
                                        <div className="rounded-full bg-blue-50 dark:bg-blue-500/10 p-1">
                                            <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/signup" passHref className="relative z-10">
                                <motion.button 
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(37,99,235,0.5)" }}
                                    whileTap={{ scale: 0.96 }}
                                    className="w-full py-5 rounded-full bg-linear-to-r from-blue-600 via-indigo-600 to-indigo-700 text-white font-black text-sm uppercase tracking-[0.15em] shadow-2xl shadow-blue-600/30 transition-all duration-300"
                                >
                                    Upgrade to Pro
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Ambient Background Base Removed as it's handled by InteractiveGrid */}
        </main>
    )
}
       
