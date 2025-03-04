<!-- I wanna make navbar in every page so ı import here -->

<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Navbar />
  <RouterView />
</template>
