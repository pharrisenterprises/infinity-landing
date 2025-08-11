/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Allow your marketing site to frame the avatar project and vice versa
          // (we're only embedding your avatar project into this site).
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://*.vercel.app https://*.infinitysales.ai;"
          }
        ]
      }
    ];
  }
};
export default nextConfig;
