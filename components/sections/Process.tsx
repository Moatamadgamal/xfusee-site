'use client';

import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Lightbulb, Code, TestTube, Rocket, HeadphonesIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/providers/LanguageProvider';

export function Process() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  const steps = useMemo(
    () => [
      {
        icon: Search,
        number: '01',
        title: t.process.steps.discovery.title,
        description: t.process.steps.discovery.desc,
        iconBg: 'from-blue-500 to-cyan-500',
        softGlow: 'shadow-cyan-500/10',
      },
      {
        icon: Lightbulb,
        number: '02',
        title: t.process.steps.planning.title,
        description: t.process.steps.planning.desc,
        iconBg: 'from-yellow-500 to-orange-500',
        softGlow: 'shadow-orange-500/10',
      },
      {
        icon: Code,
        number: '03',
        title: t.process.steps.development.title,
        description: t.process.steps.development.desc,
        iconBg: 'from-purple-500 to-pink-500',
        softGlow: 'shadow-purple-500/10',
      },
      {
        icon: TestTube,
        number: '04',
        title: t.process.steps.testing.title,
        description: t.process.steps.testing.desc,
        iconBg: 'from-green-500 to-emerald-500',
        softGlow: 'shadow-emerald-500/10',
      },
      {
        icon: Rocket,
        number: '05',
        title: t.process.steps.launch.title,
        description: t.process.steps.launch.desc,
        iconBg: 'from-orange-500 to-red-500',
        softGlow: 'shadow-red-500/10',
      },
      {
        icon: HeadphonesIcon,
        number: '06',
        title: t.process.steps.support.title,
        description: t.process.steps.support.desc,
        iconBg: 'from-fuchsia-500 to-pink-500',
        softGlow: 'shadow-pink-500/10',
      },
    ],
    [t]
  );

  return (
    <section id="process" className="py-20 relative overflow-hidden">
      {/* Background (خفيف بدل ThreeProcessBg) */}
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
            {t.process.titleRegular}{' '}
            <span className="text-gradient">{t.process.titleGradient}</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            {t.process.description}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: reduceMotion ? 0 : 0.45 }}
                className="group relative"
              >
                <Card
                  hoverable={!reduceMotion}
                  tilt={false}
                  className={[
                    'h-full relative overflow-hidden rounded-2xl',
                    'bg-white/70 dark:bg-white/5',
                    'border border-black/5 dark:border-white/10',
                    'backdrop-blur-xl',
                    'transition-all duration-300',
                    'hover:-translate-y-1 hover:shadow-2xl',
                    step.softGlow,
                    'hover:border-primary-500/25 dark:hover:border-primary-400/25',
                  ].join(' ')}
                >
                  {/* subtle top line */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />

                  <div className="relative z-10">
                    {/* top row: icon + number */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div
                        className={[
                          'w-12 h-12 rounded-xl bg-gradient-to-br',
                          step.iconBg,
                          'flex items-center justify-center',
                          'shadow-lg shadow-black/10',
                          'transition-transform duration-300 group-hover:scale-[1.03]',
                        ].join(' ')}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-200">
                        {step.number}
                      </span>
                    </div>

                    {/* content */}
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  {/* hover wash */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/6 to-transparent" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
