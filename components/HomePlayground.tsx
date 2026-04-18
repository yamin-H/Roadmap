"use client"

import React, { useRef, useState, useEffect, useMemo } from 'react'
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion'
import { Code2, BookOpen, CheckCircle2, Sparkles, Zap, Cpu } from 'lucide-react'

interface NodeData {
    id: string
    title: string
    color: 'blue' | 'indigo' | 'cyan'
    initialX: number
    initialY: number
    progress: number
    icon: any
}

const INITIAL_NODES: NodeData[] = [
    { id: '1', title: 'React Fundamentals', icon: Code2, color: 'blue', initialX: 80, initialY: 100, progress: 100 },
    { id: '2', title: 'Advanced Hooks', icon: Zap, color: 'indigo', initialX: 420, initialY: 140, progress: 65 },
    { id: '3', title: 'Performance & Architecture', icon: Cpu, color: 'cyan', initialX: 250, initialY: 340, progress: 0 }
]

const CONNECTIONS = [
    { from: '1', to: '2' },
    { from: '2', to: '3' }
]

export function HomePlayground() {
    const containerRef = useRef<HTMLDivElement>(null)
    
    // Define motion values for each node individually to satisfy hook rules
    const n1x = useMotionValue(INITIAL_NODES[0]!.initialX)
    const n1y = useMotionValue(INITIAL_NODES[0]!.initialY)
    const n2x = useMotionValue(INITIAL_NODES[1]!.initialX)
    const n2y = useMotionValue(INITIAL_NODES[1]!.initialY)
    const n3x = useMotionValue(INITIAL_NODES[2]!.initialX)
    const n3y = useMotionValue(INITIAL_NODES[2]!.initialY)


    const motionValues: Record<string, { x: any, y: any }> = {
        '1': { x: n1x, y: n1y },
        '2': { x: n2x, y: n2y },
        '3': { x: n3x, y: n3y }
    }

    return (
        <div ref={containerRef} className="relative w-full aspect-[16/11] md:aspect-[16/10] rounded-[2rem] overflow-hidden bg-white/5 dark:bg-slate-950/20 shadow-inner-sm">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-[size:128px:128px]" />
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                    <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
                        <stop offset="50%" stopColor="rgba(99,102,241,0.5)" />
                        <stop offset="100%" stopColor="rgba(6,182,212,0.5)" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {CONNECTIONS.map((conn, i) => (
                    <Connection 
                        key={`${conn.from}-${conn.to}`} 
                        fromX={motionValues[conn.from]!.x} 
                        fromY={motionValues[conn.from]!.y}
                        toX={motionValues[conn.to]!.x}
                        toY={motionValues[conn.to]!.y}
                    />
                ))}
            </svg>

            <DraggableNode node={INITIAL_NODES[0]!} x={n1x} y={n1y} containerRef={containerRef} />
            <DraggableNode node={INITIAL_NODES[1]!} x={n2x} y={n2y} containerRef={containerRef} />
            <DraggableNode node={INITIAL_NODES[2]!} x={n3x} y={n3y} containerRef={containerRef} />

            
            <div className="absolute bottom-6 left-8 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400/60 transition-opacity group-hover:opacity-40">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    Interactive Playground
                </div>
            </div>
        </div>
    )
}

function Connection({ fromX, fromY, toX, toY }: { fromX: any, fromY: any, toX: any, toY: any }) {
    const [path, setPath] = useState("")
    
    // We use springs for the connection paths so they feel "organic" and smooth
    const springConfig = { stiffness: 400, damping: 40, mass: 0.5 }
    const sfx = useSpring(fromX, springConfig)
    const sfy = useSpring(fromY, springConfig)
    const stx = useSpring(toX, springConfig)
    const sty = useSpring(toY, springConfig)

    useEffect(() => {
        const update = () => {
            // Adjust offset to center of component (nodes are 180px wide)
            const offX = 90 
            const offY = 40
            
            const fx = Number(sfx.get()) + offX
            const fy = Number(sfy.get()) + offY
            const tx = Number(stx.get()) + offX
            const ty = Number(sty.get()) + offY

            
            const dx = tx - fx
            const dy = ty - fy

            const dist = Math.sqrt(dx * dx + dy * dy)
            
            // Calculate organic bezier curve
            const cp1x = fx + dx * 0.4
            const cp1y = fy
            const cp2x = fx + dx * 0.6
            const cp2y = ty
            
            setPath(`M ${fx} ${fy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${tx} ${ty}`)
        }

        const unsubSFX = sfx.on("change", update)
        const unsubSFY = sfy.on("change", update)
        const unsubSTX = stx.on("change", update)
        const unsubSTY = sty.on("change", update)
        
        update()
        return () => {
            unsubSFX(); unsubSFY(); unsubSTX(); unsubSTY()
        }
    }, [sfx, sfy, stx, sty])

    return (
        <g filter="url(#glow)">
            <motion.path
                d={path}
                fill="none"
                stroke="url(#connGrad)"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                style={{ opacity: 0.6 }}
            />
            <motion.path
                d={path}
                fill="none"
                stroke="url(#connGrad)"
                strokeWidth="1.5"
                strokeDasharray="100 1000"
                strokeDashoffset="-200%"
                animate={{ strokeDashoffset: ["0%", "-200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
        </g>
    )
}

function DraggableNode({ node, x, y, containerRef }: { node: NodeData, x: any, y: any, containerRef: React.RefObject<HTMLDivElement | null> }) {
    const isHovered = useRef(false)
    
    const colors = {
        blue: { border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', progress: 'bg-blue-500', glow: 'shadow-blue-500/20' },
        indigo: { border: 'border-indigo-500/30', bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400', progress: 'bg-indigo-500', glow: 'shadow-indigo-500/20' },
        cyan: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-600 dark:text-cyan-400', progress: 'bg-cyan-500', glow: 'shadow-cyan-500/20' }
    }[node.color]

    return (
        <motion.div
            style={{ x, y }}
            drag
            dragConstraints={containerRef}
            dragElastic={0.1}
            whileHover={{ scale: 1.02, zIndex: 50 }}
            whileDrag={{ scale: 1.05, cursor: 'grabbing', zIndex: 100 }}
            className={`absolute w-[200px] select-none cursor-grab rounded-3xl border ${colors.border} bg-white/90 dark:bg-slate-900/90 p-5 shadow-2xl backdrop-blur-2xl transition-all duration-300 group/node`}
        >
            <div className="mb-4 flex items-start justify-between">
                <div className={`p-2.5 rounded-2xl ${colors.bg} ${colors.text} shadow-inner group-hover/node:scale-110 group-hover/node:rotate-6 transition-all duration-500`}>
                    <node.icon size={22} strokeWidth={2.5} />
                </div>
                <div className="flex h-6 items-center rounded-full bg-slate-100 dark:bg-slate-800/50 px-3 text-[9px] font-black uppercase tracking-wider text-slate-500">
                    {node.progress === 100 ? 'Mastered' : node.progress > 0 ? 'Learning' : 'Soon'}
                </div>
            </div>

            <h4 className="mb-4 text-[15px] font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                {node.title}
            </h4>

            <div className="space-y-2">
                <div className="flex justify-between items-center text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    <span>Proficiency</span>
                    <span>{node.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${node.progress}%` }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className={`h-full ${colors.progress} shadow-[0_0_10px_rgba(37,99,235,0.4)]`} 
                    />
                </div>
            </div>

            {/* Premium Active Glow */}
            <div className={`absolute -inset-1 rounded-[1.8rem] bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover/node:opacity-100 transition-opacity pointer-events-none`} />
        </motion.div>
    )
}
