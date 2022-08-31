<template>
	<button @click="increment">
		{{ state.count }}
	</button>
	<button @click="decrement">
		{{ num }}
	</button>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const state = reactive({ count: 0 });
function increment() {
	state.count++;
}
const num = ref(0);
function decrement() {
	num.value--;
}
</script>
