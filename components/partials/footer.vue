<template>
    <div class="bg-brand-primary">
        <div class="container px-4 py-8 md:py-5">
            <div class="grid grid-cols-12 gap-4 md:items-center">
                <div class="col-span-12 pb-4 md:col-span-6 lg:col-span-5 lg:col-start-2 md:pb-0">
                    <small class="block text-sm text-center md:text-left text-accent-white">Global Coco Island &copy;2022</small>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-5">
                    <ul class="flex flex-row flex-wrap items-center justify-center w-full md:justify-end">
                        <li>
                            <a href="#" target="_blank">
                                <i class="icon social-media-24 facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i class="icon social-media-24 instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i class="icon social-media-24 twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i class="icon social-media-24 linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
    li {
        @apply ml-4;

        &:first-child {
            @apply ml-0;
        }

        & a {
            @apply block cursor-pointer;

            width: 24px;
            height: 24px;
        }
    }

    i.social-media-24 {
        @apply bg-accent-white;
    }
</style>