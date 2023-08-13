<template>
  <div class="ml-2 flex flex-nowrap flex-row items-center justify-center gap-x-2 rounded-full">
    <Switch
      v-model="enabled"
      :class="enabled ? 'from-teal-400 to-teal-800' : 'from-teal-400/40 to-teal-700/40'"
      class="bg-gradient-to-br relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full
        transition-colors duration-200 ease-in-out focus:outline-none
        focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-teal-600 
        focus-visible:ring-offset-slate-100 p-0.5"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-6' : 'translate-x-0'"
        class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg 
          ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
    <p class="text-base font-medium text-teal-800">Show Centennial</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Switch } from '@headlessui/vue';
import useFilter from '@/store/filters';

const { $state } = useFilter();

const enabled = ref<boolean>(false);

watch(enabled, () => {
  $state.showCentennial = enabled.value;
});
</script>
