'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Sparkles, Zap, Rocket } from 'lucide-react';
import Link from 'next/link';

import { useLanguage } from '@/providers/LanguageProvider';

const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/XFuse1', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://x.com/_Xfuse', label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/xfuse-agency', label: 'LinkedIn', color: 'hover:text-primary-400' },
    // Instagram not provided, keeping original placeholder or removing if user didn't ask for it expressly? User didn't mention Instagram, but I will leave it as placeholder '#' or remove it. The user list implies specific overrides. I'll verify if Instagram was requested. It wasn't in the list 'https://www.linkedin.com/in/xfuse-agency لينكد ان Info@xfuse.online جيميل https://x.com/_Xfuse تويتر او اكس https://www.facebook.com/XFuse1 فيسبوك رقم الاتصال الهاتفى 01508557715'. I will safeguard by keeping Instagram as '#' or just follow the instruction to update the specific ones. I will update the ones provided.
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-purple-400' },
];

export function Footer() {
    const { t } = useLanguage();

    const services = [
        { label: t.services.items.web.title, href: '#services' },
        { label: t.services.items.mobile.title, href: '#services' },
        { label: t.services.items.ecommerce.title, href: '#services' },
        { label: t.services.items.ai.title, href: '#ai-solutions' },
    ];

    return (
        <footer className="relative mt-20 overflow-hidden perspective-container">
            {/* 3D Background Layers */}
            <div className="absolute inset-0 z-0">
                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                {/* Grid pattern with depth */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,112,243,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(0,112,243,0.03)_2px,transparent_2px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] layer-1" />
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 glass-premium border-t border-white/10">
                {/* Top section - Hero Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-white/10"
                >
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Animated Icon Set */}
                        <div className="flex justify-center gap-6 mb-8">
                            <motion.div
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 border border-primary-500/30 flex items-center justify-center floating-3d"
                                whileHover={{ scale: 1.1, rotateZ: 10 }}
                            >
                                <Sparkles className="w-8 h-8 text-primary-400" />
                            </motion.div>
                            <motion.div
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-orange-500/20 border border-purple-500/30 flex items-center justify-center floating-3d"
                                whileHover={{ scale: 1.1, rotateZ: -10 }}
                                style={{ animationDelay: '1s' }}
                            >
                                <Zap className="w-8 h-8 text-purple-400" />
                            </motion.div>
                            <motion.div
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-primary-500/20 border border-cyan-500/30 flex items-center justify-center floating-3d"
                                whileHover={{ scale: 1.1, rotateZ: 10 }}
                                style={{ animationDelay: '2s' }}
                            >
                                <Rocket className="w-8 h-8 text-cyan-400" />
                            </motion.div>
                        </div>

                        {/* Bold Statement */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="text-gray-900 dark:text-white">{t.footer.hero.regular} </span>
                            <span className="text-gradient-3d">{t.footer.hero.gradient}</span>
                        </h2>

                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            {t.footer.hero.desc}
                        </p>

                        {/* CTA */}
                        <motion.a
                            href="#contact"
                            className="inline-block"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-cyan-500 text-white font-semibold shadow-glow-lg hover:shadow-glow-3d transition-all relative overflow-hidden group">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                                <span className="relative z-10">{t.footer.hero.cta}</span>
                            </div>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Main Footer Grid */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* About Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="card-3d"
                        >
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shadow-lg">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gradient">XFUSE</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {t.footer.sections.about}
                                </p>
                            </div>

                            {/* Social Links - 3D Enhanced */}
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        className={`w-11 h-11 rounded-lg glass-premium border border-white/20 flex items-center justify-center ${social.color} transition-all group relative overflow-hidden`}
                                        aria-label={social.label}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                        <social.icon className="w-5 h-5 relative z-10" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Services Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t.footer.sections.services}</h4>
                            <ul className="space-y-2">
                                {services.map((service) => (
                                    <li key={service.label}>
                                        <a
                                            href={service.href}
                                            className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
                                        >
                                            <motion.span
                                                className="w-1.5 h-1.5 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100"
                                                whileHover={{ scale: 1.5 }}
                                            />
                                            {service.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t.footer.sections.contact}</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400 group hover:text-primary-400 transition-colors">
                                    <div className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center group-hover:border-primary-500/30 transition-colors">
                                        <Mail className="w-4 h-4 text-primary-400" />
                                    </div>
                                    <a href="mailto:info@xfuse.online">Info@xfuse.online</a>
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400 group hover:text-primary-400 transition-colors">
                                    <div className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center group-hover:border-primary-500/30 transition-colors">
                                        <Phone className="w-4 h-4 text-primary-400" />
                                    </div>
                                    <a href="tel:01508557715">01508557715</a>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                    <div className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-primary-400" />
                                    </div>
                                    <span>Egypt</span>
                                </li>
                            </ul>
                        </motion.div>


                    </div>

                    {/* Bottom Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
                    >
                        <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} <span className="text-gradient font-semibold">XFUSE</span>. {t.footer.bottom.rights}
                        </p>

                        <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
                            <a href="#" className="hover:text-primary-400 transition-colors">{t.footer.bottom.privacy}</a>
                            <a href="#" className="hover:text-primary-400 transition-colors">{t.footer.bottom.terms}</a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
        </footer>
    );
}
