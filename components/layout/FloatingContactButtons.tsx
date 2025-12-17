'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export function FloatingContactButtons() {
    const whatsappNumber = '201508557715';
    const phoneNumber = '+201508557715';

    return (
        <div className="fixed bottom-6 left-6 z-[9999] flex flex-col gap-4">
            {/* WhatsApp Button */}
            <motion.a
                href={`https://wa.me/${whatsappNumber}?text=Hello%2C%20I%27d%20like%20to%20chat%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0, y: 0 }}
                animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
                transition={{
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.3 }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center group hover:shadow-green-500/50 transition-all"
                title="Chat on WhatsApp"
            >
                <div className="relative">
                    <MessageCircle className="w-6 h-6" />
                    {/* Whatsapp 'online' dot */}
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#25D366]" />
                </div>
            </motion.a>

            {/* Phone Button */}
            <motion.a
                href={`tel:${phoneNumber}`}
                initial={{ scale: 0, opacity: 0, y: 0 }}
                animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
                transition={{
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    scale: { duration: 0.3 }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg flex items-center justify-center group hover:shadow-blue-500/50 transition-all"
                title="Call Us"
            >
                <Phone className="w-6 h-6" />
            </motion.a>
        </div>
    );
}
