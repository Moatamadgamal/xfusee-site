'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    RefreshCcw,
    TrendingUp,
    ShieldCheck,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function SolutionsShowcase() {
    // const { t } = useLanguage(); // Removed unused hook to prevent potential issues
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Mock data - In a real app, this would come from the language provider
    const scenarios = [
        {
            id: 'legacy',
            icon: RefreshCcw,
            color: 'text-blue-400',
            gradient: 'from-blue-500',
            title: "Old Systems Slowing Growth?",
            problem: "Legacy software that crashes, scales poorly, and frustrates users.",
            solution: "Refactoring into a modern cloud-native architecture utilizing Microservices.",
            outcome: "99.9% Uptime & 3x Faster Feature Rollout",
        },
        {
            id: 'scale',
            icon: TrendingUp,
            color: 'text-green-400',
            gradient: 'from-green-500',
            title: "E-Commerce Bottlenecks?",
            problem: "Site slows down during high traffic, causing cart abandonment.",
            solution: "Headless commerce setup with Next.js edge caching and optimized database queries.",
            outcome: "50% Increase in Conversions During Peak Hours",
        },
        {
            id: 'security',
            icon: ShieldCheck,
            color: 'text-purple-400',
            gradient: 'from-purple-500',
            title: "Data Security Fears?",
            problem: "Sensitive customer data exposed to potential breaches and compliance risks.",
            solution: "Bank-grade encryption, automated auditing, and AI-driven threat detection.",
            outcome: "ISO 27001 Compliance & Zero Breaches",
        }
    ];

    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    return (
        <section id="solutions" className="py-24 relative overflow-hidden bg-black/20">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
                <div className="absolute top-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Real Challenges, <span className="text-gradient">Real Solutions</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        We don&apos;t just write code. We solve complex business problems.
                    </p>
                </motion.div>

                {/* 3D Cards Grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {scenarios.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="group relative h-[420px] perspective-1000"
                                onMouseEnter={() => setHoveredCard(item.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className={`relative w-full h-full transition-all duration-700 preserve-3d ${hoveredCard === item.id ? 'rotate-y-180' : ''}`}>
                                    {/* Front of Card */}
                                    <div className="absolute inset-0 backface-hidden rounded-2xl p-8 glass-premium border border-white/10 flex flex-col items-center text-center justify-between overflow-hidden">

                                        {/* Gradient Blob on Front */}
                                        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.gradient} to-transparent opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity`} />

                                        <div className="mt-8">
                                            <div className={`w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                                                <Icon className={`w-10 h-10 ${item.color}`} />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {item.problem}
                                            </p>
                                        </div>

                                        <div className="w-full">
                                            <div className="text-xs text-gray-600 dark:text-gray-500 uppercase tracking-widest mb-2">The Solution</div>
                                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                                <div className={`h-full bg-gradient-to-r ${item.gradient} to-transparent w-3/4`} />
                                            </div>
                                            <p className="text-sm text-primary-400 mt-4 flex items-center justify-center gap-2 group-hover:translate-x-1 transition-transform">
                                                Flip to see outcome <ArrowRight className="w-4 h-4" />
                                            </p>
                                        </div>
                                    </div>

                                    {/* Back of Card */}
                                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-8 glass-premium border border-primary-500/30 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} to-transparent opacity-10`} />

                                        <div className="relative z-10">
                                            <div className="mb-8">
                                                <h4 className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">Our Solution</h4>
                                                <div className="flex items-start gap-3">
                                                    <div className={`mt-1 p-1 rounded-full ${item.color} bg-white/5`}>
                                                        <CheckCircle2 className="w-4 h-4" />
                                                    </div>
                                                    <p className="text-lg text-white font-medium leading-relaxed">
                                                        {item.solution}
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">Values Delivered</h4>
                                                <div className="flex items-start gap-3">
                                                    <div className={`mt-1 p-1 rounded-full ${item.color} bg-white/5`}>
                                                        <TrendingUp className="w-4 h-4" />
                                                    </div>
                                                    <p className={`text-2xl font-bold ${item.color} text-gradient`}>
                                                        {item.outcome}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Section with Avatar */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="glass-premium rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-primary-500/10 to-transparent pointer-events-none" />

                        {/* Avatar Column */}
                        <div className="flex-shrink-0 relative">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-400 to-purple-600 flex items-center justify-center p-1 relative z-10 shadow-glow-lg animate-float">
                                <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-5xl">
                                        🚀
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-black z-20" />
                            </div>

                            {/* Speech Bubble */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -top-12 -right-20 md:-right-24 bg-white text-black px-4 py-2 rounded-xl rounded-bl-none shadow-lg text-sm font-bold whitespace-nowrap z-20"
                            >
                                Your project is next! 👋
                            </motion.div>
                        </div>

                        {/* Text & Buttons Column */}
                        <div className="flex-1 text-center md:text-left relative z-10">
                            <h3 className="text-3xl font-bold mb-4 text-white">
                                Ready to build your success story?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
                                We don&apos;t just deliver code; we deliver results. Let&apos;s discuss how XFUSE can solve your specific challenges.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Button
                                    size="lg"
                                    className="bg-primary-600 hover:bg-primary-700 text-white min-w-[160px]"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Book a Call
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/20 hover:bg-white/10 text-white min-w-[160px]"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Request Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
