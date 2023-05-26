<template>
    <div class="w-48">
        <div class="h-48 rounded-lg shadow-lg overflow-hidden">
            <img class="object-cover" :src="items.image[2].link" alt="">
        </div>
        <p class="text-xs font-semibold text-left mt-1 truncate">{{ items.name }}</p>
        <p class="text-xs text-slate-600 font-semibold text-left  mt-1 truncate">{{ items.artists[0].name }}</p>
    </div>

</template>

<script>
export default {
    name: "NewReleasesCard",
    props: {
        items: {
            default: []
        }
    }
}
</script>

<style scoped>

</style>