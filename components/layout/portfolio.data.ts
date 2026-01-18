import { Layout, Smartphone, ShoppingBag } from 'lucide-react';

export type CategoryId = 'all' | 'website' | 'mobile' | 'ecommerce';

export type Project = {
  id: number;
  title: string;
  category: Exclude<CategoryId, 'all'>;
  image: string;
  description: string;
  tags: string[];
  color: string;
  frame: 'desktop' | 'mobile';
  featured?: boolean;
  liveUrl?: string;
};

export const getCategories = (t: any) => [
  { id: 'all' as const, label: t.portfolio.categories.all, icon: Layout },
  { id: 'website' as const, label: t.portfolio.categories.website, icon: Layout },
  { id: 'mobile' as const, label: t.portfolio.categories.mobile, icon: Smartphone },
  { id: 'ecommerce' as const, label: t.portfolio.categories.ecommerce, icon: ShoppingBag },
];

// ✅ حط نفس الداتا بتاعتك هنا (26 مشروع)
// انسخ getProjects اللي عندك زي ما هو بالظبط
export const getProjects = (t: any): Project[] => [
{
    id: 1,
    title: t.portfolio.items.project1.title,
    category: 'website',
    image: '/images/web (1).png',
    description: t.portfolio.items.project1.desc,
    tags: ['React', 'D3.js'],
    color: 'from-blue-500 to-cyan-500',
    frame: 'desktop',
    featured: true,
  },
  {
    id: 2,
    title: t.portfolio.items.project2.title,
    category: 'website',
    image: '/images/web (2).png',
    description: t.portfolio.items.project2.desc,
    tags: ['Next.js', 'Stripe'],
    color: 'from-purple-500 to-pink-500',
    frame: 'desktop',
  },
  {
    id: 3,
    title: t.portfolio.items.project3.title,
    category: 'website',
    image: '/images/web (4).png',
    description: t.portfolio.items.project3.desc,
    tags: ['Vue.js', 'Firebase'],
    color: 'from-orange-500 to-red-500',
    frame: 'desktop',
  },
  {
    id: 4,
    title: t.portfolio.items.project4.title,
    category: 'website',
    image: '/images/web (5).png',
    description: t.portfolio.items.project4.desc,
    tags: ['Corporate', 'Portal'],
    color: 'from-indigo-500 to-blue-500',
    frame: 'desktop',
  },

  // --- MOBILE ---
  {
    id: 5,
    title: t.portfolio.items.project5.title,
    category: 'mobile',
    image: '/images/mobile (1).jpg',
    description: t.portfolio.items.project5.desc,
    tags: ['Flutter', 'Dart'],
    color: 'from-blue-600 to-indigo-600',
    frame: 'mobile',
  },
  {
    id: 6,
    title: t.portfolio.items.project6.title,
    category: 'mobile',
    image: '/images/mobile (2).png',
    description: t.portfolio.items.project6.desc,
    tags: ['IoT', 'Swift'],
    color: 'from-cyan-500 to-blue-500',
    frame: 'mobile',
  },
  {
    id: 7,
    title: t.portfolio.items.project7.title,
    category: 'mobile',
    image: '/images/mobile (3).png',
    description: t.portfolio.items.project7.desc,
    tags: ['Health', 'React Native'],
    color: 'from-green-500 to-teal-500',
    frame: 'mobile',
  },
  {
    id: 8,
    title: t.portfolio.items.project8.title,
    category: 'mobile',
    image: '/images/mobile (9).jpg',
    description: t.portfolio.items.project8.desc,
    tags: ['Apps', 'Delivery'],
    color: 'from-orange-500 to-yellow-500',
    frame: 'mobile',
  },
  {
    id: 9,
    title: t.portfolio.items.project9.title,
    category: 'mobile',
    image: '/images/mobile (10).jpg',
    description: t.portfolio.items.project9.desc,
    tags: ['Transport', 'Map'],
    color: 'from-red-500 to-orange-500',
    frame: 'mobile',
  },
  {
    id: 10,
    title: t.portfolio.items.project10.title,
    category: 'mobile',
    image: '/images/mobile (11).jpg',
    description: t.portfolio.items.project10.desc,
    tags: ['Social', 'Connect'],
    color: 'from-pink-500 to-purple-500',
    frame: 'mobile',
  },
  {
    id: 11,
    title: t.portfolio.items.project11.title,
    category: 'mobile',
    image: '/images/mobile (12).jpg',
    description: t.portfolio.items.project11.desc,
    tags: ['Travel', 'Booking'],
    color: 'from-blue-400 to-cyan-400',
    frame: 'mobile',
  },
  {
    id: 12,
    title: t.portfolio.items.project12.title,
    category: 'mobile',
    image: '/images/mobile (13).jpg',
    description: t.portfolio.items.project12.desc,
    tags: ['EdTech', 'Learning'],
    color: 'from-yellow-400 to-orange-400',
    frame: 'mobile',
  },
  {
    id: 13,
    title: t.portfolio.items.project13.title,
    category: 'mobile',
    image: '/images/mobile (14).jpg',
    description: t.portfolio.items.project13.desc,
    tags: ['Productivity', 'Task'],
    color: 'from-green-400 to-emerald-400',
    frame: 'mobile',
  },
  {
    id: 14,
    title: t.portfolio.items.project14.title,
    category: 'mobile',
    image: '/images/mobile (15).jpg',
    description: t.portfolio.items.project14.desc,
    tags: ['Music', 'Streaming'],
    color: 'from-purple-400 to-indigo-400',
    frame: 'mobile',
  },
  {
    id: 15,
    title: t.portfolio.items.project15.title,
    category: 'mobile',
    image: '/images/mobile (16).jpg',
    description: t.portfolio.items.project15.desc,
    tags: ['News', 'Aggregator'],
    color: 'from-red-400 to-rose-400',
    frame: 'mobile',
  },
  {
    id: 16,
    title: t.portfolio.items.project16.title,
    category: 'mobile',
    image: '/images/mobile (17).jpg',
    description: t.portfolio.items.project16.desc,
    tags: ['Weather', 'Forecast'],
    color: 'from-blue-300 to-sky-300',
    frame: 'mobile',
  },
  {
    id: 17,
    title: t.portfolio.items.project17.title,
    category: 'mobile',
    image: '/images/mobile (18).jpg',
    description: t.portfolio.items.project17.desc,
    tags: ['Crypto', 'Finance'],
    color: 'from-gray-500 to-gray-700',
    frame: 'mobile',
  },

  // --- ECOMMERCE ---
  {
    id: 18,
    title: t.portfolio.items.project18.title,
    category: 'ecommerce',
    image: '/images/ecommerce (1).jpg',
    description: t.portfolio.items.project18.desc,
    tags: ['Fashion', 'Shopify'],
    color: 'from-pink-500 to-rose-500',
    frame: 'desktop',
  },
  {
    id: 19,
    title: t.portfolio.items.project19.title,
    category: 'ecommerce',
    image: '/images/ecommerce (2).jpg',
    description: t.portfolio.items.project19.desc,
    tags: ['Gadgets', 'Tech'],
    color: 'from-blue-500 to-cyan-500',
    frame: 'desktop',
  },
  {
    id: 20,
    title: t.portfolio.items.project20.title,
    category: 'ecommerce',
    image: '/images/ecommerce (3).jpg',
    description: t.portfolio.items.project20.desc,
    tags: ['Furniture', 'Design'],
    color: 'from-amber-500 to-orange-500',
    frame: 'desktop',
  },
  {
    id: 21,
    title: t.portfolio.items.project21.title,
    category: 'ecommerce',
    image: '/images/ecommerce (4).jpg',
    description: t.portfolio.items.project21.desc,
    tags: ['Organic', 'Food'],
    color: 'from-green-500 to-emerald-500',
    frame: 'desktop',
  },
  {
    id: 22,
    title: t.portfolio.items.project22.title,
    category: 'ecommerce',
    image: '/images/ecommerce (5).jpg',
    description: t.portfolio.items.project22.desc,
    tags: ['Beauty', 'Cosmetics'],
    color: 'from-rose-400 to-pink-400',
    frame: 'desktop',
  },
  {
    id: 23,
    title: t.portfolio.items.project23.title,
    category: 'ecommerce',
    image: '/images/ecommerce (6).jpg',
    description: t.portfolio.items.project23.desc,
    tags: ['Sports', 'Fitness'],
    color: 'from-blue-600 to-indigo-600',
    frame: 'desktop',
  },
  {
    id: 24,
    title: t.portfolio.items.project24.title,
    category: 'ecommerce',
    image: '/images/ecommerce (7).jpg',
    description: t.portfolio.items.project24.desc,
    tags: ['Pets', 'Care'],
    color: 'from-yellow-400 to-orange-400',
    frame: 'desktop',
  },
  {
    id: 25,
    title: t.portfolio.items.project25.title,
    category: 'ecommerce',
    image: '/images/ecommerce (8).jpg',
    description: t.portfolio.items.project25.desc,
    tags: ['Books', 'Education'],
    color: 'from-indigo-400 to-purple-400',
    frame: 'desktop',
  },
  {
    id: 26,
    title: t.portfolio.items.project26.title,
    category: 'ecommerce',
    image: '/images/ecommerce (9).jpg',
    description: t.portfolio.items.project26.desc,
    tags: ['Luxury', 'Watches'],
    color: 'from-gray-600 to-gray-800',
    frame: 'desktop',
  },
];
// ===============================
// ✅ Helpers for Home (6 items) + Labels
// ===============================

export const HOME_LIMIT = 6;

// ✅ Projects array من getProjects(t) — نطلع 6 بشكل متوازن (3 Web/Ecom + 3 Mobile)
// لو ناقص من فئة، نكمل من الباقي
export const getHomeProjects = (t: any, limit: number = HOME_LIMIT): Project[] => {
  const projects = getProjects(t);

  const web = projects.filter((p) => p.category === 'website' || p.category === 'ecommerce');
  const mobile = projects.filter((p) => p.category === 'mobile');

  const pick = <T,>(arr: T[], n: number) => arr.slice(0, Math.min(n, arr.length));

  const a = pick(web, Math.floor(limit / 2));   // 3
  const b = pick(mobile, Math.floor(limit / 2)); // 3

  const combined = [...a, ...b];

  if (combined.length < limit) {
    const rest = projects.filter((p) => !combined.some((x) => x.id === p.id));
    combined.push(...rest.slice(0, limit - combined.length));
  }

  return combined.slice(0, limit);
};

// ✅ ترجمة بسيطة للـ Category لو احتجتها في أي مكان
export const getCategoryLabel = (
  t: any,
  category: Exclude<CategoryId, 'all'>
): string => {
  const cats = getCategories(t);
  return cats.find((c) => c.id === category)?.label ?? category;
};

// ✅ لو عايز تقسم ALL لسكشنين (Web+Ecom) و (Mobile)
export const getGroupedProjects = (t: any) => {
  const projects = getProjects(t);

  return {
    web: projects.filter((p) => p.category === 'website' || p.category === 'ecommerce'),
    mobile: projects.filter((p) => p.category === 'mobile'),
  };
};
