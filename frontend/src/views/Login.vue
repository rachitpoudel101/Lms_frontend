<template>
  <div class="flex justify-center items-center min-h-[calc(100vh-80px)] p-8">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
      <form class="space-y-4">
        <div>
          <label for="email" class="block mb-2 font-semibold text-gray-700">Email:</label>
          <input type="email" id="email" v-model="email" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
        </div>
        <div>
          <label for="password" class="block mb-2 font-semibold text-gray-700">Password:</label>
          <input type="password" id="password" v-model="password" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
        </div>
        <button type="submit" class="w-full p-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-200">Login</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('')
    const password = ref('')

    return {
      email,
      password
    }
  }
})
</script>