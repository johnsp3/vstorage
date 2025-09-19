<script>
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>API Documentation - VStorage</title>
	<meta name="description" content="Complete REST API documentation for VStorage secure cloud storage platform." />
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
				API Documentation
			</h1>
			<p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Complete REST API reference for integrating VStorage into your applications.
			</p>
		</div>

		<!-- API Status Notice -->
		<div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
			<div class="flex items-center mb-4">
				<div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
					<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>
				</div>
				<h2 class="text-xl font-bold text-blue-900">API Status</h2>
			</div>
			<p class="text-blue-800 leading-relaxed">
				<strong>This is API documentation for our planned VStorage API.</strong> The API endpoints shown here represent our intended functionality and will be available when we launch our full service. Currently, this is documentation only - the actual API endpoints are not yet live.
			</p>
		</div>

		<!-- Base URL -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-4">Base URL</h2>
			<div class="bg-gray-900 rounded-lg p-4">
				<code class="text-green-400 text-lg">https://api.vstorage.ch/v1</code>
			</div>
		</div>

		<!-- Authentication -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Authentication</h2>
			<p class="text-gray-600 mb-6">All API requests require authentication using a Bearer token in the Authorization header.</p>
			
				<div class="bg-gray-900 rounded-lg p-6 mb-6">
					<pre class="text-green-400 text-sm"><code>{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.vstorage.ch/v1/files`}</code></pre>
				</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="p-4 bg-blue-50 rounded-lg">
					<h3 class="font-semibold text-blue-900 mb-2">API Key</h3>
					<p class="text-sm text-blue-700">Generate your API key from the dashboard settings.</p>
				</div>
				<div class="p-4 bg-green-50 rounded-lg">
					<h3 class="font-semibold text-green-900 mb-2">Rate Limits</h3>
					<p class="text-sm text-green-700">1000 requests per hour per API key.</p>
				</div>
			</div>
		</div>

		<!-- API Endpoints -->
		<div class="space-y-8">
			<!-- Files Endpoint -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<div class="flex items-center mb-6">
					<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-4">GET</span>
					<h2 class="text-2xl font-bold text-gray-900">/files</h2>
				</div>
				<p class="text-gray-600 mb-6">Retrieve a list of files in your account.</p>
				
				<div class="bg-gray-900 rounded-lg p-6 mb-6">
					<pre class="text-green-400 text-sm"><code>curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://api.vstorage.ch/v1/files?limit=50&offset=0"</code></pre>
				</div>

				<h3 class="text-lg font-semibold text-gray-900 mb-4">Query Parameters</h3>
				<div class="overflow-x-auto">
					<table class="w-full text-sm">
						<thead>
							<tr class="border-b border-gray-200">
								<th class="text-left py-3 px-4 font-semibold text-gray-900">Parameter</th>
								<th class="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
								<th class="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-gray-100">
								<td class="py-3 px-4 font-mono text-blue-600">limit</td>
								<td class="py-3 px-4 text-gray-600">integer</td>
								<td class="py-3 px-4 text-gray-600">Number of files to return (max 100)</td>
							</tr>
							<tr class="border-b border-gray-100">
								<td class="py-3 px-4 font-mono text-blue-600">offset</td>
								<td class="py-3 px-4 text-gray-600">integer</td>
								<td class="py-3 px-4 text-gray-600">Number of files to skip</td>
							</tr>
							<tr>
								<td class="py-3 px-4 font-mono text-blue-600">tags</td>
								<td class="py-3 px-4 text-gray-600">string</td>
								<td class="py-3 px-4 text-gray-600">Filter by tags (comma-separated)</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- Upload File -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<div class="flex items-center mb-6">
					<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">POST</span>
					<h2 class="text-2xl font-bold text-gray-900">/files/upload</h2>
				</div>
				<p class="text-gray-600 mb-6">Upload a new file to your account.</p>
				
				<div class="bg-gray-900 rounded-lg p-6 mb-6">
					<pre class="text-green-400 text-sm"><code>{`curl -X POST \\
     -H "Authorization: Bearer YOUR_API_KEY" \\
     -F "file=@document.pdf" \\
     -F "name=My Document" \\
     -F "tags=work,important" \\
     https://api.vstorage.ch/v1/files/upload`}</code></pre>
				</div>

				<h3 class="text-lg font-semibold text-gray-900 mb-4">Request Body (multipart/form-data)</h3>
				<div class="overflow-x-auto">
					<table class="w-full text-sm">
						<thead>
							<tr class="border-b border-gray-200">
								<th class="text-left py-3 px-4 font-semibold text-gray-900">Field</th>
								<th class="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
								<th class="text-left py-3 px-4 font-semibold text-gray-900">Required</th>
								<th class="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-gray-100">
								<td class="py-3 px-4 font-mono text-blue-600">file</td>
								<td class="py-3 px-4 text-gray-600">file</td>
								<td class="py-3 px-4 text-red-600">Yes</td>
								<td class="py-3 px-4 text-gray-600">The file to upload</td>
							</tr>
							<tr class="border-b border-gray-100">
								<td class="py-3 px-4 font-mono text-blue-600">name</td>
								<td class="py-3 px-4 text-gray-600">string</td>
								<td class="py-3 px-4 text-gray-600">No</td>
								<td class="py-3 px-4 text-gray-600">Custom name for the file</td>
							</tr>
							<tr>
								<td class="py-3 px-4 font-mono text-blue-600">tags</td>
								<td class="py-3 px-4 text-gray-600">string</td>
								<td class="py-3 px-4 text-gray-600">No</td>
								<td class="py-3 px-4 text-gray-600">Comma-separated tags</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- Download File -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<div class="flex items-center mb-6">
					<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-4">GET</span>
					<h2 class="text-2xl font-bold text-gray-900">/files/&#123;id&#125;/download</h2>
				</div>
				<p class="text-gray-600 mb-6">Download a file by its ID.</p>
				
				<div class="bg-gray-900 rounded-lg p-6 mb-6">
					<pre class="text-green-400 text-sm"><code>{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     "https://api.vstorage.ch/v1/files/123/download" \\
     -o downloaded_file.pdf`}</code></pre>
				</div>
			</div>

			<!-- Share File -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<div class="flex items-center mb-6">
					<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">POST</span>
					<h2 class="text-2xl font-bold text-gray-900">/files/&#123;id&#125;/share</h2>
				</div>
				<p class="text-gray-600 mb-6">Create a secure share link for a file.</p>
				
				<div class="bg-gray-900 rounded-lg p-6 mb-6">
					<pre class="text-green-400 text-sm"><code>{`curl -X POST \\
     -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     -d '{
       "permissions": ["read"],
       "expires_at": "2024-12-31T23:59:59Z",
       "password": "optional_password"
     }' \\
     https://api.vstorage.ch/v1/files/123/share`}</code></pre>
				</div>

				<h3 class="text-lg font-semibold text-gray-900 mb-4">Request Body (JSON)</h3>
				<div class="overflow-x-auto">
					<table class="w-full text-sm">
						<thead>
							<tr class="border-b border-gray-200">
								<th class="text-left py-3 px-4 font-semibold text-gray-900">Field</th>
								<th class="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
								<th class="text-left py-3 px-4 font-semibold text-gray-900">Required</th>
								<th class="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-gray-100">
								<td class="py-3 px-4 font-mono text-blue-600">permissions</td>
								<td class="py-3 px-4 text-gray-600">array</td>
								<td class="py-3 px-4 text-red-600">Yes</td>
								<td class="py-3 px-4 text-gray-600">Array of permissions: ["read", "download"]</td>
							</tr>
							<tr class="border-b border-gray-100">
								<td class="py-3 px-4 font-mono text-blue-600">expires_at</td>
								<td class="py-3 px-4 text-gray-600">string</td>
								<td class="py-3 px-4 text-gray-600">No</td>
								<td class="py-3 px-4 text-gray-600">ISO 8601 timestamp when link expires</td>
							</tr>
							<tr>
								<td class="py-3 px-4 font-mono text-blue-600">password</td>
								<td class="py-3 px-4 text-gray-600">string</td>
								<td class="py-3 px-4 text-gray-600">No</td>
								<td class="py-3 px-4 text-gray-600">Optional password protection</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<!-- Response Examples -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mt-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Response Examples</h2>
			
			<div class="space-y-6">
				<div>
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Success Response</h3>
					<div class="bg-gray-900 rounded-lg p-6">
						<pre class="text-green-400 text-sm"><code>{`{
  "success": true,
  "data": {
    "id": "123",
    "name": "document.pdf",
    "size": 1024000,
    "mime_type": "application/pdf",
    "created_at": "2024-01-15T10:30:00Z",
    "tags": ["work", "important"],
    "download_url": "https://api.vstorage.ch/v1/files/123/download"
  }
}`}</code></pre>
					</div>
				</div>

				<div>
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Error Response</h3>
					<div class="bg-gray-900 rounded-lg p-6">
						<pre class="text-red-400 text-sm"><code>{`{
  "success": false,
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid or expired",
    "details": {}
  }
}`}</code></pre>
					</div>
				</div>
			</div>
		</div>

		<!-- SDKs -->
		<div class="text-center mt-12">
			<div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
				<h2 class="text-2xl sm:text-3xl font-bold mb-4">Need an SDK?</h2>
				<p class="text-blue-100 mb-6 max-w-2xl mx-auto">
					We provide official SDKs for popular programming languages to make integration easier.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/docs" class="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
						View SDKs
					</a>
					<a href="mailto:developers@vstorage.ch" class="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
						Contact Developers
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
