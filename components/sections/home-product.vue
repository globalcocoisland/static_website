<template>
    <div class="container px-4 py-8 xl:py-20">
        <section-header class="text-center">
            <template #header>
                <h2 class="text-2xl font-bold text-accent-black md:text-3xl lg:text-4xl font-display">
                    Our Products
                </h2>
            </template>
            <template #excerpt>
                <p class="pt-2 text-sm text-black-100 lg:text-base lg:pt-4">
                    Ut aliquet tempus tempus. Quisque ante quam, egestas et dictum ut, tempor congue risus. In at erat volutpat, rhoncus tortor nec, faucibus arcu.
                </p>
            </template>
        </section-header>

        <div class="product-group">
            <div
                v-for="(product, index) in products" :key="index"
                class="product-list md:grid md:grid-cols-12 md:gap-4"
            >
                <div class="pb-3 image md:col-span-6 md:pb-0 lg:col-span-5">
                    <img 
                        :src="require(`~/assets/img/products/${product.image}`)"
                        class="w-full h-auto"
                    />
                </div>
                <div class="p-2 lg:px-8 group md:col-span-6 md:self-center lg:col-span-5">
                    <div class="pb-3 body lg:pb-6">
                        <h3 class="pb-2 text-lg font-bold lg:pb-3 md:text-2xl lg:text-3xl font-display text-black-100">{{ product.name }}</h3>
                        <p class="text-sm leading-loose text-accent-black">{{ product.description }}</p>
                    </div>
                    <div class="btn-group">
                        <a :href="`${product.link}`" class="button button-primary">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import sectionHeader from '~/components/partials/section-header.vue';

    export default {
        components: {
            sectionHeader
        },
        data() {
            return {
                products: [
                    {
                        name: 'Fresh Coconut',
                        description: 'Fresh coconut is the first product produced by coconut farmers in the form of fresh coconuts. Fresh coconut consists of meat and coconut water which can be consumed directly without processing.',
                        image: 'product-buah-kelapa-lg.jpg',
                        link: 'test'
                    },
                    {
                        name: 'Coconut Oil',
                        description: 'Coconut oil is a vegetable oil extracted from the flesh of the coconut fruit. Based on the extraction technique, coconut oil can be grouped into three types: Virgin Coconut Oil (VCO), Non-RBD Coconut Oil, and RBD Coconut Oil.',
                        image: 'product-minyak-kelapa-lg.jpg',
                        link: ''
                    },
                    {
                        name: 'Briquette',
                        description: 'Charcoal briquettes are an alternative fuel used for cooking, especially for grilling foodstuffs, and smoking shisha pipes. Coconut charcoal briquettes can produce more heat than coal or charcoal briquettes from mangroves. In addition, briquettes from coconut charcoal are also safer, environmentally friendly, because they do not damage plants such as mangroves and cause less smoke.',
                        image: 'product-arang-kelapa-lg.jpg',
                        link: ''
                    },
                ]
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .product-list {
        @apply mb-8;

        @media screen and (min-width: 768px) {
            @apply mb-10;
        }

        &:nth-child(odd) {
            & .image {
                @media screen and (min-width: 1024px) {
                    @apply col-start-2;
                }
            }

        }

        &:nth-child(even) {
            & .image {
                @media screen and (min-width: 768px) {
                    order: 2;
                }
            }

            & .group {
                @media screen and (min-width: 768px) {
                    order: 1;
                }

                @media screen and (min-width: 1024px) {
                    @apply col-start-2;
                }
            }
        }

        &:last-of-type {
            @apply mb-0;
        }
    }
</style>