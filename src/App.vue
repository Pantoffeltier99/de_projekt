<script setup>
import { ref } from 'vue';
import Mobileheader from './components/Mobileheader.vue'; // unterschiedliche Header für mobile und Desktop
import Webheader from './components/Webheader.vue';
import Sidebar from './components/Sidebar.vue';
import { useMonitorSize } from './composables/useMonitorsize.ts';
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
  <div>
    <Sidebar v-if="sizes.isMobile.value && sidebarOpen" @close="sidebarOpen = false" />
    <div
        v-if="sidebarOpen"
        class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        @click="sidebarOpen = false"
      ></div>
    <Mobileheader v-if="sizes.isMobile.value" @open-sidebar="sidebarOpen = true" />
    <Webheader v-else />
    <router-view />  <!--Inhalt der geöffneten Seite, wird aus der main.ts geladen--> 
  </div>
</template>

<style scoped>
</style>
