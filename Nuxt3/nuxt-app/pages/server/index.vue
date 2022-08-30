<template>
  123
  {{  data  }}

</template>

<script setup>
const data = await $fetch('/api/hello')
console.log(data)
</script>