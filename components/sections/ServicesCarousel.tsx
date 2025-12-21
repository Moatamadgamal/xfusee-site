'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Code2,
    Smartphone,
    ShoppingCart,
    Bot,
    Palette,
    Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Star, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/providers/LanguageProvider';
import { Modal } from '@/components/ui/Modal';
import { ServiceBookingForm } from './ServiceBookingForm';
import { useState, useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function ServicesCarousel() {
    const { t, language } = useLanguage();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<'all' | 'tech' | 'marketing' | 'design'>('all');
    const swiperRef = useRef<SwiperType | null>(null);

    const handleBookClick = (title: string) => {
        setSelectedService(title);
        setIsModalOpen(true);
    };

    const allServices = {
        tech: [
            {
                icon: Code2,
                title: t.services.items.web.title,
                description: t.services.items.web.desc,
                gradient: 'from-blue-600 via-purple-600 to-purple-800',
                iconColor: 'text-blue-300',
                image: '/images/Web Development.png',
                rating: 4.9,
                reviews: 124,
                testimonial: t.services.items.web.testimonial,
                hexColor: '#3b82f6',
                featured: false,
            },
            {
                icon: Smartphone,
                title: t.services.items.mobile.title,
                description: t.services.items.mobile.desc,
                gradient: 'from-cyan-600 via-blue-600 to-purple-700',
                iconColor: 'text-cyan-300',
                image: '/images/Mobile Apps.png',
                rating: 4.8,
                reviews: 98,
                testimonial: t.services.items.mobile.testimonial,
                hexColor: '#06b6d4',
                featured: false,
            },
            {
                icon: Bot,
                title: t.services.items.ai.title,
                description: t.services.items.ai.desc,
                gradient: 'from-orange-600 via-pink-600 to-purple-700',
                iconColor: 'text-orange-300',
                image: '/images/AI Solutions.png',
                rating: 5.0,
                reviews: 45,
                testimonial: t.services.items.ai.testimonial,
                featured: true,
                hexColor: '#f97316',
            },
        ],
        marketing: [
            {
                icon: ShoppingCart,
                title: t.services.items.ecommerce.title,
                description: t.services.items.ecommerce.desc,
                gradient: 'from-purple-600 via-pink-600 to-orange-600',
                iconColor: 'text-purple-300',
                image: '/images/E-commerce.png',
                rating: 4.9,
                reviews: 210,
                testimonial: t.services.items.ecommerce.testimonial,
                hexColor: '#a855f7',
                featured: false,
            },
        ],
        design: [
            {
                icon: Palette,
                title: t.services.items.design.title,
                description: t.services.items.design.desc,
                gradient: 'from-indigo-600 via-purple-600 to-pink-600',
                iconColor: 'text-indigo-300',
                image: '/images/UI UX Design.png',
                rating: 4.9,
                reviews: 156,
                testimonial: t.services.items.design.testimonial,
                hexColor: '#0070f3',
                featured: false,
            },
            {
                icon: Settings,
                title: t.services.items.support.title,
                description: t.services.items.support.desc,
                gradient: 'from-teal-600 via-cyan-600 to-blue-600',
                iconColor: 'text-teal-300',
                image: '/images/Support.png',
                rating: 5.0,
                reviews: 300,
                testimonial: t.services.items.support.testimonial,
                hexColor: '#22d3ee',
                featured: false,
            },
        ],
    };

    const categories = [
        { id: 'all' as const, label: language === 'ar' ? 'الكل' : 'All' },
        { id: 'tech' as const, label: language === 'ar' ? 'خدمات تقنية' : 'Tech Services' },
        { id: 'marketing' as const, label: language === 'ar' ? 'خدمات تسويقية' : 'Marketing Services' },
        { id: 'design' as const, label: language === 'ar' ? 'خدمات التصميم' : 'Design Services' },
    ];

    const currentServices = activeCategory === 'all'
        ? [...allServices.tech, ...allServices.marketing, ...allServices.design]
        : allServices[activeCategory];

    return (
        <section id="services" className="py-20 relative overflow-hidden">
            {/* Spotlight Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        {t.services.titleRegular} <span className="text-gradient">{t.services.titleGradient}</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {t.services.description}
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center gap-3 mb-12 flex-wrap"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setActiveCategory(category.id);
                                swiperRef.current?.slideTo(0);
                            }}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* 3D Carousel */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 15,
                            stretch: 0,
                            depth: 250,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="services-swiper pb-16"
                        dir={language === 'ar' ? 'rtl' : 'ltr'}
                        key={activeCategory} // Force re-render on category change
                    >
                        {currentServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <SwiperSlide key={`${activeCategory}-${index}`} className="!w-[90%] sm:!w-[500px]">
                                    <div className="group relative h-full">
                                        {/* Card Container with Gradient Background */}
                                        <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.gradient} p-[2px] h-full shadow-2xl`}>
                                            <div className="relative bg-gray-900/95 dark:bg-black/95 backdrop-blur-xl rounded-3xl overflow-hidden h-full">
                                                {/* Service Image */}
                                                <div className="relative h-64 overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                                                    <Image
                                                        src={service.image}
                                                        alt={service.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    {/* Rating Badge */}
                                                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                                                        <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                            <span className="text-sm font-bold text-white">{service.rating}</span>
                                                            <span className="text-xs text-gray-300">({service.reviews})</span>
                                                        </div>
                                                    </div>
                                                    {/* Featured Badge */}
                                                    {service.featured && (
                                                        <div className="absolute top-4 right-4 z-20">
                                                            <span className="px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-lg animate-pulse">
                                                                ⭐ {t.services.featured}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="p-6 space-y-4">
                                                    {/* Icon */}
                                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                                        <Icon className={`w-7 h-7 ${service.iconColor}`} />
                                                    </div>

                                                    {/* Title */}
                                                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                                                        {service.title}
                                                    </h3>

                                                    {/* Description */}
                                                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                                                        {service.description}
                                                    </p>

                                                    {/* Testimonial */}
                                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                                                        <p className="text-xs text-gray-400 italic line-clamp-2">
                                                            &quot;{service.testimonial}&quot;
                                                        </p>
                                                    </div>

                                                    {/* Action Buttons */}
                                                    <div className="flex gap-2 pt-2">
                                                        <Button
                                                            className="flex-grow bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                                                            size="sm"
                                                            onClick={() => handleBookClick(service.title)}
                                                        >
                                                            {t.services.bookService}
                                                        </Button>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="px-3 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                                                            onClick={() =>
                                                                window.open(
                                                                    `https://wa.me/201508557715?text=${encodeURIComponent(
                                                                        `Hello, I'd like to chat about ${service.title}`
                                                                    )}`,
                                                                    '_blank'
                                                                )
                                                            }
                                                            title={t.services.bookingForm.direct}
                                                        >
                                                            <MessageCircle className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </motion.div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={t.services.bookingForm.title.replace('{service}', selectedService || '')}
            >
                {selectedService && (
                    <ServiceBookingForm
                        serviceTitle={selectedService}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </Modal>

            {/* Custom Swiper Styles */}
            <style jsx global>{`
                .services-swiper {
                    padding: 40px 20px 60px;
                }

                .services-swiper .swiper-slide {
                    transition: all 0.5s ease;
                }

                .services-swiper .swiper-slide-active {
                    z-index: 10;
                }

                .services-swiper .swiper-pagination-bullet {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    opacity: 0.5;
                    width: 12px;
                    height: 12px;
                }

                .services-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 32px;
                    border-radius: 6px;
                }

                .services-swiper .swiper-button-next,
                .services-swiper .swiper-button-prev {
                    color: #fff;
                    background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s ease;
                }

                .services-swiper .swiper-button-next:hover,
                .services-swiper .swiper-button-prev:hover {
                    transform: scale(1.1);
                    box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
                }

                .services-swiper .swiper-button-next::after,
                .services-swiper .swiper-button-prev::after {
                    font-size: 20px;
                    font-weight: bold;
                }

                @media (max-width: 768px) {
                    .services-swiper .swiper-button-next,
                    .services-swiper .swiper-button-prev {
                        width: 40px;
                        height: 40px;
                    }

                    .services-swiper .swiper-button-next::after,
                    .services-swiper .swiper-button-prev::after {
                        font-size: 16px;
                    }
                }
            `}</style>
        </section>
    );
}
