# Vue

## 创建 vue 应用

- createApp
- mount

```js
import { createApp } from 'vue';

// 创建根组件
const app = createApp({
  // 根组件选项
})

// 挂载至 <div id="app"></div>
app.mount('#app');
```



## 模板语法

- 文本插值：{{}}，v-text

- 插入 html：v-html
- 属性绑定：v-bind，:（简写）
- 事件绑定：v-on:click，@click（简写）
- 事件修饰符：.prevent，.stop，.self，.once，.capture，.passive
- 动态参数：:[attributeName]，@[eventName]
- 逻辑：v-if，v-if-else，v-else

- 循环：v-for

```vue
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

	<!-- 逻辑：v-if，v-if-else，v-else -->
	<div>
		<div v-if="name">name</div>
		<div v-else-if="name.length > 3">name.length > 3</div>
		<div v-else>name 不存在或长度小于 3</div>
	</div>
</template>
```



## 响应式

- reactive：创建响应式对象或数组

- ref：创建任意响应式数据，修改时需要修改 .value 属性

```vue
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
```

## 计算属性

- computed：

```vue
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
```

## class 绑定

```vue
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
```

## Style 绑定

```vue
<template>
	<!-- 绑定对象（key 推荐小驼峰） -->
	<div :style="{ color: activeColor, fontSize: fontSize }">demo</div>
	<!-- 直接绑定对象 -->
	<div :style="Demo2Style">demo2</div>
	<!-- 数组语法 -->
	<div :style="[Demo2Style, borderStyle]">demo3</div>
	<!-- 数组结合对象 -->
	<div :style="[Demo2Style, { border: borderStyle }]">demo3</div>
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
```

## 事件处理

```vue
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

```



