<script>
	import { onMount } from 'svelte';
	
	let mounted = false;
	let lastUpdated = new Date();
	let email = '';
	let showSuccessMessage = false;
	let showErrorMessage = false;
	
	onMount(() => {
		mounted = true;
		// Update timestamp every minute
		const interval = setInterval(() => {
			lastUpdated = new Date();
		}, 60000);
		
		return () => clearInterval(interval);
	});
	
	function handleSubscribe() {
		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		
		if (!email || !emailRegex.test(email)) {
			showErrorMessage = true;
			setTimeout(() => {
				showErrorMessage = false;
			}, 3000);
			return;
		}
		
		// Show success message
		showSuccessMessage = true;
		email = ''; // Clear the input
		
		// Hide success message after 4 seconds
		setTimeout(() => {
			showSuccessMessage = false;
		}, 4000);
	}
</script>

<svelte:head>
	<title>System Status - VStorage</title>
	<meta name="description" content="Real-time status of VStorage services, uptime monitoring, and incident reports." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/40">
	<!-- Navigation -->
	<nav class="px-4 sm:px-6 py-4 sm:py-6">
		<div class="max-w-7xl mx-auto flex items-center justify-between">
			<a href="/" class="flex items-center space-x-2 sm:space-x-3">
				<div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
					<svg class="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
						<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
					</svg>
				</div>
				<span class="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">VStorage</span>
			</a>
			<a href="/" class="text-gray-700 hover:text-gray-900 transition-colors font-medium">
				← Back to Home
			</a>
		</div>
	</nav>

	<!-- Main Content -->
	<div class="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
		<!-- Header -->
		<div class="text-center mb-12 sm:mb-16">
			<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
				System Status
			</h1>
			<p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Real-time monitoring of VStorage services and infrastructure.
			</p>
			<div class="mt-4 text-sm text-gray-500">
				Last updated: {lastUpdated.toLocaleString()}
			</div>
		</div>

		<!-- Overall Status -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<div class="flex items-center justify-between mb-6">
				<h2 class="text-2xl font-bold text-gray-900">Overall System Status</h2>
				<div class="flex items-center">
					<div class="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
					<span class="text-green-600 font-semibold">All Systems Operational</span>
				</div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="text-center">
					<div class="text-3xl font-bold text-green-600 mb-2">99.9%</div>
					<div class="text-sm text-gray-600">Uptime (30 days)</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-blue-600 mb-2">&lt;100ms</div>
					<div class="text-sm text-gray-600">Average Response Time</div>
				</div>
				<div class="text-center">
					<div class="text-3xl font-bold text-purple-600 mb-2">0</div>
					<div class="text-sm text-gray-600">Active Incidents</div>
				</div>
			</div>
		</div>

		<!-- Service Status -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Service Status</h2>
			<div class="space-y-4">
				<!-- API Service -->
				<div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
					<div class="flex items-center">
						<div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
							<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">API Service</h3>
							<p class="text-sm text-gray-600">REST API and authentication</p>
						</div>
					</div>
					<div class="flex items-center">
						<div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
						<span class="text-green-600 font-medium">Operational</span>
					</div>
				</div>

				<!-- File Storage -->
				<div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
					<div class="flex items-center">
						<div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
							<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">File Storage</h3>
							<p class="text-sm text-gray-600">Upload, download, and file management</p>
						</div>
					</div>
					<div class="flex items-center">
						<div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
						<span class="text-green-600 font-medium">Operational</span>
					</div>
				</div>

				<!-- Encryption Service -->
				<div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
					<div class="flex items-center">
						<div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
							<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Encryption Service</h3>
							<p class="text-sm text-gray-600">End-to-end encryption and key management</p>
						</div>
					</div>
					<div class="flex items-center">
						<div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
						<span class="text-green-600 font-medium">Operational</span>
					</div>
				</div>

				<!-- Sharing Service -->
				<div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
					<div class="flex items-center">
						<div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
							<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Sharing Service</h3>
							<p class="text-sm text-gray-600">Secure file sharing and permissions</p>
						</div>
					</div>
					<div class="flex items-center">
						<div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
						<span class="text-green-600 font-medium">Operational</span>
					</div>
				</div>

				<!-- Web Interface -->
				<div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
					<div class="flex items-center">
						<div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
							<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Web Interface</h3>
							<p class="text-sm text-gray-600">Dashboard and user interface</p>
						</div>
					</div>
					<div class="flex items-center">
						<div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
						<span class="text-green-600 font-medium">Operational</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Performance Metrics -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<h3 class="font-semibold text-gray-900 mb-4">Response Times (24h)</h3>
					<div class="space-y-3">
						<div class="flex justify-between items-center">
							<span class="text-sm text-gray-600">API Endpoints</span>
							<span class="text-sm font-medium text-green-600">85ms avg</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-sm text-gray-600">File Upload</span>
							<span class="text-sm font-medium text-green-600">120ms avg</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-sm text-gray-600">File Download</span>
							<span class="text-sm font-medium text-green-600">95ms avg</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-sm text-gray-600">Web Interface</span>
							<span class="text-sm font-medium text-green-600">45ms avg</span>
						</div>
					</div>
				</div>
				<div>
					<h3 class="font-semibold text-gray-900 mb-4">Availability (30 days)</h3>
					<div class="space-y-3">
						<div class="flex justify-between items-center">
							<span class="text-sm text-gray-600">API Service</span>
							<span class="text-sm font-medium text-green-600">99.95%</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-sm text-gray-600">File Storage</span>
							<span class="text-sm font-medium text-green-600">99.98%</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-sm text-gray-600">Encryption</span>
							<span class="text-sm font-medium text-green-600">99.99%</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-sm text-gray-600">Web Interface</span>
							<span class="text-sm font-medium text-green-600">99.92%</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Recent Incidents -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
			<div class="text-center py-8">
				<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
					<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">No Recent Incidents</h3>
				<p class="text-gray-600">All systems have been running smoothly with no reported issues in the past 30 days.</p>
			</div>
		</div>

		<!-- Subscribe to Updates -->
		<div class="text-center mt-12">
			<div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
				<h2 class="text-2xl sm:text-3xl font-bold mb-4">Stay Informed</h2>
				<p class="text-blue-100 mb-6 max-w-2xl mx-auto">
					Subscribe to status updates and get notified immediately when there are any service disruptions.
				</p>
				<div class="max-w-md mx-auto">
					<div class="flex">
						<input 
							type="email" 
							placeholder="Enter your email" 
							bind:value={email}
							class="flex-1 px-4 py-3 rounded-l-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
						>
						<button 
							on:click={handleSubscribe}
							class="bg-white text-blue-600 px-6 py-3 rounded-r-xl font-semibold hover:bg-gray-100 transition-colors"
						>
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Success Message -->
		{#if showSuccessMessage}
			<div class="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3 animate-pulse">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
				</svg>
				<div>
					<h3 class="font-semibold">Successfully Subscribed!</h3>
					<p class="text-sm opacity-90">You'll receive status updates via email.</p>
				</div>
			</div>
		{/if}

		<!-- Error Message -->
		{#if showErrorMessage}
			<div class="fixed top-4 right-4 z-50 bg-red-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3 animate-pulse">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
				</svg>
				<div>
					<h3 class="font-semibold">Invalid Email</h3>
					<p class="text-sm opacity-90">Please enter a valid email address.</p>
				</div>
			</div>
		{/if}
	</div>
</div>
