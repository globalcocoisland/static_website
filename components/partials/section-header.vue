<template>
    <div class="section-header">
        <slot name="header"></slot>
        <slot name="excerpt"></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="postcss" scoped>
    .section-header {
        @apply mx-auto pb-6 lg:pb-10;

        max-width: 634px;
    }
</style>