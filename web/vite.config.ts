import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      {
        find: "@colors",
        replacement: path.resolve(__dirname, "src/assets/scss/_colors.scss"),
      },
      {
        find: "@containers",
        replacement: path.resolve(__dirname, "src/containers"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@images",
        replacement: path.resolve(__dirname, "src/images"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/utils/"),
      },
      {
        find: "@graphql-util",
        replacement: path.resolve(__dirname, "src/utils/graphql"),
      },
      {
        find: "@context",
        replacement: path.resolve(__dirname, "src/context"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "src/hooks"),
      },
    ],
  },
});
