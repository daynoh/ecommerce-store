/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            // Optionally, you can add pathname and port
          },
        ],
      },
}

module.exports = nextConfig
