import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    allowedDevOrigins: ['192.168.31.203'],
    images: {
        remotePatterns: [
            {
                hostname: 'avatars.githubusercontent.com',
                protocol: 'https'
            },
            {
                hostname: 'images.unsplash.com',
                protocol: 'https'
            }
        ]
    }
}

export default nextConfig
