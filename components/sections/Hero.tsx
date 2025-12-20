'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, Code2, Zap } from 'lucide-react';
import { fadeIn, slideUp, slideLeft } from '@/utils/animations';
import { ThreeBackground } from '@/components/ui/ThreeBackground';

import { useLanguage } from '@/providers/LanguageProvider';

export function Hero() {
    const { t } = useLanguage();

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated background */}
            <div className="absolute inset-0 z-0">
                <ThreeBackground />
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,112,243,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,112,243,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="text-center lg:text-start">
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-primary-400" />
                            <span className="text-sm text-primary-400 font-semibold">{t.hero.badge}</span>
                        </motion.div>

                        <motion.h1
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
                        >
                            {t.hero.titleRegular}
                            <span className="block text-gradient-3d mt-2">{t.hero.titleGradient}</span>
                        </motion.h1>

                        <motion.p
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            {t.hero.description}
                        </motion.p>

                        <motion.div
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button size="lg" onClick={scrollToContact}>
                                {t.hero.bookCall}
                                <ArrowRight className="w-5 h-5 ms-2 rtl:rotate-180" />
                            </Button>
                            <Button variant="secondary" size="lg" onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                                {t.hero.requestQuote}
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0"
                        >
                            {[
                                t.hero.stats.projects,
                                t.hero.stats.satisfaction,
                                t.hero.stats.support,
                            ].map((stat, index) => (
                                <div key={index} className="text-center lg:text-start">
                                    <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right visual */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        animate="visible"
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full h-[500px]">
                            {/* Floating elements */}
                            <motion.div
                                className="absolute top-20 right-20 glass rounded-2xl p-6 border border-primary-500/30 shadow-glow"
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <Code2 className="w-12 h-12 text-primary-400 mb-2" />
                                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{t.hero.floating.cleanCode}</p>
                            </motion.div>

                            <motion.div
                                className="absolute top-60 left-10 glass rounded-2xl p-6 border border-cyan-500/30 shadow-glow-cyan"
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            >
                                <Zap className="w-12 h-12 text-cyan-400 mb-2" />
                                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{t.hero.floating.fastDelivery}</p>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-20 right-40 glass rounded-2xl p-6 border border-purple-500/30 shadow-glow-purple"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            >
                                <Sparkles className="w-12 h-12 text-purple-400 mb-2" />
                                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{t.hero.floating.aiPowered}</p>
                            </motion.div>

                            {/* Center glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse-glow" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-primary-500/30 flex justify-center pt-2">
                    <div className="w-1.5 h-2 bg-primary-500 rounded-full animate-pulse" />
                </div>
            </motion.div>
        </section>
    );
}
