<script setup lang="ts">
import MainNavbar from '~/components/reusable/MainNavbar.vue';
import MainFooter from '~/components/reusable/MainFooter.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">

    <MainNavbar />

    <main class="flex-1">
      <NuxtPage />
    </main>

    <MainFooter />

  </div>
</template>