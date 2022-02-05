<template>
    <nav role="navigation" :class="{ 'is-expanded' : menuToggleState }">
        <div id="menu-toggle" @click.prevent="menuToggle()">
            <i class="icon icon-outline icon-x"></i>
            <i class="icon icon-outline icon-menu"></i>
        </div>
        <div class="menu-container">
            <ul class="px-4 menu">
                <li
                    v-scroll-to="'#home'"
                    class="menu--list"
                    @click="menuToggle()">
                        Home
                </li>
                <li
                    v-scroll-to="{
                        el: '#homeAbout',
                        offset: offsets
                    }"
                    class="menu--list"
                    @click="menuToggle()">
                        About Us
                </li>
                <li
                    v-scroll-to="{
                        el: '#homeProduct',
                        offset: offsets
                    }"
                    class="menu--list"
                    @click="menuToggle()">
                        Our Products
                </li>
                <li
                    v-scroll-to="{
                        el: '#homeGallery',
                        offset: offsets
                    }"
                    class="menu--list"
                    @click="menuToggle()">
                        Photo Gallery
                </li>
                <li
                    v-scroll-to="{
                        el: '#homeContact',
                        offset: offsets
                    }"
                    class="menu--list"
                    @click="menuToggle()">
                        Contact Us
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                offsets: '',
                menuToggleState: false
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
            menuToggle() {
                this.menuToggleState = !this.menuToggleState;
            },
            scrollOffset() {
                this.offsets = -document.querySelector('.main-navigation').clientHeight
            },
        }
    }
</script>

<style lang="postcss" scoped>
    #menu-toggle {
        @apply w-10 h-10;
        @apply absolute top-1/2 right-4 z-50;
        @apply transform -translate-y-1/2;

        @media screen and (min-width: 768px) {
            @apply hidden;
        }

        & .icon-x,
        & .icon-menu {
            @apply absolute top-1/2 left-1/2;
            @apply transform -translate-x-1/2 -translate-y-1/2;
            @apply transition ease-in duration-200;
            @apply bg-accent-white;
        }

        & .icon-x {
            @apply opacity-0 rotate-45;
        }
    }

    .menu-container {
        @apply fixed z-40 top-0 right-0 w-10/12 h-full bg-accent-white;

        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
        padding-top: 72px;
        transform-origin: 0% 0%;
        transform: translate(110%, 0);
        transition: transform 0.5s cubic-bezier( .77, .2, .05, 1.0 );

        @media screen and (min-width: 768px) {
            @apply relative top-auto right-auto w-auto bg-opacity-0;

            box-shadow: none;
            padding-top: 0;
            transform: none !important;
        }

        &::before {
            @apply bg-brand-primary w-full;
            @apply absolute top-0 left-0;

            content: '';
            height: 72px;

            @media screen and (min-width: 768px) {
                @apply hidden;
            }
        }

        & .menu {
            @apply pt-6;

            @media screen and (min-width: 768px) {
                @apply flex flex-row justify-start items-center flex-wrap;
            }
        }

        & .menu--list {
            @apply relative;
            @apply py-2 block cursor-pointer;
            @apply text-right font-medium text-xl lg:text-base;
            @apply transition duration-150 ease-linear;

            @media screen and (min-width: 768px) {
                @apply text-accent-white text-sm;
                @apply ml-6;
            }

            &:first-child {
                @apply ml-0;
            }

            &::after {
                @apply bg-accent-white;
                @apply absolute bottom-0 left-1/2;
                @apply rounded-full;
                @apply transition-all duration-150 ease-linear;
                @apply transform -translate-x-1/2 origin-left;

                content: '';
                height: 2px;
                width: 0;
            }

            &:hover::after {
                width: 40px;
            }
        }
    }

    nav.is-expanded {
        & #menu-toggle {
            & .icon-menu {
                @apply opacity-0;
            }

            & .icon-x {
                @apply transform -translate-x-1/2 -translate-y-1/2 rotate-0 opacity-100;
            }
        }

        & .menu-container {
            transform: none;
        }
    }
</style>
