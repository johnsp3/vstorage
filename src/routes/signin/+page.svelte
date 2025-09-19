<script lang="ts">
	import { onMount } from 'svelte';
	
	interface FormData {
		name: string;
		email: string;
		verificationCode: string;
	}
	
	interface FormErrors {
		name?: string;
		email?: string;
		verificationCode?: string;
		general?: string;
	}
	
	let formData: FormData = {
		name: '',
		email: '',
		verificationCode: ''
	};
	
	let errors: FormErrors = {};
	let isSubmitting = false;
	let showError = false;
	
	function validateForm(): boolean {
		errors = {};
		
		if (!formData.name.trim()) {
			errors.name = 'Name is required';
		}
		
		if (!formData.email.trim()) {
			errors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			errors.email = 'Please enter a valid email address';
		}
		
		if (!formData.verificationCode.trim()) {
			errors.verificationCode = 'Verification code is required';
		} else if (!/^\d{6}$/.test(formData.verificationCode)) {
			errors.verificationCode = 'Verification code must be 6 digits';
		}
		
		return Object.keys(errors).length === 0;
	}
	
	async function handleSubmit(event: Event) {
		event.preventDefault();
		
		if (!validateForm()) {
			return;
		}
		
		isSubmitting = true;
		showError = false;
		
		// Simulate API call delay
		await new Promise(resolve => setTimeout(resolve, 1500));
		
		// Always show "no account found" error
		showError = true;
		errors.general = 'No account found with these credentials. Please check your information or contact support.';
		
		isSubmitting = false;
	}
	
	function clearError() {
		showError = false;
		errors.general = '';
	}
</script>

<svelte:head>
	<title>Sign In - VStorage</title>
	<meta name="description" content="Sign in to your VStorage account to access your secure cloud storage." />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<!-- Header -->
		<div class="text-center">
			<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl mb-6">
				<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
					<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
				</svg>
			</div>
			<h1 class="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
				Sign In to VStorage
			</h1>
			<p class="mt-2 text-gray-600">
				Access your secure cloud storage account
			</p>
		</div>

		<!-- Sign In Form -->
		<div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
			<form on:submit={handleSubmit} class="space-y-6">
				<!-- Name Field -->
				<div>
					<label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
						Full Name
					</label>
					<input
						id="name"
						type="text"
						bind:value={formData.name}
						on:input={clearError}
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 {errors.name ? 'border-red-500' : ''}"
						placeholder="Enter your full name"
						required
					/>
					{#if errors.name}
						<p class="mt-1 text-sm text-red-600">{errors.name}</p>
					{/if}
				</div>

				<!-- Email Field -->
				<div>
					<label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
						Email Address
					</label>
					<input
						id="email"
						type="email"
						bind:value={formData.email}
						on:input={clearError}
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 {errors.email ? 'border-red-500' : ''}"
						placeholder="Enter your email address"
						required
					/>
					{#if errors.email}
						<p class="mt-1 text-sm text-red-600">{errors.email}</p>
					{/if}
				</div>

				<!-- Verification Code Field -->
				<div>
					<label for="verificationCode" class="block text-sm font-semibold text-gray-700 mb-2">
						Verification Code
					</label>
					<input
						id="verificationCode"
						type="text"
						bind:value={formData.verificationCode}
						on:input={clearError}
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 {errors.verificationCode ? 'border-red-500' : ''}"
						placeholder="Enter 6-digit verification code"
						maxlength="6"
						pattern="[0-9]{6}"
						required
					/>
					{#if errors.verificationCode}
						<p class="mt-1 text-sm text-red-600">{errors.verificationCode}</p>
					{/if}
					<p class="mt-1 text-xs text-gray-500">
						Enter the 6-digit code sent to your email during registration
					</p>
				</div>

				<!-- General Error Message -->
				{#if showError && errors.general}
					<div class="bg-red-50 border border-red-200 rounded-lg p-4">
						<div class="flex">
							<div class="flex-shrink-0">
								<svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
								</svg>
							</div>
							<div class="ml-3">
								<p class="text-sm text-red-800">{errors.general}</p>
							</div>
						</div>
					</div>
				{/if}

				<!-- Submit Button -->
				<button
					type="submit"
					disabled={isSubmitting}
					class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{#if isSubmitting}
						<div class="flex items-center justify-center">
							<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Signing In...
						</div>
					{:else}
						Sign In
					{/if}
				</button>
			</form>

			<!-- Additional Links -->
			<div class="mt-6 text-center space-y-4">
				<div class="text-sm text-gray-600">
					Don't have an account? 
					<a href="/#contact" class="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
						Contact us to get started
					</a>
				</div>
				<div class="text-sm text-gray-600">
					<a href="/" class="font-semibold text-gray-600 hover:text-gray-500 transition-colors">
						← Back to Homepage
					</a>
				</div>
			</div>
		</div>

		<!-- Security Notice -->
		<div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
			<div class="flex">
				<div class="flex-shrink-0">
					<svg class="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
					</svg>
				</div>
				<div class="ml-3">
					<p class="text-sm text-blue-800">
						<strong>Secure Access:</strong> Your credentials are protected with enterprise-grade encryption and zero-knowledge architecture.
					</p>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	/* Custom focus styles */
	input:focus {
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
	}
	
	/* Smooth transitions */
	* {
		transition: all 0.2s ease-in-out;
	}
</style>
