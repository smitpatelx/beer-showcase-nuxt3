<template>
  <div class="w-full flex-initial px-4 py-2 bg-teal-100 border-b border-teal-500">
    <header
      class="w-full flex flex-wrap items-center
      justify-between container mx-auto"
    >
      <div class="flex flex-row flex-nowrap gap-x-2 items-center">
        <div class="relative">
          <img
            src="/beer-showcase.svg"
            loading="eager"
            alt="Beer Showcase"
            class="w-7 h-7 inline-block m-0 text-teal-700"
          />
          <div
            class="w-3 h-3 bg-teal-500 absolute -top-1 right-0 rounded-full
            bg-gradient-to-tr from-teal-200 via-teal-400 to-teal-600
            animate-ping transition-all duration-500 ease-in-out"
          />
        </div>
        <h2
          class="text-lg font-semibold text-transparent
          bg-gradient-to-br from-teal-500 to-teal-800
          bg-clip-text tracking-tight"
        >
          Beer Showcase
        </h2>
      </div>

      <div class="w-auto flex flex-row flex-nowrap items-center justify-end gap-x-4 p-1">
        <a
          :href="GITHUB_LINK"
          target="_blank"
          class="text-teal-800 text-base font-medium rounded-md
            flex flex-row flex-nowrap items-center justify-center
            gap-x-1.5 hover:text-teal-600 pl-1 pr-1.5 py-0.5 ring-1 ring-teal-800
            hover:ring-teal-500 transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-1 focus:ring-teal-500 focus:ring-offset-1
            focus:ring-offset-teal-100 active:scale-110 focus:bg-teal-600
            focus:text-teal-100 tracking-tight"
        >
          <GIcon :icon="mdiGithub" />
          Github Link
        </a>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import GIcon from '@/components/generic/GIcon.vue';
import { mdiGithub } from '@mdi/js';

const GITHUB_LINK = 'https://github.com/smitpatelx/beer-showcase-vite-vue3';
</script>
