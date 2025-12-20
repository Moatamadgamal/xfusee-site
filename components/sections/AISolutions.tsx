'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/Card';
import { Brain, MessageSquare, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/providers/LanguageProvider';

export function AISolutions() {
    const { t } = useLanguage();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const aiSolutions = [
        {
            icon: MessageSquare,
            title: t.aiSolutions.items.chatbots.title,
            description: t.aiSolutions.items.chatbots.desc,
            features: t.aiSolutions.items.chatbots.features,
        },
        {
            icon: Zap,
            title: t.aiSolutions.items.automation.title,
            description: t.aiSolutions.items.automation.desc,
            features: t.aiSolutions.items.automation.features,
        },
        {
            icon: BarChart3,
            title: t.aiSolutions.items.dashboards.title,
            description: t.aiSolutions.items.dashboards.desc,
            features: t.aiSolutions.items.dashboards.features,
        },
        {
            icon: Brain,
            title: t.aiSolutions.items.bi.title,
            description: t.aiSolutions.items.bi.desc,
            features: t.aiSolutions.items.bi.features,
        },
    ];

    return (
        <section id="ai-solutions" className="py-20 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.3, 1, 1.3],
                        opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/30 mb-6">
                        <Brain className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-orange-400 font-semibold">{t.aiSolutions.badge}</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        {t.aiSolutions.titleRegular}
                        <span className="block text-gradient-accent mt-2">{t.aiSolutions.titleGradient}</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {t.aiSolutions.description}
                    </p>
                </motion.div>

                {/* AI Solutions grid */}
                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                >
                    {aiSolutions.map((solution, index) => {
                        const Icon = solution.icon;
                        return (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <Card className="h-full">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{solution.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-400">{solution.description}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        {solution.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Button
                        size="lg"
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        {t.aiSolutions.cta}
                        <ArrowRight className="w-5 h-5 ml-2 rtl:rotate-180" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
