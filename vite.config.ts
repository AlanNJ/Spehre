import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
	plugins: [reactRefresh()],

	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
		alias: {
			// Add any additional aliases if needed
		},
	},
});
