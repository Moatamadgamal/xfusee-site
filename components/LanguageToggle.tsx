'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/providers/LanguageProvider';

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = (newLocale: 'en' | 'ar') => {
        setLanguage(newLocale);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-white/10 hover:border-primary-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Globe className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-medium uppercase">{language}</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 right-0 w-32 glass border border-white/10 rounded-lg overflow-hidden shadow-glow z-50"
                    >
                        <button
                            onClick={() => toggleLanguage('en')}
                            className={`w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors ${language === 'en' ? 'bg-primary-500/20 text-primary-400' : ''
                                }`}
                        >
                            English
                        </button>
                        <button
                            onClick={() => toggleLanguage('ar')}
                            className={`w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors ${language === 'ar' ? 'bg-primary-500/20 text-primary-400' : ''
                                }`}
                        >
                            العربية
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
