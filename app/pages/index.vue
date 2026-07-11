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

        <section class="bg-white">
            <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">

                <!-- Cabeçalho -->
                <div class="max-w-3xl">

                    <span class="font-semibold uppercase tracking-widest text-yellow-500">
                        O que fazemos
                    </span>

                    <h2 class="mt-4 text-4xl font-extrabold leading-tight text-[#292e47] lg:text-6xl">
                        Nossos serviços
                    </h2>

                    <p class="mt-6 text-lg leading-8 text-gray-600">
                        Consulte-nos para outros serviços e soluções em projetos elétricos.
                        Atendemos residências, comércios e pequenas indústrias com foco
                        em segurança, qualidade e acabamento profissional.
                    </p>

                </div>

                <!-- Cards -->
                <div class="mt-16 grid gap-8 md:grid-cols-2">

                    <div
                        class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

                        <div class="mb-5 h-1 w-16 rounded-full bg-yellow-400"></div>

                        <h3 class="text-2xl font-bold text-[#292e47]">
                            Instalações e Reparos Elétricos
                        </h3>

                        <p class="mt-4 leading-7 text-gray-600">
                            Iluminação, tomadas, ventiladores, chuveiros e interruptores
                            com execução segura, organizada e seguindo as normas técnicas.
                        </p>

                    </div>

                    <div
                        class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

                        <div class="mb-5 h-1 w-16 rounded-full bg-yellow-400"></div>

                        <h3 class="text-2xl font-bold text-[#292e47]">
                            Quadros de Energia (QDC)
                        </h3>

                        <p class="mt-4 leading-7 text-gray-600">
                            Montagem, modernização e balanceamento de carga.
                            Instalação de disjuntores DIN, DR e DPS para maior proteção.
                        </p>

                    </div>

                    <div
                        class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

                        <div class="mb-5 h-1 w-16 rounded-full bg-yellow-400"></div>

                        <h3 class="text-2xl font-bold text-[#292e47]">
                            Circuitos Específicos
                        </h3>

                        <p class="mt-4 leading-7 text-gray-600">
                            Infraestrutura dedicada para ar-condicionado, fornos e fogões
                            por indução, com dimensionamento correto e sem improvisações.
                        </p>

                    </div>

                    <div
                        class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

                        <div class="mb-5 h-1 w-16 rounded-full bg-yellow-400"></div>

                        <h3 class="text-2xl font-bold text-[#292e47]">
                            Eletromecânica
                        </h3>

                        <p class="mt-4 leading-7 text-gray-600">
                            Instalação e manutenção de motores monofásicos,
                            trifásicos e portões eletrônicos.
                        </p>

                    </div>

                </div>

                <!-- CTA -->
                <div
                    class="mt-20 flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#292e47] px-10 py-12 lg:flex-row">

                    <div>

                        <h3 class="text-3xl font-bold text-white">
                            Não encontrou o que precisa?
                        </h3>

                        <p class="mt-3 text-lg text-gray-300">
                            Entre em contato. Desenvolvemos soluções sob medida para o seu projeto.
                        </p>

                    </div>

                    <button
                        class="rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-[#292e47] transition hover:bg-yellow-300">
                        Falar agora
                    </button>

                </div>

            </div>
        </section>

    </main>
</template>