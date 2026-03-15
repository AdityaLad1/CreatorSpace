/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // GitHub profile pics
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google profile pics
      },
      {
        protocol: "https",
        hostname: "**", // Allow any other URLs users paste in dashboard
      },
    ],
  },
};

export default nextConfig;