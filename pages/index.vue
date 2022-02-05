<template>
	<div id="home">
		<main-navigation />
		<floating-wa-button />
		<hero-banner/>
		<home-about-us id="homeAbout"/>
		<home-mini-banner/>
		<home-product id="homeProduct"/>
		<home-gallery id="homeGallery"/>
		<home-contact id="homeContact"/>
		<my-footer/>
	</div>
</template>

<script>
	import mainNavigation from '~/components/main-navigation/main-navigation.vue';
	import floatingWaButton from '~/components/partials/floating-button-wa.vue';
	import heroBanner from '~/components/hero-banner/hero-banner.vue';
	import homeAboutUs from '~/components/sections/home-about-us.vue';
	import homeMiniBanner from '~/components/sections/home-mini-banner.vue';
	import homeProduct from '~/components/sections/home-product.vue';
	import homeGallery from '~/components/sections/home-galery.vue';
	import homeContact from '~/components/sections/home-contact.vue';
	import myFooter from '~/components/partials/footer.vue';

	export default {
		components: {
			mainNavigation,
			floatingWaButton,
			heroBanner,
			homeAboutUs,
			homeMiniBanner,
			homeProduct,
			homeGallery,
			homeContact,
			myFooter
		},
	}
</script>

HeroBanner