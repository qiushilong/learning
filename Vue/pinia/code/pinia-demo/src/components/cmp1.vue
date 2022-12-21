<template>
  <div @click="handleClick">num: {{ store.num }}</div>
</template>

<script setup lang="ts">
import useCounter from "../store/modules/count";
const store = useCounter();
const handleClick = () => {
  store.num++;
};
</script>
