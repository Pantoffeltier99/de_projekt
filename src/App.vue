<script setup>
import { ref } from 'vue';
import Mobileheader from './components/Mobileheader.vue'; // unterschiedliche Header für mobile und Desktop
import Webheader from './components/Webheader.vue';
import { useMonitorSize } from './composables/useMonitorsize.ts';
const sizes = useMonitorSize();
</script>

<template>
  <div>
    <Mobileheader v-if="sizes.isMobile.value" />
    <Webheader v-else />
     <router-view />  <!--Inhalt der geöffneten Seite, wird aus der main.ts geladen--> 
  </div>
</template>

<style scoped>
</style>
