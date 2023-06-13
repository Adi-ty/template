<script lang="ts">
const imageUrl = new URL(`/src/assets/Group 35699.svg`, import.meta.url).href
export default {
  name: "About",
  data() {
    return {
      imageUrl,
    };
  },
};
</script>

<template>
    <div class="flex mt-16">
      <div class="w-3/5 bg-cover bg-center">
        <img :src="imageUrl" alt="loginImg" class="h-[108vh] w-full object-cover" />
        <!-- <img src="../assets/Group 35699.svg" alt="loginImg" class="h-screen w-full object-cover" /> -->
      </div>
      <div class="flex flex-col w-2/5 pl-24 items-start justify-center">
        <h2 class="text-blue text-base 2xl:text-2xl font-bold mb-1 2xl:mb-2">ABOUT US</h2>
        <span class="font-bold text-lg 2xl:text-4xl mb-1 2xl:mb-8">Greate Digital Agency</span>
        <p class="w-4/5 2xl:w-3/4 font-semibold 2xl:text-lg mb-1 2xl:mb-8">Our products are fully custom-made, built with the latest 
        technologies and cloud-architectures.</p>
        <p class="w-4/5 2xl:w-3/4 text-sm mb-2 2xl:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex 
          odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique 
          senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non 
          aliquam.</p>
        <button class="border border-blue rounded-full px-4 py-2">Getting Started >></button> 
      </div>
    </div>
  </template>
  
  
  
  
  