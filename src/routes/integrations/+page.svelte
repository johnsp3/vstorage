<script>
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Integrations - VStorage</title>
	<meta name="description" content="Connect VStorage with your favorite tools and platforms. Browse our extensive list of integrations." />
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
				Integrations
			</h1>
			<p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Connect VStorage with your favorite tools and platforms for seamless workflow integration.
			</p>
		</div>

		<!-- Popular Integrations -->
		<div class="mb-12">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Popular Integrations</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Slack -->
				<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
					<div class="flex items-center mb-4">
						<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M5.042 15.165a2.528 2.528 0 0 1-2.52-2.523A2.528 2.528 0 0 1 5.042 10.12h2.52v2.522a2.528 2.528 0 0 1-2.52 2.523zm0-6.341H2.522A2.528 2.528 0 0 1 0 6.302a2.528 2.528 0 0 1 2.522-2.523h2.52v2.523a2.528 2.528 0 0 1-2.52 2.523zm6.341 0a2.528 2.528 0 0 1-2.523-2.523V5.042a2.528 2.528 0 0 1 2.523-2.52h2.522A2.528 2.528 0 0 1 18.958 5.042v2.522a2.528 2.528 0 0 1-2.523 2.523zm0 6.341H8.861a2.528 2.528 0 0 1-2.523-2.523v-2.52h2.523a2.528 2.528 0 0 1 2.523 2.52v2.522a2.528 2.528 0 0 1-2.523 2.523zm6.341 0a2.528 2.528 0 0 1-2.523-2.523v-2.52h2.523a2.528 2.528 0 0 1 2.523 2.52v2.522a2.528 2.528 0 0 1-2.523 2.523zm0-6.341h-2.523a2.528 2.528 0 0 1-2.523-2.523V5.042a2.528 2.528 0 0 1 2.523-2.52h2.523A2.528 2.528 0 0 1 24 5.042v2.522a2.528 2.528 0 0 1-2.523 2.523z"/>
							</svg>
						</div>
						<h3 class="text-xl font-bold text-gray-900">Slack</h3>
					</div>
					<p class="text-gray-600 mb-4">Share files directly to Slack channels with end-to-end encryption.</p>
					<div class="flex items-center justify-between">
						<span class="text-sm text-green-600 font-medium">Available</span>
						<button class="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
							Connect
						</button>
					</div>
				</div>

				<!-- Microsoft Teams -->
				<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
					<div class="flex items-center mb-4">
						<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.5 11.5c0-1.2-.9-2.1-2.1-2.1h-1.4v-2.1c0-1.2-.9-2.1-2.1-2.1H9.1c-1.2 0-2.1.9-2.1 2.1v2.1H5.6c-1.2 0-2.1.9-2.1 2.1v8.4c0 1.2.9 2.1 2.1 2.1h1.4v2.1c0 1.2.9 2.1 2.1 2.1h5.8c1.2 0 2.1-.9 2.1-2.1v-2.1h1.4c1.2 0 2.1-.9 2.1-2.1v-8.4z"/>
							</svg>
						</div>
						<h3 class="text-xl font-bold text-gray-900">Microsoft Teams</h3>
					</div>
					<p class="text-gray-600 mb-4">Secure file sharing and collaboration within Teams.</p>
					<div class="flex items-center justify-between">
						<span class="text-sm text-green-600 font-medium">Available</span>
						<button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
							Connect
						</button>
					</div>
				</div>

				<!-- Google Workspace -->
				<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
					<div class="flex items-center mb-4">
						<div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
								<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
								<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
								<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
							</svg>
						</div>
						<h3 class="text-xl font-bold text-gray-900">Google Workspace</h3>
					</div>
					<p class="text-gray-600 mb-4">Integrate with Gmail, Drive, and Google Docs.</p>
					<div class="flex items-center justify-between">
						<span class="text-sm text-green-600 font-medium">Available</span>
						<button class="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
							Connect
						</button>
					</div>
				</div>

				<!-- Zapier -->
				<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
					<div class="flex items-center mb-4">
						<div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
							</svg>
						</div>
						<h3 class="text-xl font-bold text-gray-900">Zapier</h3>
					</div>
					<p class="text-gray-600 mb-4">Automate workflows with 5000+ connected apps.</p>
					<div class="flex items-center justify-between">
						<span class="text-sm text-green-600 font-medium">Available</span>
						<button class="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
							Connect
						</button>
					</div>
				</div>

				<!-- GitHub -->
				<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
					<div class="flex items-center mb-4">
						<div class="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
						</div>
						<h3 class="text-xl font-bold text-gray-900">GitHub</h3>
					</div>
					<p class="text-gray-600 mb-4">Secure storage for code repositories and documentation.</p>
					<div class="flex items-center justify-between">
						<span class="text-sm text-green-600 font-medium">Available</span>
						<button class="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors">
							Connect
						</button>
					</div>
				</div>

				<!-- Notion -->
				<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
					<div class="flex items-center mb-4">
						<div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
							<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.134-.794c.514-.047.747.14.747.607v.466L2.683 2.667c-.514.047-.747-.14-.747-.607v-.466c0-.326.14-.56.56-.56z"/>
							</svg>
						</div>
						<h3 class="text-xl font-bold text-gray-900">Notion</h3>
					</div>
					<p class="text-gray-600 mb-4">Embed secure files directly into your Notion pages.</p>
					<div class="flex items-center justify-between">
						<span class="text-sm text-green-600 font-medium">Available</span>
						<button class="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
							Connect
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Integration Categories -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
			<!-- Productivity -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h3 class="text-xl font-bold text-gray-900 mb-6">Productivity Tools</h3>
				<div class="space-y-4">
					<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
						<div class="flex items-center">
							<div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
								<span class="text-blue-600 font-bold text-sm">📧</span>
							</div>
							<span class="font-medium text-gray-900">Gmail</span>
						</div>
						<span class="text-sm text-green-600 font-medium">Available</span>
					</div>
					<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
						<div class="flex items-center">
							<div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
								<span class="text-green-600 font-bold text-sm">📊</span>
							</div>
							<span class="font-medium text-gray-900">Google Sheets</span>
						</div>
						<span class="text-sm text-green-600 font-medium">Available</span>
					</div>
					<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
						<div class="flex items-center">
							<div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
								<span class="text-purple-600 font-bold text-sm">📝</span>
							</div>
							<span class="font-medium text-gray-900">Google Docs</span>
						</div>
						<span class="text-sm text-green-600 font-medium">Available</span>
					</div>
					<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
						<div class="flex items-center">
							<div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
								<span class="text-orange-600 font-bold text-sm">📅</span>
							</div>
							<span class="font-medium text-gray-900">Google Calendar</span>
						</div>
						<span class="text-sm text-green-600 font-medium">Available</span>
					</div>
				</div>
			</div>

			<!-- Development -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h3 class="text-xl font-bold text-gray-900 mb-6">Development Tools</h3>
				<div class="space-y-4">
					<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
						<div class="flex items-center">
							<div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
								<span class="text-gray-600 font-bold text-sm">🔧</span>
							</div>
							<span class="font-medium text-gray-900">GitLab</span>
						</div>
						<span class="text-sm text-green-600 font-medium">Available</span>
					</div>
					<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
						<div class="flex items-center">
							<div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
								<span class="text-blue-600 font-bold text-sm">🐳</span>
							</div>
							<span class="font-medium text-gray-900">Docker Hub</span>
						</div>
						<span class="text-sm text-green-600 font-medium">Available</span>
					</div>
					<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
						<div class="flex items-center">
							<div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
								<span class="text-yellow-600 font-bold text-sm">⚡</span>
							</div>
							<span class="font-medium text-gray-900">Vercel</span>
						</div>
						<span class="text-sm text-green-600 font-medium">Available</span>
					</div>
					<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
						<div class="flex items-center">
							<div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
								<span class="text-red-600 font-bold text-sm">🔥</span>
							</div>
							<span class="font-medium text-gray-900">Netlify</span>
						</div>
						<span class="text-sm text-green-600 font-medium">Available</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Custom Integration -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-12">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Build Custom Integrations</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<h3 class="text-lg font-semibold text-gray-900 mb-4">Webhooks</h3>
					<p class="text-gray-600 mb-4">Get real-time notifications when files are uploaded, shared, or modified.</p>
					<div class="bg-gray-900 rounded-lg p-4">
						<pre class="text-green-400 text-sm"><code>{`{
  "event": "file.uploaded",
  "data": {
    "file_id": "123",
    "name": "document.pdf",
    "size": 1024000,
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`}</code></pre>
					</div>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-gray-900 mb-4">REST API</h3>
					<p class="text-gray-600 mb-4">Full REST API access for custom integrations and automation.</p>
					<div class="space-y-2">
						<div class="flex items-center">
							<svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<span class="text-sm text-gray-700">File upload/download</span>
						</div>
						<div class="flex items-center">
							<svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<span class="text-sm text-gray-700">Secure sharing</span>
						</div>
						<div class="flex items-center">
							<svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
							</svg>
							<span class="text-sm text-gray-700">Metadata management</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Request Integration -->
		<div class="text-center">
			<div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
				<h2 class="text-2xl sm:text-3xl font-bold mb-4">Need a Different Integration?</h2>
				<p class="text-blue-100 mb-6 max-w-2xl mx-auto">
					Don't see the integration you need? We're constantly adding new integrations based on user requests.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="mailto:integrations@vstorage.ch" class="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
						Request Integration
					</a>
					<a href="/docs" class="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
						Build Your Own
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
