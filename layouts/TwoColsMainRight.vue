<template>
    <div class="slidev-layout split-main-right">
        <div class="left">
            <slot />
        </div>
        <div class="right">
            <slot name="right" />
        </div>
    </div>
</template>

<style scoped>
.split-main-right {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
}
</style>