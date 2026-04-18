"use client"

import { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'

export function InteractiveGrid() {
    
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden bg-slate-50 dark:bg-[#020817]">
            {/* The Grid */}
            <div 
                className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* The Dynamic Spotlight */}
            <motion.div
                className="absolute inset-0 z-10"
                style={{
                    background: useTransform(
                        [springX, springY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
                    ),
                }}
            />
            
            {/* Extra Ambient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full mix-blend-multiply" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-multiply" />
        </div>
    )
}
