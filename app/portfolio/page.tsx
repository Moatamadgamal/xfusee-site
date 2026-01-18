import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PortfolioPage } from '@/components/sections/PortfolioPage';
import { ChatBot } from '@/components/chatbot/ChatBot';

export default function Portfolio() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <PortfolioPage />
      <Footer />
      <ChatBot />
    </main>
  );
}
