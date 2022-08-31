<script setup lang="ts">
import { ref } from "vue";
const name = ref("小明");
const htmlValue = "<p>p标签</p>";
const className = ref("class1");
const handleClick = () => {
	alert("2");
};
const items = ref([
	{ label: "li1", value: 1 },
	{ label: "li2", value: 2 },
	{ label: "li3", value: 3 },
]);
</script>

<template>
	<!-- 文本插值：{{}}，v-text -->
	<div>
		<div>{{ name }}</div>
		<div>{{ "简单运算" + 1 + 2 }}</div>
		<div v-text="name"></div>
	</div>

	<!-- 插入 html：v-html -->
	<div>
		<div v-html="htmlValue"></div>
	</div>

	<!-- 属性绑定：v-bind，:（简写） -->
	<div>
		<div v-bind:class="className" :title="className">1</div>
	</div>

	<!-- 事件绑定：v-on:click，@click（简写） -->
	<div>
		<div @click="handleClick">2</div>
	</div>

	<!-- 事件修饰符：.prevent，.stop，.self，.once，.capture，.passive -->
	<div>
		<div @click="handleClick">
			<div @click.stop="handleClick">3</div>
		</div>
	</div>

	<!-- 逻辑：v-show，v-if，v-if-else，v-else -->
	<div>
		<div v-if="name">name</div>
		<div v-else-if="name.length > 3">name.length &gl; 3</div>
		<div v-else-if="name.length < -3">name.length &lt; -3</div>
		<div v-else>name 不存在或长度小于 3</div>
	</div>

	<!-- 循环：v-for -->
	<div>
		<ul>
			<li v-for="item in items" :key="item.value">
				{{ item.label }}
			</li>
		</ul>
	</div>
</template>

<style scoped>
.class1 {
	background-color: pink;
}
</style>
