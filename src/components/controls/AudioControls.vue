<template>
    <div class="fixed bottom-0 right-0 h-20 width-audio-controls bg-[#113C4A]">
        <audio :src="current_music"></audio>
        <div>
            <input class="music-slide" type="range" min="0" max="100" value="0">
            <div class="range-progress"></div>
        </div>

        <div class="w-full h-full flex pt-2">

            <div class="w-1/4 h-full bg-amber-800">a</div>

            <div class="text-2xl w-1/2 h-full flex items-center justify-between text-white">
                <button class="">
                    <i class="ti ti-arrows-shuffle"></i>
                </button>

                <button class="">
                    <i class="ti ti-player-track-prev"></i>
                </button>

                <button class="btn-play h-12 w-12 rounded-full bg-white text-black">
                    <i v-if="isPlaying" class="ti ti-player-pause"></i>
                    <i v-else class="ti ti-player-play"></i>
                </button>

                <button class="">
                    <i class="ti ti-player-track-next"></i>
                </button>

                <button class="">
                    <i class="ti ti-repeat"></i>
                </button>
            </div>

            <div class="w-1/4 h-full bg-red-400">b</div>

        </div>

    </div>
</template>

<script>
import {useStoreHome} from "@/stores/home";

export default {
    name: "AudioControls",

    data() {
        return {
            isPlaying: false
        }
    },

    setup() {
        const store = useStoreHome()

        return {
            store
        }
    },

    methods: {
        playOn() {
            let audio = document.querySelector('audio')
            audio.src = this.current_music
            setTimeout(() => {
                audio.play()
                this.isPlaying = true
            }, 100)
        }
    },

    mounted() {
        let audio = document.querySelector('audio')
        let btn_play = document.querySelector('.btn-play')

        btn_play.addEventListener('click', () => {

            if (this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }

            this.isPlaying = !this.isPlaying

        })

        setInterval(() => {
            const audio = document.querySelector('audio');
            const duration = audio.duration;
            const currentTime = audio.currentTime;
            const progress = (currentTime / duration) * 100;

            const range = document.querySelector('input[type="range"]');
            const rangeProgress = document.querySelector('.range-progress');

            range.value = progress;
            rangeProgress.style.width = `${range.value}%`;
        }, 1000)
    },

    computed: {
        current_music() {
            return this.store.current_music
        }
    },

    watch: {
        current_music(newValue) {
            console.log(newValue)
            this.playOn()
        }
    }

}
</script>

<style scoped>
.width-audio-controls {
    width: calc(100% - 250px);
}

input[type=range].music-slide {
    position: absolute;
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    background-color: #DDDDDD;
    outline: none;
    margin: 0;
    padding: 0;
}

input[type=range].music-slide:hover input[type=range].music-slide::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    cursor: pointer;
}

input[type=range].music-slide::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #1DB954;
}

input[type=range].music-slide::-moz-range-thumb {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #1DB954;
}

input[type=range].music-slide:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 2px rgba(29, 185, 84, 0.5);
}

input[type=range].music-slide::-moz-range-track {
    height: 10px;
    background-color: #535353;
    border-radius: 5px;
    border: none;
}

.range-progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 8px;
    width: 0;
    background-color: #1DB954;
    z-index: 0;
}

</style>