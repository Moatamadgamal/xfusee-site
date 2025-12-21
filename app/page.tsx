import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { AboutXfuse } from "@/components/sections/AboutXfuse";
import { WhyXfuse } from "@/components/sections/WhyXfuse";
import { AISolutions } from "@/components/sections/AISolutions";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { ChatBot } from "@/components/chatbot/ChatBot";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <Header />

            <Hero />

            <ServicesCarousel />

            <AboutXfuse />

            <WhyXfuse />

            <AISolutions />

            <Process />

            <Portfolio />

            <Contact />

            <Footer />

            <ChatBot />
        </main>
    );
}
