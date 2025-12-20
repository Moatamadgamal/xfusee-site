'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ComputerFrame } from '@/components/ui/ComputerFrame';
import { MobileFrame } from '@/components/ui/MobileFrame';
import { ExternalLink, ArrowRight, Layout, Smartphone, ShoppingBag, Building2 } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/providers/LanguageProvider';

// Categories for the portfolio
const getCategories = (t: any) => [
    { id: 'all', label: t.portfolio.categories.all, icon: Layout },
    { id: 'website', label: t.portfolio.categories.website, icon: Layout },
    { id: 'mobile', label: t.portfolio.categories.mobile, icon: Smartphone },
    { id: 'ecommerce', label: t.portfolio.categories.ecommerce, icon: ShoppingBag },
];

// Mock Projects Data
// We use a function here so it updates when language changes
const getProjects = (t: any) => [
    // --- WEBSITES ---
    {
        id: 1,
        title: t.portfolio.items.project1.title,
        category: "website",
        image: "/images/web (1).png",
        description: t.portfolio.items.project1.desc,
        tags: ["React", "D3.js"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 2,
        title: t.portfolio.items.project2.title,
        category: "website",
        image: "/images/web (2).png",
        description: t.portfolio.items.project2.desc,
        tags: ["Next.js", "Stripe"],
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 3,
        title: t.portfolio.items.project3.title,
        category: "website",
        image: "/images/web (4).png",
        description: t.portfolio.items.project3.desc,
        tags: ["Vue.js", "Firebase"],
        color: "from-orange-500 to-red-500"
    },
    {
        id: 4,
        title: t.portfolio.items.project4.title,
        category: "website",
        image: "/images/web (5).png",
        description: t.portfolio.items.project4.desc,
        tags: ["Corporate", "Portal"],
        color: "from-indigo-500 to-blue-500"
    },

    // --- MOBILE APPS ---
    {
        id: 5,
        title: t.portfolio.items.project5.title,
        category: "mobile",
        image: "/images/mobile (1).jpg",
        description: t.portfolio.items.project5.desc,
        tags: ["Flutter", "Dart"],
        color: "from-blue-600 to-indigo-600"
    },
    {
        id: 6,
        title: t.portfolio.items.project6.title,
        category: "mobile",
        image: "/images/mobile (2).png",
        description: t.portfolio.items.project6.desc,
        tags: ["IoT", "Swift"],
        color: "from-cyan-500 to-blue-500"
    },
    {
        id: 7,
        title: t.portfolio.items.project7.title,
        category: "mobile",
        image: "/images/mobile (3).png",
        description: t.portfolio.items.project7.desc,
        tags: ["Health", "React Native"],
        color: "from-green-500 to-teal-500"
    },
    {
        id: 8,
        title: t.portfolio.items.project8.title,
        category: "mobile",
        image: "/images/mobile (9).jpg",
        description: t.portfolio.items.project8.desc,
        tags: ["Apps", "Delivery"],
        color: "from-orange-500 to-yellow-500"
    },
    {
        id: 9,
        title: t.portfolio.items.project9.title,
        category: "mobile",
        image: "/images/mobile (10).jpg",
        description: t.portfolio.items.project9.desc,
        tags: ["Transport", "Map"],
        color: "from-red-500 to-orange-500"
    },
    {
        id: 10,
        title: t.portfolio.items.project10.title,
        category: "mobile",
        image: "/images/mobile (11).jpg",
        description: t.portfolio.items.project10.desc,
        tags: ["Social", "Connect"],
        color: "from-pink-500 to-purple-500"
    },
    {
        id: 11,
        title: t.portfolio.items.project11.title,
        category: "mobile",
        image: "/images/mobile (12).jpg",
        description: t.portfolio.items.project11.desc,
        tags: ["Travel", "Booking"],
        color: "from-blue-400 to-cyan-400"
    },
    {
        id: 12,
        title: t.portfolio.items.project12.title,
        category: "mobile",
        image: "/images/mobile (13).jpg",
        description: t.portfolio.items.project12.desc,
        tags: ["EdTech", "Learning"],
        color: "from-yellow-400 to-orange-400"
    },
    {
        id: 13,
        title: t.portfolio.items.project13.title,
        category: "mobile",
        image: "/images/mobile (14).jpg",
        description: t.portfolio.items.project13.desc,
        tags: ["Productivity", "Task"],
        color: "from-green-400 to-emerald-400"
    },
    {
        id: 14,
        title: t.portfolio.items.project14.title,
        category: "mobile",
        image: "/images/mobile (15).jpg",
        description: t.portfolio.items.project14.desc,
        tags: ["Music", "Streaming"],
        color: "from-purple-400 to-indigo-400"
    },
    {
        id: 15,
        title: t.portfolio.items.project15.title,
        category: "mobile",
        image: "/images/mobile (16).jpg",
        description: t.portfolio.items.project15.desc,
        tags: ["News", "Aggregator"],
        color: "from-red-400 to-rose-400"
    },
    {
        id: 16,
        title: t.portfolio.items.project16.title,
        category: "mobile",
        image: "/images/mobile (17).jpg",
        description: t.portfolio.items.project16.desc,
        tags: ["Weather", "Forecast"],
        color: "from-blue-300 to-sky-300"
    },
    {
        id: 17,
        title: t.portfolio.items.project17.title,
        category: "mobile",
        image: "/images/mobile (18).jpg",
        description: t.portfolio.items.project17.desc,
        tags: ["Crypto", "Finance"],
        color: "from-gray-500 to-gray-700"
    },

    // --- E-COMMERCE ---
    {
        id: 18,
        title: t.portfolio.items.project18.title,
        category: "ecommerce",
        image: "/images/ecommerce (1).jpg",
        description: t.portfolio.items.project18.desc,
        tags: ["Fashion", "Shopify"],
        color: "from-pink-500 to-rose-500"
    },
    {
        id: 19,
        title: t.portfolio.items.project19.title,
        category: "ecommerce",
        image: "/images/ecommerce (2).jpg",
        description: t.portfolio.items.project19.desc,
        tags: ["Gadgets", "Tech"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 20,
        title: t.portfolio.items.project20.title,
        category: "ecommerce",
        image: "/images/ecommerce (3).jpg",
        description: t.portfolio.items.project20.desc,
        tags: ["Furniture", "Design"],
        color: "from-amber-500 to-orange-500"
    },
    {
        id: 21,
        title: t.portfolio.items.project21.title,
        category: "ecommerce",
        image: "/images/ecommerce (4).jpg",
        description: t.portfolio.items.project21.desc,
        tags: ["Organic", "Food"],
        color: "from-green-500 to-emerald-500"
    },
    {
        id: 22,
        title: t.portfolio.items.project22.title,
        category: "ecommerce",
        image: "/images/ecommerce (5).jpg",
        description: t.portfolio.items.project22.desc,
        tags: ["Beauty", "Cosmetics"],
        color: "from-rose-400 to-pink-400"
    },
    {
        id: 23,
        title: t.portfolio.items.project23.title,
        category: "ecommerce",
        image: "/images/ecommerce (6).jpg",
        description: t.portfolio.items.project23.desc,
        tags: ["Sports", "Fitness"],
        color: "from-blue-600 to-indigo-600"
    },
    {
        id: 24,
        title: t.portfolio.items.project24.title,
        category: "ecommerce",
        image: "/images/ecommerce (7).jpg",
        description: t.portfolio.items.project24.desc,
        tags: ["Pets", "Care"],
        color: "from-yellow-400 to-orange-400"
    },
    {
        id: 25,
        title: t.portfolio.items.project25.title,
        category: "ecommerce",
        image: "/images/ecommerce (8).jpg",
        description: t.portfolio.items.project25.desc,
        tags: ["Books", "Education"],
        color: "from-indigo-400 to-purple-400"
    },
    {
        id: 26,
        title: t.portfolio.items.project26.title,
        category: "ecommerce",
        image: "/images/ecommerce (9).jpg",
        description: t.portfolio.items.project26.desc,
        tags: ["Luxury", "Watches"],
        color: "from-gray-600 to-gray-800"
    },

];

export function Portfolio() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');

    // Get projects with translations
    const projects = getProjects(t);
    const categories = getCategories(t);

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-black/20">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        {t.portfolio.titleRegular} <span className="text-gradient">{t.portfolio.titleGradient}</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        {t.portfolio.description}
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 overflow-x-auto pb-4 no-scrollbar">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`relative px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <Icon className="w-4 h-4" />
                                    {cat.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                <Card
                                    className="p-6 h-full border border-gray-200 dark:border-white/5 bg-white/80 dark:bg-white/5 hover:border-primary-500/30 transition-colors group"
                                    hoverable={true}
                                    tilt={true}
                                >
                                    {/* Frame Container - Conditionally Rendered */}
                                    <div className="mb-6 transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 flex justify-center">
                                        {project.category === 'mobile' ? (
                                            <MobileFrame>
                                                <div className="relative w-full h-full overflow-hidden group/img">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover object-top transition-all duration-[3s] ease-in-out group-hover:scale-110"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                </div>
                                            </MobileFrame>
                                        ) : (
                                            <ComputerFrame>
                                                <div className="relative w-full h-full overflow-hidden group/img">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover object-top transition-all duration-[3s] ease-in-out group-hover:scale-110"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                </div>
                                            </ComputerFrame>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        <div className="flex items-center justify-center gap-2 mb-3">
                                            <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-gradient-to-r ${project.color} bg-opacity-10 text-primary-600 dark:text-primary-400 border border-primary-500/10`}>
                                                {categories.find(c => c.id === project.category)?.label}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs text-gray-600 dark:text-gray-500 bg-black/5 dark:bg-white/5 px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Button size="sm" variant="ghost" className="p-0 h-auto text-primary-400 hover:text-primary-300 hover:bg-transparent">
                                            View Details <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All Projects Button */}
                <div className="mt-16 text-center">
                    <Button variant="ghost" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                        View All Projects <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
