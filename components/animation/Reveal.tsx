"use client"

import { motion } from "framer-motion";
import React from "react";

type RevealProp = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

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