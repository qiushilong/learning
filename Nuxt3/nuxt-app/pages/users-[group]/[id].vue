<template>
  <!-- 方式一 -->
  <p>{{ $route.params.group }} - {{ $route.params.id}}</p>
</template>

<script setup>
  // 方式二：hook
  const route = useRoute();
  console.log(route.params)
</script>