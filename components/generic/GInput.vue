<template>
  <input
    v-bind="attrs"
    :class="cn(
      'g-input',
      {
        'g-input-error': attrs.error,
      },
    )"
    v-maska:[options]
    :autocomplete="randomAlpha()"
  />

  <div
    v-if="attrs.error"
    class="g-error-text"
  >
    {{ attrs.error }}
  </div>
</template>

<script setup lang="ts">
import { reactive, useAttrs } from 'vue';
import { cn } from '@/lib/utils';
import { randomAlpha } from '@/lib/helpers';

const attrs = useAttrs();

const options = reactive({
  eager: true,
});
</script>

<style scoped lang="scss">
.g-input {
  @apply py-2 px-3 leading-none text-base font-medium
    bg-teal-100/30 text-teal-900 rounded-md shadow-none
    ring-1 ring-teal-500/30 focus:ring-1 focus:ring-teal-500
    focus:ring-offset-1 focus:ring-offset-teal-100
    focus:outline-none focus:border-0 border-0
    placeholder-teal-500/60 placeholder:font-normal
    transition duration-200 ease-in-out tracking-wide;

  &.g-input-error {
    @apply ring-red-500/30 focus:ring-red-500;
  }
}

.g-error-text {
  @apply text-sm text-red-500 pt-1 pb-2.5 leading-4;
}
</style>
