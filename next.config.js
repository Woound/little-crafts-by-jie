/** @type {import('next').NextConfig} */

// GitHub Pages serves a *project* site under /<repo-name>/.
// Set `repo` to your repository name. If you use a custom domain
// (e.g. littlecraftsbyjie.com) OR a <username>.github.io repo, set repo = ''.
const repo = "little-crafts-by-jie";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd && repo ? `/${repo}` : "";

const nextConfig = {
  output: "export", // static HTML export — required for GitHub Pages
  trailingSlash: true, // makes /about/ resolve to /about/index.html on Pages
  images: { unoptimized: true }, // next/image can't run the optimizer on a static host
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  // Exposed to client code so raw CSS background-image URLs can be prefixed too.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

module.exports = nextConfig;
