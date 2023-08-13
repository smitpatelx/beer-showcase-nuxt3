<template>
  <div class="w-full flex-1 p-4 flex flex-col">
    <!-- Total Results -->
    <div
      v-if="!getAllBeersQ.isLoading.value && computedList.length > 0"
      class="flex flex-row items-center justify-end mb-4 container mx-auto
        gap-x-1.5 text-sm font-normal text-zinc-700"
    >
      <p class="opacity-50">Showing</p>
      <p class="font-medium">
        {{ computedList.length }}
      </p>
      <p class="opacity-50">out of</p>
      <p class="font-medium">
        {{ getAllBeersQ.data.value?.length }}
      </p>
    </div>

    <!-- Beer list -->
    <div
      v-if="!getAllBeersQ.isLoading.value && computedList.length > 0"
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 
        gap-2 lg:gap-3 pb-5 container mx-auto"
    >
      <BeerFactory
        v-for="beer in computedList"
        :beer="beer"
        :key="beer.id"
      />
    </div>

    <!-- Loader -->
    <div
      v-if="getAllBeersQ.isLoading.value"
      class="flex flex-col items-center justify-center gap-y-3 py-6
        h-[calc(100vh-10rem)]"
    >
      <GSpinner
        show
        color="teal"
        size="lg"
        className="w-11 h-11"
      />
      <p class="text-base font-medium text-teal-800 animate-pulse">Loading beers...</p>
    </div>

    <!-- No data message -->
    <div
      v-if="!getAllBeersQ.isLoading.value && computedList.length === 0"
      class="flex flex-col items-center justify-center gap-y-1 py-6"
    >
      <GIcon
        :icon="mdiCancel"
        className="w-12 h-12 text-teal-400 inline-block"
      />
      <p class="text-2xl font-medium text-teal-800">No beers found</p>
      <p class="text-base font-normal text-teal-500">Please try changing your filters.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import useGetAllBeers from '@/lib/hooks/useGetAllBeers';
import BeerFactory from '@/components/beer/BeerFactory.vue';
import useFilter from '@/store/filters';
import { SortDirection } from '@/interfaces/sort';
import type { Beer } from '@/interfaces/beers';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { mdiCancel } from '@mdi/js';
import GIcon from '@/components/generic/GIcon.vue';
import GSpinner from './generic/GSpinner.vue';

const store = useFilter();
const { sortBy, sortDirection, searchText, showCentennial } = storeToRefs(store);

// Handle APIs
const getAllBeersQ = useGetAllBeers();

const computedList = computed(() => {
  let sortedArray: Beer[] = getAllBeersQ.data.value ? [...getAllBeersQ.data.value] : [];
  if (getAllBeersQ.data.value) {
    const column = sortBy.value as keyof Beer;
    if (sortDirection.value === SortDirection.Asc) {
      sortedArray = sortedArray.sort((a, b) => Number(a[column]) - Number(b[column]));
    } else if (sortDirection.value === SortDirection.Desc) {
      sortedArray = sortedArray.sort((a, b) => Number(b[column]) - Number(a[column]));
    }

    // Detect if ingredients contains lactose
    sortedArray.forEach((beer, i) => {
      const ingredients = beer.ingredients;
      if (ingredients) {
        const { malt, hops } = ingredients;
        if (malt?.length > 0) {
          const isLactose = malt.some((m) => m.name.includes('Lactose'));
          Object.defineProperty(sortedArray[i], 'isLactose', {
            value: isLactose,
            writable: true,
            enumerable: true,
            configurable: true,
          });
        }
        if (hops?.length > 0) {
          // Hops lactose
          const isLactose = hops.some((h) => h.add.includes('Lactose') || h.name.includes('Lactose') || h.attribute.includes('Lactose'));
          Object.defineProperty(sortedArray[i], 'isLactose', {
            value: isLactose,
            writable: true,
            enumerable: true,
            configurable: true,
          });

          // Hops dry hop
          const isDryHopped = hops.some((h) => h.add.includes('dry hop'));
          Object.defineProperty(sortedArray[i], 'isDryHopped', {
            value: isDryHopped,
            writable: true,
            enumerable: true,
            configurable: true,
          });


        }
      }
    });

    // Hops centennial
    if (!showCentennial.value) {
      sortedArray = sortedArray.filter((beer) => {
        const ingredients = beer.ingredients;
        if (ingredients) {
          const { hops } = ingredients;
          if (hops?.length > 0) {
            const isCentennial = hops.some((h) => h.name.includes('Centennial'));
            return !isCentennial;
          }
        }
        return true;
      });
    }

    // Filter search text
    const searchValue = searchText.value.toLowerCase();
    if (searchValue && searchValue.trim().length > 0) {
      sortedArray = sortedArray.filter((beer) => beer.name.toLowerCase().includes(searchValue)
        || beer.tagline.toLowerCase().includes(searchValue)
        || beer.description.toLowerCase().includes(searchValue));
    }

    return sortedArray;
  }
  return sortedArray;
});
</script>
