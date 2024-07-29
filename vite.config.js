import { defineConfig } from "vite";
import { codecovVitePlugin } from "@codecov/vite-plugin";

export default defineConfig({
  plugins: [
    // Put the Codecov vite plugin after all other plugins
    codecovVitePlugin({
      enableBundleAnalysis:
        process.env.CODECOV_TOKEN !== undefined &&
        process.env.CODECOV_URL !== undefined,
      bundleName: "bundle-analysis",
      uploadToken: process.env.CODECOV_TOKEN,
      apiUrl: process.env.CODECOV_URL,
    }),
  ],
});
