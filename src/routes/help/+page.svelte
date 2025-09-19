<script>
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Help Center - VStorage</title>
	<meta name="description" content="Get help with VStorage secure cloud storage. Find answers to common questions, troubleshooting guides, and support resources." />
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
				Help Center
			</h1>
			<p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Find answers to your questions and get the most out of VStorage's secure cloud storage platform.
			</p>
		</div>

		<!-- Search Bar -->
		<div class="max-w-2xl mx-auto mb-12">
			<div class="relative">
				<input 
					type="text" 
					placeholder="Search for help articles..." 
					class="w-full px-6 py-4 pl-12 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
				>
				<svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
				</svg>
			</div>
		</div>

		<!-- Quick Links -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900">Getting Started</h3>
				</div>
				<p class="text-gray-600 mb-4">Learn the basics of VStorage and how to set up your secure cloud storage.</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• Creating your account</li>
					<li>• Setting up encryption</li>
					<li>• Uploading your first files</li>
					<li>• Understanding security features</li>
				</ul>
			</div>

			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900">Security & Privacy</h3>
				</div>
				<p class="text-gray-600 mb-4">Understand VStorage's enterprise-grade security and privacy features.</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• End-to-end encryption</li>
					<li>• Zero-knowledge architecture</li>
					<li>• Swiss data sovereignty</li>
					<li>• Compliance certifications</li>
				</ul>
			</div>

			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900">Sharing & Collaboration</h3>
				</div>
				<p class="text-gray-600 mb-4">Learn how to securely share files and collaborate with your team.</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• Secure file sharing</li>
					<li>• Team collaboration</li>
					<li>• Access permissions</li>
					<li>• Audit trails</li>
				</ul>
			</div>

			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"/>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900">Troubleshooting</h3>
				</div>
				<p class="text-gray-600 mb-4">Common issues and solutions to get you back on track quickly.</p>
				<ul class="space-y-2 text-sm text-gray-500">
					<li>• Upload issues</li>
					<li>• Sync problems</li>
					<li>• Access denied errors</li>
					<li>• Performance optimization</li>
				</ul>
			</div>
		</div>

		<!-- FAQ Section -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
			
			<div class="space-y-6">
				<!-- Security & Privacy -->
				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">How secure is VStorage?</h3>
					<p class="text-gray-600 leading-relaxed">
						VStorage uses end-to-end encryption with zero-knowledge architecture. Your files are encrypted on your device before upload, and only you hold the encryption keys. We're SOC 2 Type II certified, GDPR compliant, and HIPAA ready, with Swiss data sovereignty guaranteed.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Where is my data stored?</h3>
					<p class="text-gray-600 leading-relaxed">
						All data is stored in Swiss data centers located in Zurich and Geneva. This ensures compliance with Swiss data protection laws and provides the highest level of data sovereignty and privacy protection.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Can VStorage access my files?</h3>
					<p class="text-gray-600 leading-relaxed">
						No, we cannot access your files. VStorage uses zero-knowledge encryption, meaning your files are encrypted on your device before being uploaded. We don't have access to your encryption keys, so we cannot decrypt or view your files.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">What encryption standards do you use?</h3>
					<p class="text-gray-600 leading-relaxed">
						We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. All encryption keys are generated and managed using industry-standard cryptographic libraries, and we never store your encryption keys on our servers.
					</p>
				</div>

				<!-- File Management -->
				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">What file types are supported?</h3>
					<p class="text-gray-600 leading-relaxed">
						VStorage supports all file types including documents, images, videos, and archives. There are no file type restrictions, and all files are encrypted with the same level of security regardless of type.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">What is the maximum file size I can upload?</h3>
					<p class="text-gray-600 leading-relaxed">
						Individual files can be up to 10GB in size. For larger files, we recommend using our desktop application which supports chunked uploads and resumable transfers. Enterprise plans may have higher limits.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">How much storage space do I get?</h3>
					<p class="text-gray-600 leading-relaxed">
						Free accounts include 5GB of storage. Paid plans start at 100GB and go up to unlimited storage for enterprise customers. All storage is encrypted and includes version history and file recovery options.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Can I recover deleted files?</h3>
					<p class="text-gray-600 leading-relaxed">
						Yes! Deleted files are moved to a secure trash folder and can be recovered for 30 days. After 30 days, files are permanently deleted. Enterprise customers can extend this retention period.
					</p>
				</div>

				<!-- Sharing & Collaboration -->
				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Can I share files securely?</h3>
					<p class="text-gray-600 leading-relaxed">
						Yes! VStorage provides secure file sharing with granular access controls. You can share files with specific people, set expiration dates, and maintain full audit trails of who accessed what and when.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">How do I share files with team members?</h3>
					<p class="text-gray-600 leading-relaxed">
						You can share files by creating secure share links or inviting team members to specific folders. Set permissions (view, download, edit) and expiration dates. All shared files maintain end-to-end encryption.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Can I track who accessed my shared files?</h3>
					<p class="text-gray-600 leading-relaxed">
						Yes, VStorage provides detailed audit logs showing who accessed your files, when they accessed them, and from which IP address. This helps you maintain security and compliance.
					</p>
				</div>

				<!-- Technical & Integration -->
				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Do you have mobile apps?</h3>
					<p class="text-gray-600 leading-relaxed">
						Yes! VStorage has native mobile apps for iOS and Android. All mobile apps use the same end-to-end encryption as our web platform, ensuring your files remain secure on all devices.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Can I integrate VStorage with other tools?</h3>
					<p class="text-gray-600 leading-relaxed">
						Yes! VStorage offers integrations with popular tools like Slack, Microsoft Teams, Google Workspace, and more. We also provide a comprehensive REST API and webhooks for custom integrations.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">How do I sync files across devices?</h3>
					<p class="text-gray-600 leading-relaxed">
						VStorage automatically syncs your files across all your devices. Install our desktop or mobile app, sign in with your account, and your files will be available everywhere. Changes sync in real-time.
					</p>
				</div>

				<!-- Billing & Plans -->
				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
					<p class="text-gray-600 leading-relaxed">
						We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice. All payments are processed securely and we never store your payment information.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Can I cancel my subscription anytime?</h3>
					<p class="text-gray-600 leading-relaxed">
						Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period. You can export all your data before cancellation.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Do you offer enterprise discounts?</h3>
					<p class="text-gray-600 leading-relaxed">
						Yes! We offer volume discounts for enterprise customers with 100+ users. Contact our sales team at <a href="mailto:sales@vstorage.ch" class="text-blue-600 hover:text-blue-700 font-medium">sales@vstorage.ch</a> for custom pricing.
					</p>
				</div>

				<!-- Support & Troubleshooting -->
				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">How do I get support?</h3>
					<p class="text-gray-600 leading-relaxed">
						You can reach our support team at <a href="mailto:support@vstorage.ch" class="text-blue-600 hover:text-blue-700 font-medium">support@vstorage.ch</a> or call us at +41 44 202 53 89. We provide 24/7 support for enterprise customers.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">What if I forget my password?</h3>
					<p class="text-gray-600 leading-relaxed">
						You can reset your password using the "Forgot Password" link on the login page. Since we use zero-knowledge encryption, we cannot recover your files if you lose your password, so please keep it safe.
					</p>
				</div>

				<div class="border-b border-gray-200 pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Why is my upload slow?</h3>
					<p class="text-gray-600 leading-relaxed">
						Upload speed depends on your internet connection and file size. Large files are encrypted on your device before upload, which can take time. Try using our desktop app for better performance with large files.
					</p>
				</div>

				<div class="pb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Can I use VStorage offline?</h3>
					<p class="text-gray-600 leading-relaxed">
						Yes! Our desktop and mobile apps support offline access. Files you've recently accessed are cached locally and encrypted. Once you're back online, changes will sync automatically.
					</p>
				</div>
			</div>
		</div>

		<!-- Contact Support -->
		<div class="text-center mt-12">
			<div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
				<h2 class="text-2xl sm:text-3xl font-bold mb-4">Still need help?</h2>
				<p class="text-blue-100 mb-6 max-w-2xl mx-auto">
					Our support team is here to help you get the most out of VStorage. Contact us for personalized assistance.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="mailto:support@vstorage.ch" class="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
						Email Support
					</a>
					<a href="tel:+41442025389" class="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
						Call +41 44 202 53 89
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
