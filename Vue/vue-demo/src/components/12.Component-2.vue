<template>
	<p></p>
	<!-- 调用父组件事件 -->
	<button @click="$emit('someEvent')">click me~</button>

	<!-- 调用父组件事件 + 传参 -->
	<button @click="$emit('increaseBy', 1)">click me~ tarnsmit 1</button>
</template>

<script setup lang="ts">
// 显式获取调用函数
// const emit = defineEmits(["someEvent", "increaseBy"]);

// 对象语法
const emit = defineEmits({
	someEvent() {
		return true;
	},
	increaseBy() {
		return true;
	},
});

console.log(emit);
</script>
