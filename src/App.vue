<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
</script>

<template>
  <div>
    <Header /> <!-- Header-Komponente, immer oben zu sehen -->
    <router-view />  <!--Inhalt der geöffneten Seite, wird aus der main.ts geladen--> 
  </div>
</template>

<style scoped>
</style>
