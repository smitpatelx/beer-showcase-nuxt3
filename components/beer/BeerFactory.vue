<template>
  <div
    :class="cn(
      'w-auto rounded-lg overflow-hidden bg-white hover:bg-teal-100/30',
      'shadow hover:shadow-none pt-3 pb-6 group border border-zinc-200 hover:border-teal-400',
    )"
  >
    <div class="relative h-48 isolate">
      <img
        :src="beer?.image_url"
        :alt="beer?.name"
        loading="lazy"
        :width="400"
        :height="700"
        class="w-full h-[90%] object-contain z-20 absolute"
      />
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        bg-gradient-to-tr from-teal-600 via-teal-400 to-teal-50 w-36 h-36 rounded-full
        z-0 blur-lg group-hover:opacity-100 opacity-30 transition-opacity duration-300
        ease-in-out"
      />

      <div
        v-if="beer?.isDryHopped"
        class="rounded-tl-full rounded-br-full bg-teal-600 leading-none
          absolute -top-2.5 right-1 text-xs py-1 px-4 font-semibold text-teal-100
          group-hover:bg-teal-400/30 group-hover:text-teal-800 transition-all duration-300 ease-out
          border border-teal-400 group-hover:border-teal-400"
      >
        DRY HOPPED
      </div>
    </div>

    <div
      class="w-full flex flex-col flex-nowrap px-3 lg:px-4 pt-3 border-t border-zinc-100 group-hover:border-teal-200"
    >
      <h3 class="overflow-hidden text-ellipsis line-clamp-1 text-xl font-semibold text-zinc-800">
        {{ beer?.name || '--' }}
      </h3>
      <div
        class="w-full flex flex-nowrap flex-row items-center justify-between text-sm 
          font-medium mt-1 border-b border-zinc-200 group-hover:border-teal-500 pb-1"
      >
        <p class="overflow-hidden overflow-ellipsis">
          ABV :
          <span class="text-zinc-500">
            {{ beer?.abv || '--' }}
          </span>
        </p>
        <p class="overflow-hidden overflow-ellipsis">
          IBU :
          <span class="text-zinc-500">
            {{ beer?.ibu || '--' }}
          </span>
        </p>
        <p class="overflow-hidden overflow-ellipsis">
          <GIcon
            :icon="mdiBeer"
            class-name="w-4 h-4 inlin-block -mt-0.5 mr-1 rotate-0 text-teal-500 group-hover:text-teal-700
              group-hover:rotate-45 transition-all duration-600 ease-in"
          />
          <span class="text-zinc-500">
            {{ beer?.volume !== undefined ? formatVolume(beer.volume) : '--' }}
          </span>
        </p>
      </div>
      <p class="text-sm font-normal text-zinc-500 mt-2">
        {{ beer?.tagline || '--' }}
      </p>
      <p
        class="text-base font-normal text-teal-800 group-hover:text-teal-600 mt-1.5 line-clamp-3 tracking-tight leading-5"
      >
        {{ beer?.description || '--' }}
      </p>
      <div
        v-if="beer?.isLactose"
        class="text-sm font-semibold text-amber-700 group-hover:text-amber-900 mt-3 -mb-3 leading-4"
      >
        <span
          class="inline-block bg-amber-100 group-hover:bg-amber-500/30 rounded-full px-2.5 py-1 overflow-hidden"
        >
          <GIcon
            :icon="mdiAlert"
            class-name="w-4 h-4 inline-block mr-1"
          />
          Lactose
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Beer } from '@/interfaces/beers';
import GIcon from '../generic/GIcon.vue';
import { mdiBeer, mdiAlert } from '@mdi/js';
import { formatVolume } from '@/lib/helpers';
import { cn } from '@/lib/utils';

type Props = {
  beer?: Beer;
};

withDefaults(defineProps<Props>(), {
  beer: undefined,
});
</script>
