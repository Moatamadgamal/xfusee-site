'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Code2, Brain, Palette, Rocket, Users } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';

export function AboutXfuse() {
    const { t } = useLanguage();
    const [activeAvatar, setActiveAvatar] = useState<string | null>(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const avatars = [
        {
            id: '1',
            name: t.aboutXfuse.avatars.vision.name,
            role: t.aboutXfuse.avatars.vision.role,
            message: t.aboutXfuse.avatars.vision.message,
            icon: Lightbulb,
            color: 'text-yellow-600 dark:text-yellow-400',
            gradient: 'from-yellow-500/20 to-orange-500/20',
        },
        {
            id: '2',
            name: t.aboutXfuse.avatars.dev.name,
            role: t.aboutXfuse.avatars.dev.role,
            message: t.aboutXfuse.avatars.dev.message,
            icon: Code2,
            color: 'text-primary-600 dark:text-primary-400',
            gradient: 'from-primary-500/20 to-cyan-500/20',
        },
        {
            id: '3',
            name: t.aboutXfuse.avatars.ai.name,
            role: t.aboutXfuse.avatars.ai.role,
            message: t.aboutXfuse.avatars.ai.message,
            icon: Brain,
            color: 'text-purple-600 dark:text-purple-400',
            gradient: 'from-purple-500/20 to-pink-500/20',
        },
        {
            id: '4',
            name: t.aboutXfuse.avatars.design.name,
            role: t.aboutXfuse.avatars.design.role,
            message: t.aboutXfuse.avatars.design.message,
            icon: Palette,
            color: 'text-pink-600 dark:text-pink-400',
            gradient: 'from-pink-500/20 to-purple-500/20',
        },
        {
            id: '5',
            name: t.aboutXfuse.avatars.speed.name,
            role: t.aboutXfuse.avatars.speed.role,
            message: t.aboutXfuse.avatars.speed.message,
            icon: Rocket,
            color: 'text-orange-600 dark:text-orange-400',
            gradient: 'from-orange-500/20 to-red-500/20',
        },
        {
            id: '6',
            name: t.aboutXfuse.avatars.support.name,
            role: t.aboutXfuse.avatars.support.role,
            message: t.aboutXfuse.avatars.support.message,
            icon: Users,
            color: 'text-cyan-600 dark:text-cyan-400',
            gradient: 'from-cyan-500/20 to-blue-500/20',
        },
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        {t.aboutXfuse.titleRegular} <span className="text-gradient-3d">{t.aboutXfuse.titleGradient}</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {t.aboutXfuse.description}
                    </p>
                </motion.div>

                {/* Avatars Grid */}
                <motion.div
                    ref={ref}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 perspective-container"
                >
                    {avatars.map((avatar, index) => {
                        const Icon = avatar.icon;
                        const isActive = activeAvatar === avatar.id;

                        return (
                            <motion.div
                                key={avatar.id}
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative"
                            >
                                <motion.button
                                    onClick={() => setActiveAvatar(isActive ? null : avatar.id)}
                                    className={`w-full aspect-square rounded-2xl glass-premium border-2 transition-all duration-300 relative overflow-hidden group cursor-pointer ${isActive
                                        ? 'border-white/40 shadow-glow-3d scale-105'
                                        : 'border-white/10 hover:border-white/30'
                                        }`}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {/* Background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${avatar.gradient} opacity-50 transition-opacity ${isActive ? 'opacity-70' : 'group-hover:opacity-60'}`} />

                                    {/* Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            animate={isActive ? {
                                                scale: [1, 1.1, 1],
                                                rotate: [0, 5, -5, 0],
                                            } : {}}
                                            transition={{
                                                duration: 0.5,
                                                repeat: isActive ? Infinity : 0,
                                                repeatDelay: 1,
                                            }}
                                        >
                                            <Icon className={`w-12 h-12 ${avatar.color} drop-shadow-lg`} />
                                        </motion.div>
                                    </div>

                                    {/* Active indicator - "mouth" animation */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: [1, 1.2, 1] }}
                                                exit={{ scaleX: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    repeat: Infinity,
                                                    repeatDelay: 0.5,
                                                }}
                                                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/60"
                                            />
                                        )}
                                    </AnimatePresence>

                                    {/* Hover glow */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{
                                            boxShadow: `0 0 30px ${avatar.color.replace('text-', 'rgba(').replace('-400', ', 0.3)')}`,
                                        }}
                                    />
                                </motion.button>

                                {/* Name label */}
                                <motion.div
                                    className="mt-3 text-center"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                >
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{avatar.name}</h3>
                                    <p className={`text-xs ${avatar.color} mt-1`}>{avatar.role}</p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Message Display - Speech Bubble */}
                <AnimatePresence mode="wait">
                    {activeAvatar && (
                        <motion.div
                            key={activeAvatar}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="glass-premium rounded-2xl p-8 border border-white/20 shadow-glow-3d relative">
                                {/* Speech bubble pointer */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/5 border-l border-t border-white/20 rotate-45 backdrop-blur-xl" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {avatars
                                        .filter((a) => a.id === activeAvatar)
                                        .map((avatar) => {
                                            const Icon = avatar.icon;
                                            return (
                                                <div key={avatar.id} className="flex items-start gap-4">
                                                    <motion.div
                                                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${avatar.gradient} border border-white/20 flex items-center justify-center flex-shrink-0`}
                                                        animate={{
                                                            scale: [1, 1.05, 1],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: 'easeInOut',
                                                        }}
                                                    >
                                                        <Icon className={`w-8 h-8 ${avatar.color}`} />
                                                    </motion.div>

                                                    <div className="flex-1">
                                                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                                            {avatar.name}
                                                        </h3>
                                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                                            {avatar.message}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>

                                {/* Animated dots indicator */}
                                <motion.div
                                    className="absolute bottom-4 right-4 flex gap-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 h-2 rounded-full bg-primary-400"
                                            animate={{
                                                scale: [1, 1.3, 1],
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Hint text */}
                {!activeAvatar && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-center text-gray-600 dark:text-gray-500 text-sm mt-8"
                    >
                        {t.aboutXfuse.hint}
                    </motion.p>
                )}
            </div>
        </section>
    );
}
