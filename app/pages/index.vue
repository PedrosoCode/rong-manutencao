<script setup lang="ts">
import MainNavbar from '~/components/reusable/MainNavbar.vue';

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

        <MainNavbar></MainNavbar>

        <div class="
        min-h-screen
        bg-[#292e47]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:40px_40px]
">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="py-30">
                    <div class="flex flex-col items-center gap-16 lg:flex-row lg:justify-center">

                        <!-- Texto -->
                        <div class="max-w-2xl">

                            <div class="text-5xl font-extrabold leading-tight text-white lg:text-7xl">
                                ELETRICIDADE <br>
                                COM RIGOR <br>
                                E SEGURANÇA.
                            </div>

                            <div class="mt-8 max-w-xl text-lg leading-8 text-gray-300">
                                Instalações, reparos e manutenção elétrica residencial e comercial.
                                Profissional certificado, orçamento transparente, trabalho garantido.
                            </div>

                            <div class="mt-10 flex flex-wrap gap-4">
                                <button
                                    class="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300">
                                    Solicitar orçamento
                                </button>

                                <button
                                    class="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black">
                                    Nossos serviços
                                </button>

                                <button
                                    class="rounded-lg border border-gray-500 px-6 py-3 font-semibold text-gray-300 transition hover:border-white hover:text-white">
                                    WhatsApp
                                </button>
                            </div>

                            <div class="mt-10 flex flex-col gap-3 text-gray-300 sm:flex-row sm:flex-wrap sm:gap-8">
                                <span>✔ CRT-SP Certificado</span>
                                <span>✔ NR10 Qualificado</span>
                                <span>✔ Orçamento transparente</span>
                            </div>

                        </div>

                        <!-- Imagem -->
                        <div class="flex justify-center lg:w-1/2">
                            <img src="../assets/logo_large.jpg"
                                class="max-w-md drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)]">
                        </div>

                    </div>
                </div>
            </div>
        </div>



    </main>
</template>