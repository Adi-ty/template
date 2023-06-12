<script lang="ts">
const imageUrl = new URL(`/src/assets/Group 35699.svg`, import.meta.url).href
export default {
  name: "Login",
  data() {
    return {
      imageUrl,
    };
  },
};
</script>

<template>
    <div class="flex">
      <div class="w-3/5 bg-cover bg-center">
        <img :src="imageUrl" alt="loginImg" class="h-screen w-full object-cover" />
        <!-- <img src="../assets/Group 35699.svg" alt="loginImg" class="h-screen w-full object-cover" /> -->
      </div>
      <div class="w-2/5 flex items-center justify-center">
        <form class="w-96">
          <h1 class="font-bold text-3xl mb-8">Login to Access Dashboard</h1>
          <div class="mb-8">
            <label for="email" class="block text-black font-bold mb-2">Email<span class="text-red">*</span></label>
            <input
              id="email"
              type="email"
              class="w-full h-16 px-4 py-2 border"
              required
            />
          </div>
          <div class="mb-8">
            <label for="password" class="flex space-x-40 text-black font-bold mb-2">
              Password<span class="text-red">*</span>
              <p class="text-red">Forgot Password?</p>
            </label>
            <input
              id="password"
              type="password"
              class="w-full h-16 px-4 py-2 border"
              required
            />
          </div>
          <div class="flex justify-center">
            <router-link to="/dashboard">
              <button
                type="submit"
                class="w-48 h-16 px-8 py-2 rounded-full text-blue text-xl border border-blue"
              >
                Login >>
              </button>
            </router-link>
            
          </div>
        </form>
      </div>
    </div>
  </template>
  
  
  
  
  