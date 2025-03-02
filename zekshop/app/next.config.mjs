import dotenv from "dotenv";
import webpack from "webpack";

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  ignoreDuringBuilds: true,
  experimental: {
    outputFileTracingIncludes: {
      // "/api/claim-airdrop": [
      //   "./node_modules/@aztec/bb.js/dest/node/barretenberg_wasm/**/*",
      //   "./node_modules/@aztec/bb.js/dest/node/barretenberg_wasm/barretenberg_wasm_thread/factory/node/thread.worker.js",
      // ],
      // "/api/claim-airdrop/": [
      //   "./node_modules/@aztec/bb.js/dest/node/barretenberg_wasm/**/*",
      //   "./node_modules/@aztec/bb.js/dest/node/barretenberg_wasm/barretenberg_wasm_thread/factory/node/thread.worker.js",
      // ],
      serverComponentsExternalPackages: ["sequelize", "pino", "pino-pretty"],
    },
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "developers.google.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        ".next/server/app/lib/worker.js",
        ".next/server/app/lib/682.js",
        "commonjs thread-stream",
      ];
    }
    config.experiments = {
      asyncWebAssembly: true,
      syncWebAssembly: true,
      layers: true,
      topLevelAwait: true,
      ...config.experiments,
    };
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, "");
      })
    );
    return config;
  },
  async headers() {
    // These headers are necessary to enabled SharedArrayBuffer
    // which is needed for multi-threaded proof generation
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          // {
          //   key: "Cross-Origin-Opener-Policy",
          //   value: "same-origin",
          // },
        ],
      },
    ];
  },
};

export default nextConfig;
