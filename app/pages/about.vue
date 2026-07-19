<script setup lang="ts">
import { SITE_URL, OG_IMAGE } from '~/utils/seo'

const title = 'Sobre a Rong Manutenções | Eletricista Certificado em São José dos Campos'
const description =
    'Conheça a Rong Manutenções: responsável técnico certificado (CRT-SP), normas regulamentadoras NR10, NR12, NR33, NR35 e SEP, e atendimento elétrico em São José dos Campos e Vale do Paraíba.'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: `${SITE_URL}/about/`,
    ogImage: OG_IMAGE,
    ogImageAlt: 'Rong Manutenções — serviços elétricos',
    ogLocale: 'pt_BR',
    ogSiteName: 'Rong Manutenções',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: OG_IMAGE,
    robots: 'index, follow',
})

useHead({
    link: [
        {
            rel: 'canonical',
            href: `${SITE_URL}/about/`
        }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Início',
                        item: `${SITE_URL}/`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Sobre',
                        item: `${SITE_URL}/about/`,
                    },
                ],
            }),
        },
    ],
})
</script>

<template>
    <div>

        <section class="bg-gray-50">
            <div class="mx-auto max-w-4xl px-6 py-24">

                <span class="font-semibold uppercase tracking-widest text-yellow-500">
                    Sobre
                </span>

                <h1 class="mt-4 text-5xl font-extrabold leading-tight text-[#292e47]">
                    Sobre a Rong Manutenções
                </h1>

                <p class="mt-8 text-lg leading-8 text-gray-600">
                    A Rong Manutenções presta serviços elétricos residenciais, comerciais e
                    industriais em São José dos Campos e em toda a região do Vale do Paraíba.
                    O trabalho é conduzido com diagnóstico preciso, execução em conformidade com
                    as normas regulamentadoras vigentes e orçamento transparente antes do início
                    de qualquer serviço.
                </p>

                <h2 class="mt-16 text-3xl font-bold text-[#292e47]">
                    Responsável técnico
                </h2>

                <p class="mt-4 text-gray-600 leading-8">
                    Diego Rong dos Santos é o responsável técnico da Rong Manutenções. Com
                    formação em Automação Industrial e Mecânica, e graduação em andamento em
                    Engenharia Mecânica, o atendimento vai além do "faz-tudo": cada serviço segue
                    protocolos técnicos específicos, com segurança para o cliente e sua família,
                    e o ambiente é deixado limpo e organizado ao final do trabalho.
                </p>

                <h2 class="mt-16 text-3xl font-bold text-[#292e47]">
                    Certificações e conformidade
                </h2>

                <ul class="mt-6 list-disc space-y-3 pl-6 text-gray-600">
                    <li>
                        Registro ativo no CRT-SP (Conselho Regional dos Técnicos Industriais de
                        São Paulo).
                    </li>
                    <li>
                        Seguro de Responsabilidade Civil (RC) ativo.
                    </li>
                    <li>
                        Técnico em Automação Industrial e Técnico em Mecânica.
                    </li>
                    <li>
                        Graduando em Engenharia Mecânica.
                    </li>
                    <li>
                        Cursos válidos nas Normas Regulamentadoras NR10 (segurança em instalações
                        e serviços em eletricidade), NR12 (segurança em máquinas e equipamentos),
                        NR33 (espaços confinados), NR35 (trabalho em altura) e SEP (Sistema
                        Elétrico de Potência).
                    </li>
                    <li>
                        Serviços executados em conformidade com o protocolo LOTO (bloqueio e
                        etiquetamento de energia antes de qualquer intervenção).
                    </li>
                </ul>

                <h2 class="mt-16 text-3xl font-bold text-[#292e47]">
                    Área de atendimento
                </h2>

                <p class="mt-4 text-gray-600 leading-8">
                    Atendemos São José dos Campos e toda a região do Vale do Paraíba, com
                    instalações e reparos elétricos, quadros de energia (QDC, QGBT, QDLF),
                    circuitos específicos para ar-condicionado e fogão por indução, e
                    eletromecânica de motores monofásicos e trifásicos.
                </p>

                <div class="mt-16 flex flex-wrap gap-4">
                    <a href="/#contato"
                        class="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-[#292e47] transition hover:bg-yellow-300">
                        Solicitar orçamento
                    </a>

                    <a href="/#servicos"
                        class="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-[#292e47] transition hover:bg-gray-100">
                        Ver nossos serviços
                    </a>
                </div>

            </div>
        </section>

    </div>
</template>
