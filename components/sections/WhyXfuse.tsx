'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Rocket, Award, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { ThreeCardIcon } from '../ui/ThreeCardIcon';

import { useLanguage } from '@/providers/LanguageProvider';

export function WhyXfuse() {
    const { t } = useLanguage();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const reasons = [
        {
            icon: Target,
            title: t.about.reasons.expertise.title,
            description: t.about.reasons.expertise.desc,
            gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
            iconBg: 'from-blue-500 to-cyan-500',
            hexColor: '#3b82f6',
        },
        {
            icon: Rocket,
            title: t.about.reasons.delivery.title,
            description: t.about.reasons.delivery.desc,
            gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
            iconBg: 'from-purple-500 to-pink-500',
            hexColor: '#a855f7',
        },
        {
            icon: Award,
            title: t.about.reasons.quality.title,
            description: t.about.reasons.quality.desc,
            gradient: 'from-orange-500/20 via-red-500/10 to-transparent',
            iconBg: 'from-orange-500 to-red-500',
            hexColor: '#f97316',
        },
        {
            icon: Users,
            title: t.about.reasons.support.title,
            description: t.about.reasons.support.desc,
            gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
            iconBg: 'from-green-500 to-emerald-500',
            hexColor: '#22c55e',
        },
    ];

    const stats = [
        { value: t.about.stats.projects.value, label: t.about.stats.projects.label, color: 'from-blue-400 to-cyan-400' },
        { value: t.about.stats.satisfaction.value, label: t.about.stats.satisfaction.label, color: 'from-purple-400 to-pink-400' },
        { value: t.about.stats.support.value, label: t.about.stats.support.label, color: 'from-orange-400 to-red-400' },
        { value: t.about.stats.experience.value, label: t.about.stats.experience.label, color: 'from-green-400 to-emerald-400' },
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-primary-500/5 via-transparent to-cyan-500/5"
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl opacity-30"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

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
                        {t.about.titleRegular} <span className="text-gradient-3d">{t.about.titleGradient}</span>{t.about.question}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {t.about.description}
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 perspective-container"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            className="text-center glass-premium rounded-xl p-6 border border-white/10 hover:border-primary-500/30 transition-all card-3d group relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                            <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium tracking-wide uppercase">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Reasons grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-container">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative"
                            >
                                <Card
                                    className="p-8 glass-premium rounded-2xl border-white/10 hover:border-white/20 h-full relative overflow-hidden card-3d flex flex-col md:flex-row gap-4 items-start"
                                    tilt={true}
                                    hoverable={true}
                                >
                                    {/* Animated Background */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-40 group-hover:opacity-60 transition-opacity`}
                                        animate={{
                                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                                        }}
                                        transition={{
                                            duration: 15,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                    />

                                    {/* 3D Floating Element */}
                                    <div className="absolute -right-12 -bottom-12 w-48 h-48 opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                                        <ThreeCardIcon color={reason.hexColor} />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 flex gap-5 items-start">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{reason.description}</p>
                                        </div>
                                    </div>

                                    {/* Hover Glow */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                        style={{
                                            boxShadow: `inset 0 0 40px ${reason.gradient.split(' ')[0].replace('from-', 'rgba(').replace('500/20', '500, 0.2)')}`
                                        }}
                                    />
                                </Card>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
