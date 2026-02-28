const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.medlockrealty.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.medlockrealty.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
