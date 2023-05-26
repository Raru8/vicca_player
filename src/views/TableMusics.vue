<template>

    <div class="flex" v-for="(data, index) in dados" :key="index">

        <img :src="data.image[1].link" alt="">
        <p>{{ data.name }}</p>
        <button @click="playOn(data.downloadUrl[4].link)">Play nessa</button>

    </div>

</template>

<script>
import {useStoreHome} from "@/stores/home"

export default {
    name: "TableMusics",

    props: {
        id: {
            required: true
        }
    },

    created() {
        this.loadPlaylist()
    },

    setup() {
        const store = useStoreHome()
        return {
            store
        }
    },

    data() {
        return {
            url: this.$route.query.url,

            formData: {
                id: this.id
            },

            dados: []

        }
    },

    methods: {

        loadPlaylist() {
            this.store.loadPlaylist({...this.params})
                .then(r => {
                    console.log(r.data.songs)
                    this.dados = r.data.songs
                    console.log(this.dados)
                })
        },

        playOn(song) {
            this.store.current_music = song
        }
    },

    computed: {

        params() {
            return {
                id: this.id
            }
        }

    }
}
</script>

<style scoped>

</style>