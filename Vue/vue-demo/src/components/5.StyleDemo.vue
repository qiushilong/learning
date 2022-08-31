<template>
	<!-- 绑定对象（key 推荐小驼峰） -->
	<div :style="{ color: activeColor, fontSize: fontSize }">demo</div>
	<!-- 直接绑定对象 -->
	<div :style="Demo2Style">demo2</div>
	<!-- 数组语法 -->
	<div :style="[Demo2Style, borderStyle]">demo3</div>
	<!-- 数组结合对象 -->
	<div :style="[Demo2Style, { border: borderStyle }]">demo3</div>
	<!-- 自动前缀、样式多值 -->
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const activeColor = ref("red");
const fontSize = ref("16px");

const Demo2Style = reactive({
	fontSize: "20px",
	color: "green",
});

const borderStyle = ref("1px solid yellow");
</script>
