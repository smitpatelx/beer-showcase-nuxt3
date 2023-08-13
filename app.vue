<template>
  <div class="w-full h-full max-h-screen bg-slate-50 flex flex-col flex-nowrap">
    <!-- App header -->
    <AppHeader />

    <!-- Filter container -->
    <FilterContainer />

    <main class="flex-1 flex flex-col h-full overflow-y-auto">
      <NuxtPage />
    </main>
  </div>
</template>
