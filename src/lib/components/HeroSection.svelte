<script>
	import { onMount } from 'svelte';
	
	let mounted = false;
	let mobileMenuOpen = false;
	
	onMount(() => {
		mounted = true;
	});
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Advanced Background with Multiple Layers -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/40"></div>
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.15)_0%,_transparent_50%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.15)_0%,_transparent_50%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.08)_0%,_transparent_70%)]"></div>
	
	<!-- Navigation -->
	<nav class="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6">
		<div class="max-w-7xl mx-auto flex items-center justify-between">
			<div class="flex items-center space-x-2 sm:space-x-3">
				<div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
					<svg class="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
						<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
					</svg>
				</div>
				<span class="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">VStorage</span>
			</div>
			
			<!-- Mobile menu button -->
			<button 
				class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" 
				aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
				on:click={toggleMobileMenu}
			>
				{#if mobileMenuOpen}
					<!-- Close icon (X) -->
					<svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
					</svg>
				{:else}
					<!-- Hamburger icon -->
					<svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
					</svg>
				{/if}
			</button>
			
			<!-- Desktop navigation -->
			<div class="hidden md:flex items-center space-x-8 lg:space-x-10">
				<a href="#features" class="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium relative group text-sm lg:text-base">
					Features
					<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
				</a>
				<a href="#security" class="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium relative group text-sm lg:text-base">
					Security
					<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
				</a>
				<a href="#enterprise" class="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium relative group text-sm lg:text-base">
					Enterprise
					<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
				</a>
				<a href="#contact" class="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium relative group text-sm lg:text-base">
					Contact
					<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
				</a>
				<a href="/signin" class="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-xl lg:rounded-2xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm lg:text-base">
					Sign In
				</a>
			</div>
		</div>
		
		<!-- Mobile Navigation Menu -->
		{#if mobileMenuOpen}
			<div class="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200/50 shadow-lg z-40">
				<div class="px-4 py-6 space-y-4">
					<a 
						href="#features" 
						class="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2 border-b border-gray-100"
						on:click={closeMobileMenu}
					>
						Features
					</a>
					<a 
						href="#security" 
						class="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2 border-b border-gray-100"
						on:click={closeMobileMenu}
					>
						Security
					</a>
					<a 
						href="#enterprise" 
						class="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2 border-b border-gray-100"
						on:click={closeMobileMenu}
					>
						Enterprise
					</a>
					<a 
						href="#contact" 
						class="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2 border-b border-gray-100"
						on:click={closeMobileMenu}
					>
						Contact
					</a>
					<a 
						href="/signin" 
						class="block bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-semibold text-center mt-4"
						on:click={closeMobileMenu}
					>
						Sign In
					</a>
				</div>
			</div>
		{/if}
	</nav>
	
	<!-- Hero Content -->
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-20">
		<div class="max-w-5xl mx-auto">
			<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[0.9] tracking-tight">
				Secure cloud storage
				<span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mt-1 sm:mt-2">
					that just works
				</span>
			</h1>
			
			<p class="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-2">
				Enterprise-grade encrypted storage with secure sharing. Built for organizations that demand 
				<span class="font-semibold text-gray-800">privacy</span>, 
				<span class="font-semibold text-gray-800">performance</span>, and 
				<span class="font-semibold text-gray-800">compliance</span>.
			</p>
			
			<!-- Key Enterprise Information -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
				<!-- Compliance & Certifications -->
				<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
					<div class="flex items-center mb-3 sm:mb-4">
						<div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
							<svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
							</svg>
						</div>
						<h3 class="text-lg sm:text-xl font-bold text-gray-900">Enterprise Certifications</h3>
					</div>
					<p class="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">SOC 2 Type II certified, GDPR compliant, and HIPAA ready. Built to meet the most stringent enterprise security and compliance requirements.</p>
					<div class="flex items-center text-xs sm:text-sm text-gray-500">
						<svg class="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Swiss data sovereignty guaranteed</span>
					</div>
				</div>
				
				<!-- Global Infrastructure -->
				<div class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
					<div class="flex items-center mb-3 sm:mb-4">
						<div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
							<svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
							</svg>
						</div>
						<h3 class="text-lg sm:text-xl font-bold text-gray-900">Global Infrastructure</h3>
					</div>
					<p class="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Swiss-based infrastructure with 99.9% uptime SLA. Data centers in Zurich and Geneva ensure low latency and maximum reliability for European operations.</p>
					<div class="flex items-center text-xs sm:text-sm text-gray-500">
						<svg class="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Multi-region redundancy & failover</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Advanced Floating Elements -->
	<div class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
	<div class="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-lg animate-pulse" style="animation-delay: 1s;"></div>
	<div class="absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-xl animate-pulse" style="animation-delay: 2s;"></div>
	<div class="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-blue-500/20 rounded-full blur-lg animate-pulse" style="animation-delay: 3s;"></div>
	
	<!-- Geometric Shapes -->
	<div class="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl rotate-45 animate-pulse" style="animation-delay: 0.5s;"></div>
	<div class="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl rotate-12 animate-pulse" style="animation-delay: 1.5s;"></div>
</section>
