// 'use client';

// import { useEffect, useMemo, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Card } from '@/components/ui/Card';
// import { Button } from '@/components/ui/Button';
// import { ComputerFrame } from '@/components/ui/ComputerFrame';
// import { MobileFrame } from '@/components/ui/MobileFrame';
// import {
//   ExternalLink,
//   ArrowRight,
//   Layout,
//   Smartphone,
//   ShoppingBag,
//   Star,
//   X,
// } from 'lucide-react';
// import Image from 'next/image';
// import { useLanguage } from '@/providers/LanguageProvider';

// type CategoryId = 'all' | 'website' | 'mobile' | 'ecommerce';

// type Project = {
//   id: number;
//   title: string;
//   category: Exclude<CategoryId, 'all'>;
//   image: string;
//   description: string;
//   tags: string[];
//   color: string;
//   frame: 'desktop' | 'mobile';
//   featured?: boolean;
//   liveUrl?: string;
//   caseUrl?: string;
// };

// const getCategories = (t: any) => [
//   { id: 'all' as const, label: t.portfolio.categories.all, icon: Layout },
//   { id: 'website' as const, label: t.portfolio.categories.website, icon: Layout },
//   { id: 'mobile' as const, label: t.portfolio.categories.mobile, icon: Smartphone },
//   { id: 'ecommerce' as const, label: t.portfolio.categories.ecommerce, icon: ShoppingBag },
// ];

// // ✅ نفس الداتا الكبيرة بتاعتك (26)
// const getProjects = (t: any): Project[] => [
//   // --- WEBSITES ---
//   {
//     id: 1,
//     title: t.portfolio.items.project1.title,
//     category: 'website',
//     image: '/images/web (1).png',
//     description: t.portfolio.items.project1.desc,
//     tags: ['React', 'D3.js'],
//     color: 'from-blue-500 to-cyan-500',
//     frame: 'desktop',
//     featured: true,
//   },
//   {
//     id: 2,
//     title: t.portfolio.items.project2.title,
//     category: 'website',
//     image: '/images/web (2).png',
//     description: t.portfolio.items.project2.desc,
//     tags: ['Next.js', 'Stripe'],
//     color: 'from-purple-500 to-pink-500',
//     frame: 'desktop',
//   },
//   {
//     id: 3,
//     title: t.portfolio.items.project3.title,
//     category: 'website',
//     image: '/images/web (4).png',
//     description: t.portfolio.items.project3.desc,
//     tags: ['Vue.js', 'Firebase'],
//     color: 'from-orange-500 to-red-500',
//     frame: 'desktop',
//   },
//   {
//     id: 4,
//     title: t.portfolio.items.project4.title,
//     category: 'website',
//     image: '/images/web (5).png',
//     description: t.portfolio.items.project4.desc,
//     tags: ['Corporate', 'Portal'],
//     color: 'from-indigo-500 to-blue-500',
//     frame: 'desktop',
//   },

//   // --- MOBILE ---
//   {
//     id: 5,
//     title: t.portfolio.items.project5.title,
//     category: 'mobile',
//     image: '/images/mobile (1).jpg',
//     description: t.portfolio.items.project5.desc,
//     tags: ['Flutter', 'Dart'],
//     color: 'from-blue-600 to-indigo-600',
//     frame: 'mobile',
//   },
//   {
//     id: 6,
//     title: t.portfolio.items.project6.title,
//     category: 'mobile',
//     image: '/images/mobile (2).png',
//     description: t.portfolio.items.project6.desc,
//     tags: ['IoT', 'Swift'],
//     color: 'from-cyan-500 to-blue-500',
//     frame: 'mobile',
//   },
//   {
//     id: 7,
//     title: t.portfolio.items.project7.title,
//     category: 'mobile',
//     image: '/images/mobile (3).png',
//     description: t.portfolio.items.project7.desc,
//     tags: ['Health', 'React Native'],
//     color: 'from-green-500 to-teal-500',
//     frame: 'mobile',
//   },
//   {
//     id: 8,
//     title: t.portfolio.items.project8.title,
//     category: 'mobile',
//     image: '/images/mobile (9).jpg',
//     description: t.portfolio.items.project8.desc,
//     tags: ['Apps', 'Delivery'],
//     color: 'from-orange-500 to-yellow-500',
//     frame: 'mobile',
//   },
//   {
//     id: 9,
//     title: t.portfolio.items.project9.title,
//     category: 'mobile',
//     image: '/images/mobile (10).jpg',
//     description: t.portfolio.items.project9.desc,
//     tags: ['Transport', 'Map'],
//     color: 'from-red-500 to-orange-500',
//     frame: 'mobile',
//   },
//   {
//     id: 10,
//     title: t.portfolio.items.project10.title,
//     category: 'mobile',
//     image: '/images/mobile (11).jpg',
//     description: t.portfolio.items.project10.desc,
//     tags: ['Social', 'Connect'],
//     color: 'from-pink-500 to-purple-500',
//     frame: 'mobile',
//   },
//   {
//     id: 11,
//     title: t.portfolio.items.project11.title,
//     category: 'mobile',
//     image: '/images/mobile (12).jpg',
//     description: t.portfolio.items.project11.desc,
//     tags: ['Travel', 'Booking'],
//     color: 'from-blue-400 to-cyan-400',
//     frame: 'mobile',
//   },
//   {
//     id: 12,
//     title: t.portfolio.items.project12.title,
//     category: 'mobile',
//     image: '/images/mobile (13).jpg',
//     description: t.portfolio.items.project12.desc,
//     tags: ['EdTech', 'Learning'],
//     color: 'from-yellow-400 to-orange-400',
//     frame: 'mobile',
//   },
//   {
//     id: 13,
//     title: t.portfolio.items.project13.title,
//     category: 'mobile',
//     image: '/images/mobile (14).jpg',
//     description: t.portfolio.items.project13.desc,
//     tags: ['Productivity', 'Task'],
//     color: 'from-green-400 to-emerald-400',
//     frame: 'mobile',
//   },
//   {
//     id: 14,
//     title: t.portfolio.items.project14.title,
//     category: 'mobile',
//     image: '/images/mobile (15).jpg',
//     description: t.portfolio.items.project14.desc,
//     tags: ['Music', 'Streaming'],
//     color: 'from-purple-400 to-indigo-400',
//     frame: 'mobile',
//   },
//   {
//     id: 15,
//     title: t.portfolio.items.project15.title,
//     category: 'mobile',
//     image: '/images/mobile (16).jpg',
//     description: t.portfolio.items.project15.desc,
//     tags: ['News', 'Aggregator'],
//     color: 'from-red-400 to-rose-400',
//     frame: 'mobile',
//   },
//   {
//     id: 16,
//     title: t.portfolio.items.project16.title,
//     category: 'mobile',
//     image: '/images/mobile (17).jpg',
//     description: t.portfolio.items.project16.desc,
//     tags: ['Weather', 'Forecast'],
//     color: 'from-blue-300 to-sky-300',
//     frame: 'mobile',
//   },
//   {
//     id: 17,
//     title: t.portfolio.items.project17.title,
//     category: 'mobile',
//     image: '/images/mobile (18).jpg',
//     description: t.portfolio.items.project17.desc,
//     tags: ['Crypto', 'Finance'],
//     color: 'from-gray-500 to-gray-700',
//     frame: 'mobile',
//   },

//   // --- ECOMMERCE ---
//   {
//     id: 18,
//     title: t.portfolio.items.project18.title,
//     category: 'ecommerce',
//     image: '/images/ecommerce (1).jpg',
//     description: t.portfolio.items.project18.desc,
//     tags: ['Fashion', 'Shopify'],
//     color: 'from-pink-500 to-rose-500',
//     frame: 'desktop',
//   },
//   {
//     id: 19,
//     title: t.portfolio.items.project19.title,
//     category: 'ecommerce',
//     image: '/images/ecommerce (2).jpg',
//     description: t.portfolio.items.project19.desc,
//     tags: ['Gadgets', 'Tech'],
//     color: 'from-blue-500 to-cyan-500',
//     frame: 'desktop',
//   },
//   {
//     id: 20,
//     title: t.portfolio.items.project20.title,
//     category: 'ecommerce',
//     image: '/images/ecommerce (3).jpg',
//     description: t.portfolio.items.project20.desc,
//     tags: ['Furniture', 'Design'],
//     color: 'from-amber-500 to-orange-500',
//     frame: 'desktop',
//   },
//   {
//     id: 21,
//     title: t.portfolio.items.project21.title,
//     category: 'ecommerce',
//     image: '/images/ecommerce (4).jpg',
//     description: t.portfolio.items.project21.desc,
//     tags: ['Organic', 'Food'],
//     color: 'from-green-500 to-emerald-500',
//     frame: 'desktop',
//   },
//   {
//     id: 22,
//     title: t.portfolio.items.project22.title,
//     category: 'ecommerce',
//     image: '/images/ecommerce (5).jpg',
//     description: t.portfolio.items.project22.desc,
//     tags: ['Beauty', 'Cosmetics'],
//     color: 'from-rose-400 to-pink-400',
//     frame: 'desktop',
//   },
//   {
//     id: 23,
//     title: t.portfolio.items.project23.title,
//     category: 'ecommerce',
//     image: '/images/ecommerce (6).jpg',
//     description: t.portfolio.items.project23.desc,
//     tags: ['Sports', 'Fitness'],
//     color: 'from-blue-600 to-indigo-600',
//     frame: 'desktop',
//   },
//   {
//     id: 24,
//     title: t.portfolio.items.project24.title,
//     category: 'ecommerce',
//     image: '/images/ecommerce (7).jpg',
//     description: t.portfolio.items.project24.desc,
//     tags: ['Pets', 'Care'],
//     color: 'from-yellow-400 to-orange-400',
//     frame: 'desktop',
//   },
//   {
//     id: 25,
//     title: t.portfolio.items.project25.title,
//     category: 'ecommerce',
//     image: '/images/ecommerce (8).jpg',
//     description: t.portfolio.items.project25.desc,
//     tags: ['Books', 'Education'],
//     color: 'from-indigo-400 to-purple-400',
//     frame: 'desktop',
//   },
//   {
//     id: 26,
//     title: t.portfolio.items.project26.title,
//     category: 'ecommerce',
//     image: '/images/ecommerce (9).jpg',
//     description: t.portfolio.items.project26.desc,
//     tags: ['Luxury', 'Watches'],
//     color: 'from-gray-600 to-gray-800',
//     frame: 'desktop',
//   },
// ];

// function clampTags(tags: string[], max = 3) {
//   if (tags.length <= max) return { visible: tags, hiddenCount: 0 };
//   return { visible: tags.slice(0, max), hiddenCount: tags.length - max };
// }

// function SectionTitle({ title }: { title: string }) {
//   return (
//     <div className="flex items-center gap-3 mb-5">
//       <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//       <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
//         {title}
//       </h3>
//       <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//     </div>
//   );
// }

// function toArabicDigits(n: number) {
//   const map = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
//   return String(n).replace(/\d/g, (d) => map[Number(d)]);
// }

// function makeDisplayTitle(
//   category: 'website' | 'mobile' | 'ecommerce',
//   n: number,
//   language: string
// ) {
//   if (language === 'ar') {
//     const num = toArabicDigits(n);
//     if (category === 'mobile') return `تطبيق جوال ${num}`;
//     // websites + ecommerce (نفس القسم)
//     return `نموذج موقع ${num}`;
//   } else {
//     if (category === 'mobile') return `Mobile App ${n}`;
//     return `Website Template ${n}`;
//   }
// }

// // ✅ نعرف عدد الأعمدة الحالية (بس هنطبق قصّ العناصر لما تكون 3 أعمدة)
// function useCols() {
//   const [cols, setCols] = useState(3);

//   useEffect(() => {
//     const calc = () => {
//       const w = window.innerWidth;
//       if (w >= 1024) setCols(3); // lg
//       else if (w >= 768) setCols(2); // md
//       else setCols(1); // mobile
//     };
//     calc();
//     window.addEventListener('resize', calc);
//     return () => window.removeEventListener('resize', calc);
//   }, []);

//   return cols;
// }

// // ✅ لو آخر صف فيه عنصر واحد لوحده على 3 أعمدة -> نشيله
// function trimLonelyLast(list: Project[], cols: number) {
//   if (cols !== 3) return list; // نخليها زي ما هي على md/mobile
//   const rem = list.length % cols;
//   if (rem === 1) return list.slice(0, -1); // يشيل آخر واحد
//   return list;
// }

// function ProjectCard({
//   project,
//   categoryLabel,
//   onSelect,
//   detailsLabel,
//   displayTitle,
// }: {
//   project: Project;
//   categoryLabel: string;
//   onSelect: (p: Project, displayTitle: string) => void;
//   detailsLabel: string;
//   displayTitle: string;
// }) {
//   const { visible, hiddenCount } = clampTags(project.tags, 3);
//   const isMobileFrame = project.frame === 'mobile' || project.category === 'mobile';

//   return (
//     <Card
//       className="p-6 h-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/15 transition-colors group rounded-3xl"
//       hoverable
//       tilt
//     >
//       {/* Frame */}
//       <div className="mb-6 transform transition-transform duration-300 group-hover:scale-[1.02] flex justify-center">
//         {isMobileFrame ? (
//           <MobileFrame>
//             <div className="relative w-full h-full overflow-hidden">
//               <Image
//                 src={project.image}
//                 alt={displayTitle}
//                 fill
//                 className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//           </MobileFrame>
//         ) : (
//           <ComputerFrame>
//             <div className="relative w-full h-full overflow-hidden">
//               <Image
//                 src={project.image}
//                 alt={displayTitle}
//                 fill
//                 className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//           </ComputerFrame>
//         )}
//       </div>

//       {/* Content */}
//       <div className="text-center flex flex-col min-h-[190px]">
//         <div className="flex items-center justify-center gap-2 mb-3">
//           <span
//             className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-gradient-to-r ${project.color} bg-opacity-10 text-primary-400 border border-white/10`}
//           >
//             {categoryLabel}
//           </span>
//         </div>

//         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//           {displayTitle}
//         </h3>

//         <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
//           {project.description}
//         </p>

//         <div className="flex flex-wrap justify-center gap-2 mb-4 mt-auto">
//           {visible.map((tag) => (
//             <span
//               key={tag}
//               className="text-xs text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 px-2 py-1 rounded"
//             >
//               {tag}
//             </span>
//           ))}
//           {hiddenCount > 0 && (
//             <span className="text-xs text-gray-600 dark:text-gray-400 bg-black/5 dark:bg-white/5 px-2 py-1 rounded">
//               +{hiddenCount}
//             </span>
//           )}
//         </div>

//         <Button
//           size="sm"
//           variant="ghost"
//           className="p-0 h-auto text-primary-400 hover:text-primary-300 hover:bg-transparent justify-center"
//           onClick={() => onSelect(project, displayTitle)}
//         >
//           {detailsLabel}{' '}
//           <ArrowRight className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1 rtl:rotate-180" />
//         </Button>
//       </div>
//     </Card>
//   );
// }
// export function Portfolio() {
//   const { t, language } = useLanguage();
//   const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

//   const [selected, setSelected] = useState<Project | null>(null);
//   const [selectedTitle, setSelectedTitle] = useState<string>('');

//   const cols = useCols();

//   const projects = useMemo(() => getProjects(t), [t]);
//   const categories = useMemo(() => getCategories(t), [t]);

//   const catLabel = (id: CategoryId) =>
//     categories.find((c) => c.id === id)?.label ?? id;

//   // ✅ سكشنين في All: (Website + Ecommerce) مع بعض، و Mobile لوحدها
//   const groupedRaw = useMemo(
//     () => ({
//       web: projects.filter((p) => p.category === 'website' || p.category === 'ecommerce'),
//       mobile: projects.filter((p) => p.category === 'mobile'),
//     }),
//     [projects]
//   );

//   // ✅ قصّ آخر عنصر لوحده (على lg فقط)
//   const grouped = useMemo(
//     () => ({
//       web: trimLonelyLast(groupedRaw.web, cols),
//       mobile: trimLonelyLast(groupedRaw.mobile, cols),
//     }),
//     [groupedRaw, cols]
//   );

//   const filteredRaw = useMemo(() => {
//     if (activeCategory === 'all') return projects;
//     return projects.filter((p) => p.category === activeCategory);
//   }, [projects, activeCategory]);

//   // ✅ قصّ آخر عنصر لوحده برضو في الفلاتر
//   const filtered = useMemo(() => trimLonelyLast(filteredRaw, cols), [filteredRaw, cols]);

//   // ✅ بدل Featured: Grid واحدة بس في وضع الفلاتر
//   const list = useMemo(() => {
//     if (activeCategory === 'all') return [];
//     return filtered;
//   }, [filtered, activeCategory]);

//   // ✅ ترجمة View Details
//   const detailsLabel = language === 'ar' ? 'عرض التفاصيل' : 'View Details';

//   // ✅ زر المودال ينزل للـ contact بدل Done/تمام
//   const requestLabel = language === 'ar' ? 'اطلب مشروع مشابه' : 'Request Similar Project';
//   const liveLabel = language === 'ar' ? 'عرض مباشر' : 'Live Preview';

//   const scrollToContact = () => {
//     setSelected(null);
//     setSelectedTitle('');
//     setTimeout(() => {
//       document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
//     }, 60);
//   };

//   const onSelect = (p: Project, title: string) => {
//     setSelected(p);
//     setSelectedTitle(title);
//   };

//   return (
//     <section
//       id="portfolio"
//       className={[
//         'relative overflow-hidden',
//         'pt-32 pb-24',
//         'scroll-mt-28',
//       ].join(' ')}
//     >
//       {/* Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-500/8 blur-3xl rounded-full" />
//         <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/8 blur-3xl rounded-full" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 14 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center max-w-3xl mx-auto mb-10"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4">
//             {t.portfolio.titleRegular}{' '}
//             <span className="text-gradient">{t.portfolio.titleGradient}</span>
//           </h2>
//           <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
//             {t.portfolio.description}
//           </p>
//         </motion.div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-10">
//           <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 backdrop-blur px-2 py-2">
//             {categories.map((c) => {
//               const Icon = c.icon;
//               const active = activeCategory === (c.id as CategoryId);

//               return (
//                 <button
//                   key={c.id}
//                   onClick={() => setActiveCategory(c.id as CategoryId)}
//                   className={[
//                     'relative rounded-full px-4 py-2 text-sm font-semibold',
//                     'transition-all duration-200',
//                     active
//                       ? 'text-white'
//                       : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
//                   ].join(' ')}
//                 >
//                   {active && (
//                     <motion.span
//                       layoutId="portfolioTab"
//                       className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/70 to-blue-600/70 border border-white/10"
//                       transition={{ type: 'spring', stiffness: 500, damping: 35 }}
//                     />
//                   )}
//                   <span className="relative z-10 inline-flex items-center gap-2">
//                     <Icon className="w-4 h-4" />
//                     {c.label}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* ✅ All = 2 Sections */}
//         {activeCategory === 'all' ? (
//           <div className="space-y-14">
//             <div>
//               <SectionTitle
//                 title={language === 'ar' ? 'المواقع والمتاجر الإلكترونية' : 'Websites & E-commerce'}
//               />
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//                 {grouped.web.map((p, idx) => (
//                   <ProjectCard
//                     key={p.id}
//                     project={p}
//                     categoryLabel={catLabel(p.category)}
//                     onSelect={onSelect}
//                     detailsLabel={detailsLabel}
//                     // ✅ numbering اختياري — لو مش عايزه شيله من ProjectCard أساساً
//                     displayTitle={makeDisplayTitle('website', idx + 1, language)}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div>
//               <SectionTitle title={catLabel('mobile')} />
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//                 {grouped.mobile.map((p, idx) => (
//                   <ProjectCard
//                     key={p.id}
//                     project={p}
//                     categoryLabel={catLabel(p.category)}
//                     onSelect={onSelect}
//                     detailsLabel={detailsLabel}
//                     displayTitle={makeDisplayTitle('mobile', idx + 1, language)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* ✅ Filter Mode = Grid واحدة فقط (بدون Featured) */}
//             <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//               <AnimatePresence mode="popLayout">
//                 {list.map((p, idx) => (
//                   <motion.div
//                     key={p.id}
//                     layout
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.25, ease: 'linear' }}
//                     className="h-full"
//                   >
//                     <ProjectCard
//                       project={p}
//                       categoryLabel={catLabel(p.category)}
//                       onSelect={onSelect}
//                       detailsLabel={detailsLabel}
//                       displayTitle={makeDisplayTitle(p.category, idx + 1, language)}
//                     />
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </motion.div>
//           </>
//         )}
//       </div>

//       {/* ✅ Details Modal */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-10"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             aria-modal="true"
//             role="dialog"
//           >
//             <div
//               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//               onClick={() => {
//                 setSelected(null);
//                 setSelectedTitle('');
//               }}
//             />

//             <motion.div
//               initial={{ opacity: 0, y: 18, scale: 0.98 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 18, scale: 0.98 }}
//               transition={{ duration: 0.25, ease: 'linear' }}
//               className="relative w-full max-w-4xl"
//             >
//               <Card className="p-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
//                 <div className="relative">
//                   <div className="relative w-full aspect-[16/9]">
//                     <Image
//                       src={selected.image}
//                       alt={selectedTitle || selected.title}
//                       fill
//                       className="object-cover object-top"
//                       sizes="(max-width: 1024px) 100vw, 900px"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
//                   </div>

//                   <button
//                     onClick={() => {
//                       setSelected(null);
//                       setSelectedTitle('');
//                     }}
//                     className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-10 h-10 rounded-full bg-black/45 border border-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-black/55 transition"
//                     aria-label="Close"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                     {selectedTitle || selected.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//                     {selected.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mt-5">
//                     {selected.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="text-xs text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 px-2.5 py-1.5 rounded-full border border-black/5 dark:border-white/10"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="mt-6 flex flex-wrap gap-3">
//                     <Button
//                       className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0"
//                       onClick={scrollToContact}
//                     >
//                       {requestLabel}
//                       <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
//                     </Button>

//                     <Button
//                       variant="outline"
//                       className="border-white/15 text-gray-900 dark:text-white hover:bg-white/5"
//                       onClick={() => {
//                         if (selected.liveUrl) window.open(selected.liveUrl, '_blank');
//                       }}
//                       disabled={!selected.liveUrl}
//                     >
//                       <ExternalLink className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
//                       {liveLabel}
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }
