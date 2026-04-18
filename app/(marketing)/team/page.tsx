"use client"

import { motion } from 'framer-motion'
import { Code2, Palette, Cpu, Sparkles } from 'lucide-react'
import { Github, Twitter, Linkedin } from '@/components/BrandIcons'
import Link from 'next/link'
import { InteractiveGrid } from '@/components/animation/InteractiveGrid'
import { Reveal, RevealList, RevealItem } from '@/components/animation/Reveal'

const team = [
    {
        name: "Alex Dev",
        role: "Founder & Lead Engineer",
        icon: Cpu,
        color: "blue",
        bio: "Obsessed with creating fluid, zero-latency canvasses. Previously built massive data visualization tools."
    },
    {
        name: "Sarah Design",
        role: "Head of Product",
        icon: Palette,
        color: "indigo",
        bio: "Transforms complex technical problems into gorgeous, accessible interfaces that users actually love."
    },
    {
        name: "Ben System",
        role: "Backend Architect",
        icon: Code2,
        color: "cyan",
        bio: "Scales the infrastructure to handle millions of real-time websocket connections without breaking a sweat."
    }
];

export default function TeamsPage() {
    return (
        <main className="min-h-screen font-sans text-slate-900 dark:text-slate-50 selection:bg-blue-500/30 overflow-hidden relative">
            <InteractiveGrid />

            <div className="max-w-6xl mx-auto px-6 relative z-10 pt-32 pb-32">

                {/* Header */}
                <div className="text-center mb-32 max-w-4xl mx-auto">
                    <Reveal>
                        <p className="inline-block text-xs font-black uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/10 px-5 py-2 rounded-full border border-blue-100/50 dark:border-blue-500/20 backdrop-blur-md mb-8">
                            <Sparkles className="inline-block h-3.5 w-3.5 mr-2 -mt-0.5 animate-pulse" />
                            The Creators
                        </p>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-10 leading-[1.05]">
                            Meet the <br />
                            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 drop-shadow-sm">Team</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
                            Small, highly concentrated, and passionate about changing the way the world organizes information.
                        </p>
                    </Reveal>
                </div>

                {/* Team Grid */}
                <RevealList className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {team.map((member, i) => (
                        <RevealItem key={member.name} className="h-full">
                            <motion.div
                                whileHover={{ y: -12, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                className="h-full bg-white/60 dark:bg-slate-950/40 p-10 rounded-[3rem] border border-slate-200/60 dark:border-slate-800/60 shadow-xl shadow-slate-200/10 backdrop-blur-3xl transition-all group relative overflow-hidden"
                            >
                                {/* Inner ambient glow on hover */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-full blur-[60px] pointer-events-none transition-colors duration-700" />

                                <div className="mb-8">
                                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-inner group-hover:scale-110 group-hover:rotate-6">
                                        <member.icon size={28} />
                                    </span>
                                </div>

                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                                    {member.name}
                                </h3>
                                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full w-fit">
                                    {member.role}
                                </p>

                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-10 text-lg">
                                    {member.bio}
                                </p>

                                <div className="flex items-center gap-2 border-t border-slate-100 dark:border-slate-800/50 pt-8 mt-auto">
                                    <Link href="#" className="p-2.5 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/5 dark:hover:text-white transition-all duration-300">
                                        <Github size={20} />
                                    </Link>
                                    <Link href="#" className="p-2.5 rounded-xl text-slate-400 hover:bg-blue-50 hover:text-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 transition-all duration-300">
                                        <Twitter size={20} />
                                    </Link>
                                    <Link href="#" className="p-2.5 rounded-xl text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400 transition-all duration-300">
                                        <Linkedin size={20} />
                                    </Link>
                                </div>
                            </motion.div>
                        </RevealItem>
                    ))}
                </RevealList>

            </div>
        </main>
    )
}

