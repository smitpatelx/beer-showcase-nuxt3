<template>
  <Listbox v-model="selectionOption">
    <div class="relative">
      <ListboxButton
        class="pl-3 pr-4 py-2 text-base font-medium text-teal-50 select-none
          bg-gradient-to-br from-teal-300 to-teal-600 hover:bg-teal-200 hover:text-teal-800 group
          focus:outline-none ring-1 ring-teal-500 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-teal-600
          focus-visible:ring-offset-slate-100 focus:border-0 transition-all duration-300 ease-in-out rotate-360
          rounded-md space-x-1.5 leading-none flex flex-nowrap items-center justify-between
          text-left bg-white shadow-lg cursor-pointer w-28"
      >
        {{ selectionOption ? SortDirectionOptions.find((option) => option.value === selectionOption)?.name : 'Sort Direction' }}
        <GIcon
          :icon="selectionOption === SortDirection.Asc ? mdiSortNumericAscending : mdiSortNumericDescending"
          class-name="w-5 h-5"
        />
      </ListboxButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 w-36 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm
            top-0 right-0 transform translate-y-9"
        >
          <ListboxOption
            v-for="person in SortDirectionOptions"
            :key="person.value"
            :value="person.value"
            :disabled="person.unavailable"
            v-slot="{ selected }"
            :class="cn(
              'text-base font-normal text-teal-800 px-2 py-1',
              'cursor-pointer flex flex-row flex-nowrap items-center justify-between',
              {
                'text-teal-500 bg-teal-300/30 hover:bg-teal-300/50 focus:bg-teal-300/50': person?.value === selectionOption && !person.unavailable,
                'text-teal-800 bg-white hover:bg-teal-500/30 focus:bg-teal-500/30': person?.value !== selectionOption,
              },
            )"
          >
            {{ person.name }}
            <GIcon
              v-if="selected && !person.unavailable"
              :icon="mdiCheck"
              class="w-4 h-4 ml-1"
            />
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import GIcon from '@/components/generic/GIcon.vue';
import { mdiSortNumericAscending, mdiSortNumericDescending, mdiCheck } from '@mdi/js';
import { cn } from '@/lib/utils';
import useFilter from '@/store/filters';
import { SortDirection } from '@/interfaces/sort';

const { $state } = useFilter();

const SortDirectionOptions = [
  { value: SortDirection.Asc, name: 'Asc', unavailable: false },
  { value: SortDirection.Desc, name: 'Desc', unavailable: false },
]
const selectionOption = ref<SortDirection>($state.sortDirection);

watch(selectionOption, () => {
  $state.sortDirection = selectionOption.value;
});
</script>
