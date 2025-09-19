<script>
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Cookie Policy - VStorage</title>
	<meta name="description" content="VStorage Cookie Policy - How we use cookies and similar technologies on our website." />
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
				Cookie Policy
			</h1>
			<p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				How we use cookies and similar technologies to enhance your experience on VStorage.
			</p>
			<div class="mt-4 text-sm text-gray-500">
				Last updated: January 15, 2024
			</div>
		</div>

		<!-- What Are Cookies -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
			<p class="text-gray-600 mb-4">
				Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
			</p>
			<p class="text-gray-600">
				Cookies allow a website to recognize a user's device and remember information about their visit, such as their preferred language and other settings. This can make your next visit easier and the site more useful to you.
			</p>
		</div>

		<!-- How We Use Cookies -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
			<p class="text-gray-600 mb-6">
				VStorage uses cookies and similar technologies to provide, protect, and improve our services. We use cookies for the following purposes:
			</p>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="p-4 bg-blue-50 rounded-lg">
					<h3 class="font-semibold text-blue-900 mb-2">Essential Cookies</h3>
					<p class="text-sm text-blue-700">Required for the website to function properly and securely.</p>
				</div>
				<div class="p-4 bg-green-50 rounded-lg">
					<h3 class="font-semibold text-green-900 mb-2">Performance Cookies</h3>
					<p class="text-sm text-green-700">Help us understand how visitors interact with our website.</p>
				</div>
				<div class="p-4 bg-purple-50 rounded-lg">
					<h3 class="font-semibold text-purple-900 mb-2">Functionality Cookies</h3>
					<p class="text-sm text-purple-700">Remember your preferences and settings.</p>
				</div>
				<div class="p-4 bg-orange-50 rounded-lg">
					<h3 class="font-semibold text-orange-900 mb-2">Security Cookies</h3>
					<p class="text-sm text-orange-700">Protect against fraud and ensure secure authentication.</p>
				</div>
			</div>
		</div>

		<!-- Types of Cookies -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
			
			<div class="space-y-6">
				<!-- Essential Cookies -->
				<div class="border-l-4 border-blue-500 pl-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h3>
					<p class="text-gray-600 mb-3">These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
					<div class="space-y-2">
						<div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
							<div>
								<span class="font-medium text-gray-900">Authentication</span>
								<p class="text-sm text-gray-600">Maintains your login session</p>
							</div>
							<span class="text-sm text-blue-600 font-medium">Always Active</span>
						</div>
						<div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
							<div>
								<span class="font-medium text-gray-900">Security</span>
								<p class="text-sm text-gray-600">Protects against CSRF attacks</p>
							</div>
							<span class="text-sm text-blue-600 font-medium">Always Active</span>
						</div>
						<div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
							<div>
								<span class="font-medium text-gray-900">Load Balancing</span>
								<p class="text-sm text-gray-600">Distributes traffic across servers</p>
							</div>
							<span class="text-sm text-blue-600 font-medium">Always Active</span>
						</div>
					</div>
				</div>

				<!-- Performance Cookies -->
				<div class="border-l-4 border-green-500 pl-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Performance Cookies</h3>
					<p class="text-gray-600 mb-3">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
					<div class="space-y-2">
						<div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
							<div>
								<span class="font-medium text-gray-900">Analytics</span>
								<p class="text-sm text-gray-600">Tracks page views and user behavior</p>
							</div>
							<span class="text-sm text-green-600 font-medium">Optional</span>
						</div>
						<div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
							<div>
								<span class="font-medium text-gray-900">Error Tracking</span>
								<p class="text-sm text-gray-600">Helps us identify and fix issues</p>
							</div>
							<span class="text-sm text-green-600 font-medium">Optional</span>
						</div>
					</div>
				</div>

				<!-- Functionality Cookies -->
				<div class="border-l-4 border-purple-500 pl-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
					<p class="text-gray-600 mb-3">These cookies enable the website to provide enhanced functionality and personalization.</p>
					<div class="space-y-2">
						<div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
							<div>
								<span class="font-medium text-gray-900">Preferences</span>
								<p class="text-sm text-gray-600">Remembers your settings and preferences</p>
							</div>
							<span class="text-sm text-purple-600 font-medium">Optional</span>
						</div>
						<div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
							<div>
								<span class="font-medium text-gray-900">Language</span>
								<p class="text-sm text-gray-600">Remembers your language preference</p>
							</div>
							<span class="text-sm text-purple-600 font-medium">Optional</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Third-Party Cookies -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
			<p class="text-gray-600 mb-6">
				We may use third-party services that set their own cookies. These services help us provide better functionality and analyze our website performance.
			</p>
			
			<div class="space-y-4">
				<div class="p-4 border border-gray-200 rounded-lg">
					<h3 class="font-semibold text-gray-900 mb-2">Google Analytics</h3>
					<p class="text-sm text-gray-600 mb-2">We use Google Analytics to understand how visitors use our website. Google Analytics uses cookies to collect this information.</p>
					<p class="text-xs text-gray-500">Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" class="text-blue-600 hover:text-blue-700">Google Privacy Policy</a></p>
				</div>
				
				<div class="p-4 border border-gray-200 rounded-lg">
					<h3 class="font-semibold text-gray-900 mb-2">Payment Processors</h3>
					<p class="text-sm text-gray-600 mb-2">Our payment processors may set cookies to process transactions securely and prevent fraud.</p>
					<p class="text-xs text-gray-500">These cookies are essential for payment processing and cannot be disabled.</p>
				</div>
			</div>
		</div>

		<!-- Managing Cookies -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
			
			<div class="space-y-6">
				<div>
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h3>
					<p class="text-gray-600 mb-4">You can control and delete cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.</p>
					
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div class="p-4 bg-gray-50 rounded-lg">
							<h4 class="font-medium text-gray-900 mb-2">Chrome</h4>
							<p class="text-sm text-gray-600">Settings → Privacy and security → Cookies and other site data</p>
						</div>
						<div class="p-4 bg-gray-50 rounded-lg">
							<h4 class="font-medium text-gray-900 mb-2">Firefox</h4>
							<p class="text-sm text-gray-600">Options → Privacy & Security → Cookies and Site Data</p>
						</div>
						<div class="p-4 bg-gray-50 rounded-lg">
							<h4 class="font-medium text-gray-900 mb-2">Safari</h4>
							<p class="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
						</div>
						<div class="p-4 bg-gray-50 rounded-lg">
							<h4 class="font-medium text-gray-900 mb-2">Edge</h4>
							<p class="text-sm text-gray-600">Settings → Cookies and site permissions → Cookies and site data</p>
						</div>
					</div>
				</div>
				
				<div>
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Cookie Consent</h3>
					<p class="text-gray-600 mb-4">When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies to accept or reject.</p>
					
					<div class="p-4 bg-blue-50 rounded-lg">
						<h4 class="font-medium text-blue-900 mb-2">Your Choices</h4>
						<ul class="text-sm text-blue-700 space-y-1">
							<li>• Accept all cookies for the best experience</li>
							<li>• Accept only essential cookies</li>
							<li>• Customize your preferences</li>
							<li>• Change your preferences anytime</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- Cookie Retention -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Cookie Retention</h2>
			<p class="text-gray-600 mb-4">
				Different cookies have different retention periods. Here's how long we keep different types of cookies:
			</p>
			
			<div class="overflow-x-auto">
				<table class="w-full text-sm">
					<thead>
						<tr class="border-b border-gray-200">
							<th class="text-left py-3 px-4 font-semibold text-gray-900">Cookie Type</th>
							<th class="text-left py-3 px-4 font-semibold text-gray-900">Retention Period</th>
							<th class="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border-b border-gray-100">
							<td class="py-3 px-4 font-medium text-gray-900">Session Cookies</td>
							<td class="py-3 px-4 text-gray-600">Until browser closes</td>
							<td class="py-3 px-4 text-gray-600">Maintain login session</td>
						</tr>
						<tr class="border-b border-gray-100">
							<td class="py-3 px-4 font-medium text-gray-900">Authentication</td>
							<td class="py-3 px-4 text-gray-600">30 days</td>
							<td class="py-3 px-4 text-gray-600">Remember login status</td>
						</tr>
						<tr class="border-b border-gray-100">
							<td class="py-3 px-4 font-medium text-gray-900">Preferences</td>
							<td class="py-3 px-4 text-gray-600">1 year</td>
							<td class="py-3 px-4 text-gray-600">Remember user settings</td>
						</tr>
						<tr>
							<td class="py-3 px-4 font-medium text-gray-900">Analytics</td>
							<td class="py-3 px-4 text-gray-600">2 years</td>
							<td class="py-3 px-4 text-gray-600">Track website usage</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Updates to Policy -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg mb-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
			<p class="text-gray-600 mb-4">
				We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
			</p>
			<p class="text-gray-600">
				When we make significant changes, we will notify you through our website or by email. We encourage you to review this policy periodically to stay informed about our use of cookies.
			</p>
		</div>

		<!-- Contact Information -->
		<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
			<p class="text-gray-600 mb-6">If you have any questions about our use of cookies, please contact us:</p>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<h3 class="font-semibold text-gray-900 mb-3">Privacy Team</h3>
					<div class="space-y-2 text-sm text-gray-600">
						<p>Email: <a href="mailto:privacy@vstorage.ch" class="text-blue-600 hover:text-blue-700">privacy@vstorage.ch</a></p>
						<p>Phone: +41 44 202 53 89</p>
						<p>Address: Bahnhofstrasse 45, 8001 Zurich, Switzerland</p>
					</div>
				</div>
				<div>
					<h3 class="font-semibold text-gray-900 mb-3">Related Policies</h3>
					<div class="space-y-2 text-sm">
						<p><a href="/privacy" class="text-blue-600 hover:text-blue-700">Privacy Policy</a></p>
						<p><a href="/terms" class="text-blue-600 hover:text-blue-700">Terms of Service</a></p>
						<p><a href="/help" class="text-blue-600 hover:text-blue-700">Help Center</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
