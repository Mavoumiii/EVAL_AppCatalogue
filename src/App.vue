<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="d-flex flex-column min-vh-100 bg-warning-subtle app-bg">
    <Navbar />

    <main class="flex-grow-1">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
