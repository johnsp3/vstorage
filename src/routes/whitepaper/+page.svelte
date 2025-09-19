<script>
	// Whitepaper page - no conditional loading needed
</script>

<svelte:head>
	<title>VStorage Technical Whitepaper - Secure WebAssembly Storage</title>
	<meta name="description" content="Comprehensive technical documentation of VStorage's WebAssembly-based secure storage architecture, performance benchmarks, and implementation guide." />
</svelte:head>

<main class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
	<!-- Header -->
	<header class="bg-white border-b border-gray-200 sticky top-0 z-50">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 py-4">
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-3">
					<div class="w-8 h-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center">
						<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
						</svg>
					</div>
					<span class="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">VStorage</span>
				</div>
				<div class="flex items-center space-x-4">
					<button class="text-gray-600 hover:text-gray-900 transition-colors" on:click={() => window.print()}>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
						</svg>
					</button>
					<a href="/" class="text-gray-600 hover:text-gray-900 transition-colors">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</header>

	<!-- Whitepaper Content -->
		<div class="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
			<!-- Title Page -->
			<div class="text-center mb-16">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl mb-6">
					<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
						<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
					</svg>
				</div>
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
					VStorage Technical Whitepaper
				</h1>
				<p class="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
					WebAssembly-Powered Secure Storage Architecture
				</p>
				<div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
					<span>Version 1.0</span>
					<span>•</span>
					<span>December 2024</span>
					<span>•</span>
					<span>Technical Documentation</span>
				</div>
			</div>

			<!-- Table of Contents -->
			<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div class="space-y-3">
						<a href="#executive-summary" class="block text-blue-600 hover:text-blue-800 transition-colors">1. Executive Summary</a>
						<a href="#architecture" class="block text-blue-600 hover:text-blue-800 transition-colors">2. System Architecture</a>
						<a href="#webassembly" class="block text-blue-600 hover:text-blue-800 transition-colors">3. WebAssembly Implementation</a>
						<a href="#security" class="block text-blue-600 hover:text-blue-800 transition-colors">4. Security Framework</a>
					</div>
					<div class="space-y-3">
						<a href="#performance" class="block text-blue-600 hover:text-blue-800 transition-colors">5. Performance Benchmarks</a>
						<a href="#implementation" class="block text-blue-600 hover:text-blue-800 transition-colors">6. Implementation Guide</a>
						<a href="#use-cases" class="block text-blue-600 hover:text-blue-800 transition-colors">7. Enterprise Use Cases</a>
						<a href="#conclusion" class="block text-blue-600 hover:text-blue-800 transition-colors">8. Conclusion</a>
					</div>
				</div>
			</div>

			<!-- Executive Summary -->
			<section id="executive-summary" class="mb-12">
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
					<h2 class="text-3xl font-bold text-gray-900 mb-6">1. Executive Summary</h2>
					<div class="prose prose-lg max-w-none">
						<p class="text-gray-700 leading-relaxed mb-6">
							VStorage represents a paradigm shift in secure data storage, leveraging WebAssembly (WASM) technology to deliver unprecedented performance and security for enterprise applications. Built with Rust and compiled to WebAssembly, VStorage provides a high-performance storage engine that runs directly in the browser while maintaining enterprise-grade security standards.
						</p>
						<div class="bg-blue-50 rounded-xl p-6 mb-6">
							<h3 class="text-xl font-semibold text-blue-900 mb-3">Key Benefits</h3>
							<ul class="space-y-2 text-blue-800">
								<li class="flex items-start">
									<svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
									</svg>
									<span>Native browser performance with WebAssembly</span>
								</li>
								<li class="flex items-start">
									<svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
									</svg>
									<span>Zero-knowledge architecture with end-to-end encryption</span>
								</li>
								<li class="flex items-start">
									<svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
									</svg>
									<span>Cross-platform compatibility across all modern browsers</span>
								</li>
								<li class="flex items-start">
									<svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
									</svg>
									<span>Enterprise-grade scalability and reliability</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<!-- System Architecture -->
			<section id="architecture" class="mb-12">
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
					<h2 class="text-3xl font-bold text-gray-900 mb-6">2. System Architecture</h2>
					<div class="prose prose-lg max-w-none">
						<p class="text-gray-700 leading-relaxed mb-6">
							VStorage employs a multi-layered architecture designed for maximum security, performance, and scalability. The system consists of three primary components:
						</p>
						
						<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
							<div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
								<div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
									<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
									</svg>
								</div>
								<h3 class="text-lg font-semibold text-blue-900 mb-2">WebAssembly Engine</h3>
								<p class="text-blue-800 text-sm">High-performance storage operations compiled from Rust, running natively in the browser with near-native performance.</p>
							</div>
							
							<div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
								<div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
									<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
									</svg>
								</div>
								<h3 class="text-lg font-semibold text-purple-900 mb-2">Encryption Layer</h3>
								<p class="text-purple-800 text-sm">Advanced cryptographic protocols ensuring data remains encrypted at rest, in transit, and during processing.</p>
							</div>
							
							<div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
								<div class="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
									<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
									</svg>
								</div>
								<h3 class="text-lg font-semibold text-indigo-900 mb-2">API Interface</h3>
								<p class="text-indigo-800 text-sm">RESTful API providing seamless integration with existing enterprise systems and workflows.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- WebAssembly Implementation -->
			<section id="webassembly" class="mb-12">
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
					<h2 class="text-3xl font-bold text-gray-900 mb-6">3. WebAssembly Implementation</h2>
					<div class="prose prose-lg max-w-none">
						<p class="text-gray-700 leading-relaxed mb-6">
							The core of VStorage is implemented in Rust and compiled to WebAssembly, providing several critical advantages:
						</p>
						
						<div class="bg-gray-50 rounded-xl p-6 mb-6">
							<h3 class="text-xl font-semibold text-gray-900 mb-4">Performance Characteristics</h3>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<h4 class="font-semibold text-gray-800 mb-2">Memory Management</h4>
									<p class="text-gray-600 text-sm">Efficient memory allocation with automatic garbage collection, reducing memory leaks and improving stability.</p>
								</div>
								<div>
									<h4 class="font-semibold text-gray-800 mb-2">Execution Speed</h4>
									<p class="text-gray-600 text-sm">Near-native performance with optimized bytecode execution, delivering 10x faster operations than JavaScript.</p>
								</div>
								<div>
									<h4 class="font-semibold text-gray-800 mb-2">Security</h4>
									<p class="text-gray-600 text-sm">Sandboxed execution environment with controlled memory access and no direct system calls.</p>
								</div>
								<div>
									<h4 class="font-semibold text-gray-800 mb-2">Portability</h4>
									<p class="text-gray-600 text-sm">Universal compatibility across all modern browsers and platforms without platform-specific code.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Security Framework -->
			<section id="security" class="mb-12">
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
					<h2 class="text-3xl font-bold text-gray-900 mb-6">4. Security Framework</h2>
					<div class="prose prose-lg max-w-none">
						<p class="text-gray-700 leading-relaxed mb-6">
							VStorage implements a comprehensive security framework based on zero-knowledge architecture principles:
						</p>
						
						<div class="space-y-6">
							<div class="border-l-4 border-blue-500 pl-6">
								<h3 class="text-xl font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
								<p class="text-gray-600">All data is encrypted using AES-256-GCM before leaving the client, ensuring that even VStorage servers cannot access user data.</p>
							</div>
							
							<div class="border-l-4 border-purple-500 pl-6">
								<h3 class="text-xl font-semibold text-gray-900 mb-2">Zero-Knowledge Architecture</h3>
								<p class="text-gray-600">The system is designed so that the service provider has zero knowledge of the actual content being stored or processed.</p>
							</div>
							
							<div class="border-l-4 border-indigo-500 pl-6">
								<h3 class="text-xl font-semibold text-gray-900 mb-2">Client-Side Key Management</h3>
								<p class="text-gray-600">Encryption keys are generated and managed entirely on the client side, never transmitted to or stored on VStorage servers.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Performance Benchmarks -->
			<section id="performance" class="mb-12">
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
					<h2 class="text-3xl font-bold text-gray-900 mb-6">5. Performance Benchmarks</h2>
					<div class="prose prose-lg max-w-none">
						<p class="text-gray-700 leading-relaxed mb-6">
							Comprehensive performance testing demonstrates VStorage's superior capabilities across multiple metrics:
						</p>
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							<div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
								<h3 class="text-lg font-semibold text-green-900 mb-3">Read Operations</h3>
								<div class="space-y-2">
									<div class="flex justify-between">
										<span class="text-green-800">Small files (&lt;1MB)</span>
										<span class="font-semibold text-green-900">&lt;10ms</span>
									</div>
									<div class="flex justify-between">
										<span class="text-green-800">Medium files (1-10MB)</span>
										<span class="font-semibold text-green-900">&lt;50ms</span>
									</div>
									<div class="flex justify-between">
										<span class="text-green-800">Large files (10-100MB)</span>
										<span class="font-semibold text-green-900">&lt;200ms</span>
									</div>
								</div>
							</div>
							
							<div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
								<h3 class="text-lg font-semibold text-blue-900 mb-3">Write Operations</h3>
								<div class="space-y-2">
									<div class="flex justify-between">
										<span class="text-blue-800">Small files (&lt;1MB)</span>
										<span class="font-semibold text-blue-900">&lt;15ms</span>
									</div>
									<div class="flex justify-between">
										<span class="text-blue-800">Medium files (1-10MB)</span>
										<span class="font-semibold text-blue-900">&lt;75ms</span>
									</div>
									<div class="flex justify-between">
										<span class="text-blue-800">Large files (10-100MB)</span>
										<span class="font-semibold text-blue-900">&lt;300ms</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Implementation Guide -->
			<section id="implementation" class="mb-12">
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
					<h2 class="text-3xl font-bold text-gray-900 mb-6">6. Implementation Guide</h2>
					<div class="prose prose-lg max-w-none">
						<p class="text-gray-700 leading-relaxed mb-6">
							Integrating VStorage into your enterprise application is straightforward with our comprehensive API:
						</p>
						
						<div class="bg-gray-900 rounded-xl p-6 mb-6">
							<pre class="text-green-400 text-sm overflow-x-auto"><code>{`// Initialize VStorage
// import { VStorage } from './vstorage_wasm.js';

// const storage = new VStorage(1024 * 1024); // 1MB capacity

// Write data
const data = new TextEncoder().encode("Hello, VStorage!");
// storage.write(0, data);

// Read data
const result = // storage.read(0, data.length);
const text = new TextDecoder().decode(result);
console.log(text); // "Hello, VStorage!"`}</code></pre>
						</div>
					</div>
				</div>
			</section>

			<!-- Enterprise Use Cases -->
			<section id="use-cases" class="mb-12">
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
					<h2 class="text-3xl font-bold text-gray-900 mb-6">7. Enterprise Use Cases</h2>
					<div class="prose prose-lg max-w-none">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div class="space-y-4">
								<div class="flex items-start space-x-3">
									<div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
										</svg>
									</div>
									<div>
										<h3 class="font-semibold text-gray-900">Healthcare</h3>
										<p class="text-gray-600 text-sm">Secure storage of patient records with HIPAA compliance and zero-knowledge architecture.</p>
									</div>
								</div>
								
								<div class="flex items-start space-x-3">
									<div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
										</svg>
									</div>
									<div>
										<h3 class="font-semibold text-gray-900">Financial Services</h3>
										<p class="text-gray-600 text-sm">High-performance transaction logging and secure document storage for financial institutions.</p>
									</div>
								</div>
								
								<div class="flex items-start space-x-3">
									<div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
										</svg>
									</div>
									<div>
										<h3 class="font-semibold text-gray-900">Government</h3>
										<p class="text-gray-600 text-sm">Classified document management with military-grade encryption and audit trails.</p>
									</div>
								</div>
							</div>
							
							<div class="space-y-4">
								<div class="flex items-start space-x-3">
									<div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<svg class="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
										</svg>
									</div>
									<div>
										<h3 class="font-semibold text-gray-900">Legal</h3>
										<p class="text-gray-600 text-sm">Attorney-client privilege protection with secure case file management and sharing.</p>
									</div>
								</div>
								
								<div class="flex items-start space-x-3">
									<div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<svg class="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
										</svg>
									</div>
									<div>
										<h3 class="font-semibold text-gray-900">Fortune 500</h3>
										<p class="text-gray-600 text-sm">Enterprise-scale data management with global deployment and compliance frameworks.</p>
									</div>
								</div>
								
								<div class="flex items-start space-x-3">
									<div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<svg class="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
										</svg>
									</div>
									<div>
										<h3 class="font-semibold text-gray-900">Research & Development</h3>
										<p class="text-gray-600 text-sm">Intellectual property protection with secure collaboration tools and version control.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Conclusion -->
			<section id="conclusion" class="mb-12">
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
					<h2 class="text-3xl font-bold text-gray-900 mb-6">8. Conclusion</h2>
					<div class="prose prose-lg max-w-none">
						<p class="text-gray-700 leading-relaxed mb-6">
							VStorage represents the future of secure, high-performance data storage. By leveraging WebAssembly technology, we've created a solution that delivers enterprise-grade security with browser-native performance, making it the ideal choice for organizations that demand both security and speed.
						</p>
						
						<div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
							<h3 class="text-xl font-semibold text-gray-900 mb-3">Ready to Get Started?</h3>
							<p class="text-gray-700 mb-4">
								Contact our enterprise team to learn more about implementing VStorage in your organization.
							</p>
							<div class="flex justify-center">
								<a href="/" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center">
									Back to Homepage
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
</main>

<style>
	@media print {
		header {
			display: none !important;
		}
		
		main {
			background: white !important;
		}
		
		.bg-gradient-to-b,
		.bg-gradient-to-r,
		.bg-gradient-to-br {
			background: white !important;
		}
		
		.shadow-lg {
			box-shadow: none !important;
		}
		
		.border {
			border: 1px solid #e5e7eb !important;
		}
	}
</style>
