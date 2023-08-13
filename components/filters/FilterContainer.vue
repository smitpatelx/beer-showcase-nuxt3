<template>
  <div class="w-full px-4 py-4 bg-slate-100 border-b border-slate-200">
    <div
      class="flex flex-nowrap flex-col md:flex-row items-center
        justify-between container mx-auto gap-y-3 md:gap-y-0"
    >
      <SearchBox />

      <div
        class="flex flex-row flex-wrap items-center justify-end
        gap-1.5 md:gap-y-2 md:gap-x-2 xl:gap-x-4"
      >
        <ResyncBtn />
        <SelectSortBy />
        <SelectDirection />
        <ShowCentennial />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBox from '@/components/filters/SearchBox.vue';
import ResyncBtn from '@/components/filters/ResyncBtn.vue';
import SelectSortBy from '@/components/filters/SelectSortBy.vue';
import SelectDirection from '@/components/filters/SelectDirection.vue';
import ShowCentennial from '@/components/filters/ShowCentennial.vue';
</script>
