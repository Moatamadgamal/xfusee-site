'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, Code2, Zap } from 'lucide-react';
import { fadeIn, slideUp, slideLeft } from '@/utils/animations';
import { useLanguage } from '@/providers/LanguageProvider';

export function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Floating shapes data
  const shapes = [
    { size: 80, color: 'bg-blue-400/30', xRange: [-50, 50], yRange: [0, 40], top: 'top-10', left: 'left-10' },
    { size: 100, color: 'bg-purple-400/20', xRange: [-30, 30], yRange: [0, 50], top: 'top-1/3', left: 'left-1/2' },
    { size: 60, color: 'bg-pink-400/25', xRange: [-40, 40], yRange: [0, 30], top: 'bottom-20', left: 'right-20' },
    { size: 90, color: 'bg-cyan-400/20', xRange: [-50, 50], yRange: [0, 60], top: 'top-1/2', left: 'right-1/4' },
    { size: 70, color: 'bg-green-400/20', xRange: [-20, 20], yRange: [0, 40], top: 'bottom-1/4', left: 'left-1/3' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Floating Shapes Background */}
      {!reduceMotion && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {shapes.map((shape, i) => (
            <motion.div
              key={i}
              className={`absolute ${shape.top} ${shape.left} rounded-full ${shape.color}`}
              style={{ width: shape.size, height: shape.size }}
              animate={{
                y: [shape.yRange[0], shape.yRange[1], shape.yRange[0]],
                x: [shape.xRange[0], shape.xRange[1], shape.xRange[0]],
              }}
              transition={{ duration: 15 + i * 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-start">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-400 font-semibold">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={slideUp}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              {t.hero.titleRegular}
              <span className="block text-gradient-3d mt-2">
                {t.hero.titleGradient}
              </span>
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

              <Button variant="secondary" size="lg" onClick={scrollToPortfolio}>
                {t.hero.requestQuote}
              </Button>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0"
            >
              {[t.hero.stats.projects, t.hero.stats.satisfaction, t.hero.stats.support].map(
                (stat, index) => (
                  <div key={index} className="text-center lg:text-start">
                    <div className="text-3xl font-bold text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* Right Floating Cards */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px]">
              {[ 
                { icon: Code2, text: t.hero.floating.cleanCode, top: 'top-20 right-20', color: 'primary' },
                { icon: Zap, text: t.hero.floating.fastDelivery, top: 'top-60 left-10', color: 'cyan' },
                { icon: Sparkles, text: t.hero.floating.aiPowered, top: 'bottom-20 right-40', color: 'purple' },
              ].map(({ icon: Icon, text, top, color }, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${top} glass rounded-2xl p-6 border border-${color}-500/30 shadow-glow`}
                  whileHover={reduceMotion ? undefined : { y: -8, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                >
                  <Icon className={`w-12 h-12 text-${color}-400 mb-2`} />
                  <p className="text-sm font-semibold">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
