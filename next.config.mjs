// /** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: '/api/v1/:path*',
                destination: process.env.NEXT_PUBLIC_API_URL_CSM + '/:path*',
            },
        ]
    },

};

export default nextConfig;
