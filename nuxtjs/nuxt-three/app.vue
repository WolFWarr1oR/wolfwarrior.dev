
<template>
  <Html>
  
    <Body class="
      bg-white
      text-gray-800
      antialiased
      transition-colors
      duration-300
      dark:bg-gray-900
      dark:text-gray-200"
    >
      <div>
        <NuxtLayout>
          <NuxtPage/>
        </NuxtLayout>
      </div>
    </Body>
  </Html>
</template>


<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-800;
}
.global-text {
  @apply text-gray-900 dark:text-gray-50;
}
</style>