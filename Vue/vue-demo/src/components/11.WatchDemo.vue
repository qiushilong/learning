<template>
	<p @click="handleClick">{{ count }}</p>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";

const count = ref(0);
function handleClick() {
	count.value++;
}
// 侦听基本数据
watch(count, (newData, oldData) => {
	console.log(newData, oldData);
});

const obj = reactive({ name: "zs", age: 13 });

// 侦听响应式对象（深层侦听，一个属性变化都会触发）
watch(obj, () => {});

// 不能直接侦听响应式对象的属性，需要侦听该属性的 getter 函数
watch(
	() => obj.name,
	() => {}
);

// 侦听响应式对象，只有返回不同对象时才会触发
watch(
	() => obj,
	() => {}
);

// watchEffect 创建侦听器时就执行一次函数
</script>
