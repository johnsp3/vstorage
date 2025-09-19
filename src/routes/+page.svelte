<script>
	import HeroSection from '$lib/components/HeroSection.svelte';
	import FeaturesSection from '$lib/components/FeaturesSection.svelte';
	import AppPreview from '$lib/components/AppPreview.svelte';
	import SecuritySection from '$lib/components/SecuritySection.svelte';
	import EnterpriseSection from '$lib/components/EnterpriseSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>VStorage - Secure Cloud Storage & Sharing</title>
	<meta name="description" content="End-to-end encrypted cloud storage with secure sharing. Built for professionals who demand privacy and performance." />
</svelte:head>

<main class="min-h-screen bg-white text-gray-900">
	<HeroSection />
	<FeaturesSection />
	<AppPreview />
	<SecuritySection />
	<EnterpriseSection />
	<ContactSection />
	<Footer />
</main>
