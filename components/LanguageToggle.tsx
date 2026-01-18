'use client';

import { useEffect, useRef, useState } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/providers/LanguageProvider';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const wrapRef = useRef<HTMLDivElement | null>(null);

  const toggleLanguage = (newLocale: 'en' | 'ar') => {
    setLanguage(newLocale);
    setIsOpen(false);
  };

  // ✅ Close on click outside + ESC
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setIsOpen(false);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // ✅ Align dropdown based on language direction
  const isRTL = language === 'ar';

  return (
    <div ref={wrapRef} className="relative">
      <motion.button
        type="button"
        onClick={() => setIsOpen((p) => !p)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-white/10 hover:border-primary-500 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4 text-primary-400" />
        <span className="text-sm font-medium uppercase">{language}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            // ✅ بدل right-0 ثابت: نخليه يتظبط حسب RTL/LTR
            className={[
              'absolute top-full mt-2 z-[9999]',
              'glass border border-white/10 rounded-lg overflow-hidden shadow-glow',
              'min-w-[140px] w-max', // ✅ يمنع قص “العربية”
              isRTL ? 'left-0' : 'right-0',
            ].join(' ')}
            role="menu"
          >
            <button
              type="button"
              onClick={() => toggleLanguage('en')}
              className={`w-full px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                language === 'en' ? 'bg-primary-500/20 text-primary-400' : ''
              } ${isRTL ? 'text-right' : 'text-left'}`}
              role="menuitem"
            >
              English
            </button>

            <button
              type="button"
              onClick={() => toggleLanguage('ar')}
              className={`w-full px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                language === 'ar' ? 'bg-primary-500/20 text-primary-400' : ''
              } ${isRTL ? 'text-right' : 'text-left'}`}
              role="menuitem"
            >
              العربية
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
