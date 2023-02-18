import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			// '@': path.resolve(__dirname, 'src'),
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
});