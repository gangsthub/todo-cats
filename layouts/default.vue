<template>
  <div
    id="app-layout"
    class="w-full flex flex-col justify-between min-h-screen"
  >
    <Header />
    <main class="mb-auto">
      <slot />
    </main>
    <Footer />
  </div>
</template>
