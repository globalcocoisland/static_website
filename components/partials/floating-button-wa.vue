<template>
    <div>
        <a
            href="https://wa.me/6285737428956?text=Halo%20Global%20Coco%20Island%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda"
            class="floating-button-wa"
            target="_blank"
        >
            <i class="wa-button"></i>
        </a>
    </div>
</template>

<style lang="postcss" scoped>
    .floating-button-wa {
        @apply flex flex-col flex-wrap items-center justify-center;
        @apply fixed rounded-full overflow-hidden z-50;

        background: linear-gradient(180deg, #5BD266 0%, #25B43C 100%);
        bottom: 30px;
        box-shadow: 0 2px 8px rgba(91, 210, 102, 0.2), 0 4px 16px rgba(0, 0, 0, 0.08);
        height: 50px;
        right: 25px;
        width: 50px;

        @media screen and (min-width: 1024px) {
            bottom: 60px;
            height: 60px;
            width: 60px;
        }

        & i {
            background: url('.~/assets/img/icons/social-media/wa-button.svg');
            background-size: cover;
            height: 30px;
            mask-position: center;
            mask-size: 30px 30px;
            width: 30px;

            @media screen and (min-width: 1024px) {
                height: 36px;
                mask-size: 36px 36px;
                width: 36px;
            }
        }
    }
</style>