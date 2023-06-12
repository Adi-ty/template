<script lang="ts">
import Sidebar from './Sidebar.vue';
export default {
    name: "Dashboard",
    components: { Sidebar }
}
</script>

<template>
    <div class="flex">
        <Sidebar />
        <header class="fixed mt-20 left-0 right-0 mx-auto max-w-7xl">
            <nav class="flex justify-between items-center px-4">
                <div class="flex flex-col items-center">
                    <span class="text-5xl">Dashboard</span>
                    <p class="text-grey2 mt-4">Welcome back, Andrew</p>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="bg-blue2 text-white shadow-lg py-4 px-8 rounded-lg mr-4">+ Add Unit</button>
                    <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="avatar" class="h-16 w-16 rounded-full" />
                    <p class="text-sm text-grey2">Andrew Johnstons</p>
                </div>
            </nav>
        </header>
        <main>

        </main>
    </div>
</template>

<style scoped>
    .flex {
        min-height: 100%;
    }
</style>
