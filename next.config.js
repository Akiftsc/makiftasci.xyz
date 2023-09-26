/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'assets.literal.club',
            },
            {
                protocol: 'http',
                hostname: 'books.google.com',
            },
        ],
    },
}

module.exports = nextConfig
