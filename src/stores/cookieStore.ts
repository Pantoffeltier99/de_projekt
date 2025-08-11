import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCookieStore = defineStore('cookie', () => {
  const cookiesAccepted = ref<boolean | null>(null)

  function acceptCookies(): void {
    cookiesAccepted.value = true
    localStorage.setItem('cookiesAccepted', 'true')
  }

  function rejectCookies(): void {
    cookiesAccepted.value = false
    localStorage.setItem('cookiesAccepted', 'false')
  }

  function loadFromStorage(): void {
    const saved = localStorage.getItem('cookiesAccepted')
    if (saved === 'true') cookiesAccepted.value = true
    else if (saved === 'false') cookiesAccepted.value = false
    else cookiesAccepted.value = null
  }

  return {
    cookiesAccepted,
    acceptCookies,
    rejectCookies,
    loadFromStorage
  }
})
