"use client"

import { motion, Variants } from "framer-motion";
import React from "react";

type RevealProp = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
};

export function Reveal({ children, delay = 0, className }: RevealProp) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}

export function RevealList({ children, className }: { children: React.ReactNode; className: string }) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={listVariants}
            
        >
            {children}
        </motion.div>
    )
}

export function RevealItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
};

export function InteractiveCard({ children, className }: { children: React.ReactNode; className: string }) {
    return (
        <motion.div
            className={className}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    )
}