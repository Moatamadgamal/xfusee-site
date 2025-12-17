'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/Card';
import {
    Code2,
    Smartphone,
    ShoppingCart,
    Bot,
    Palette,
    Settings,
    Link2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Star, MessageSquareQuote } from 'lucide-react';
import Image from 'next/image';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { ThreeCardIcon } from '../ui/ThreeCardIcon';

import { useLanguage } from '@/providers/LanguageProvider';

export function Services() {
    const { t } = useLanguage();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const services = [
        {
            icon: Code2,
            title: t.services.items.web.title,
            description: t.services.items.web.desc,
            gradient: 'from-blue-500/20 to-cyan-500/20',
            iconColor: 'text-blue-400',
            image: '/images/Web Development.png',
            rating: 4.9,
            reviews: 124,
            testimonial: t.services.items.web.testimonial,
            hexColor: '#3b82f6',
        },
        {
            icon: Smartphone,
            title: t.services.items.mobile.title,
            description: t.services.items.mobile.desc,
            gradient: 'from-cyan-500/20 to-purple-500/20',
            iconColor: 'text-cyan-400',
            image: '/images/Mobile Apps.png',
            rating: 4.8,
            reviews: 98,
            testimonial: t.services.items.mobile.testimonial,
            hexColor: '#06b6d4',
        },
        {
            icon: ShoppingCart,
            title: t.services.items.ecommerce.title,
            description: t.services.items.ecommerce.desc,
            gradient: 'from-purple-500/20 to-orange-500/20',
            iconColor: 'text-purple-400',
            image: '/images/E-commerce.png',
            rating: 4.9,
            reviews: 210,
            testimonial: t.services.items.ecommerce.testimonial,
            hexColor: '#a855f7',
        },
        {
            icon: Bot,
            title: t.services.items.ai.title,
            description: t.services.items.ai.desc,
            gradient: 'from-orange-500/20 to-primary-500/20',
            iconColor: 'text-orange-400',
            image: '/images/AI Solutions.png',
            rating: 5.0,
            reviews: 45,
            testimonial: t.services.items.ai.testimonial,
            featured: true,
            hexColor: '#f97316',
        },
        {
            icon: Palette,
            title: t.services.items.design.title,
            description: t.services.items.design.desc,
            gradient: 'from-primary-500/20 to-purple-500/20',
            iconColor: 'text-primary-400',
            image: '/images/UI UX Design.png',
            rating: 4.9,
            reviews: 156,
            testimonial: t.services.items.design.testimonial,
            hexColor: '#0070f3',
        },
        {
            icon: Settings,
            title: t.services.items.support.title,
            description: t.services.items.support.desc,
            gradient: 'from-cyan-500/20 to-orange-500/20',
            iconColor: 'text-cyan-400',
            image: '/images/Support.png',
            rating: 5.0,
            reviews: 300,
            testimonial: t.services.items.support.testimonial,
            hexColor: '#22d3ee',
        },
    ];

    return (
        <section id="services" className="py-20 relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent pointer-events-none" />

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
                        {t.services.titleRegular} <span className="text-gradient">{t.services.titleGradient}</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {t.services.description}
                    </p>
                </motion.div>

                {/* Services grid */}
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                variants={staggerItem}
                                className={`group ${service.featured ? 'lg:col-span-2' : ''} text-gray-900 dark:text-gray-100`}
                            >
                                <Card
                                    variant={service.featured ? 'glow' : 'default'}
                                    className={`h-full relative overflow-hidden p-0 flex flex-col ${service.featured ? 'lg:flex-row' : ''}`}
                                    hoverable={true}
                                    tilt={true}
                                >
                                    {/* Service Image */}
                                    <div className={`relative overflow-hidden ${service.featured ? 'w-full lg:w-2/5 h-64 lg:h-auto' : 'w-full h-48'}`}>
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10`} />
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                                            <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                                                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                                <span className="text-xs font-bold text-white">{service.rating}</span>
                                                <span className="text-[10px] text-gray-300">({service.reviews})</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className={`relative z-10 p-6 flex flex-col flex-grow ${service.featured ? 'bg-gradient-to-r from-transparent to-primary-900/20' : ''}`}>

                                        {/* 3D Icon Background for Featured */}
                                        {service.featured && (
                                            <div className="absolute right-0 bottom-0 w-64 h-64 opacity-20 pointer-events-none translate-x-1/3 translate-y-1/3">
                                                <ThreeCardIcon color={service.hexColor} />
                                            </div>
                                        )}

                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center border border-gray-200 dark:border-white/10 group-hover:scale-110 transition-transform`}>
                                                <Icon className={`w-6 h-6 ${service.iconColor}`} />
                                            </div>
                                            {service.featured && (
                                                <span className="px-3 py-1 text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full animate-pulse">
                                                    {t.services.featured}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            {service.description}
                                        </p>

                                        {/* Testimonial Snippet */}
                                        <div className="mb-6 p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 relative">
                                            <MessageSquareQuote className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute -top-2 -left-1 bg-white dark:bg-black px-1" />
                                            <p className="text-xs text-gray-600 dark:text-gray-300 italic">&quot;{service.testimonial}&quot;</p>
                                        </div>

                                        {/* Action Button */}
                                        <Button
                                            className="w-full"
                                            variant={service.featured ? 'primary' : 'secondary'}
                                            size="sm"
                                            onClick={() => window.open(`https://wa.me/201508557715?text=${encodeURIComponent(`Hello, I'd like to chat about ${service.title}`)}`, '_blank')}
                                        >
                                            {t.services.bookService}
                                        </Button>
                                    </div>
                                </Card>

                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section >
    );
}
