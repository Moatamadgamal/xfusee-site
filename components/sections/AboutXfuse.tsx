'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Code2, Brain, Palette, Rocket, Users } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';

type AvatarId = '1' | '2' | '3' | '4' | '5' | '6';

export function AboutXfuse() {
  const { t, language } = useLanguage();
  const reduceMotion = useReducedMotion();

  const [activeAvatar, setActiveAvatar] = useState<AvatarId | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  // Desktop-only heavy visuals (background blobs)
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    const onChange = () => setIsDesktop(mql.matches);
    onChange();
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, []);

  const avatars = useMemo(() => {
    return [
      {
        id: '1' as const,
        name: t.aboutXfuse.avatars.vision.name,
        role: t.aboutXfuse.avatars.vision.role,
        message: t.aboutXfuse.avatars.vision.message,
        icon: Lightbulb,
        color: 'text-yellow-600 dark:text-yellow-400',
        gradient: 'from-yellow-500/18 to-orange-500/18',
        glow: 'rgba(234, 179, 8, 0.22)',
        badge: language === 'ar' ? 'Vision' : 'Vision',
      },
      {
        id: '2' as const,
        name: t.aboutXfuse.avatars.dev.name,
        role: t.aboutXfuse.avatars.dev.role,
        message: t.aboutXfuse.avatars.dev.message,
        icon: Code2,
        color: 'text-primary-600 dark:text-primary-400',
        gradient: 'from-primary-500/18 to-cyan-500/18',
        glow: 'rgba(59, 130, 246, 0.22)',
        badge: language === 'ar' ? 'Dev' : 'Dev',
      },
      {
        id: '3' as const,
        name: t.aboutXfuse.avatars.ai.name,
        role: t.aboutXfuse.avatars.ai.role,
        message: t.aboutXfuse.avatars.ai.message,
        icon: Brain,
        color: 'text-purple-600 dark:text-purple-400',
        gradient: 'from-purple-500/18 to-pink-500/18',
        glow: 'rgba(168, 85, 247, 0.22)',
        badge: language === 'ar' ? 'AI' : 'AI',
      },
      {
        id: '4' as const,
        name: t.aboutXfuse.avatars.design.name,
        role: t.aboutXfuse.avatars.design.role,
        message: t.aboutXfuse.avatars.design.message,
        icon: Palette,
        color: 'text-pink-600 dark:text-pink-400',
        gradient: 'from-pink-500/18 to-purple-500/18',
        glow: 'rgba(236, 72, 153, 0.22)',
        badge: language === 'ar' ? 'Design' : 'Design',
      },
      {
        id: '5' as const,
        name: t.aboutXfuse.avatars.speed.name,
        role: t.aboutXfuse.avatars.speed.role,
        message: t.aboutXfuse.avatars.speed.message,
        icon: Rocket,
        color: 'text-orange-600 dark:text-orange-400',
        gradient: 'from-orange-500/18 to-red-500/18',
        glow: 'rgba(249, 115, 22, 0.22)',
        badge: language === 'ar' ? 'Speed' : 'Speed',
      },
      {
        id: '6' as const,
        name: t.aboutXfuse.avatars.support.name,
        role: t.aboutXfuse.avatars.support.role,
        message: t.aboutXfuse.avatars.support.message,
        icon: Users,
        color: 'text-cyan-600 dark:text-cyan-400',
        gradient: 'from-cyan-500/18 to-blue-500/18',
        glow: 'rgba(34, 211, 238, 0.22)',
        badge: language === 'ar' ? 'Support' : 'Support',
      },
    ];
  }, [t, language]);

  const selected = activeAvatar ? avatars.find((a) => a.id === activeAvatar) : null;

  return (
    <section
      id="about"
      className="relative overflow-hidden scroll-mt-28 pt-28 pb-20"
    >
      {/* Background (lighter / less blur / desktop only) */}
      {!reduceMotion && isDesktop && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-24 left-1/4 w-[520px] h-[520px] bg-purple-500/8 rounded-full blur-2xl"
            animate={{ x: [0, 32, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-24 right-1/4 w-[520px] h-[520px] bg-cyan-500/8 rounded-full blur-2xl"
            animate={{ x: [0, -32, 0], scale: [1.06, 1, 1.06] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            {t.aboutXfuse.titleRegular}{' '}
            <span className="text-gradient-3d">{t.aboutXfuse.titleGradient}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            {t.aboutXfuse.description}
          </p>
        </motion.div>

        {/* Avatars Grid (3 + 3 on desktop, smaller cards) */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 mb-10"
        >
          {avatars.map((avatar, index) => {
            const Icon = avatar.icon;
            const isActive = activeAvatar === avatar.id;

            return (
              <motion.div
                key={avatar.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: reduceMotion ? 0 : 0.35 }}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() => setActiveAvatar(isActive ? null : avatar.id)}
                  className={[
                    'group w-full rounded-2xl relative overflow-hidden',
                    'bg-white/60 dark:bg-white/5 backdrop-blur-xl',
                    'border transition-all duration-300',
                    isActive
                      ? 'border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.28)]'
                      : 'border-black/5 dark:border-white/10 hover:border-white/20',
                    // size: not square, lighter
                    'h-[150px] sm:h-[165px] lg:h-[150px]',
                    'flex items-center justify-between px-5',
                    'hover:-translate-y-1',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60',
                  ].join(' ')}
                >
                  {/* Soft gradient bg */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${avatar.gradient} opacity-40 group-hover:opacity-55 transition-opacity`}
                  />

                  {/* Left accent for active */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary-400/70 to-cyan-400/40" />
                  )}

                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={[
                        'w-14 h-14 rounded-2xl',
                        'bg-black/5 dark:bg-white/6',
                        'border border-black/5 dark:border-white/10',
                        'flex items-center justify-center',
                        'transition-transform duration-300 group-hover:scale-[1.03]',
                      ].join(' ')}
                      style={isActive ? { boxShadow: `0 0 26px ${avatar.glow}` } : undefined}
                    >
                      <Icon className={`w-7 h-7 ${avatar.color}`} />
                    </div>

                    <div className="text-left rtl:text-right">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                          {avatar.name}
                        </h3>
                        {isActive && (
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-gray-200 hidden sm:inline-block">
                            Active
                          </span>
                        )}
                      </div>
                      <p className={`text-sm mt-1 ${avatar.color} opacity-90`}>
                        {avatar.role}
                      </p>

                      {/* subtle hint under (better UX) */}
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 opacity-80 line-clamp-1">
                        {language === 'ar' ? 'اضغط لعرض التفاصيل' : 'Click to view details'}
                      </p>
                    </div>
                  </div>

                  {/* Right arrow / underline indicator */}
                  <div className="relative z-10 flex items-center">
                    <span
                      className={[
                        'text-xs px-3 py-1 rounded-full',
                        'bg-black/5 dark:bg-white/8',
                        'border border-black/5 dark:border-white/10',
                        'text-gray-700 dark:text-gray-200',
                        'transition-all duration-300',
                        isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100',
                      ].join(' ')}
                    >
                      {avatar.badge}
                    </span>
                  </div>

                  {/* Active underline (replaces infinite mouth animation) */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500/60 to-cyan-500/60" />
                  )}
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Message Display */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.28 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative rounded-2xl p-6 sm:p-8 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/12 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
                {/* Pointer */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/40 dark:bg-white/6 border-l border-t border-black/5 dark:border-white/12 rotate-45 backdrop-blur-xl" />

                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black/5 dark:bg-white/6 border border-black/5 dark:border-white/10 flex items-center justify-center flex-shrink-0"
                    style={{ boxShadow: `0 0 28px ${selected.glow}` }}
                  >
                    <selected.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${selected.color}`} />
                  </div>

                  <div className="flex-1">
                    {/* Selected label (clear ownership) */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {selected.name}
                      </h3>
                      <span className="text-[11px] px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/8 border border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-200">
                        {language === 'ar' ? 'المختار الآن' : 'Selected'}
                      </span>
                      <span className={`text-[11px] px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/8 border border-black/5 dark:border-white/10 ${selected.color}`}>
                        {selected.role}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                      {selected.message}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint text */}
        {!activeAvatar && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.4 }}
            className="text-center text-gray-600 dark:text-gray-500 text-sm mt-8"
          >
            {t.aboutXfuse.hint}
          </motion.p>
        )}
      </div>
    </section>
  );
}
