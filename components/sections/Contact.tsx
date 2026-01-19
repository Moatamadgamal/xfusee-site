'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Calendar, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';

export function Contact() {
  const { t, language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(2, t.contact.form.name.error),
    email: z.string().email(t.contact.form.email.error),
    phone: z.string().min(10, t.contact.form.phone.error),
    service: z.string().min(1, t.contact.form.service.error),
    message: z.string().min(10, t.contact.form.message.error),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const serviceOptions = useMemo(
    () => [
      t.services.items.web.title,
      t.services.items.mobile.title,
      t.services.items.ecommerce.title,
      t.services.items.ai.title,
      t.services.items.design.title,
      t.services.items.support.title,
      language === 'ar' ? 'أخرى' : 'Other',
    ],
    [t, language]
  );

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);

    const whatsappNumber = '201508557715';
    const text = `
*New Service Request*
------------------
*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Service:* ${data.service}
*Message:* ${data.message}
------------------
Sent from XFUSE Website
    `.trim();

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');

    setIsLoading(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 4500);
  };

  // ✅ ستايل موحّد للـ inputs في اللايت عشان يبقى في Border واضح
  // لو Input/Textarea component بتقبل className → هيتطبق فورًا
  const fieldClass =
    'border border-primary-500/25 bg-white/60 text-gray-900 ' +
    'hover:border-primary-500/40 focus:border-primary-500/60 ' +
    'focus:ring-2 focus:ring-primary-500/25 ' +
    'dark:border-white/10 dark:bg-white/5 dark:text-white ' +
    'dark:hover:border-white/15 dark:focus:ring-primary-500/30';

  return (
    <section
      id="contact"
      className={[
        'relative overflow-hidden',
        'py-14 sm:py-16',
        'scroll-mt-28',
      ].join(' ')}
    >
      {/* Background (أخف) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-500/8 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/8 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:pt-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur mb-5">
              <Calendar className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-400 font-semibold">
                {t.contact.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              {t.contact.titleRegular}
              <span className="block text-gradient mt-1">
                {t.contact.titleGradient}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-xl">
              {t.contact.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Send className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">
                    {t.contact.quickResponse.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                    {t.contact.quickResponse.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">
                    {t.contact.consultation.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                    {t.contact.consultation.desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {/* ✅ هنا التعديل الأساسي: border واضح في اللايت */}
            <div
              className={[
                'rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-glow',
                'bg-white/60 dark:bg-white/5',
                'border border-primary-500/20 dark:border-white/10',
                'hover:border-primary-500/30 dark:hover:border-white/15',
                'transition-colors',
              ].join(' ')}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold mb-2 opacity-90">
                      {t.contact.form.name.label}
                    </label>
                    <Input
                      {...register('name')}
                      placeholder={t.contact.form.name.placeholder}
                      error={errors.name?.message}
                      className={fieldClass}
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-2 opacity-90">
                        {t.contact.form.email.label}
                      </label>
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder={t.contact.form.email.placeholder}
                        error={errors.email?.message}
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-2 opacity-90">
                        {t.contact.form.phone.label}
                      </label>
                      <Input
                        {...register('phone')}
                        type="tel"
                        placeholder={t.contact.form.phone.placeholder}
                        error={errors.phone?.message}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold mb-2 opacity-90">
                      {t.contact.form.service.label}
                    </label>

                    <select
                      {...register('service')}
                      className={[
                        'flex h-11 w-full rounded-xl px-4 text-sm transition-all duration-200',
                        // ✅ Border واضح في اللايت
                        'bg-white/60 text-gray-900 border border-primary-500/25',
                        'hover:border-primary-500/40',
                        'focus:outline-none focus:ring-2 focus:ring-primary-500/25 focus:border-primary-500/60',
                        // ✅ دارك زي ما هو
                        'dark:bg-white/5 dark:text-white dark:border-white/10 dark:hover:border-white/15 dark:focus:ring-primary-500/30',
                      ].join(' ')}
                    >
                      <option value="" className="bg-white dark:bg-gray-900">
                        {t.contact.form.service.placeholder}
                      </option>
                      {serviceOptions.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className="bg-white dark:bg-gray-900"
                        >
                          {service}
                        </option>
                      ))}
                    </select>

                    {errors.service && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold mb-2 opacity-90">
                      {t.contact.form.message.label}
                    </label>
                    <Textarea
                      {...register('message')}
                      placeholder={t.contact.form.message.placeholder}
                      error={errors.message?.message}
                      rows={3}
                      className={fieldClass}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
                    {isLoading ? t.contact.form.sending : t.contact.form.submit}
                    {!isLoading && (
                      <Send className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
                    )}
                  </Button>

                  <p className="text-[12px] text-gray-600 dark:text-gray-400 text-center pt-1">
                    {language === 'ar'
                      ? 'بالضغط على إرسال سيتم فتح واتساب لإرسال التفاصيل.'
                      : 'By clicking submit, WhatsApp will open to send your details.'}
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {t.contact.form.success.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t.contact.form.success.desc}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
