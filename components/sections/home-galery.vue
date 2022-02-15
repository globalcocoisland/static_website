<template>
    <div class="bg-gray-100 gallery-wrapper">
        <div class="container px-4 py-8 xl:py-20">
            <section-header class="text-center">
                <template #header>
                    <h2 class="text-2xl font-bold text-accent-black md:text-3xl lg:text-4xl font-display">
                        Photo Gallery
                    </h2>
                </template>
                <!-- <template #excerpt>
                    <p class="pt-2 text-sm text-black-100 lg:text-base lg:pt-4">
                        Ut aliquet tempus tempus. Quisque ante quam, egestas et dictum ut, tempor congue risus. In at erat volutpat, rhoncus tortor nec, faucibus arcu.
                    </p>
                </template> -->
            </section-header>
            <div class="grid w-full grid-cols-12 gap-4">
                <div class="relative col-span-12 lg:col-span-10 lg:col-start-2">
                    <swiper
                        ref="topSlider"
                        :options="mainSwiperOptions"
                        class="swiper main-slider"
                    >
                        <swiper-slide v-for="(gallery, index) in photos" :key="'MainSlider' + index">
                            <div class="image">
                                <img :src="require(`~/assets/img/gallery/${gallery.src}`)" :alt="`${ gallery.description }`"/>
                            </div>
                        </swiper-slide>
                    </swiper>
                        <div slot="button-next" class="swiper-button-next swiper-button-white">
                            <i class="icon-outline chevron-right bg-accent-white"></i>
                        </div>
                        <div slot="button-prev" class="swiper-button-prev swiper-button-white">
                            <i class="icon-outline chevron-left bg-accent-white"></i>
                        </div>
                </div>
            </div>
            <div class="grid w-full grid-cols-12 gap-4 pt-4">
                <div class="col-span-12 lg:col-span-10 lg:col-start-2">
                    <swiper
                        ref="bottomSlider"
                        :options="thumbnailSwiperOptions"
                        class="swiper thumb-slider"
                    >
                        <swiper-slide v-for="(gallery, index) in photos" :key="'ThumbSlider' + index">
                            <div class="image">
                                <img :src="require(`~/assets/img/gallery/thumbs/${gallery.src}`)"/>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import sectionHeader from '~/components/partials/section-header.vue';
    import 'swiper/css/swiper.css'

    export default {
        components: {
            sectionHeader,
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                mainSwiperOptions: {
                    loop: true,
                    loopedSlides: 6,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                },
                thumbnailSwiperOptions: {
                    loop: true,
                    loopedSlides: 6,
                    centeredSlides: true,
                    slideToClickedSlide: true,
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    touchRatio: 0.2,
                    // breakpoints: {
                    //     1024: {
                    //         slidesPerView: 'auto',
                    //     }
                    // }
                },
                photos: [
                    {
                        src: 'gallery-01.jpg',
                        description: 'Gallery-01.'
                    },
                    {
                        src: 'gallery-02.jpg',
                        description: 'Gallery-02.'
                    },
                    {
                        src: 'gallery-03.jpg',
                        description: 'Gallery-03.'
                    },
                    {
                        src: 'gallery-04.jpg',
                        description: 'Gallery-04.'
                    },
                    {
                        src: 'gallery-05.jpg',
                        description: 'Gallery-05.'
                    },
                    {
                        src: 'gallery-06.jpg',
                        description: 'Gallery-06.'
                    },
                ]
            }
        },
        mounted() {
            this.$nextTick(() => {
                const mainSlider = this.$refs.topSlider.$swiper
                const thumbSlider = this.$refs.bottomSlider.$swiper
                mainSlider.controller.control = thumbSlider
                thumbSlider.controller.control = mainSlider
            });
            // const mainSlider = this.$refs.mainSlider.swiper
            // const thumbSlider = this.$refs.thumbSlider.swiper
            // mainSlider.controller.control = thumbSlider
            // thumbSlider.controller.control = mainSlider

        }
    }
</script>

<style lang="postcss" scoped>
    .swiper-button-white {
        @apply hidden lg:block;
        @apply md:rounded-full;

        font-size: 0;
        text-indent: -9999px;

        @media screen and (min-width: 1024px) {
            background: linear-gradient(180deg, #1095B3 0%, #169AB7 100%);
            box-shadow: 0 2px 8px rgba(16, 149, 178, 0.2), 0 4px 16px rgba(0, 0, 0, 0.08);
            height: 40px;
            width: 40px;
        }

        & i {
            @apply absolute top-1/2 left-1/2;
            @apply transform -translate-x-1/2 -translate-y-1/2;
        }
    }

    .swiper-button-prev {
        @media screen and (min-width: 1024px) {
            left: -60px;
        }
    }

    .swiper-button-next {
        @media screen and (min-width: 1024px) {
            right: -60px;
        }
    }

    .main-slider .image {
        @apply aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-2 relative;
    }

    .thumb-slider .swiper-slide {
        @apply w-1/4 opacity-60 cursor-pointer;
        @apply transition-all duration-300 ease-linear;

        @media screen and (min-width: 1024px) {
            @apply w-1/4;
        }

        &.swiper-slide-active {
            @apply opacity-100;
        }
    }

    .thumb-slider .image {
        @apply aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-2 relative;
    }

    .image img {
        @apply w-full h-full object-cover object-center;
    }
</style>