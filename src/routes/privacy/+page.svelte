<script>
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Privacy Policy - VStorage</title>
	<meta name="description" content="VStorage Privacy Policy - How we protect your data and respect your privacy." />
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
				Privacy Policy
			</h1>
			<p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Your privacy is fundamental to VStorage. Learn how we protect your data and respect your rights.
			</p>
			<div class="mt-4 text-sm text-gray-500">
				Last updated: January 15, 2024
			</div>
		</div>

		<!-- Privacy Principles -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Our Privacy Principles</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="flex items-start">
					<div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
						<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
						</svg>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900 mb-2">Zero-Knowledge Architecture</h3>
						<p class="text-sm text-gray-600">We cannot access your encrypted files. Only you hold the keys.</p>
					</div>
				</div>
				<div class="flex items-start">
					<div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
						<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
						</svg>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900 mb-2">Swiss Data Sovereignty</h3>
						<p class="text-sm text-gray-600">Your data stays in Switzerland, protected by Swiss privacy laws.</p>
					</div>
				</div>
				<div class="flex items-start">
					<div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
						<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
						</svg>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900 mb-2">Transparency</h3>
						<p class="text-sm text-gray-600">We're open about what data we collect and how we use it.</p>
					</div>
				</div>
				<div class="flex items-start">
					<div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
						<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
						</svg>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900 mb-2">Your Control</h3>
						<p class="text-sm text-gray-600">You control your data. Delete it anytime, export it anytime.</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Content Sections -->
		<div class="space-y-8">
			<!-- Information We Collect -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-3">Account Information</h3>
						<p class="text-gray-600 mb-3">When you create an account, we collect:</p>
						<ul class="list-disc list-inside space-y-1 text-gray-600 ml-4">
							<li>Email address (for authentication and communication)</li>
							<li>Account preferences and settings</li>
							<li>Billing information (processed securely by our payment processor)</li>
						</ul>
					</div>

					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-3">File Metadata</h3>
						<p class="text-gray-600 mb-3">We store only the metadata necessary to provide our service:</p>
						<ul class="list-disc list-inside space-y-1 text-gray-600 ml-4">
							<li>File names and sizes</li>
							<li>Upload and modification timestamps</li>
							<li>File types and tags (if you choose to add them)</li>
							<li>Sharing permissions and access logs</li>
						</ul>
						<p class="text-sm text-gray-500 mt-2">Your actual file content is encrypted and we cannot access it.</p>
					</div>

					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
						<p class="text-gray-600 mb-3">We collect minimal usage data to improve our service:</p>
						<ul class="list-disc list-inside space-y-1 text-gray-600 ml-4">
							<li>API usage statistics (anonymized)</li>
							<li>Error logs (without personal information)</li>
							<li>Performance metrics</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- How We Use Information -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
				
				<div class="space-y-4">
					<div class="flex items-start">
						<svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<div>
							<h3 class="font-semibold text-gray-900">Provide and maintain our service</h3>
							<p class="text-sm text-gray-600">To deliver secure file storage, sharing, and management features.</p>
						</div>
					</div>
					<div class="flex items-start">
						<svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<div>
							<h3 class="font-semibold text-gray-900">Authentication and security</h3>
							<p class="text-sm text-gray-600">To verify your identity and protect your account from unauthorized access.</p>
						</div>
					</div>
					<div class="flex items-start">
						<svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<div>
							<h3 class="font-semibold text-gray-900">Customer support</h3>
							<p class="text-sm text-gray-600">To respond to your inquiries and provide technical assistance.</p>
						</div>
					</div>
					<div class="flex items-start">
						<svg class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<div>
							<h3 class="font-semibold text-gray-900">Service improvement</h3>
							<p class="text-sm text-gray-600">To analyze usage patterns and improve our platform's performance and features.</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Data Protection -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Data Protection & Security</h2>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-3">Encryption</h3>
						<p class="text-gray-600 mb-3">All data is protected with industry-standard encryption:</p>
						<ul class="list-disc list-inside space-y-1 text-gray-600 ml-4">
							<li>Files are encrypted with AES-256 before leaving your device</li>
							<li>Data in transit is protected with TLS 1.3</li>
							<li>Data at rest is encrypted with AES-256</li>
							<li>Encryption keys are managed using zero-knowledge architecture</li>
						</ul>
					</div>

					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-3">Infrastructure Security</h3>
						<ul class="list-disc list-inside space-y-1 text-gray-600 ml-4">
							<li>SOC 2 Type II certified data centers</li>
							<li>Regular security audits and penetration testing</li>
							<li>24/7 monitoring and incident response</li>
							<li>Swiss data sovereignty compliance</li>
						</ul>
					</div>

					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-3">Access Controls</h3>
						<ul class="list-disc list-inside space-y-1 text-gray-600 ml-4">
							<li>Multi-factor authentication for all accounts</li>
							<li>Role-based access controls for team members</li>
							<li>Regular access reviews and audits</li>
							<li>Principle of least privilege access</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Your Rights -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="space-y-4">
						<div class="p-4 bg-blue-50 rounded-lg">
							<h3 class="font-semibold text-blue-900 mb-2">Access & Portability</h3>
							<p class="text-sm text-blue-700">Download all your data in a standard format anytime.</p>
						</div>
						<div class="p-4 bg-green-50 rounded-lg">
							<h3 class="font-semibold text-green-900 mb-2">Correction</h3>
							<p class="text-sm text-green-700">Update or correct your account information.</p>
						</div>
					</div>
					<div class="space-y-4">
						<div class="p-4 bg-purple-50 rounded-lg">
							<h3 class="font-semibold text-purple-900 mb-2">Deletion</h3>
							<p class="text-sm text-purple-700">Delete your account and all associated data permanently.</p>
						</div>
						<div class="p-4 bg-orange-50 rounded-lg">
							<h3 class="font-semibold text-orange-900 mb-2">Restriction</h3>
							<p class="text-sm text-orange-700">Limit how we process your personal information.</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Data Sharing -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Data Sharing</h2>
				<p class="text-gray-600 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share information only in these limited circumstances:</p>
				
				<div class="space-y-4">
					<div class="flex items-start">
						<svg class="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<div>
							<h3 class="font-semibold text-gray-900">Service Providers</h3>
							<p class="text-sm text-gray-600">Trusted third parties who help us operate our service (payment processors, infrastructure providers).</p>
						</div>
					</div>
					<div class="flex items-start">
						<svg class="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<div>
							<h3 class="font-semibold text-gray-900">Legal Requirements</h3>
							<p class="text-sm text-gray-600">When required by Swiss law or valid legal process.</p>
						</div>
					</div>
					<div class="flex items-start">
						<svg class="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<div>
							<h3 class="font-semibold text-gray-900">With Your Consent</h3>
							<p class="text-sm text-gray-600">When you explicitly authorize us to share information.</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Information -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
				<p class="text-gray-600 mb-6">If you have questions about this Privacy Policy or want to exercise your privacy rights, please contact us:</p>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h3 class="font-semibold text-gray-900 mb-3">Privacy Officer</h3>
						<div class="space-y-2 text-sm text-gray-600">
							<p>Email: <a href="mailto:privacy@vstorage.ch" class="text-blue-600 hover:text-blue-700">privacy@vstorage.ch</a></p>
							<p>Phone: +41 44 202 53 89</p>
							<p>Address: Bahnhofstrasse 45, 8001 Zurich, Switzerland</p>
						</div>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900 mb-3">Data Protection Authority</h3>
						<div class="space-y-2 text-sm text-gray-600">
							<p>Swiss Federal Data Protection and Information Commissioner (FDPIC)</p>
							<p>Website: <a href="https://www.edoeb.admin.ch" target="_blank" class="text-blue-600 hover:text-blue-700">www.edoeb.admin.ch</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
