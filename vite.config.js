import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import { ViteSSG } from "vite-ssg";

import svgLoader from "vite-svg-loader";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 讀取對應 mode 的 .env 檔
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_PATH_URL,
    plugins: [vue(), svgLoader()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
