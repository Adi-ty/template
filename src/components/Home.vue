<script lang="ts">
import Hero from './Hero.vue';
import About from './About.vue';
export default {
  name: 'Home',
  components: {
    Hero,
    About,
  },
};
</script>

<template>
<div>
  <Hero />
  <About />
</div>    
</template>
  
  
<style scoped>

</style>