# XFUSE Software House Website

A modern, premium website built with Next.js 14, featuring stunning animations, bilingual support, and AI-powered interactions.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Stunning Design**: Glassmorphism, gradient effects, smooth animations
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Bilingual Support**: English and Arabic with RTL support
- **AI Chatbot**: Smart assistant with human handoff capability
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Premium Animations**: Framer Motion for buttery-smooth interactions
- **SEO Optimized**: Proper meta tags, semantic HTML, fast performance

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Theme**: next-themes

## 🛠️ Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The development server includes:
- Hot reload
- Fast refresh
- TypeScript checking
- Tailwind JIT compilation

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the XFUSE brand colors and gradients.

### Content

All content is currently hardcoded in component files for fast launch. To update:

1. **Hero Section**: Edit `components/sections/Hero.tsx`
2. **Services**: Edit `components/sections/Services.tsx`
3. **Contact Info**: Edit `components/layout/Footer.tsx`

### Adding CMS (Future)

The project is structured to easily integrate with:
- Sanity
- Contentful
- Strapi
- Or any headless CMS

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Bilingual Support

Use the language toggle in the header to switch between English (EN) and Arabic (AR). RTL layout is automatically applied for Arabic.

## 🤖 AI Chatbot

The chatbot provides intelligent responses and seamlessly hands off to human support when needed. Responses are currently simulated - connect your AI backend via the ChatBot component.

## 📊 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal bundle size
- Fast paint times

## 🔧 Future Enhancements

- [ ] CMS integration for easy content management
- [ ] Backend API for forms and chatbot
- [ ] Analytics integration
- [ ] Multi-language expansion
- [ ] Blog section
- [ ] Portfolio case studies

## 📄 License

© 2025 XFUSE. All rights reserved.

## 🤝 Support

For questions or support, contact us through the website contact form or reach out to [info@xfuse.com](mailto:info@xfuse.com).

---

**Built with excellence by XFUSE** 🚀
