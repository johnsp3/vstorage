<script>
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Documentation - VStorage</title>
	<meta name="description" content="Complete technical documentation for VStorage API, SDKs, and integration guides." />
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
	<div class="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
		<!-- Header -->
		<div class="text-center mb-12 sm:mb-16">
			<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
				Documentation
			</h1>
			<p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Complete technical documentation for integrating VStorage into your applications and workflows.
			</p>
		</div>

		<!-- Quick Start -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-12">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Quick Start</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
						<span class="text-white font-bold text-lg">1</span>
					</div>
					<h3 class="font-semibold text-gray-900 mb-2">Get API Key</h3>
					<p class="text-sm text-gray-600">Sign up and generate your API key from the dashboard</p>
				</div>
				<div class="text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
						<span class="text-white font-bold text-lg">2</span>
					</div>
					<h3 class="font-semibold text-gray-900 mb-2">Install SDK</h3>
					<p class="text-sm text-gray-600">Choose your preferred SDK or use our REST API</p>
				</div>
				<div class="text-center">
					<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
						<span class="text-white font-bold text-lg">3</span>
					</div>
					<h3 class="font-semibold text-gray-900 mb-2">Start Building</h3>
					<p class="text-sm text-gray-600">Upload, encrypt, and manage your files securely</p>
				</div>
			</div>
		</div>

		<!-- Documentation Sections -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- API Reference -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<div class="flex items-center mb-6">
					<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
						</svg>
					</div>
					<h2 class="text-2xl font-bold text-gray-900">API Reference</h2>
				</div>
				<p class="text-gray-600 mb-6">Complete REST API documentation with examples and authentication details.</p>
				<div class="space-y-4">
					<div class="border-l-4 border-blue-500 pl-4">
						<h3 class="font-semibold text-gray-900">Authentication</h3>
						<p class="text-sm text-gray-600">Bearer token authentication and API key management</p>
					</div>
					<div class="border-l-4 border-green-500 pl-4">
						<h3 class="font-semibold text-gray-900">File Operations</h3>
						<p class="text-sm text-gray-600">Upload, download, delete, and manage files</p>
					</div>
					<div class="border-l-4 border-purple-500 pl-4">
						<h3 class="font-semibold text-gray-900">Sharing & Permissions</h3>
						<p class="text-sm text-gray-600">Secure file sharing and access control</p>
					</div>
				</div>
				<a href="/api" class="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-medium">
					View API Docs
					<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
					</svg>
				</a>
			</div>

			<!-- SDKs -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<div class="flex items-center mb-6">
					<div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
						</svg>
					</div>
					<h2 class="text-2xl font-bold text-gray-900">SDKs & Libraries</h2>
				</div>
				<p class="text-gray-600 mb-6">Official SDKs for popular programming languages and frameworks.</p>
				<div class="space-y-3">
					<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
						<div class="flex items-center">
							<div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
								<span class="text-blue-600 font-bold text-sm">JS</span>
							</div>
							<span class="font-medium text-gray-900">JavaScript/Node.js</span>
						</div>
						<code class="text-sm text-gray-600">npm install vstorage-sdk</code>
					</div>
					<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
						<div class="flex items-center">
							<div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
								<span class="text-green-600 font-bold text-sm">PY</span>
							</div>
							<span class="font-medium text-gray-900">Python</span>
						</div>
						<code class="text-sm text-gray-600">pip install vstorage</code>
					</div>
					<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
						<div class="flex items-center">
							<div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
								<span class="text-purple-600 font-bold text-sm">GO</span>
							</div>
							<span class="font-medium text-gray-900">Go</span>
						</div>
						<code class="text-sm text-gray-600">go get vstorage.io/sdk</code>
					</div>
				</div>
			</div>

			<!-- Integration Guides -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<div class="flex items-center mb-6">
					<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
						</svg>
					</div>
					<h2 class="text-2xl font-bold text-gray-900">Integration Guides</h2>
				</div>
				<p class="text-gray-600 mb-6">Step-by-step guides for integrating VStorage with popular platforms.</p>
				<div class="space-y-4">
					<div class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
						<h3 class="font-semibold text-gray-900 mb-2">Web Applications</h3>
						<p class="text-sm text-gray-600">Integrate file upload and management into your web app</p>
					</div>
					<div class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
						<h3 class="font-semibold text-gray-900 mb-2">Mobile Apps</h3>
						<p class="text-sm text-gray-600">Add secure file storage to iOS and Android applications</p>
					</div>
					<div class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
						<h3 class="font-semibold text-gray-900 mb-2">Backup Solutions</h3>
						<p class="text-sm text-gray-600">Automate backups with our API and webhooks</p>
					</div>
				</div>
				<a href="/integrations" class="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-medium">
					View All Integrations
					<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
					</svg>
				</a>
			</div>

			<!-- Security & Compliance -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<div class="flex items-center mb-6">
					<div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
						</svg>
					</div>
					<h2 class="text-2xl font-bold text-gray-900">Security & Compliance</h2>
				</div>
				<p class="text-gray-600 mb-6">Technical details about our security architecture and compliance certifications.</p>
				<div class="space-y-4">
					<div class="flex items-center">
						<svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span class="text-sm text-gray-700">SOC 2 Type II Certified</span>
					</div>
					<div class="flex items-center">
						<svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span class="text-sm text-gray-700">GDPR Compliant</span>
					</div>
					<div class="flex items-center">
						<svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span class="text-sm text-gray-700">HIPAA Ready</span>
					</div>
					<div class="flex items-center">
						<svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span class="text-sm text-gray-700">Swiss Data Sovereignty</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Code Example -->
		<div class="bg-gray-900 rounded-2xl p-8 mt-12">
			<h2 class="text-2xl font-bold text-white mb-6">Quick Example</h2>
			<div class="bg-gray-800 rounded-lg p-6 overflow-x-auto">
				<pre class="text-green-400 text-sm"><code>{`// JavaScript SDK Example
import VStorage from 'vstorage-sdk';

const client = new VStorage({
  apiKey: 'your-api-key',
  endpoint: 'https://api.vstorage.ch'
});

// Upload a file
const file = await client.upload({
  file: document.getElementById('fileInput').files[0],
  encryption: 'end-to-end',
  metadata: {
    name: 'document.pdf',
    tags: ['work', 'important']
  }
});

// Share the file
const share = await client.share({
  fileId: file.id,
  permissions: ['read'],
  expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
});

console.log('Share URL:', share.url);`}</code></pre>
			</div>
		</div>

		<!-- Support -->
		<div class="text-center mt-12">
			<div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
				<h2 class="text-2xl sm:text-3xl font-bold mb-4">Need Developer Support?</h2>
				<p class="text-blue-100 mb-6 max-w-2xl mx-auto">
					Our developer team is here to help you integrate VStorage successfully.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="mailto:developers@vstorage.ch" class="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
						Email Developers
					</a>
					<a href="/help" class="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
						Visit Help Center
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
