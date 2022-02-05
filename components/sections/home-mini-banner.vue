<template>
    <div class="container px-4">
        <div class="relative mini-banner-wrapper">
            <div class="absolute left-0 z-20 grid w-full grid-cols-12 gap-2 lg:gap-4 bottom-10 mini-banner-body md:bottom-1/2 md:transform md:translate-y-1/2">
                <div class="col-span-10 col-start-2 header lg:col-span-5 lg:col-start-2">
                    <h2 class="text-2xl font-bold lg:text-4xl font-display xl:text-5xl xl:leading-snug text-accent-white">Premium Quality from Indonesia</h2>
                </div>
                <div class="col-span-10 col-start-2 body lg:grid lg:grid-cols-10 lg:col-start-2 lg:gap-4">
                    <p class="text-sm text-accent-white lg:text-base lg:col-span-6">We develop a network of farmers across the coconut plantations that we manage. We ensure readiness in our processing plants, to produce the best products with international quality.</p>
                    <div class="mt-4 btn-group lg:col-span-4 lg:text-center">
                        <a href="https://www.google.com/maps/place/Yayasan+ANAK+-+Lila+Cita+Sawan/@-8.1408551,115.1760352,19.82z/data=!4m5!3m4!1s0x2dd191f7aeef3bd1:0xfe6fdd44081caf80!8m2!3d-8.1409468!4d115.1763356?hl=en" target="_blank" class="inline-block button button-white">Get direction</a>
                    </div>
                </div>
            </div>
            <div class="relative z-10 image"></div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="postcss" scoped>
    .image {
        @apply w-full;

        background: transparent url('~/assets/img/background/mini-banner-location-background-sm.jpg');
        background-size: cover;
        background-position: center center;
        min-height: 450px;

        @media screen and (min-width: 768px) {
            background: transparent url('~/assets/img/background/mini-banner-location-background-lg.jpg');
            background-size: cover;
            background-position: center center;
            min-height: 320px;
        }

        @media screen and (min-width: 1024px) {
            min-height: 480px;
        }
    }
</style>