'use client';

import { useState } from 'react';
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

    const serviceOptions = [
        t.services.items.web.title,
        t.services.items.mobile.title,
        t.services.items.ecommerce.title,
        t.services.items.ai.title,
        t.services.items.design.title,
        t.services.items.support.title,
        language === 'ar' ? 'أخرى' : 'Other'
    ];

    const onSubmit = async (data: ContactFormData) => {
        setIsLoading(true);

        // Create WhatsApp message
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

        // Encode the message
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        setIsLoading(false);
        setIsSubmitted(true);

        // Reset after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            reset();
        }, 5000);
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left side - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-6">
                            <Calendar className="w-4 h-4 text-primary-400" />
                            <span className="text-sm text-primary-400 font-semibold">{t.contact.badge}</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            {t.contact.titleRegular}
                            <span className="block text-gradient mt-2">{t.contact.titleGradient}</span>
                        </h2>

                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                            {t.contact.description}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                                    <Send className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">{t.contact.quickResponse.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{t.contact.quickResponse.desc}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">{t.contact.consultation.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{t.contact.consultation.desc}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass rounded-2xl p-8 border border-white/10 shadow-glow">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">{t.contact.form.name.label}</label>
                                        <Input
                                            {...register('name')}
                                            placeholder={t.contact.form.name.placeholder}
                                            error={errors.name?.message}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">{t.contact.form.email.label}</label>
                                        <Input
                                            {...register('email')}
                                            type="email"
                                            placeholder={t.contact.form.email.placeholder}
                                            error={errors.email?.message}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">{t.contact.form.phone.label}</label>
                                        <Input
                                            {...register('phone')}
                                            type="tel"
                                            placeholder={t.contact.form.phone.placeholder}
                                            error={errors.phone?.message}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">{t.contact.form.service.label}</label>
                                        <select
                                            {...register('service')}
                                            className="flex h-12 w-full rounded-lg glass border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-transparent px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                        >
                                            <option value="" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">{t.contact.form.service.placeholder}</option>
                                            {serviceOptions.map((service) => (
                                                <option key={service} value={service} className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.service && (
                                            <p className="mt-1 text-sm text-red-400">{errors.service.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">{t.contact.form.message.label}</label>
                                        <Textarea
                                            {...register('message')}
                                            placeholder={t.contact.form.message.placeholder}
                                            error={errors.message?.message}
                                            rows={4}
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
                                        {isLoading ? t.contact.form.sending : t.contact.form.submit}
                                        {!isLoading && <Send className="w-5 h-5 ml-2 rtl:rotate-180" />}
                                    </Button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{t.contact.form.success.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
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
