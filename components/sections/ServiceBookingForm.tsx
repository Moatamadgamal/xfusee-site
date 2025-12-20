'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';

interface ServiceBookingFormProps {
    serviceTitle: string;
    onClose: () => void;
}

export function ServiceBookingForm({ serviceTitle, onClose }: ServiceBookingFormProps) {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        details: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct WhatsApp message
        const message = `Hello XFUSE Team,\n\nI'm interested in the *${serviceTitle}* service.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Project Details:* ${formData.details}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/201508557715?text=${encodedMessage}`, '_blank');
        onClose();
    };

    const handleDirectChat = () => {
        const message = `Hello XFUSE Team, I'm interested in the *${serviceTitle}* service.`;
        window.open(`https://wa.me/201508557715?text=${encodeURIComponent(message)}`, '_blank');
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t.services.bookingForm.name}
                </label>
                <Input
                    required
                    placeholder={t.services.bookingForm.placeholder.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t.services.bookingForm.email}
                    </label>
                    <Input
                        type="email"
                        required
                        placeholder={t.services.bookingForm.placeholder.email}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t.services.bookingForm.phone}
                    </label>
                    <Input
                        type="tel"
                        required
                        placeholder={t.services.bookingForm.placeholder.phone}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t.services.bookingForm.details}
                </label>
                <Textarea
                    required
                    placeholder={t.services.bookingForm.placeholder.details}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="min-h-[120px]"
                />
            </div>

            <div className="flex flex-col gap-3 pt-2">
                <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    {t.services.bookingForm.submit}
                </Button>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 uppercase tracking-wider">OR</span>
                    </div>
                </div>

                <Button
                    type="button"
                    variant="secondary"
                    className="w-full"
                    onClick={handleDirectChat}
                >
                    <MessageCircle className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    {t.services.bookingForm.direct}
                </Button>
            </div>
        </form>
    );
}
