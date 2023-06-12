<script setup lang="ts">
</script>

<template>
  <div class="fixed home-container left-0 right-0">
    <header class="fixed top-67 left-0 right-0 mx-auto max-w-screen-lg text-white">
      <nav class="flex justify-between items-center h-14 px-4">
        <div class="flex items-center">
          <span class="font-bold text-3xl">Logo</span>
        </div>
        <div class="flex items-center space-x-8">
          <a href="#" class="nav-link text-lg">About</a>
          <a href="#" class="nav-link text-lg">Services</a>
          <a href="#" class="nav-link text-lg">Case Studies</a>
          <a href="#" class="nav-link text-lg">Testimonials</a>
          <a href="#" class="nav-link text-lg">Contact</a>
          <router-link to="/login">
            <button class="bg-white hover:bg-white text-black font-bold py-4 px-14 rounded-lg">Login</button>
          </router-link>
        </div>
      </nav>
    </header>
    <main class="bg-cover bg-center max-h-fit">
      <div class="hero container mx-auto flex items-center pl-8">
      <div class="text-left left-content">
        <h1 class="text-white text-6xl font-bold mt-8 mb-8 py-2">Lorem Ipsum is simply dummy text of the printing and typesetting.</h1>
        <p class="text-secondary text-xl mb-8">Our products are fully custom made, built with the latest technologies and cloud architecture.</p>
        <button class="bg-white text-black text-2xl mx-auto py-4 px-8 rounded-full">Get Started >></button>
      </div>
    </div>
    </main>
  </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  @media (min-width: 1358px) {
    .max-w-screen-lg {
      max-width: 1358px;
    }
  }

  @media (max-width: 1920px) {
  .top-67 {
    top: 67px;
  }
}
.home-container{
  background-image: url('../assets/Mask Group 4.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.hero {
    margin-top: 226px;
    /* Add any additional styles or overrides here */
  }
  .left-content {
      width: 707px;
      height: 197px;
      /* Add any additional styles or overrides here */
  }
</style>