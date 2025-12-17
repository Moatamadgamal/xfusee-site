/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'],
        formats: ['image/avif', 'image/webp'],
    },
    // Prepare for future i18n integration
    experimental: {
        serverActions: {
            allowedOrigins: [],
        },
    },
}

module.exports = nextConfig
