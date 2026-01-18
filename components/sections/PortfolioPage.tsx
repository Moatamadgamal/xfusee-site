'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ExternalLink, X } from 'lucide-react';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ComputerFrame } from '@/components/ui/ComputerFrame';
import { MobileFrame } from '@/components/ui/MobileFrame';

import { useLanguage } from '@/providers/LanguageProvider';
import { getProjects, getCategories, type Project, type CategoryId } from '@/components/layout/portfolio.data';

function clampTags(tags: string[], max = 3) {
  if (tags.length <= max) return { visible: tags, hiddenCount: 0 };
  return { visible: tags.slice(0, max), hiddenCount: tags.length - max };
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="h-px flex-1 bg-white/10" />
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur">
        {title}
      </h3>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function ProjectCard({
  project,
  onSelect,
  detailsLabel,
}: {
  project: Project;
  onSelect: (p: Project) => void;
  detailsLabel: string;
}) {
  const { visible, hiddenCount } = clampTags(project.tags, 3);
  const isMobile = project.frame === 'mobile' || project.category === 'mobile';

  return (
    <Card className="p-6 h-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/15 transition-colors group rounded-3xl">
      <div className="mb-6 transform transition-transform duration-300 group-hover:scale-[1.02] flex justify-center">
        {isMobile ? (
          <MobileFrame>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </MobileFrame>
        ) : (
          <ComputerFrame>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </ComputerFrame>
        )}
      </div>

      <div className="text-center flex flex-col min-h-[180px]">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap justify-center gap-2 mb-4 mt-auto">
          {visible.map((tag) => (
            <span key={tag} className="text-xs text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className="text-xs text-gray-600 dark:text-gray-400 bg-black/5 dark:bg-white/5 px-2 py-1 rounded">
              +{hiddenCount}
            </span>
          )}
        </div>

        <Button
          size="sm"
          variant="ghost"
          className="p-0 h-auto text-primary-400 hover:text-primary-300 hover:bg-transparent justify-center"
          onClick={() => onSelect(project)}
        >
          {detailsLabel} <ArrowRight className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1 rtl:rotate-180" />
        </Button>
      </div>
    </Card>
  );
}

export function PortfolioPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const projects = useMemo(() => getProjects(t), [t]);
  const categories = useMemo(() => getCategories(t), [t]);

  const web = useMemo(
    () => projects.filter((p) => p.category === 'website' || p.category === 'ecommerce'),
    [projects]
  );
  const mobile = useMemo(() => projects.filter((p) => p.category === 'mobile'), [projects]);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return [];
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  const detailsLabel = language === 'ar' ? 'عرض التفاصيل' : 'View Details';
  const liveLabel = language === 'ar' ? 'عرض مباشر' : 'Live Preview';
  const requestLabel = language === 'ar' ? 'اطلب مشروع مشابه' : 'Request Similar Project';

  const scrollToContact = () => {
    setSelected(null);
    setTimeout(() => {
      // لو contact موجود في نفس الصفحة الرئيسية فقط، هنفتح الهوم وننزل له:
      window.location.href = '/#contact';
    }, 60);
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-500/8 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/8 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.portfolio.titleRegular} <span className="text-gradient">{t.portfolio.titleGradient}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">{t.portfolio.description}</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 backdrop-blur px-2 py-2">
            {categories.map((c) => {
              const Icon = c.icon;
              const active = activeCategory === (c.id as CategoryId);

              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id as CategoryId)}
                  className={[
                    'relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
                    active ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
                  ].join(' ')}
                >
                  {active && (
                    <motion.span
                      layoutId="portfolioTabFull"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/70 to-blue-600/70 border border-white/10"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {c.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        {activeCategory === 'all' ? (
          <div className="space-y-14">
            <div>
              <SectionTitle title={language === 'ar' ? 'المواقع والمتاجر الإلكترونية' : 'Websites & E-commerce'} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {web.map((p) => (
                  <ProjectCard key={p.id} project={p} onSelect={setSelected} detailsLabel={detailsLabel} />
                ))}
              </div>
            </div>

            <div>
              <SectionTitle title={language === 'ar' ? 'تطبيقات الجوال' : 'Mobile Apps'} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {mobile.map((p) => (
                  <ProjectCard key={p.id} project={p} onSelect={setSelected} detailsLabel={detailsLabel} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, ease: 'linear' }}
                  className="h-full"
                >
                  <ProjectCard project={p} onSelect={setSelected} detailsLabel={detailsLabel} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelected(null)} />

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'linear' }}
              className="relative w-full max-w-4xl"
            >
              <Card className="p-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="relative">
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={selected.image}
                      alt={selected.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 900px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-10 h-10 rounded-full bg-black/45 border border-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-black/55 transition"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selected.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{selected.description}</p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {selected.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 px-2.5 py-1.5 rounded-full border border-black/5 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0" onClick={scrollToContact}>
                      {requestLabel}
                      <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
                    </Button>

                    <Button
                      variant="outline"
                      className="border-white/15 text-gray-900 dark:text-white hover:bg-white/5"
                      onClick={() => selected.liveUrl && window.open(selected.liveUrl, '_blank')}
                      disabled={!selected.liveUrl}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                      {liveLabel}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
