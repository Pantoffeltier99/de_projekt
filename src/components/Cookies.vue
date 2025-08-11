<template>
  <div v-if="cookieStore.cookiesAccepted === null" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
      <h2 class="text-xl font-bold mb-4">Cookies</h2>
      <p class="mb-6">Wir verwenden Cookies. Stimmen sie zu?</p>
      <div class="flex justify-center gap-4">
        <button @click="accept" class="px-4 py-2 bg-green-500 text-white rounded">Akzeptieren</button>
        <button @click="reject" class="px-4 py-2 bg-red-500 text-white rounded">Ablehnen</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCookieStore } from '@/stores/cookieStore'

const cookieStore = useCookieStore()

function accept() {
  cookieStore.acceptCookies()
}
function reject() {
  cookieStore.rejectCookies()
}
</script>