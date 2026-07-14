<script setup>
const menuOpen = ref(false)
</script>

<template>
  <nav
  class="
    sticky
    top-0
    left-0
    right-0
    z-50
    backdrop-blur-xs
    border-b
    border-white/10
  "
>
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

      <!-- Logo -->
      <a
        href="/"
        class="text-xl font-bold text-yellow-400"
      >
        Rong Manutenções
      </a>

      <!-- Desktop -->
      <div class="hidden items-center gap-2 md:flex">
        <a
          href="/"
          class="flex h-10 items-center rounded-lg px-4 text-gray-400 transition-colors duration-200 hover:bg-gray-100"
        >
          Serviços
        </a>

        <a
          href="/"
          class="flex h-10 items-center rounded-lg px-4 text-gray-400 transition-colors duration-200 hover:bg-gray-100"
        >
          Sobre
        </a>

        <a
          href="/"
          class="flex h-10 items-center rounded-lg px-4 text-gray-400 transition-colors duration-200 hover:bg-gray-100"
        >
          trabalhos
        </a>

        <a
          href="/"
          class="flex h-10 items-center bg-yellow-400 px-5 text-blue-950 transition duration-200 hover:bg-blue-700"
        >
          Contato
        </a>
      </div>

      <!-- Botão Mobile -->
      <button
        class="flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-gray-100 md:hidden"
        @click="menuOpen = !menuOpen"
      >
        <div class="relative h-5 w-6">

          <span
            class="absolute left-0 top-0 h-0.5 w-6 bg-black transition-all duration-300"
            :class="menuOpen ? 'top-2 rotate-45' : ''"
          />

          <span
            class="absolute left-0 top-2 h-0.5 w-6 bg-black transition-all duration-300"
            :class="menuOpen ? 'opacity-0' : ''"
          />

          <span
            class="absolute left-0 top-4 h-0.5 w-6 bg-black transition-all duration-300"
            :class="menuOpen ? 'top-2 -rotate-45' : ''"
          />

        </div>
      </button>

    </div>

    <!-- Menu Mobile -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menuOpen"
        class="border-t bg-white md:hidden"
      >
        <div class="flex flex-col p-4">

          <a
            href="/"
            class="rounded-lg px-3 py-2 transition hover:bg-gray-100"
          >
            Serviços
          </a>

          <a
            href="/"
            class="rounded-lg px-3 py-2 transition hover:bg-gray-100"
          >
            Sobre
          </a>

          <a
            href="/"
            class="rounded-lg px-3 py-2 transition hover:bg-gray-100"
          >
            Trabalhos
          </a>

          <a
            href="/"
            class="mt-2  bg-yellow-400 px-3 py-2 text-center text-blue-950 transition hover:bg-blue-700"
          >
            Contato
          </a>

        </div>
      </div>
    </Transition>

  </nav>
</template>