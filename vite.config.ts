import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
const isProduction = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), "src/assets/icon")],
			symbolId: "icon-[dir]-[name]",
		}),
	],
	base: isProduction ? "./" : "/footballApp/",
	build: {
		assetsInlineLimit: 0,
	},
});
