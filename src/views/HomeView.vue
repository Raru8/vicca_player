<template>
    <div class="mb-6">
        <h5 class="mb-7">Resents</h5>
        <ResentsCards/>
    </div>

    <div class="mb-6">
        <h5 class="mb-7">Trending</h5>
        <div class="flex justify-between">
            <div v-for="(data, index) in storeHome.trending.slice(0,5)" :key="index">
                <TrendingCards :items="data"/>
            </div>
        </div>
    </div>

    <div class="mb-6">
        <h5 class="mb-7">New Releases</h5>
        <div class="flex justify-between">
            <div v-for="(data, index) in storeHome.new_releases.slice(0,4)" :key="index">
                <NewReleasesCard :items="data"/>
            </div>
        </div>

    </div>
</template>

<script>
import ResentsCards from "@/components/cards/ResentsCards.vue";
import TrendingCards from "@/components/cards/TrendingCards.vue";
import NewReleasesCard from "@/components/cards/NewReleasesCard.vue";
import {useStoreHome} from "@/stores/home";

export default {
    name: "HomeView",
    components: {
        ResentsCards,
        TrendingCards,
        NewReleasesCard
    },

    created() {
        this.loadHome()
    },

    setup() {
        const storeHome = useStoreHome()
        return {
            storeHome
        }
    },

    methods: {
        loadHome() {
            this.storeHome.loadHome()
                .then((response) => {
                    const data = response.data
                    this.storeHome.trending = data.playlists
                    this.storeHome.new_releases = data.albums
                })
        }
    }
}

</script>
