'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, X } from 'lucide-react';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ComputerFrame } from '@/components/ui/ComputerFrame';
import { MobileFrame } from '@/components/ui/MobileFrame';

import { useLanguage } from '@/providers/LanguageProvider';
import { getHomeProjects, type Project } from '../layout/portfolio.data';

function clampTags(tags: string[], max = 3) {
  if (tags.length <= max) return { visible: tags, hiddenCount: 0 };
  return { visible: tags.slice(0, max), hiddenCount: tags.length - max };
}

function ProjectCard({
  project,
  onSelect,
  detailsLabel,
  liveLabel,
}: {
  project: Project;
  onSelect: (p: Project) => void;
  detailsLabel: string;
  liveLabel: string;
}) {
  const { visible, hiddenCount } = clampTags(project.tags, 3);
  const isMobile = project.frame === 'mobile' || project.category === 'mobile';

  return (
    <Card
      className="p-6 h-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/15 transition-colors group rounded-3xl"
      hoverable
      tilt
    >
      {/* Preview Frame */}
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

      {/* Content */}
      <div className="text-center flex flex-col min-h-[190px]">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-5 mt-auto">
          {visible.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className="text-xs text-gray-600 dark:text-gray-400 bg-black/5 dark:bg-white/5 px-2 py-1 rounded">
              +{hiddenCount}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3">
          <Button
            size="sm"
            variant="ghost"
            className="p-0 h-auto text-primary-400 hover:text-primary-300 hover:bg-transparent"
            onClick={() => onSelect(project)}
          >
            {detailsLabel}
            <ArrowRight className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1 rtl:rotate-180" />
          </Button>

          {project.liveUrl ? (
            <Button
              size="sm"
              variant="ghost"
              className="p-0 h-auto text-gray-600 dark:text-gray-300 hover:text-white hover:bg-transparent"
              onClick={() => window.open(project.liveUrl!, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
              {liveLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

export function PortfolioHome() {
  const { t, language } = useLanguage();
  const [selected, setSelected] = useState<Project | null>(null);

  // ✅ 6 فقط من data helper (3 web/ecom + 3 mobile بشكل ذكي)
  const topSix = useMemo(() => getHomeProjects(t, 6), [t]);

  const detailsLabel = language === 'ar' ? 'عرض التفاصيل' : 'View Details';
  const fullLabel = language === 'ar' ? 'عرض كل الأعمال' : 'View Full Portfolio';
  const liveLabel = language === 'ar' ? 'عرض مباشر' : 'Live Preview';
  const requestLabel = language === 'ar' ? 'اطلب مشروع مشابه' : 'Request Similar Project';

  const scrollToContact = () => {
    setSelected(null);
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  return (
    <section
      id="portfolio"
      className={['relative overflow-hidden', 'pt-24 pb-20', 'scroll-mt-28'].join(' ')}
    >
      {/* Background */}
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
            {t.portfolio.titleRegular}{' '}
            <span className="text-gradient">{t.portfolio.titleGradient}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            {t.portfolio.description}
          </p>
        </motion.div>

        {/* Grid 6 */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {topSix.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, ease: 'linear' }}
              className="h-full"
            >
              <ProjectCard
                project={p}
                onSelect={setSelected}
                detailsLabel={detailsLabel}
                liveLabel={liveLabel}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
              {fullLabel}
              <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
            </Button>
          </Link>
        </div>
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
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selected.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selected.description}
                  </p>

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
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0"
                      onClick={scrollToContact}
                    >
                      {requestLabel}
                      <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
                    </Button>

                    <Button
                      variant="outline"
                      className="border-white/15 text-gray-900 dark:text-white hover:bg-white/5"
                      onClick={() => {
                        if (selected.liveUrl) window.open(selected.liveUrl, '_blank');
                      }}
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
