<template>
	{{ props }}
</template>

<script setup lang="ts">
// 数组形式
// const props = defineProps(["name", "age"]);

// 对象形式
const props = defineProps({
	name: String,
	age: Number,
	eat: Boolean,
	sleep: String,
});

console.log("props", props);
</script>
