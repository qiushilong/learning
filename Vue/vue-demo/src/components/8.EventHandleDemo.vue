<template>
	<p>count: {{ count }}</p>
	<!-- 内联处理 -->
	<button @click="count++">+1</button>
	<!-- 调用函数处理 -->
	<button @click="fnHandle">函数处理</button>
	<!-- 传递参数 -->
	<button @click="alertFn('emo')">传递参数</button>

	<!-- 获取原生事件 -->
	<!-- 无参数 -->
	<button @click="eventFn">获取原生对象</button>
	<!-- 有参数：写法1 -->
	<button @click="eventFn2('emo', $event)">获取原生对象1</button>
	<!-- 有参数：写法2 -->
	<button @click="(event) => eventFn2('emo', event)">获取原生对象2</button>

	<!-- 事件修饰符，按键修饰符，鼠标按键修饰符 -->
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const fnHandle = () => {
	alert("函数处理");
};

const alertFn = (str) => {
	alert(str);
};

const eventFn = (e) => {
	console.log(e);
};

const eventFn2 = (str, e) => {
	console.log(e);
};
</script>
