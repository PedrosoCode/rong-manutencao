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
                            <img src="../assets/logo_large.jpg" class="w-11/12 sm:w-4/5 md:max-w-md h-auto">
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
        <section class="bg-gray-50">
            <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">

                <div class="grid gap-20 lg:grid-cols-2 lg:items-center">

                    <!-- Texto -->
                    <div>

                        <span class="font-semibold uppercase tracking-widest text-yellow-500">
                            Sobre
                        </span>

                        <h2 class="mt-4 text-4xl font-extrabold leading-tight text-[#292e47] lg:text-6xl">
                            QUEM FAZ O TRABALHO
                        </h2>

                        <p class="mt-8 text-lg leading-8 text-gray-600">
                            Diego Rong dos Santos é o responsável técnico da Rong
                            Manutenções. Com formação em Automação Industrial,
                            Mecânica e graduação em andamento em Engenharia
                            Mecânica, o atendimento vai além do "faz-tudo":
                            diagnóstico preciso, execução segura e resultado
                            com garantia.
                        </p>

                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            Cada serviço segue normas regulamentadoras rigorosas.
                            Você recebe orçamento claro antes de qualquer trabalho
                            começar, e o ambiente é deixado limpo e organizado
                            ao final.
                        </p>

                        <!-- Qualificações -->
                        <div class="mt-12 grid gap-5 sm:grid-cols-2">

                            <div class="flex items-start gap-3">
                                <div
                                    class="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 font-bold text-[#292e47]">
                                    ✓
                                </div>
                                <span class="text-gray-700">
                                    Técnico em Automação Industrial (Etec)
                                </span>
                            </div>

                            <div class="flex items-start gap-3">
                                <div
                                    class="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 font-bold text-[#292e47]">
                                    ✓
                                </div>
                                <span class="text-gray-700">
                                    Graduando em Engenharia Mecânica (Estácio)
                                </span>
                            </div>

                            <div class="flex items-start gap-3">
                                <div
                                    class="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 font-bold text-[#292e47]">
                                    ✓
                                </div>
                                <span class="text-gray-700">
                                    NR10 · NR12 · NR33 · NR35
                                </span>
                            </div>

                            <div class="flex items-start gap-3">
                                <div
                                    class="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 font-bold text-[#292e47]">
                                    ✓
                                </div>
                                <span class="text-gray-700">
                                    Técnico em Mecânica (CEPHAS)
                                </span>
                            </div>

                            <div class="flex items-start gap-3">
                                <div
                                    class="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 font-bold text-[#292e47]">
                                    ✓
                                </div>
                                <span class="text-gray-700">
                                    CRT-SP — Certificado e Qualificado
                                </span>
                            </div>

                            <div class="flex items-start gap-3">
                                <div
                                    class="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 font-bold text-[#292e47]">
                                    ✓
                                </div>
                                <span class="text-gray-700">
                                    Protocolo LOTO (Lockout/Tagout)
                                </span>
                            </div>

                        </div>

                    </div>

                    <!-- Imagens -->
                    <div>

                        <div class="grid grid-cols-2 gap-6">

                            <img src="../assets/quadro_1.jpg" alt="Diego Rong"
                                class="h-[420px] w-full rounded-3xl object-cover shadow-xl">

                            <img src="../assets/quadro_2.jpg" alt="Serviço realizado"
                                class="mt-12 h-[420px] w-full rounded-3xl object-cover shadow-xl">

                        </div>

                        <div class="mt-10 rounded-2xl border-l-4 border-yellow-400 bg-white p-8 shadow-lg">

                            <p class="text-lg italic leading-8 text-[#292e47]">
                                "Não somos um faz-tudo. Cada serviço segue protocolos
                                técnicos específicos, com segurança para você e sua
                                família."
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
        <section class="bg-white">
            <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">

                <!-- Cabeçalho -->
                <div class="max-w-3xl">

                    <span class="font-semibold uppercase tracking-widest text-yellow-500">
                        Portfólio
                    </span>

                    <h2 class="mt-4 text-4xl font-extrabold leading-tight text-[#292e47] lg:text-6xl">
                        TRABALHOS REALIZADOS
                    </h2>

                    <p class="mt-6 text-lg leading-8 text-gray-600">
                        Qualidade que você vê antes de contratar.
                    </p>

                </div>

                <!-- Projetos -->
                <div class="mt-16 grid gap-10 lg:grid-cols-2">

                    <!-- Card -->
                    <article
                        class="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                        <div class="overflow-hidden">
                            <img src="../assets/quadro_3.jpg" alt="Inspeção de quadro elétrico"
                                class="h-80 w-full object-cover transition duration-500 group-hover:scale-105">
                        </div>

                        <div class="p-8">

                            <h3 class="text-2xl font-bold text-[#292e47]">
                                Inspeção de quadro com multímetro
                            </h3>

                            <p class="mt-4 leading-7 text-gray-600">
                                Medição e análise de corrente para identificação de
                                falhas, garantindo um diagnóstico preciso e seguro.
                            </p>

                        </div>

                    </article>

                    <!-- Card -->
                    <article
                        class="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                        <div class="overflow-hidden">
                            <img src="../assets/quadro_4.jpg" alt="Montagem de quadro de distribuição"
                                class="h-80 w-full object-cover transition duration-500 group-hover:scale-105">
                        </div>

                        <div class="p-8">

                            <h3 class="text-2xl font-bold text-[#292e47]">
                                Montagem de quadro de distribuição
                            </h3>

                            <p class="mt-4 leading-7 text-gray-600">
                                Disjuntores Siemens, barramento organizado, identificação
                                dos circuitos e acabamento profissional.
                            </p>

                        </div>

                    </article>

                </div>

                <!-- CTA -->
                <div class="mt-20 text-center">

                    <p class="text-lg text-gray-600">
                        Quer um serviço com esse mesmo padrão de qualidade?
                    </p>

                    <button
                        class="mt-8 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-[#292e47] transition hover:bg-yellow-300">
                        Solicitar orçamento
                    </button>

                </div>

            </div>
        </section>
        <section class="overflow-hidden bg-[#292e47]">
            <div class="mx-auto max-w-7xl px-6 py-20 lg:px-8">

                <!-- Cabeçalho -->
                <div class="max-w-3xl">

                    <span class="font-semibold uppercase tracking-widest text-yellow-400">
                        Contato
                    </span>

                    <h2 class="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl">
                        SOLICITE SEU ORÇAMENTO
                    </h2>

                    <p class="mt-6 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                        Descreva o que você precisa. Resposta rápida e sem compromisso.
                    </p>

                </div>

                <div class="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">

                    <!-- Informações -->
                    <div class="space-y-5">

                        <div class="flex min-w-0 gap-4 rounded-2xl bg-white/5 p-5 sm:p-6">
                            <div
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-xl text-[#292e47]">
                                📱
                            </div>

                            <div class="min-w-0">
                                <h3 class="font-semibold text-white">
                                    WhatsApp
                                </h3>

                                <p class="mt-1 break-words text-gray-300">
                                    (12) 99645-4531
                                </p>

                                <span class="text-sm text-yellow-400">
                                    Resposta rápida
                                </span>
                            </div>
                        </div>

                        <div class="flex min-w-0 gap-4 rounded-2xl bg-white/5 p-5 sm:p-6">
                            <div
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-xl text-[#292e47]">
                                📷
                            </div>

                            <div class="min-w-0">
                                <h3 class="font-semibold text-white">
                                    Instagram
                                </h3>

                                <p class="mt-1 break-words text-gray-300">
                                    @rongmanutencao
                                </p>
                            </div>
                        </div>

                        <div class="flex min-w-0 gap-4 rounded-2xl bg-white/5 p-5 sm:p-6">
                            <div
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-xl text-[#292e47]">
                                ✉️
                            </div>

                            <div class="min-w-0">
                                <h3 class="font-semibold text-white">
                                    E-mail
                                </h3>

                                <p class="mt-1 break-all text-gray-300">
                                    rong.manutencoes@gmail.com
                                </p>
                            </div>
                        </div>

                        <div class="flex min-w-0 gap-4 rounded-2xl bg-white/5 p-5 sm:p-6">
                            <div
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-xl text-[#292e47]">
                                📍
                            </div>

                            <div class="min-w-0">
                                <h3 class="font-semibold text-white">
                                    Atendimento
                                </h3>

                                <p class="mt-1 break-words text-gray-300">
                                    São José dos Campos e Vale do Paraíba
                                </p>
                            </div>
                        </div>

                    </div>

                    <!-- Formulário -->
                    <form class="w-full rounded-3xl bg-white p-5 shadow-2xl sm:p-8">

                        <div class="grid gap-6">

                            <div>
                                <label class="mb-2 block font-medium text-[#292e47]">
                                    Nome
                                </label>

                                <input type="text" placeholder="Seu nome"
                                    class="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400">
                            </div>

                            <div>
                                <label class="mb-2 block font-medium text-[#292e47]">
                                    Telefone
                                </label>

                                <input type="text" placeholder="(12) 99999-9999"
                                    class="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400">
                            </div>

                            <div>
                                <label class="mb-2 block font-medium text-[#292e47]">
                                    Tipo de serviço
                                </label>

                                <select
                                    class="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400">
                                    <option selected disabled>
                                        Selecione uma opção
                                    </option>

                                    <option>Instalação elétrica</option>
                                    <option>Reparo / Curto-circuito</option>
                                    <option>Quadro de Energia (QDC)</option>
                                    <option>Circuito para Ar-condicionado</option>
                                    <option>Eletromecânica / Motores</option>
                                    <option>Outro</option>
                                </select>
                            </div>

                            <div>
                                <label class="mb-2 block font-medium text-[#292e47]">
                                    Mensagem
                                </label>

                                <textarea rows="5" placeholder="Descreva seu problema ou serviço desejado..."
                                    class="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"></textarea>
                            </div>

                            <button
                                class="mt-2 w-full rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-[#292e47] transition hover:bg-yellow-300">
                                Enviar solicitação
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </section>

    </main>
</template>