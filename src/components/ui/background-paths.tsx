"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    const navigate = useNavigate();
    const words = ["KTZ", "Innovation & Excellence"];

    useEffect(() => {
        // Check if this is the first visit
        if (!sessionStorage.getItem('hasVisited')) {
            const timer = setTimeout(() => {
                sessionStorage.setItem('hasVisited', 'true');
                navigate('/home');
            }, 4000); // Changed from 5000 to 4000 ms

            return () => clearTimeout(timer);
        } else {
            // If not first visit, redirect immediately
            navigate('/home');
        }
    }, [navigate]);

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter flex flex-col items-center justify-center gap-4">
                        {/* KTZ */}
                        <motion.span
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0, // Appears immediately
                            }}
                            className="inline-block text-transparent bg-clip-text 
                            bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                            dark:from-white dark:to-white/80"
                        >
                            {words[0]}
                        </motion.span>

                        {/* Investment Firm */}
                        <motion.span
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 2, // Appears after 2 seconds
                            }}
                            className="inline-block text-transparent bg-clip-text 
                            bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                            dark:from-white dark:to-white/80 text-4xl sm:text-5xl md:text-6xl"
                        >
                            {words[1]}
                        </motion.span>
                    </h1>
                </motion.div>
            </div>
        </div>
    );
} 