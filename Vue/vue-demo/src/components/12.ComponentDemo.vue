<template>
	<Component1
		name="zs"
		:age="14"
		v-bind="{ eat: true, sleep: '8h' }"
	></Component1>

	<Component2 @some-event="callback" @increase-by="callback2"></Component2>
</template>

<script setup lang="ts">
import Component1 from "./12.Component-1.vue";
import Component2 from "./12.Component-2.vue";

function callback() {
	console.log("callback");
}
function callback2(num) {
	console.log("callback", num);
}
</script>
