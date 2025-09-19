<script lang="ts">
	import { onMount } from 'svelte';
	import init, { VStorage } from '../wasm/pkg/vstorage_wasm.js';

	interface VStorageInstance {
		get_used(): number;
		write(offset: number, data: Uint8Array): void;
		read(offset: number, length: number): Uint8Array;
		clear(): void;
		optimize(): number;
	}

	let storage: VStorageInstance | null = null;
	let capacity = 1024;
	let inputData = '';
	let offset = 0;
	let readLength = 10;
	let result = '';
	let used = 0;
	let isLoaded = false;
	let error = '';

	onMount(async () => {
		try {
			await init();
			storage = new VStorage(capacity);
			isLoaded = true;
			updateStats();
		} catch (err: unknown) {
			const errorMessage = err instanceof Error ? err.message : 'Unknown error';
			error = `Failed to load WASM: ${errorMessage}`;
			console.error('WASM loading error:', err);
		}
	});

	function updateStats(): void {
		if (storage) {
			used = storage.get_used();
		}
	}

	function writeData(): void {
		if (!storage) return;
		
		try {
			const data = new TextEncoder().encode(inputData);
			storage.write(offset, data);
			result = `Successfully wrote ${data.length} bytes at offset ${offset}`;
			updateStats();
		} catch (err: unknown) {
			result = `Error: ${err}`;
		}
	}

	function readData(): void {
		if (!storage) return;
		
		try {
			const data = storage.read(offset, readLength);
			const text = new TextDecoder().decode(data);
			result = `Read data: "${text}" (${data.length} bytes)`;
		} catch (err: unknown) {
			result = `Error: ${err}`;
		}
	}

	function clearStorage(): void {
		if (!storage) return;
		
		storage.clear();
		result = 'Storage cleared';
		updateStats();
	}

	function optimizeStorage(): void {
		if (!storage) return;
		
		const freed = storage.optimize();
		result = `Storage optimized, freed ${freed} bytes`;
		updateStats();
	}
</script>

<section class="py-16 bg-gradient-to-b from-gray-50 to-white">
	<div class="max-w-4xl mx-auto px-6">
		<div class="text-center mb-12">
			<h2 class="text-4xl font-bold text-gray-900 mb-4">
				WebAssembly Storage Demo
			</h2>
			<p class="text-xl text-gray-600">
				Experience high-performance storage operations powered by Rust WebAssembly
			</p>
		</div>

		{#if !isLoaded}
			<div class="text-center py-12">
				{#if error}
					<div class="bg-red-50 border border-red-200 rounded-lg p-6">
						<div class="text-red-800 font-semibold mb-2">WASM Loading Error</div>
						<div class="text-red-600 text-sm">{error}</div>
					</div>
				{:else}
					<div class="flex items-center justify-center space-x-3">
						<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
						<span class="text-gray-600">Loading WebAssembly module...</span>
					</div>
				{/if}
			</div>
		{:else}
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
				<!-- Storage Stats -->
				<div class="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200">
					<h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Storage Statistics</h3>
					
					<div class="space-y-3 lg:space-y-4">
						<div class="flex justify-between items-center p-3 lg:p-4 bg-gray-50 rounded-lg">
							<span class="font-medium text-gray-700 text-sm lg:text-base">Total Capacity</span>
							<span class="font-bold text-blue-600 text-sm lg:text-base">{capacity} bytes</span>
						</div>
						
						<div class="flex justify-between items-center p-3 lg:p-4 bg-gray-50 rounded-lg">
							<span class="font-medium text-gray-700 text-sm lg:text-base">Used Space</span>
							<span class="font-bold text-green-600 text-sm lg:text-base">{used} bytes</span>
						</div>
						
						<div class="flex justify-between items-center p-3 lg:p-4 bg-gray-50 rounded-lg">
							<span class="font-medium text-gray-700 text-sm lg:text-base">Available</span>
							<span class="font-bold text-purple-600 text-sm lg:text-base">{capacity - used} bytes</span>
						</div>
						
						<div class="w-full bg-gray-200 rounded-full h-2 lg:h-3">
							<div 
								class="bg-gradient-to-r from-blue-500 to-purple-600 h-2 lg:h-3 rounded-full transition-all duration-300"
								style="width: {(used / capacity) * 100}%"
							></div>
						</div>
					</div>
				</div>

				<!-- Operations Panel -->
				<div class="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200">
					<h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Storage Operations</h3>
					
					<div class="space-y-4 lg:space-y-6">
						<!-- Write Operation -->
						<div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
							<label for="input-data" class="block text-sm font-medium text-gray-700 mb-3">Write Data</label>
							<div class="space-y-3">
								<input 
									id="input-data"
									type="text" 
									bind:value={inputData}
									placeholder="Enter data to store..."
									class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
								<div class="grid grid-cols-2 gap-3">
									<input 
										id="write-offset"
										type="number" 
										bind:value={offset}
										placeholder="Offset"
										class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
									<button 
										on:click={writeData}
										class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
									>
										Write
									</button>
								</div>
							</div>
						</div>

						<!-- Read Operation -->
						<div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
							<label for="read-offset" class="block text-sm font-medium text-gray-700 mb-3">Read Data</label>
							<div class="space-y-3">
								<div class="grid grid-cols-2 gap-3">
									<input 
										id="read-offset"
										type="number" 
										bind:value={offset}
										placeholder="Offset"
										class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
									<input 
										id="read-length"
										type="number" 
										bind:value={readLength}
										placeholder="Length"
										class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
								</div>
								<button 
									on:click={readData}
									class="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
								>
									Read
								</button>
							</div>
						</div>

						<!-- Utility Operations -->
						<div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
							<label class="block text-sm font-medium text-gray-700 mb-3">Utility Operations</label>
							<div class="grid grid-cols-2 gap-3">
								<button 
									on:click={clearStorage}
									class="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-center"
								>
									Clear
								</button>
								<button 
									on:click={optimizeStorage}
									class="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-center"
								>
									Optimize
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Results -->
			{#if result}
				<div class="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-200">
					<h4 class="text-lg font-semibold text-gray-900 mb-3">Operation Result</h4>
					<div class="font-mono text-sm text-gray-700 bg-white rounded-lg p-4 border">
						{result}
					</div>
				</div>
			{/if}
		{/if}
	</div>
</section>
