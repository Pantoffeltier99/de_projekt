<script setup>
import { ref } from 'vue';
import Mobileheader from './components/Mobileheader.vue';
import Webheader from './components/Webheader.vue';

const sizes = useMonitorSize();
</script>

<template>
  <div>
    <router-view />  <!--Inhalt der geöffneten Seite, wird aus der main.ts geladen--> 
    <Mobileheader v-if="sizes.isMobile.value" />
    <Webheader v-else />
  </div>
</template>

<style scoped>
</style>
