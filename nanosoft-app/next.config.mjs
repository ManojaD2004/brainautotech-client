/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
//   exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       "/": { page: "/" },
//       "/about": { page: "/about" },
//       "/algo": { page: "/algo" },
//       "/algo-services": { page: "/algo-services" },
//       "/api-bridge": { page: "/api-bridge" },
//       "/auto": { page: "/auto" },
//       "/contact": { page: "/contact" },
//       "/disclaimer": { page: "/disclaimer" },
//       "/it-services": { page: "/it-services" },
//       "/payment": { page: "/payment" },
//       "/pricing": { page: "/pricing" },
//       "/privacy": { page: "/privacy" },
//       "/refund": { page: "/refund" },
//       "/strategy": { page: "/strategy" },
//       "/terms": { page: "/terms" },
//     };
//   },
};

export default nextConfig;
