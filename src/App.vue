<script setup>
import { ref } from 'vue';
import Mobileheader from './components/Mobileheader.vue'; // unterschiedliche Header für mobile und Desktop
import Webheader from './components/Webheader.vue';
import Sidebar from './components/Sidebar.vue';
import { useMonitorSize } from './composables/useMonitorsize.ts';
const sizes = useMonitorSize();
const sidebarOpen = ref(false);
</script>

<template>
  <div>
    <Sidebar v-if="sizes.isMobile.value" />
    <div
        v-if="sidebarOpen"
        class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        @click="sidebarOpen = false"
      ></div>
      <aside
        v-if="sidebarOpen"
        class="fixed top-0 right-0 z-50 w-64 h-screen bg-white transition-transform"
        aria-label="Sidebar"
      ></aside>
    <Mobileheader v-if="sizes.isMobile.value" />
    <Webheader v-else />
    <router-view />  <!--Inhalt der geöffneten Seite, wird aus der main.ts geladen--> 
  </div>
</template>

<style scoped>
</style>
