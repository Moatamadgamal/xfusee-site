'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot as BotIcon, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const initialMessages: Message[] = [
    {
        id: '1',
        text: "👋 Hi! I'm XFUSE AI Assistant. I'm here to help you explore our services and answer your questions. How can I assist you today?",
        sender: 'bot',
        timestamp: new Date(),
    },
];

const quickReplies = [
    'Tell me about AI Solutions',
    'Request a quote',
    'Book a call',
    'View pricing',
];

const botResponses: Record<string, string> = {
    'tell me about ai solutions': 'Our AI Solutions include intelligent chatbots, automation systems, smart dashboards, and business intelligence tools. We leverage cutting-edge AI to transform your business operations. Would you like to schedule a consultation to discuss your specific needs?',
    'request a quote': "I'd be happy to help you get a quote! Let me connect you with our team who can provide a detailed estimate based on your requirements. Please share your email or click 'Talk to Human' below.",
    'book a call': 'Great! To book a call with our team, please use the contact form on this page or click the "Talk to Human" button below, and we\'ll schedule a time that works best for you.',
    'view pricing': 'Our pricing is customized based on project scope and requirements. Each business is unique, so we provide tailored quotes. Would you like to share your project details so we can give you an accurate estimate?',
    'default': "That's an interesting question! While I can provide general information about XFUSE services, for detailed answers I recommend talking to our team directly. Click 'Talk to Human' below to connect with a specialist.",
};

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getBotResponse = (userMessage: string): string => {
        const lowerMessage = userMessage.toLowerCase();

        for (const [key, response] of Object.entries(botResponses)) {
            if (lowerMessage.includes(key)) {
                return response;
            }
        }

        return botResponses.default;
    };

    const sendMessage = (text: string) => {
        if (!text.trim()) return;

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text: text.trim(),
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate bot thinking time
        setTimeout(() => {
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse(text),
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    const handleQuickReply = (reply: string) => {
        sendMessage(reply);
    };

    const handleTalkToHuman = () => {
        window.open('https://wa.me/201508557715', '_blank');
    };

    return (
        <>
            {/* Chat widget button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0, y: 0 }}
                        animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 0.3 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500 text-white shadow-glow-lg flex items-center justify-center group hover:shadow-glow-lg transition-all"
                    >
                        <MessageCircle className="w-7 h-7" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed bottom-6 right-4 sm:right-6 z-[9999] w-[calc(100vw-2rem)] sm:w-[380px] h-[600px] max-h-[80vh] glass rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-500 to-cyan-500 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <BotIcon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">XFUSE AI</h3>
                                    <p className="text-xs text-white/80">Always here to help</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user'
                                            ? 'bg-gradient-accent'
                                            : 'bg-gradient-primary'
                                            }`}>
                                            {message.sender === 'user' ? (
                                                <User className="w-4 h-4 text-white" />
                                            ) : (
                                                <BotIcon className="w-4 h-4 text-white" />
                                            )}
                                        </div>
                                        <div className={`rounded-2xl p-3 ${message.sender === 'user'
                                            ? 'bg-gradient-accent text-white'
                                            : 'glass border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100'
                                            }`}>
                                            <p className="text-sm">{message.text}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex gap-2"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                                        <BotIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="glass border border-white/10 rounded-2xl p-3">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" />
                                            <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                                            <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick replies */}
                        {messages.length <= 2 && (
                            <div className="px-4 pb-2 flex flex-wrap gap-2">
                                {quickReplies.map((reply) => (
                                    <button
                                        key={reply}
                                        onClick={() => handleQuickReply(reply)}
                                        className="text-xs px-3 py-1.5 rounded-full glass border border-primary-500/30 text-gray-800 dark:text-gray-200 hover:bg-primary-500/10 transition-colors"
                                    >
                                        {reply}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Talk to human button */}
                        <div className="px-4 pb-2">
                            <button
                                onClick={handleTalkToHuman}
                                className="w-full py-2 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/50 text-orange-600 dark:text-orange-400 text-sm font-semibold hover:bg-orange-500/20 transition-colors flex items-center justify-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                Talk to Human
                            </button>
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    sendMessage(inputValue);
                                }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 rounded-lg glass border border-gray-200 dark:border-white/10 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-transparent"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow transition-all"
                                >
                                    <Send className="w-4 h-4 text-white" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
