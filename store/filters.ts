import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { SortDirection, SortableLables } from '@/interfaces/sort';

export default defineStore('user-filter', () => {
  // State
  const searchText = ref('');
  const sortDirection = ref<SortDirection>(SortDirection.Asc);
  const sortBy = ref<SortableLables>(SortableLables.Abv);
  const showCentennial = ref(false);

  // Computed
  const filters = computed(() => {
    return {
      sort_direction: sortDirection.value,
      sort_by: sortBy.value,
      search_text: searchText.value,
      show_centennial: showCentennial.value,
    };
  });

  return {
    searchText,
    sortDirection,
    sortBy,
    showCentennial,
    filters,
  };
});
