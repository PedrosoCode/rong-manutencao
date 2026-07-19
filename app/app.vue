<script setup lang="ts">
import MainNavbar from '~/components/reusable/MainNavbar.vue';
import MainFooter from '~/components/reusable/MainFooter.vue';
import { SITE_URL, SITE_NAME, OG_IMAGE } from '~/utils/seo';

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        name: SITE_NAME,
        image: OG_IMAGE,
        url: SITE_URL,
        telephone: '+5512996454531',
        email: 'administrativo@rongmanutencoes.com.br',
        description:
          'Serviços elétricos residenciais, comerciais e industriais em São José dos Campos e Vale do Paraíba, com orçamento transparente, certificados e Nota Fiscal eletrônica.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'São José dos Campos',
          addressRegion: 'SP',
          addressCountry: 'BR',
        },
        areaServed: [
          { '@type': 'City', name: 'São José dos Campos' },
          { '@type': 'AdministrativeArea', name: 'Vale do Paraíba' },
        ],
        founder: {
          '@type': 'Person',
          name: 'Diego Rong dos Santos',
        },
        sameAs: [
          'https://instagram.com/rongmanutencoes',
        ],
      }),
    },
  ],
})
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