<script setup>
import { ref } from 'vue';
import Mobileheader from './components/Mobileheader.vue'; // unterschiedliche Header für mobile und Desktop
import Webheader from './components/Webheader.vue';
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';
import { useMonitorSize } from './composables/useMonitorsize.ts';
import Cookies from '@/components/Cookies.vue'
import { useCookieStore } from '@/stores/cookieStore'
import ScrollToTop from '@/components/ScrollToTop.vue';

const cookieStore = useCookieStore()
cookieStore.loadFromStorage()
const sizes = useMonitorSize();
const sidebarOpen = ref(false);
import { useDark } from '@vueuse/core';
const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Cookies />
    <ScrollToTop />
    <Sidebar v-if="sizes.isMobile.value && sidebarOpen" @close="sidebarOpen = false" />
    <div
        v-if="sidebarOpen"
        class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        @click="sidebarOpen = false">
    </div>
    <Mobileheader v-if="sizes.isMobile.value" @open-sidebar="sidebarOpen = true" />
    <Webheader v-else />
    <router-view class="flex-1" />
    <Footer />
  </div>
</template>

<style scoped>
</style>
