import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import wasmPack from '@wasm-tool/wasm-pack-plugin';

export default defineConfig({
	plugins: [
		sveltekit(),
		wasmPack({
			crateDirectory: './src/lib/wasm',
			watchDirectories: ['./src/lib/wasm/src']
		})
	],
	server: {
		port: 3000,
		host: true
	},
	optimizeDeps: {
		exclude: ['vstorage-wasm']
	},
	build: {
		target: 'esnext'
	}
});
