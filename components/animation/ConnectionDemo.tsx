"use client"

import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export function ConnectionDemo() {
    
    const constraintsRef = useRef(null)
    const [linePath, setLinePath] = useState("")
    const nodeX = useMotionValue(100)
    const nodeY = useMotionValue(30)
    const fixedX = 20
    const fixedY = 120

    useEffect(() => {
        const updateLine = () => {
            const x = nodeX.get() + 20
            const y = nodeY.get() + 20 
            
            // Draw a curved line
            const cp1x = fixedX + (x - fixedX) / 2
            const cp1y = fixedY
            const cp2x = fixedX + (x - fixedX) / 2
            const cp2y = y
            
            setLinePath(`M ${fixedX} ${fixedY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`)
        }

        const unsubscribeX = nodeX.on("change", updateLine)
        const unsubscribeY = nodeY.on("change", updateLine)
        
        updateLine() // Initial call

        return () => {
            unsubscribeX()
            unsubscribeY()
        }
    }, [nodeX, nodeY, fixedX, fixedY])

    return (
        <div ref={constraintsRef} className="relative w-full h-full min-h-45 bg-slate-100/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden p-4">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                    d={linePath}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-blue-500/50 dark:text-blue-400/50"
                    strokeDasharray="6 4"
                />
            </svg>

            {/* Fixed Node */}
            <div 
                className="absolute w-10 h-10 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl shadow-sm z-10 flex items-center justify-center text-blue-500"
                style={{ left: fixedX - 20, top: fixedY - 20 }}
            >
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            </div>

            {/* Draggable Node */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                style={{ x: nodeX, y: nodeY }}
                whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                className="absolute w-12 h-12 bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/30 z-20 flex items-center justify-center cursor-grab"
            >
                <div className="w-4 h-1 bg-white/50 rounded-full" />
            </motion.div>
            
            <div className="absolute bottom-2 right-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Drag me
            </div>
        </div>
    )
}
