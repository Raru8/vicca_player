<template>
    <router-link :to="{name: 'trending', params:{id: items.id}}">
        <div class="w-36">
            <div class="h-36 w-36 rounded-lg shadow-2xl overflow-hidden">
                <img class="object-cover" :src="items.image[1].link" alt="">
            </div>
            <p class="text-[10px] font-semibold text-center mt-1 truncate">{{ items.title }}</p>
        </div>
    </router-link>
</template>

<script>

export default {
    name: "TrendingCards",
    props: {
        items: {
            default: [],
        }
    }

}
</script>

<style scoped>

</style>