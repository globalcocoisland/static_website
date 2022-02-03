<template>
    <div
        ref="mainNavigation"
        class="fixed top-0 left-0 z-40 w-full main-navigation"
        :class=" { 'is-scrolled' : scrollPosition >= mainNavHeight }"
    >
        <div class="container px-4 py-4">
            <div class="flex flex-row items-end justify-between w-full">
                <div id="logo">
                    <a v-scroll-to="'#home'" href="javascript:void(0)"></a>
                </div>
                <menu-list/>
            </div>
        </div>
    </div>
</template>

<script>
    import menuList from '~/components/main-navigation/_menu.vue';

    export default {
        components: {
            menuList,
        },
		data() {
			return {
				mainNavHeight: '',
				scrollPosition: null,
			}
		},
		mounted() {
			window.addEventListener('scroll', this.updateScroll)
			window.addEventListener('resize', this.findMainNavHeight);
			this.updateScroll();
			this.findMainNavHeight();
		},
		destroyed() {
			window.removeEventListener('scroll', this.updateScroll)
			window.removeEventListener('resize', this.findMainNavHeight);
		},
		methods: {
			findMainNavHeight() {
				this.mainNavHeight = this.$refs.mainNavigation.clientHeight;
			},
			updateScroll() {
				this.scrollPosition = window.scrollY;
			}
		}
    }
</script>

<style lang="postcss">
    .main-navigation {
        @apply transition duration-500 ease-linear;
    }

    #logo a {
        @apply block focus:outline-none;
        @apply bg-accent-white;

        height: 40px;
        width: 91px;
        mask-size: 91px 40px;
        mask-image: url('~/assets/img/global/coco-island-logo.svg');
        mask-repeat: no-repeat;

        @media screen and (min-width: 768px) {
            height: 64px;
            width: 145px;
            mask-size: 145px 64px;
        }
    }

    .main-navigation.is-scrolled {
        @apply bg-accent-white;

        box-shadow: 0 4px 20px rgba(0, 0, 0, .1);

        & #logo a {
            @apply bg-black-100;
        }

        & #menu-toggle .icon-menu {
            @apply bg-black-100;
        }

        & .menu .menu--list {
            @apply text-accent-black;

            &:hover {
                @apply text-brand-primary;

                &::after {
                    @apply bg-brand-primary;
                }
            }
        }
    }
</style>