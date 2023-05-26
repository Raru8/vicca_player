<template>
    <NavMenuComponent/>
    <div class="float-right h-full width-container py-5 px-12 mb-20">
        <HeaderComponent/>
        <router-view/>
    </div>
    <AudioControls/>
</template>

<script>
import NavMenuComponent from "@/components/nav/NavMenuComponent.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import AudioControls from "@/components/controls/AudioControls.vue";

export default {
    name: "MainComponent",

    components: {
        NavMenuComponent,
        HeaderComponent,
        AudioControls
    }
}
</script>

<style scoped>
.width-container {
    width: calc(100% - 250px);
}
</style>