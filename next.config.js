/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.gifer.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
