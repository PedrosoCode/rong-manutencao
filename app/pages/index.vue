<script setup lang="ts">
useSeoMeta({
  title: 'Empresa | Soluções Profissionais',
  description:
    'Conheça nossos serviços e descubra como podemos ajudar seu negócio com soluções modernas e eficientes.',
  ogTitle: 'Empresa | Soluções Profissionais',
  ogDescription:
    'Conheça nossos serviços e descubra como podemos ajudar seu negócio.',
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://seusite.com/'
    }
  ]
})
</script>

<template>
  <main>

    <HomeHero />

    <HomeServices />

    <HomeFeatures />

    <HomeFaq />

    <HomeCTA />

  </main>
</template>