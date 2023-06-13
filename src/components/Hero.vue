<script setup lang="ts">
</script>

<template>
  <div class="home-container">
    <header class="pt-8 mx-auto w-3/4 max-w-9xl text-white 2xl:pt-16">
      <nav class="flex justify-between items-center h-14 px-2">
        <div>
          <h1 class="font-bold text-xl 2xl:text-3xl">Logo</h1>
        </div>
        <div class="space-x-2 2xl:space-x-4">
          <a href="#" class="text-sm 2xl:text-lg">About</a>
          <a href="#" class="text-sm 2xl:text-lg">Services</a>
          <a href="#" class="text-sm 2xl:text-lg">Case Studies</a>
          <a href="#" class="text-sm 2xl:text-lg">Testimonials</a>
          <a href="#" class="text-sm 2xl:text-lg">Contact</a>
          <router-link to ="/login" class="bg-white text-black text-sm px-6 py-2 2xl:text-lg rounded 2xl:px-14 2xl:py-4">Login</router-link>
        </div>
      </nav>
    </header>
    <main>
      <div class="w-1/2 pl-32 pt-28 2xl:pl-48 2xl:pt-44">
        <h1 class="text-4xl 2xl:text-6xl font-bold text-white mb-4 2xl:leading-tight 2xl:mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting.</h1>
        <p class="text-secondary text-sm mb-4 2xl:text-lg 2xl:w-3/4 2xl:mb-8">Our products are fully custom made, built with the latest technologies and cloud architecture.</p>
        <button class="bg-white text-black text-lg px-6 py-2 rounded-full 2xl:text-xl 2xl:px-8 2xl:py-4 2xl:mb-8">Getting Started >></button>
      </div>
    </main>
  </div>
  </template>
  
  <script>
  export default {
    name: 'Hero',
  };
  </script>
  
  <style scoped>
 
.home-container{
  background-image: url('../assets/Mask Group 4.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>