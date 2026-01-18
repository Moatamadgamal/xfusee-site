'use client';

import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/Card';
import { Brain, MessageSquare, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/providers/LanguageProvider';

export function AISolutions() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  const aiSolutions = useMemo(
    () => [
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
    ],
    [t]
  );

  return (
    <section id="ai-solutions" className="py-20 relative overflow-hidden">
      {/* Background (خفيف + بدون animation تقيل) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-orange-500/6 blur-3xl rounded-full" />
        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-purple-500/6 blur-3xl rounded-full" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-orange-500/20 backdrop-blur mb-6">
            <Brain className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-semibold">{t.aiSolutions.badge}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-3">
            {t.aiSolutions.titleRegular}
            <span className="block text-gradient-accent mt-2">{t.aiSolutions.titleGradient}</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            {t.aiSolutions.description}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10"
        >
          {aiSolutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: reduceMotion ? 0 : 0.45 }}
                className="group"
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
                    'hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10',
                    'hover:border-orange-500/25 dark:hover:border-orange-400/25',
                  ].join(' ')}
                >
                  {/* subtle top line */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />

                  <div className="relative z-10">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/10 transition-transform duration-300 group-hover:scale-[1.03]">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white truncate">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                          {solution.description}
                        </p>
                      </div>
                    </div>

                    {/* Features (مختصرة عشان مفيش حشو) */}
                    <div className="mt-4 space-y-2">
                      {(solution.features || []).slice(0, 4).map((feature: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500/90" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}

                      {(solution.features || []).length > 4 && (
                        <div className="text-xs text-gray-500 dark:text-gray-500 pt-1">
                          {/* +{(solution.features || []).length - 4} {t.aiSolutions.more ?? 'more'} */}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* hover wash */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/6 to-transparent" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white border-0"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })}
          >
            {t.aiSolutions.cta}
            <ArrowRight className="w-5 h-5 ml-2 rtl:rotate-180" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}