/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "pixydrops.com",
        },
      ],
    },
  };
  
  export default nextConfig;
