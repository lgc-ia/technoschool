/** @type {import('next').NextConfig} */
const repoName = 'LGC-techSchool';
const isProd = process.env.NODE_ENV === 'production';

// Optional env-based configuration to avoid impacting root-domain deployments.
// - Set NEXT_PUBLIC_BASE_PATH or BASE_PATH to an explicit subpath (e.g. "/LGC-techSchool").
// - Or set GITHUB_PAGES=true to auto-use "/LGC-techSchool" in production.
const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH;
const computedBasePath = explicitBasePath ?? (isProd && process.env.GITHUB_PAGES === 'true' ? `/${repoName}` : '');

const nextConfig = {
  reactStrictMode: true,
  // Ensure assets and routes work when hosted under a subpath
  basePath: computedBasePath || undefined,
  assetPrefix: computedBasePath || undefined,
  // Use unoptimized images when serving under a subpath/static host (e.g., GitHub Pages)
  images: {
    unoptimized: Boolean(computedBasePath),
  },
};

export default nextConfig;
