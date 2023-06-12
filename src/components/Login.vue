<template>
    <div class="flex">
      <div class="w-3/5 bg-cover bg-center">
        <img src="..\assets\Group 35699.svg" alt="login" class="h-screen w-full object-cover" />
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
            <label for="password" class="block text-black font-bold mb-2">Password<span class="text-red">*</span></label>
            <input
              id="password"
              type="password"
              class="w-full h-16 px-4 py-2 border"
              required
            />
          </div>
          <div class="flex justify-center">
            <button
              type="submit"
              class="w-48 h-16 px-8 py-2 rounded-full text-blue text-xl border border-blue"
            >
              Login >>
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  
  
  
  