<script lang="ts">
	import { onMount } from 'svelte';
	
	interface FormData {
		name: string;
		email: string;
		company: string;
		phone: string;
		message: string;
		interest: string;
	}
	
	interface FormErrors {
		name?: string;
		email?: string;
		company?: string;
		message?: string;
	}
	
	let formData: FormData = {
		name: '',
		email: '',
		company: '',
		phone: '',
		message: '',
		interest: ''
	};
	
	let isSubmitting = false;
	let submitStatus = '';
	let errors: FormErrors = {};
	
	const interestOptions = [
		'Enterprise Security',
		'Compliance & Auditing',
		'API Integration',
		'Custom Deployment',
		'Support & Training',
		'Other'
	];
	
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
		
		if (!formData.company.trim()) {
			errors.company = 'Company is required';
		}
		
		if (!formData.message.trim()) {
			errors.message = 'Message is required';
		}
		
		return Object.keys(errors).length === 0;
	}
	
	async function handleSubmit(event: Event): Promise<void> {
		event.preventDefault();
		
		if (!validateForm()) {
			return;
		}
		
		isSubmitting = true;
		submitStatus = '';
		
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData)
			});
			
			if (response.ok) {
				submitStatus = 'success';
				formData = { name: '', email: '', company: '', phone: '', message: '', interest: '' };
			} else {
				submitStatus = 'error';
			}
		} catch (error) {
			console.error('Form submission error:', error);
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section id="contact" class="py-12 sm:py-16 md:py-20 pb-20 sm:pb-24 md:pb-32 bg-white scroll-mt-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12 sm:mb-16">
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
				Get in touch
			</h2>
			<p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
				Ready to secure your enterprise data? Our team is here to help you get started.
			</p>
		</div>
		
		<div class="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
			<!-- Contact Info -->
			<div class="space-y-6 sm:space-y-8">
				<div>
					<h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Let's discuss your needs</h3>
					<p class="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
						Whether you're looking to enhance your security posture, meet compliance requirements, or integrate VStorage into your existing infrastructure, we're here to help.
					</p>
				</div>
				
				<div class="space-y-4 sm:space-y-6">
					<div class="flex items-start space-x-3 sm:space-x-4">
						<div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
							</svg>
						</div>
						<div>
							<h4 class="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email Us</h4>
							<p class="text-gray-600 text-sm sm:text-base">contact@vstorage.ch</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-3 sm:space-x-4">
						<div class="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
							</svg>
						</div>
						<div>
							<h4 class="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Call Us</h4>
							<p class="text-gray-600 text-sm sm:text-base">+41 44 202 53 89</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-3 sm:space-x-4">
						<div class="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
							</svg>
						</div>
						<div>
							<h4 class="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Corporate Headquarters</h4>
							<p class="text-gray-600 text-sm sm:text-base">Bahnhofstrasse 45, 8001 Zurich, Switzerland</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-3 sm:space-x-4">
						<div class="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
							</svg>
						</div>
						<div>
							<h4 class="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Response Time</h4>
							<p class="text-gray-600 text-sm sm:text-base">Within 24 hours</p>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Contact Form -->
			<div class="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
				<form on:submit={handleSubmit} class="space-y-4 sm:space-y-6">
					<!-- Name -->
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700 mb-2">
							Full Name *
						</label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							class="w-full px-3 sm:px-4 py-3 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base {errors.name ? 'border-red-300' : ''}"
							placeholder="Enter your full name"
						/>
						{#if errors.name}
							<p class="mt-1 text-sm text-red-600">{errors.name}</p>
						{/if}
					</div>
					
					<!-- Email -->
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
							Work Email *
						</label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							class="w-full px-3 sm:px-4 py-3 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base {errors.email ? 'border-red-300' : ''}"
							placeholder="your.email@company.com"
						/>
						{#if errors.email}
							<p class="mt-1 text-sm text-red-600">{errors.email}</p>
						{/if}
					</div>
					
					<!-- Company -->
					<div>
						<label for="company" class="block text-sm font-medium text-gray-700 mb-2">
							Company *
						</label>
						<input
							type="text"
							id="company"
							bind:value={formData.company}
							class="w-full px-3 sm:px-4 py-3 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base {errors.company ? 'border-red-300' : ''}"
							placeholder="Your company name"
						/>
						{#if errors.company}
							<p class="mt-1 text-sm text-red-600">{errors.company}</p>
						{/if}
					</div>
					
					<!-- Phone -->
					<div>
						<label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
							Phone Number
						</label>
						<input
							type="tel"
							id="phone"
							bind:value={formData.phone}
							class="w-full px-3 sm:px-4 py-3 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
							placeholder="+41 44 202 53 89"
						/>
					</div>
					
					<!-- Interest -->
					<div>
						<label for="interest" class="block text-sm font-medium text-gray-700 mb-2">
							Area of Interest
						</label>
						<select
							id="interest"
							bind:value={formData.interest}
							class="w-full px-3 sm:px-4 py-3 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
						>
							<option value="">Select an option</option>
							{#each interestOptions as option}
								<option value={option}>{option}</option>
							{/each}
						</select>
					</div>
					
					<!-- Message -->
					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
							Message *
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							rows="4"
							class="w-full px-3 sm:px-4 py-3 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-base {errors.message ? 'border-red-300' : ''}"
							placeholder="Tell us about your requirements and how we can help..."
						></textarea>
						{#if errors.message}
							<p class="mt-1 text-sm text-red-600">{errors.message}</p>
						{/if}
					</div>
					
					<!-- Submit Button -->
					<button
						type="submit"
						disabled={isSubmitting}
						class="w-full bg-gray-900 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center text-base"
					>
						{#if isSubmitting}
							<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Sending...
						{:else}
							Send Message
						{/if}
					</button>
					
					<!-- Status Messages -->
					{#if submitStatus === 'success'}
						<div class="bg-green-50 border border-green-200 rounded-xl p-4">
							<div class="flex items-center">
								<svg class="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
								</svg>
								<p class="text-green-800 font-medium">Message sent successfully! We'll get back to you within 24 hours.</p>
							</div>
						</div>
					{:else if submitStatus === 'error'}
						<div class="bg-red-50 border border-red-200 rounded-xl p-4">
							<div class="flex items-center">
								<svg class="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
								</svg>
								<p class="text-red-800 font-medium">There was an error sending your message. Please try again.</p>
							</div>
						</div>
					{/if}
				</form>
			</div>
		</div>
	</div>
</section>
