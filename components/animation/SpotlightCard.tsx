"use client"

import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    // Mouse position relative to the card
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth physics
    const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

    // Tilt transformations
    const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10])
    const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        mouseX.set(x)
        mouseY.set(y)
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false)
                mouseX.set(0)
                mouseY.set(0)
            }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative group ${className}`}
        >
            {/* Spotlight Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [springX, springY],
                        ([x, y]) => `radial-gradient(600px circle at ${(x as number + 0.5) * 100}% ${(y as number + 0.5) * 100}%, rgba(59, 130, 246, 0.1), transparent 80%)`
                    ),
                }}
            />
            
            {/* Content Wrapper (with preserve-3d to allow nested 3D elements) */}
            <div className="relative z-10 w-full h-full transform-gpu">
                {children}
            </div>
        </motion.div>
    )
}
