<script setup lang="ts">
useSeoMeta({
  title: 'Sobre | Empresa',
  description:
    'Conheça nossa história, missão, valores e o compromisso em entregar soluções de qualidade.'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://seusite.com/about'
    }
  ]
})
</script>

<template>
<main>

<section class="mx-auto max-w-5xl px-6 py-24">

<h1 class="text-5xl font-bold">

Sobre Nós

</h1>

<p class="mt-8 text-lg leading-8 text-gray-600">

Nossa empresa atua oferecendo soluções profissionais com foco em qualidade,
tecnologia e relacionamento com nossos clientes.

</p>

<h2 class="mt-16 text-3xl font-bold">

Nossa Missão

</h2>

<p class="mt-4 text-gray-600 leading-8">

Criar soluções eficientes que contribuam para o crescimento dos nossos clientes.

</p>

<h2 class="mt-16 text-3xl font-bold">

Nossa Visão

</h2>

<p class="mt-4 text-gray-600 leading-8">

Ser referência no mercado pela qualidade dos serviços e pelo compromisso com resultados.

</p>

<h2 class="mt-16 text-3xl font-bold">

Nossos Valores

</h2>

<ul class="mt-6 list-disc space-y-3 pl-6 text-gray-600">

<li>Compromisso</li>

<li>Transparência</li>

<li>Inovação</li>

<li>Qualidade</li>

<li>Respeito ao cliente</li>

</ul>

</section>

</main>
</template>