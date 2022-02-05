<template>
    <div
        id="hero"
        class="relative flex flex-col items-center justify-center px-4 py-10"
    >
        <div class="container text-center text-accent-white">
            <h1 class="pb-4 text-3xl font-display md:text-4xl lg:text-5xl xl:text-6xl lg:pb-6">Global Coco Island<br/>We deliver quality</h1>
            <!-- <p class="px-8 text-sm md:w-6/12 md:mx-auto md:px-0 lg:text-base xl:text-lg">Integer fringilla eros odio, quis faucibus erat accumsan ac. In hac habitasse platea dictumst. Morbi sed lorem lobortis, lacinia ex sit amet, porttitor sem. Aliquam molestie dolor vel leo porta iaculis.</p> -->
            <div class="flex flex-row flex-wrap items-center justify-center pt-6 btn-group">
                <a
                    v-scroll-to="{
                        el: '#homeProduct',
                        offset: offsets
                    }"
                    href="javascript:void(0)"
                    class="mr-2 button button-white lg:mr-3">
                        Our Products
                </a>
                <a
                    v-scroll-to="{
                        el: '#homeContact',
                        offset: offsets
                    }"
                    href="javascript:void(0)"
                    class="button button-ghost-white">
                        Contact Us
                    </a>
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
    #hero {
        background: transparent url('~/assets/img/background/hero-background-sm.jpg');
        background-size: cover;
        background-position: center center;
        min-height: 568px;

        @media screen and (min-width: 768px) {
            background: transparent url('~/assets/img/background/hero-background-lg.jpg');
            background-size: cover;
            background-position: center center;
        }

        @media screen and (min-width: 1024px) {
            min-height: 700px;
        }

        @media screen and (min-width: 1536px) {
            background: transparent url('~/assets/img/background/hero-background-wd.jpg');
            background-size: cover;
            background-position: center center;
        }
    }

    h1 {
        line-height: 150%;
    }
</style>