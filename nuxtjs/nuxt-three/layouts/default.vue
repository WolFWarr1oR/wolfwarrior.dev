<template>
  <div>
    <Header/>
      <slot />
    <Footer theme="dark"/>
  </div>
</template>

<script setup>
  const route = useRoute()
  useHead({
    title: `${route.meta.title} | WolFWarrioR`
  })
</script>