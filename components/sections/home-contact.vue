<template>
    <div class="container px-4 py-8 xl:py-20">
        <div class="grid grid-cols-12 gap-6 lg:gap-4 lg:items-center">
            <div class="col-span-12 lg:col-span-4 lg:col-start-2">
                <section-header class="header">
                    <template #header>
                        <h2 class="text-2xl font-bold text-accent-black md:text-3xl lg:text-4xl font-display">
                            Contact Us
                        </h2>
                    </template>
                    <template #excerpt>
                        <p class="pt-2 text-sm text-black-100 lg:text-base lg:pt-4">
                            Kawanan Street, Sawan District, Buleleng, Bali
                        </p>
                    </template>
                </section-header>
                <ul class="contact-menu">
                    <li>
                        <a href="https://www.google.com/maps/place/Yayasan+ANAK+-+Lila+Cita+Sawan/@-8.1408551,115.1760352,19.82z/data=!4m5!3m4!1s0x2dd191f7aeef3bd1:0xfe6fdd44081caf80!8m2!3d-8.1409468!4d115.1763356?hl=en" target="_blank">
                            <i class="icon-solid location-marker"></i>
                            <span>Find on google maps</span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:+6285935130763">
                            <i class="icon-solid device-mobile"></i>
                            <span>+62 859-3513-0763</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:putuadisutrisna1988@gmail.com">
                            <i class="icon-solid mail"></i>
                            <span>putuadisutrisna1988@gmail.com</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:bambangsuparwa56@gmail.com">
                            <i class="icon-solid mail"></i>
                            <span>bambangsuparwa56@gmail.com</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/6285737428956?text=Halo%20Global%20Coco%20Island%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda" target="_blank">
                            <i class="icon-solid whatsapp"></i>
                            <span>Chat us on WhatsApp</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-span-12 lg:col-span-6 lg:pl-4">
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe
                            id="gmap_canvas"
                            width="600"
                            height="500"
                            src="https://maps.google.com/maps?q=-8.1381156,115.1747524&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import sectionHeader from '~/components/partials/section-header.vue'

    export default {
        components: {
            sectionHeader
        }
    }
</script>

<style lang="postcss" scoped>
    .header {
        @apply ml-0 mr-auto pb-4;
    }

    .icon-solid {
        @apply bg-accent-black mr-3;
    }

    .contact-menu {
        & li {
            @apply text-sm py-1;

            & a {
                @apply flex flex-row flex-wrap justify-start items-center;
                @apply cursor-pointer text-accent-black;
                @apply py-2;

                &:hover {
                    @apply md:hover:text-brand-primary;

                    & .icon-solid {
                        @apply bg-brand-primary;
                    }
                }
            }
        }
    }

    .gmap_canvas {
        position: relative;
        padding-top: 125%;

        @media screen and (min-width: 768px) {
            padding-top: 64.9350649351%;
        }
    }

    iframe {
        @apply absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2;
        @apply w-full h-full;
    }
</style>