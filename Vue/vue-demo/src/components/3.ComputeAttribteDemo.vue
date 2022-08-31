<template>
	{{ name }}
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
const data = reactive({
	firstName: "zhang",
	lastName: "san",
});
const name = computed(() => {
	return data.firstName + data.lastName;
});
</script>
