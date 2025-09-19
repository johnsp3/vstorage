<script>
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Terms of Service - VStorage</title>
	<meta name="description" content="VStorage Terms of Service - Legal terms and conditions for using our secure cloud storage platform." />
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
				Terms of Service
			</h1>
			<p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Legal terms and conditions for using VStorage's secure cloud storage platform.
			</p>
			<div class="mt-4 text-sm text-gray-500">
				Last updated: January 15, 2024
			</div>
		</div>

		<!-- Content Sections -->
		<div class="space-y-8">
			<!-- Agreement -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">1. Agreement to Terms</h2>
				<p class="text-gray-600 mb-4">
					By accessing and using VStorage ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
				</p>
				<p class="text-gray-600">
					These Terms of Service ("Terms") govern your use of our website and services operated by VStorage AG ("us", "we", or "our") located at Bahnhofstrasse 45, 8001 Zurich, Switzerland.
				</p>
			</div>

			<!-- Service Description -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">2. Service Description</h2>
				<p class="text-gray-600 mb-4">
					VStorage provides secure cloud storage services with end-to-end encryption. Our service includes:
				</p>
				<ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
					<li>Secure file storage and synchronization</li>
					<li>End-to-end encryption for all stored data</li>
					<li>Secure file sharing and collaboration tools</li>
					<li>API access for integration with third-party applications</li>
					<li>Mobile and desktop applications</li>
					<li>Customer support and technical assistance</li>
				</ul>
			</div>

			<!-- User Accounts -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">3. User Accounts</h2>
				
				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Account Creation</h3>
						<p class="text-gray-600">To use our service, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Account Security</h3>
						<p class="text-gray-600">You are responsible for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Age Requirements</h3>
						<p class="text-gray-600">You must be at least 18 years old to use our service. If you are under 18, you may only use our service with the involvement and consent of a parent or guardian.</p>
					</div>
				</div>
			</div>

			<!-- Acceptable Use -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">4. Acceptable Use Policy</h2>
				
				<div class="space-y-6">
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-3">Permitted Uses</h3>
						<p class="text-gray-600 mb-3">You may use our service for lawful purposes only. You agree to use the service in accordance with all applicable laws and regulations.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-3">Prohibited Uses</h3>
						<p class="text-gray-600 mb-3">You agree not to use our service to:</p>
						<ul class="list-disc list-inside space-y-1 text-gray-600 ml-4">
							<li>Store, transmit, or share illegal, harmful, or malicious content</li>
							<li>Violate any intellectual property rights</li>
							<li>Distribute malware, viruses, or other harmful code</li>
							<li>Engage in any form of harassment or abuse</li>
							<li>Attempt to gain unauthorized access to our systems</li>
							<li>Use the service for any commercial purpose without authorization</li>
							<li>Violate any applicable laws or regulations</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Data and Privacy -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">5. Data and Privacy</h2>
				
				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Data Ownership</h3>
						<p class="text-gray-600">You retain full ownership of all data you store with VStorage. We do not claim any ownership rights to your content.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Encryption</h3>
						<p class="text-gray-600">All data is encrypted using end-to-end encryption. We cannot access your encrypted files, and only you hold the encryption keys.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Privacy Policy</h3>
						<p class="text-gray-600">Your privacy is important to us. Please review our <a href="/privacy" class="text-blue-600 hover:text-blue-700">Privacy Policy</a>, which also governs your use of the service.</p>
					</div>
				</div>
			</div>

			<!-- Payment Terms -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">6. Payment Terms</h2>
				
				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Subscription Fees</h3>
						<p class="text-gray-600">Some features of our service require a paid subscription. Subscription fees are billed in advance on a monthly or annual basis.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Payment Processing</h3>
						<p class="text-gray-600">All payments are processed securely by our third-party payment processors. We do not store your payment information on our servers.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Refunds</h3>
						<p class="text-gray-600">Refunds are handled on a case-by-case basis. Contact our support team to discuss refund requests.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Price Changes</h3>
						<p class="text-gray-600">We reserve the right to modify our pricing with 30 days' notice to existing subscribers.</p>
					</div>
				</div>
			</div>

			<!-- Service Availability -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">7. Service Availability</h2>
				
				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Uptime Commitment</h3>
						<p class="text-gray-600">We strive to maintain 99.9% uptime for our service, but we cannot guarantee uninterrupted access.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Maintenance</h3>
						<p class="text-gray-600">We may perform scheduled maintenance that may temporarily interrupt service. We will provide advance notice when possible.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Service Modifications</h3>
						<p class="text-gray-600">We reserve the right to modify, suspend, or discontinue any part of our service at any time with reasonable notice.</p>
					</div>
				</div>
			</div>

			<!-- Limitation of Liability -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">8. Limitation of Liability</h2>
				
				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Disclaimer of Warranties</h3>
						<p class="text-gray-600">Our service is provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Limitation of Damages</h3>
						<p class="text-gray-600">In no event shall VStorage be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Maximum Liability</h3>
						<p class="text-gray-600">Our total liability to you for any damages arising from or related to these terms or the service shall not exceed the amount you paid us for the service in the 12 months preceding the claim.</p>
					</div>
				</div>
			</div>

			<!-- Termination -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">9. Termination</h2>
				
				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Termination by You</h3>
						<p class="text-gray-600">You may terminate your account at any time by contacting our support team. Upon termination, your data will be deleted according to our data retention policy.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Termination by Us</h3>
						<p class="text-gray-600">We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Effect of Termination</h3>
						<p class="text-gray-600">Upon termination, your right to use the service will cease immediately. We will provide you with a reasonable opportunity to export your data before deletion.</p>
					</div>
				</div>
			</div>

			<!-- Governing Law -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
				
				<div class="space-y-4">
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Swiss Law</h3>
						<p class="text-gray-600">These Terms shall be governed by and construed in accordance with Swiss law, without regard to its conflict of law provisions.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Jurisdiction</h3>
						<p class="text-gray-600">Any disputes arising from these Terms or the service shall be subject to the exclusive jurisdiction of the courts of Zurich, Switzerland.</p>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Severability</h3>
						<p class="text-gray-600">If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
					</div>
				</div>
			</div>

			<!-- Changes to Terms -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
				<p class="text-gray-600 mb-4">
					We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through our service. Your continued use of the service after such modifications constitutes acceptance of the updated Terms.
				</p>
				<p class="text-gray-600">
					If you do not agree to the modified Terms, you must stop using the service and may terminate your account.
				</p>
			</div>

			<!-- Contact Information -->
			<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
				<p class="text-gray-600 mb-6">If you have any questions about these Terms of Service, please contact us:</p>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h3 class="font-semibold text-gray-900 mb-3">Legal Department</h3>
						<div class="space-y-2 text-sm text-gray-600">
							<p>Email: <a href="mailto:legal@vstorage.ch" class="text-blue-600 hover:text-blue-700">legal@vstorage.ch</a></p>
							<p>Phone: +41 44 202 53 89</p>
							<p>Address: Bahnhofstrasse 45, 8001 Zurich, Switzerland</p>
						</div>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900 mb-3">General Support</h3>
						<div class="space-y-2 text-sm text-gray-600">
							<p>Email: <a href="mailto:support@vstorage.ch" class="text-blue-600 hover:text-blue-700">support@vstorage.ch</a></p>
							<p>Help Center: <a href="/help" class="text-blue-600 hover:text-blue-700">vstorage.ch/help</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
