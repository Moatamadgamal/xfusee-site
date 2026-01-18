'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/providers/LanguageProvider';

export function WhyXfuse() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  const stats = [
    {
      value: t.about.stats.projects.value,
      label: t.about.stats.projects.label,
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      value: t.about.stats.satisfaction.value,
      label: t.about.stats.satisfaction.label,
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      value: t.about.stats.support.value,
      label: t.about.stats.support.label,
      gradient: 'from-orange-400 to-red-400',
    },
    {
      value: t.about.stats.experience.value,
      label: t.about.stats.experience.label,
      gradient: 'from-green-400 to-emerald-400',
    },
  ];

  return (
    <section id="why-xfuse" className="py-20 relative overflow-hidden">
      {/* Background (خفيف جدًا بدل الـ 3D/blur التقيل) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-primary-500/5 blur-3xl rounded-full" />
        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-cyan-500/5 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-3">
            {t.about.titleRegular}{' '}
            <span className="text-gradient-3d">{t.about.titleGradient}</span>
            {t.about.question}
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            {t.about.description}
          </p>
        </motion.div>

        {/* KPIs only */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: reduceMotion ? 0 : 0.45 }}
              className={[
                'group relative overflow-hidden rounded-2xl',
                'bg-white/70 dark:bg-white/5',
                'border border-black/5 dark:border-white/10',
                'backdrop-blur-xl',
                'px-5 py-6 sm:px-6 sm:py-7',
                'transition-all duration-300',
                'hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10',
                'hover:border-primary-500/25 dark:hover:border-primary-400/25',
              ].join(' ')}
            >
              {/* top subtle line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-white/5 via-white/15 to-white/5" />

              {/* gradient wash on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/6 to-transparent" />

              <div className="relative z-10">
                <div
                  className={[
                    'text-4xl sm:text-5xl font-extrabold tracking-tight',
                    'bg-gradient-to-r',
                    stat.gradient,
                    'bg-clip-text text-transparent',
                    'mb-2',
                  ].join(' ')}
                >
                  {stat.value}
                </div>

                <div className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-700/80 dark:text-gray-300/70">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Micro-copy بسيط بدل سكشن كامل Reasons */}
        {/* <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8">
          {t.about?.microHint ?? ''}
        </p> */}
      </div>
    </section>
  );
}
