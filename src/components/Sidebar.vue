<template>
    <div class="flex flex-col h-screen shadow-lg">
        <div class="flex-grow">
            <div class="flex flex-col justify-between h-full">
                <div class="flex flex-col">
                    <a class="flex flex-col items-center justify-center w-40 h-32 p-2 rounded-lg transition duration-300 ease-in-out shadow-lg">
                        <img src="../assets/metrics.svg" alt="Icon" class="w-12 h-12">
                        <span class="ml-2">Dashboard</span>
                    </a>
                
                    <a class="flex flex-col items-center justify-center w-40 h-32 p-2 rounded-lg transition duration-300 ease-in-out hover:shadow-lg">
                        <img src="../assets/analytics.svg" alt="Icon" class="w-12 h-12">
                        <span class="ml-2">Analytics</span>
                    </a>
                
                    <a class="flex flex-col items-center justify-center w-40 h-32 p-2 rounded-lg transition duration-300 ease-in-out hover:shadow-lg">
                        <img src="../assets/currency-exchange-2.svg" alt="Icon" class="w-12 h-12">
                        <span class="ml-2">Trading</span>
                    </a>
                
                    <a class="flex flex-col items-center justify-center w-40 h-32 p-2 rounded-lg transition duration-300 ease-in-out hover:shadow-lg">
                        <img src="../assets/sound-wave.svg" alt="Icon" class="w-12 h-12">
                        <span class="mt-2">Notifications</span>
                    </a>
                </div>
                <div class="p-4">
                    <a class="flex flex-col items-center justify-center w-40 h-32 p-2 rounded-lg transition duration-300 ease-in-out hover:shadow-lg">
                        <img src="../assets/logout.svg" alt="Icon" class="w-12 h-12">
                        <span class="mt-2">Logout</span>
                    </a>
                </div>
            </div>
      </div>
    </div>
</template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        activeOption: 'sidebar',
      };
    },
    };
  </script>
  
  <style>
  
  /* Additional styling specific to the sidebar if needed */
  </style>
  