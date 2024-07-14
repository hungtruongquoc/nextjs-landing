import withSitemap from 'next-sitemap';

const sitemapConfig = {
    siteUrl: 'https://your-portfolio.com',
    generateRobotsTxt: true,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true, // This makes the redirect permanent (HTTP status 308)
            },
        ];
    },
};

export default withSitemap(sitemapConfig)(nextConfig);
