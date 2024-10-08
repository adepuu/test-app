/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co"
            }
        ]
    },
    logging: {
        fetches: {
            fullUrl: true,
        }
    }
};

export default nextConfig;
