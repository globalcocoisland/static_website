<template>
    <div class="container px-4 py-8 xl:py-20">
        <div class="md:grid md:grid-cols-7 md:gap-4 lg:grid-cols-12 lg:items-center">
            <div class="body md:col-span-4 lg:col-span-6 lg:col-start-2">
                <div class="body-container">
                    <h2 class="text-2xl font-bold text-accent-black md:text-3xl lg:text-4xl font-display">
                        About Us
                    </h2>
                    <p class="pt-2 text-sm text-justify text-black-100 lg:text-base lg:pt-4 md:text-left">
                        Global coco island is a complete service provider engaged in plantations specifically processed and supply raw materials from fresh coconut to processed coconut products.
                    </p>
                    <p class="pt-2 text-sm text-justify text-black-100 lg:text-base lg:pt-4 md:text-left">
                        In our country there are millions of coconut trees scattered almost all over the country. It is not difficult to find coconut trees in our country. Along the coasts and mainland areas of our country, coconut trees dominate among all types of long-lived trees.
                    </p>
                    <p class="pt-2 text-sm text-justify text-black-100 lg:text-base lg:pt-4 md:text-left">
                        We ensure exceptional quality in every shipment of goods we make.
                    </p>
                </div>
                <div class="quality-list">
                    <div class="quality-list-badge">
                        <img
                            src="~/assets/img/homepage/badge-best-quality.svg"
                            alt="Kualitas Produk Terbaik"
                            width="72"
                            height="72"
                        />
                        <p>Best Product<br/>Quality</p>
                    </div>
                    <div class="quality-list-badge">
                        <img
                            src="~/assets/img/homepage/badge-bali-island.svg"
                            alt="Produksi Kebanggan Lokal"
                            width="94"
                            height="72"
                        />
                        <p>Local Pride<br/>Production</p>
                    </div>
                    <div class="quality-list-badge">
                        <img
                            src="~/assets/img/homepage/badge-international-delivery.svg"
                            alt="Pengiriman ke Seluruh Dunia"
                            width="83"
                            height="72"
                        />
                        <p>Worldwide<br/>Shipping</p>
                    </div>
                </div>
                <div class="flex flex-row flex-wrap items-center justify-start pt-8 btn-group lg:pt-10">
                    <a
                        v-scroll-to="{
                            el: '#homeProduct',
                            offset: offsets
                        }"
                        href="javascript:void(0)"
                        class="mr-2 button button-primary lg:mr-3">
                            Our Produts
                    </a>
                    <a href="https://wa.me/6285737428956?text=Halo%20Global%20Coco%20Island%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda" target="_blank" class="button button-ghost-black">Contact Us</a>
                </div>
            </div>
            <div class="hidden image md:block md:col-span-3 lg:col-span-4">
                <img
                    src="~/assets/img/homepage/home-about-us-img-01.jpg"
                    alt=""
                    class="md:w-full md:h-full md:object-cover lg:h-auto"
                />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                offsets: '',
            }
        },
        mounted() {
            window.addEventListener('resize', this.scrollOffset);
            this.scrollOffset();
        },
        destroyed() {
            window.addEventListener('resize', this.scrollOffset);
        },
        methods: {
            scrollOffset() {
                this.offsets = -document.querySelector('.main-navigation').clientHeight
            },
        }
    }
</script>

<style lang="postcss" scoped>
    .body-container {
        @media screen and (min-width: 1024px) {
            max-width: 520px;
        }
    }

    .quality-list {
        @apply grid grid-cols-3 gap-4 pt-5;

        @media screen and (min-width: 1024px) {
            @apply grid-cols-3;

            max-width: 520px;
        }
    }

    .quality-list-badge  {
        & p {
            @apply font-medium text-black-100 text-xs sm:text-sm text-center md:text-left;
            @apply pt-3;

            line-height: 150%;
        }

        & img {
            @apply mx-auto md:mx-0;
        }
    }
</style>