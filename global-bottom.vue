<script setup>
import eyantraLogo from './assets/logo.png'
import iitbLogo from './assets/IITB.png'
</script>

<template>
  <template v-if="$nav.currentPage === 1">
    <img :src="iitbLogo" alt="IIT Bombay" class="fixed top-6 right-6 h-14 z-50 opacity-70 pointer-events-none select-none" />
    <img :src="eyantraLogo" alt="e-Yantra" class="fixed bottom-10 right-10 h-10 z-50 opacity-40 pointer-events-none select-none" />
  </template>
</template>
