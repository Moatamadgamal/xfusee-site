import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "XFUSE - Modern Software House | Web, Mobile & AI Solutions",
    description: "Powerful, modern tech company building professional digital solutions. Specializing in web development, mobile apps, e-commerce, and AI-powered innovation.",
    keywords: ["software house", "web development", "mobile apps", "AI solutions", "e-commerce", "tech company"],
    authors: [{ name: "XFUSE" }],
    openGraph: {
        title: "XFUSE - Modern Software House",
        description: "Build the future with XFUSE. Professional web, mobile, and AI solutions for businesses ready to transform.",
        type: "website",
    },
};

import { LanguageProvider } from "@/providers/LanguageProvider";
import { FloatingContactButtons } from "@/components/layout/FloatingContactButtons";
import { ChatBot } from "@/components/chatbot/ChatBot";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={inter.className}>
                <LanguageProvider>
                    <ThemeProvider>
                        {children}
                        <FloatingContactButtons />
                        <ChatBot />
                    </ThemeProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}
