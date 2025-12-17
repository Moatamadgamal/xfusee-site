'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Lightbulb, Code, TestTube, Rocket, HeadphonesIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { ThreeProcessBg } from '../ui/ThreeProcessBg';

import { useLanguage } from '@/providers/LanguageProvider';

export function Process() {
    const { t } = useLanguage();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const steps = [
        {
            icon: Search,
            number: '01',
            title: t.process.steps.discovery.title,
            description: t.process.steps.discovery.desc,
            gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
            glowColor: 'rgba(6, 182, 212, 0.3)',
            iconBg: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Lightbulb,
            number: '02',
            title: t.process.steps.planning.title,
            description: t.process.steps.planning.desc,
            gradient: 'from-yellow-500/20 via-orange-500/10 to-transparent',
            glowColor: 'rgba(251, 146, 60, 0.3)',
            iconBg: 'from-yellow-500 to-orange-500',
        },
        {
            icon: Code,
            number: '03',
            title: t.process.steps.development.title,
            description: t.process.steps.development.desc,
            gradient: 'from-primary-500/20 via-purple-500/10 to-transparent',
            glowColor: 'rgba(0, 112, 243, 0.3)',
            iconBg: 'from-primary-500 to-purple-500',
        },
        {
            icon: TestTube,
            number: '04',
            title: t.process.steps.testing.title,
            description: t.process.steps.testing.desc,
            gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
            glowColor: 'rgba(16, 185, 129, 0.3)',
            iconBg: 'from-green-500 to-emerald-500',
        },
        {
            icon: Rocket,
            number: '05',
            title: t.process.steps.launch.title,
            description: t.process.steps.launch.desc,
            gradient: 'from-orange-500/20 via-red-500/10 to-transparent',
            glowColor: 'rgba(249, 115, 22, 0.3)',
            iconBg: 'from-orange-500 to-red-500',
        },
        {
            icon: HeadphonesIcon,
            number: '06',
            title: t.process.steps.support.title,
            description: t.process.steps.support.desc,
            gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
            glowColor: 'rgba(168, 85, 247, 0.3)',
            iconBg: 'from-purple-500 to-pink-500',
        },
    ];

    return (
        <section id="process" className="py-20 relative overflow-hidden">
            {/* Enhanced Background with animated 3D elements */}
            <ThreeProcessBg />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        {t.process.titleRegular} <span className="text-gradient">{t.process.titleGradient}</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {t.process.description}
                    </p>
                </motion.div>

                {/* Process steps with rich backgrounds */}
                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative perspective-container"
                            >
                                <Card
                                    className="glass-premium rounded-2xl p-6 border-white/10 hover:border-white/30 h-full relative overflow-hidden group card-3d"
                                    tilt={true}
                                    hoverable={true}
                                >
                                    {/* Animated gradient background */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-50 group-hover:opacity-70 transition-opacity`}
                                        animate={{
                                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                                        }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                    />

                                    {/* Decorative pattern overlay */}
                                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:20px_20px]" />

                                    {/* Glow effect on hover */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{
                                            boxShadow: `0 0 40px ${step.glowColor}, inset 0 0 20px ${step.glowColor}`,
                                        }}
                                    />

                                    <div className="relative z-10">
                                        {/* Number badge with gradient */}
                                        <motion.div
                                            className={`absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br ${step.iconBg} flex items-center justify-center font-bold text-sm shadow-lg`}
                                            whileHover={{ scale: 1.1, rotate: 10 }}
                                            style={{
                                                boxShadow: `0 0 20px ${step.glowColor}`,
                                            }}
                                        >
                                            {step.number}
                                        </motion.div>

                                        {/* Icon with gradient background */}
                                        <motion.div
                                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.iconBg} border border-white/20 flex items-center justify-center mb-4 shadow-lg`}
                                            whileHover={{ scale: 1.05, rotate: -5 }}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </motion.div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.iconBg} opacity-50`} />
                                </Card>


                                {/* Connecting line (desktop) */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary-500/50 to-transparent rtl:right-auto rtl:-left-4 rtl:rotate-180"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
