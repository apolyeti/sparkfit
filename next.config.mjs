/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com'
            },
            {
                protocol: "https",
                hostname: "d1kqmt6gl9p8lg.cloudfront.net"
            }
        ]
    }
};

export default nextConfig;
