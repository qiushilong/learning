<script setup>
const counter = useState('counter', () => 1)
</script>

<template>
  state: {{  counter  }}
  <button @click="counter++">+</button>
  <button @click="counter--">-</button>
</template>