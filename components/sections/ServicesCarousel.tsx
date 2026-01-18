'use client';

import { useMemo, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Smartphone,
  ShoppingCart,
  Bot,
  Palette,
  Settings,
  Star,
  MessageCircle,
} from 'lucide-react';

import { useLanguage } from '@/providers/LanguageProvider';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { ServiceBookingForm } from './ServiceBookingForm';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, A11y } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Category = 'all' | 'tech' | 'marketing' | 'design';

export function ServicesCarousel() {
  const { t, language } = useLanguage();
  const reduceMotion = useReducedMotion();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const swiperRef = useRef<SwiperType | null>(null);

  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (title: string) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };

  const allServices = useMemo(() => {
    return {
      tech: [
        {
          icon: Code2,
          title: t.services.items.web.title,
          description: t.services.items.web.desc,
          detailedDesc: t.services.items.web.detailedDesc,
          gradient: 'from-blue-600 via-purple-600 to-purple-800',
          iconColor: 'text-blue-200',
          image: '/images/Web Development.png',
          rating: 4.9,
          reviews: 124,
          testimonial: t.services.items.web.testimonial,
          featured: false,
        },
        {
          icon: Smartphone,
          title: t.services.items.mobile.title,
          description: t.services.items.mobile.desc,
          detailedDesc: t.services.items.mobile.detailedDesc,
          gradient: 'from-cyan-600 via-blue-600 to-purple-700',
          iconColor: 'text-cyan-200',
          image: '/images/Mobile Apps.png',
          rating: 4.8,
          reviews: 98,
          testimonial: t.services.items.mobile.testimonial,
          featured: false,
        },
        {
          icon: Bot,
          title: t.services.items.ai.title,
          description: t.services.items.ai.desc,
          detailedDesc: t.services.items.ai.detailedDesc,
          gradient: 'from-orange-600 via-pink-600 to-purple-700',
          iconColor: 'text-orange-200',
          image: '/images/AI Solutions.png',
          rating: 5.0,
          reviews: 45,
          testimonial: t.services.items.ai.testimonial,
          featured: true,
        },
      ],
      marketing: [
        {
          icon: ShoppingCart,
          title: t.services.items.ecommerce.title,
          description: t.services.items.ecommerce.desc,
          detailedDesc: t.services.items.ecommerce.detailedDesc,
          gradient: 'from-purple-600 via-pink-600 to-orange-600',
          iconColor: 'text-purple-200',
          image: '/images/E-commerce.png',
          rating: 4.9,
          reviews: 210,
          testimonial: t.services.items.ecommerce.testimonial,
          featured: false,
        },
      ],
      design: [
        {
          icon: Palette,
          title: t.services.items.design.title,
          description: t.services.items.design.desc,
          detailedDesc: t.services.items.design.detailedDesc,
          gradient: 'from-indigo-600 via-purple-600 to-pink-600',
          iconColor: 'text-indigo-200',
          image: '/images/UI UX Design.png',
          rating: 4.9,
          reviews: 156,
          testimonial: t.services.items.design.testimonial,
          featured: false,
        },
        {
          icon: Settings,
          title: t.services.items.support.title,
          description: t.services.items.support.desc,
          detailedDesc: t.services.items.support.detailedDesc,
          gradient: 'from-teal-600 via-cyan-600 to-blue-600',
          iconColor: 'text-teal-200',
          image: '/images/Support.png',
          rating: 5.0,
          reviews: 300,
          testimonial: t.services.items.support.testimonial,
          featured: false,
        },
      ],
    };
  }, [t]);

  const categories = useMemo(
    () => [
      { id: 'all' as const, label: language === 'ar' ? 'الكل' : 'All' },
      { id: 'tech' as const, label: language === 'ar' ? 'خدمات تقنية' : 'Tech Services' },
      {
        id: 'marketing' as const,
        label: language === 'ar' ? 'خدمات تسويقية' : 'Marketing Services',
      },
      { id: 'design' as const, label: language === 'ar' ? 'خدمات التصميم' : 'Design Services' },
    ],
    [language]
  );

  const currentServices =
    activeCategory === 'all'
      ? [...allServices.tech, ...allServices.marketing, ...allServices.design]
      : allServices[activeCategory];

  const categoryLabel =
    activeCategory === 'all'
      ? language === 'ar'
        ? 'الكل'
        : 'All'
      : activeCategory === 'tech'
      ? language === 'ar'
        ? 'تقنية'
        : 'Tech'
      : activeCategory === 'marketing'
      ? language === 'ar'
        ? 'تسويق'
        : 'Marketing'
      : language === 'ar'
      ? 'تصميم'
      : 'Design';

  // ✅ Fix Swiper when toggling language (LTR <-> RTL) or changing category
  useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.update();
    swiperRef.current.slideTo(0, 0);
  }, [language, activeCategory]);

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Subtle background glow (lighter than before) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.services.titleRegular}{' '}
            <span className="text-gradient">{t.services.titleGradient}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            {t.services.description}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.05 }}
          className="flex justify-center gap-3 mb-10 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                swiperRef.current?.slideTo(0);
              }}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-gray-200/80 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-gray-300/80 dark:hover:bg-gray-700/70'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Carousel */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="relative"
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Navigation, Autoplay, A11y]}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
            key={`${activeCategory}-${language}`} // ✅ important
            observer={true} // ✅ helps with RTL/layout updates
            observeParents={true} // ✅ helps with RTL/layout updates
            centeredSlides={false}
            spaceBetween={18}
            slidesPerView={1.08}
            breakpoints={{
              640: { slidesPerView: 1.6, spaceBetween: 18 },
              768: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 3.0, spaceBetween: 22 },
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={!reduceMotion}
            autoplay={
              reduceMotion
                ? false
                : {
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            className="services-swiper pb-14"
          >
            {currentServices.map((service, index) => {
              const Icon = service.icon;
              const isFeatured = service.featured;

              return (
                <SwiperSlide key={`${activeCategory}-${language}-${index}`} className="h-auto">
                  <div className="h-full">
                    <div
                      className={[
                        'group relative h-full overflow-hidden rounded-3xl',
                            'bg-white/70 dark:bg-white/5',
                            'backdrop-blur-xl transition-all duration-300',
                            isFeatured
                            ? 'scale-[1.03] border-2 border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.25)]'
                            : 'border border-black/5 dark:border-white/10 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/15 hover:border-purple-500/30 dark:hover:border-purple-400/30',
                        ].join(' ')}
                    >
                     {/* Gradient top border */}
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500/60 to-blue-500/60 opacity-70" />

                      {/* Featured ribbon */}
                      {isFeatured && (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-3 py-1 text-[11px] font-bold text-orange-200 bg-orange-500/15 border border-orange-400/30 rounded-full">
                            ⭐ {t.services.featured}
                          </span>
                        </div>
                      )}

                      {/* Media */}
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

                        {/* Rating pill */}
                        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                          <div className="flex items-center gap-1 bg-black/55 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm font-bold text-white">
                              {service.rating.toFixed(1)}
                            </span>
                            <span className="text-xs text-gray-200">
                              • {service.reviews} {language === 'ar' ? 'تقييم' : 'reviews'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div
                            className={[
                              'w-12 h-12 rounded-2xl',
                              'bg-gradient-to-br',
                              service.gradient,
                              'flex items-center justify-center',
                              'shadow-lg shadow-black/10',
                              'transition-transform duration-300 group-hover:scale-105',
                            ].join(' ')}
                          >
                            <Icon className={`w-6 h-6 ${service.iconColor}`} />
                          </div>

                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-200">
                            {categoryLabel}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {service.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2 mb-4">
                          {service.description}
                        </p>

                        <div className="mb-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 p-3">
                          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                            {service.detailedDesc}
                          </p>
                        </div>

                        <div className="mb-5">
                          <p className="text-xs text-gray-500 dark:text-gray-400 italic line-clamp-2">
                            “{service.testimonial}”
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                            size="sm"
                            onClick={() => handleBookClick(service.title)}
                          >
                            {t.services.bookService}
                          </Button>

                          <Button
                            variant="outline"
                            size="sm"
                            className="px-3 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white dark:border-[#25D366] dark:text-[#25D366]"
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

      <style jsx global>{`
        .services-swiper {
          padding: 10px 2px 55px;
        }

        .services-swiper .swiper-pagination-bullet {
          opacity: 0.45;
          width: 10px;
          height: 10px;
          background: rgba(167, 139, 250, 0.9);
        }

        .services-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 26px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 1), rgba(59, 130, 246, 1));
        }

        .services-swiper .swiper-button-next,
        .services-swiper .swiper-button-prev {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          color: #fff;
          background: linear-gradient(
            135deg,
            rgba(168, 85, 247, 0.55),
            rgba(59, 130, 246, 0.55)
          );
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(10px);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .services-swiper .swiper-button-next:hover,
        .services-swiper .swiper-button-prev:hover {
          transform: scale(1.06);
          box-shadow: 0 0 16px rgba(168, 85, 247, 0.18);
        }

        .services-swiper .swiper-button-next::after,
        .services-swiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: 800;
        }

        @media (max-width: 768px) {
          .services-swiper .swiper-button-next,
          .services-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
