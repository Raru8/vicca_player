<template>
    <nav class="h-full w-[250px] fixed left-0">
        <div class="p-8">
            <img src="@/assets/logo.png" alt="Logo">
        </div>

        <div class="mt-14 px-6 text-white font-extralight">
            <p class="mb-7 text-lg">Menu</p>
            <ul class="text-lg">
                <li class="mb-10"><i class="ti ti-home"></i> Home</li>
                <li class="mb-10"><i class="ti ti-folders"></i> Your Library</li>
                <li class="mb-10"><i class="ti ti-playlist"></i> Playlists</li>
                <li class="mb-10"><i class="ti ti-heart"></i> Liked Songs</li>
            </ul>
        </div>

    </nav>
</template>

<script>
export default {
    name: "NavMenuComponent",
}
</script>

<style scoped>
nav {
    background: #113C4A;
}

i.ti {
    font-size: 1.25rem;
    line-height: 1.75rem;
}
</style>