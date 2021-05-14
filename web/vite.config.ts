import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      { find: "scss", replacement: path.resolve(__dirname, "src/assets/scss") },
      {
        find: "@containers",
        replacement: path.resolve(__dirname, "src/containers"),
      },
    ],
  },
});
