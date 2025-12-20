'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import Link from 'next/link';

import { useLanguage } from '@/providers/LanguageProvider';

export function Header() {
    const { t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollY } = useScroll();
    const headerY = useTransform(scrollY, [0, 100], [0, -5]);
    const headerBlur = useTransform(scrollY, [0, 100], [10, 20]);

    const navItems = [
        { label: t.nav.services, href: '#services' },
        { label: t.nav.aiSolutions, href: '#ai-solutions' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.process, href: '#process' },
        { label: t.nav.portfolio, href: '#portfolio' },
        { label: t.nav.contact, href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.header
                style={{ y: headerY }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'glass-premium shadow-2xl border-b border-white/20'
                    : 'bg-transparent'
                    }`}
            >
                {/* 3D Background layer with parallax */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-cyan-500/10"
                        style={{
                            x: useTransform(scrollY, [0, 300], [0, 50]),
                            opacity: useTransform(scrollY, [0, 100], [0, 0.5])
                        }}
                    />

                    {/* Floating orbs */}
                    <motion.div
                        className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo - Enhanced 3D */}
                        <Link href="/" className="relative z-10">
                            <motion.div
                                className="flex items-center gap-2 cursor-pointer group"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <motion.div
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-purple-500 to-primary-500 flex items-center justify-center shadow-lg group-hover:shadow-glow-lg transition-all"
                                    animate={{
                                        rotateY: [0, 360],
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotateZ: 10,
                                    }}
                                >
                                    <Sparkles className="w-5 h-5 text-white" />
                                </motion.div>
                                <span className="text-2xl font-bold text-gradient-3d tracking-tight">
                                    XFUSE
                                </span>
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation - Control Panel Style */}
                        <nav className="hidden md:flex items-center space-x-1 relative perspective-container">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    className="relative px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white transition-colors group"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {item.label}

                                    {/* Animated underline */}
                                    <motion.span
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-cyan-500 to-primary-500 rounded-full"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Glow effect on hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                        whileHover={{
                                            boxShadow: '0 0 20px rgba(0, 112, 243, 0.3)',
                                        }}
                                    />
                                </motion.button>
                            ))}
                        </nav>

                        {/* Right side controls - Enhanced */}
                        <div className="flex items-center gap-3 relative z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <ThemeToggle />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <LanguageToggle />
                            </motion.div>

                            {/* Mobile menu button - 3D Enhanced */}
                            <motion.button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden w-10 h-10 rounded-lg glass-premium border border-white/20 flex items-center justify-center hover:border-primary-500 transition-all relative overflow-hidden group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Toggle mobile menu"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                                />

                                <AnimatePresence mode="wait">
                                    {isMobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="w-5 h-5 text-primary-400 relative z-10" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="w-5 h-5 text-primary-400 relative z-10" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Bottom glow line */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isScrolled ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                />
            </motion.header>

            {/* Mobile Menu - Enhanced 3D */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[10000] md:hidden bg-black/80 backdrop-blur-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: '100%', rotateY: -30 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            exit={{ opacity: 0, x: '100%', rotateY: 30 }}
                            transition={{
                                duration: 0.5,
                                type: 'spring',
                                stiffness: 300,
                                damping: 30
                            }}
                            className="fixed right-0 top-0 bottom-0 w-full max-w-xs z-[10001] md:hidden glass-premium border-l border-white/20 shadow-2xl perspective-container"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <nav className="flex flex-col h-full pt-24 pb-8 px-6">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.href}
                                        onClick={() => scrollToSection(item.href)}
                                        initial={{ opacity: 0, x: 50, rotateY: -20 }}
                                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                        transition={{
                                            delay: index * 0.1,
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 20
                                        }}
                                        className="text-left py-4 px-6 mb-2 rounded-xl text-lg font-semibold text-gray-900 dark:text-gray-300 hover:text-primary-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all relative group overflow-hidden"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                        <span className="relative z-10">{item.label}</span>

                                        {/* Glow effect */}
                                        <motion.div
                                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-cyan-500 opacity-0 group-hover:opacity-100 rounded-r transition-opacity"
                                        />
                                    </motion.button>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
