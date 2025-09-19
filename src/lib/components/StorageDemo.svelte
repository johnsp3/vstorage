<script>
	import { onMount } from 'svelte';
	import init, { VStorage } from '../wasm/pkg/vstorage_wasm.js';

	let storage = null;
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
		} catch (err) {
			error = `Failed to load WASM: ${err.message}`;
			console.error('WASM loading error:', err);
		}
	});

	function updateStats() {
		if (storage) {
			used = storage.get_used();
		}
	}

	function writeData() {
		if (!storage) return;
		
		try {
			const data = new TextEncoder().encode(inputData);
			storage.write(offset, data);
			result = `Successfully wrote ${data.length} bytes at offset ${offset}`;
			updateStats();
		} catch (err) {
			result = `Error: ${err}`;
		}
	}

	function readData() {
		if (!storage) return;
		
		try {
			const data = storage.read(offset, readLength);
			const text = new TextDecoder().decode(data);
			result = `Read data: "${text}" (${data.length} bytes)`;
		} catch (err) {
			result = `Error: ${err}`;
		}
	}

	function clearStorage() {
		if (!storage) return;
		
		storage.clear();
		result = 'Storage cleared';
		updateStats();
	}

	function optimizeStorage() {
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
			<div class="grid lg:grid-cols-2 gap-8">
				<!-- Storage Stats -->
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
					<h3 class="text-2xl font-bold text-gray-900 mb-6">Storage Statistics</h3>
					
					<div class="space-y-4">
						<div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
							<span class="font-medium text-gray-700">Total Capacity</span>
							<span class="font-bold text-blue-600">{capacity} bytes</span>
						</div>
						
						<div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
							<span class="font-medium text-gray-700">Used Space</span>
							<span class="font-bold text-green-600">{used} bytes</span>
						</div>
						
						<div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
							<span class="font-medium text-gray-700">Available</span>
							<span class="font-bold text-purple-600">{capacity - used} bytes</span>
						</div>
						
						<div class="w-full bg-gray-200 rounded-full h-3">
							<div 
								class="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300"
								style="width: {(used / capacity) * 100}%"
							></div>
						</div>
					</div>
				</div>

				<!-- Operations Panel -->
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
					<h3 class="text-2xl font-bold text-gray-900 mb-6">Storage Operations</h3>
					
					<div class="space-y-6">
						<!-- Write Operation -->
						<div>
							<label class="block text-sm font-medium text-gray-700 mb-2">Write Data</label>
							<div class="space-y-3">
								<input 
									type="text" 
									bind:value={inputData}
									placeholder="Enter data to store..."
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
								<div class="flex space-x-3">
									<input 
										type="number" 
										bind:value={offset}
										placeholder="Offset"
										class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
									/>
									<button 
										on:click={writeData}
										class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
									>
										Write
									</button>
								</div>
							</div>
						</div>

						<!-- Read Operation -->
						<div>
							<label class="block text-sm font-medium text-gray-700 mb-2">Read Data</label>
							<div class="flex space-x-3">
								<input 
									type="number" 
									bind:value={offset}
									placeholder="Offset"
									class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
								/>
								<input 
									type="number" 
									bind:value={readLength}
									placeholder="Length"
									class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
								/>
								<button 
									on:click={readData}
									class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
								>
									Read
								</button>
							</div>
						</div>

						<!-- Utility Operations -->
						<div class="flex space-x-3">
							<button 
								on:click={clearStorage}
								class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
							>
								Clear Storage
							</button>
							<button 
								on:click={optimizeStorage}
								class="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
							>
								Optimize
							</button>
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
