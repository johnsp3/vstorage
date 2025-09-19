import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit()
	],
	server: {
		port: 3000,
		host: true,
		fs: {
			allow: ['..']
		}
	},
	optimizeDeps: {
		exclude: ['vstorage-wasm'],
		include: ['@sveltejs/kit']
	},
	build: {
		target: 'esnext',
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		},
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['svelte']
				}
			}
		},
		chunkSizeWarningLimit: 1000
	},
	preview: {
		port: 3000,
		host: true
	}
});
