<template>
    <div class="w-full h-16 flex items-center justify-between">
        <div class="text-3xl">
            <i class="ti ti-chevron-left mr-2"></i>
            <i class="ti ti-chevron-right ml-2"></i>
        </div>
        <div>
            <input class="h-[40px] w-72 bg-white rounded-lg outline-0 pl-4" placeholder="&#xeb1c; Search">
        </div>
        <div class="flex items-center">
            <p>Victor</p>
            <div class="rounded-[50%] h-[35px] w-[35px] overflow-hidden bg-white ml-2">
                <img src="@/assets/avatar.png" alt="Avatar">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "HeaderComponent"
}
</script>

<style scoped>
input::placeholder {
    font-family: "Poppins", "tabler-icons", sans-serif;
}
</style>