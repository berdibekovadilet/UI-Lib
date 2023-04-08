// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["images.unsplash.com"], // Добавьте домен, с которого загружаются ваши изображения
    },
};

module.exports = nextConfig;
