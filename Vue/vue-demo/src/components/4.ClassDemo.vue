<template>
	<!-- isActive 为 true 时，添加 active 类名 -->
	<div :class="{ active: isActive }"></div>
	<!-- class 类名重叠 -->
	<div class="static" :class="{ active: isActive, danger: isDanger }"></div>
	<!-- 绑定对象 -->
	<div :class="classObj"></div>
	<!-- 绑定计算属性 -->
	<div :class="computedClassObj"></div>

	<!-- 绑定数组 -->
	<div :class="[activeClass, errorClass]"></div>
	<!-- 数组结合对象 -->
	<div :class="[errorClass, { active: isActive }]"></div>
	<!-- 组件上的 class 会落到组件的根元素上，多个根元素，可以通过 $attrs 指定 -->
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
const isActive = ref(true);
const isDanger = ref(false);

const classObj = reactive({
	active: true,
	danger: false,
});

const computedClassObj = computed(() => ({
	active: isActive,
	danger: isDanger,
}));

const activeClass = ref("active");
const errorClass = ref("error");
</script>
