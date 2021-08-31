<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../tailwind.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	:global(header) {
		font-size: 3rem;
	}
</style>
