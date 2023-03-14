# 1. 创建一个 Vue 应用

## 应用实例

每个 Vue 应用都是通过 createApp 函数创建了一个新的应用实例。

```js
import { createApp } from 'vue'

const app = createApp({
    /* 根组件选项 */
})
```

我们传入 createApp 的对象实际上是一个组件，每个应用都需要一个 “根组件”，其他组件将作为其子组件。

## 挂载

应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接收一个 “容器” 参数，可以是一个实际的 DOM 元素或者是一个 CSS 选择器字符串。

```js
app.mount('#app')
```

## 应用配置

应用实例会暴露一个 .config 对象，允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器，用来捕获所有子组件上的错误：

```js
app.config.errorHandler = (err) => {
    /* 处理错误 */
}
```

应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件：

```js
app.component('TodoDeleteButton', TodoDeleteButton)
```



# 2. 模板语法

## 属性绑定

- 如果绑定的值是 null 或是 undefined，那么该属性会被从渲染的元素上移除。
- 布尔类型时，如 isDisabled，如果值为**真值**或者**空串**，元素都会包含该属性；反之不包含。

### 动态绑定多个值

```vue
<template>
  <div v-bind="objectOfAttrs" />
</template>

<script setup>
const objectOfAttrs = {
    id: 'container',
    class: 'wrapper'
}
</script>
```

## 受限的全局访问

模板中的表达式将被沙盒化，仅能够访问到有限的全局对象列表。该列表中会暴露常用的内置全局对象，比如 Math 和 Date。

没有显式包含在列表中的全局对象将不能在模板表达式中访问，例如用户附加在 window 上的属性。然而，你也可以自行在 app.config.globalProperties 上显式的添加他们，供所有表达式使用。

## 动态参数

```vue
<a v-bind:[attributeName]="url">...</a>
<!-- 简写 -->
<a :[attributeName]="url">...</a>

<a v-on:[eventName]="doSomething">...</a>
<!-- 简写 -->
<a @:[eventName]="doSomething">...</a>
```

动态参数中的表达式的值应当是一个字符串，或者是 null。特殊值 null 意为显式移除该绑定。其他值会触发警告。

### 限制

- 复杂动态参数应当使用计算属性，空格和引号在 HTML 动态参数中都是不和法的。
- 在 DOM 内嵌模板中的大写会转化为小写。单文件组件内的模板不受此限制。



# 3. 响应式

## DOM 更新时机

当你更改响应式状态后，DOM 会自动更新。然而，你得注意 DOM 的更新并不是同步的。相反，Vue 将缓冲他们直到更新周期的 “下一个时机”，以确保无论你进行了多少此状态更改，每个组件都只更新一次。

若要等到状态更变后的 DOM 更新完成，可以使用 nextTick() 这个 API。

```js
import { nextTick } from 'vue'

function increment() {
    state.count++
    nextTick(() => {
        // 访问更新后的 DOM
    })
}
```

## 深层响应式

在 Vue 中，状态都是默认深层响应式的。这意味着即使在更改深层次的对象或者数组，你的改动也能被检测到。

```js
import { reactive } from 'vue'

const obj = reactive({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.nested.count++
  obj.arr.push('baz')
}
```

## 浅层响应式 -- shallowReactive

和 reactive() 不同，这里没有深层级的转换：一个浅层响应式对象里只有跟级别的属性是响应式的。属性的值会被原样存储和暴露，这也意味着值为 ref 的属性不会被自动解包了。

```js
const state = shallowReactive({
    foo: 1,
    nested: {
        bar: 2
    }
})

// 响应式
state.foo++

// 但下层嵌套对象不会被转成响应式
isReactive(state.nested) // false

// 不是响应式
state.nested.bar++
```

## 响应式代理 vs 原始对象

值得注意的是，reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的：

```js
const raw = {}
const proxy = reactive(raw)

// 代理对象和原始对象不是全等的
console.log(proxy === raw)
```

只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue 的响应式系统的最佳实践是 **仅使用你声明对象的代理版本**。

为保证访问代理的一致性，对同一个原始对象调用 reactive() 会总是返回同样的代理对象，而对一个已存在的代理对象调用 reactive() 会返回其本身：

```js
// 在用一个对象上调用 reactive() 会返回相同的代理
console.log(reactive(raw) === proxy)

// 在一个代理上调用 reactive() 会返回它自己
console.log(reactive(proxy) === proxy)
```

这个规则对嵌套对象也适用。依靠深层响应性，响应式对象内的嵌套对象依然是代理：

```js
const proxy = reactive({})

const raw = {}
proxy.nested = raw

console.log(proxy.nested === raw) // false
```

## reactive() 的局限性

reactive() API 有两条限制：

1. 仅对对象类型有效（对象、数组和 Map、Set 这样的集合类型），而对 string、number 和 boolean 这样的原始类型无效。

2. 因为 Vue 的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持该响应式对象的相同引用。这意味着我们不可以随意的 “替换” 一个响应式对象，因此这将导致对初始引用的响应性连接丢失：

   

```js
   let state = reactive({ count: 0 })
   
   // 上面的引用 ({ count: 0 }) 将不再被追踪
   state = reactive({ count: 1 })
```

   同时这也意味着我们将响应式对象的属性赋值或者解构至本地变量时，或是将该属性传入一个函数时，我们也会失去响应式。

```js
const state = reactive({ count: 0 })

// n 是一个局部变量，同 state.count
// 失去响应性连接
let n = state.count
// 不影响原始的 state
n++

// count 也和 state.count 失去了响应性连接
let { count } = state
// 不会影响原始的 state
count++

// 该函数接收一个普通数字，并且
// 将无法跟踪 state.count 的变化
callSomeFunction(state.count)
```



## ref

一个包含对象类型值的 ref 可以响应式地替换整个对象：

```js
const objectRef = ref({ count: 0 })

// 这是响应式的替换
objectRef.value = { count: 1 }
```

ef 被传递给函数或是从一般对象上被解构时，不会丢失响应性：

```js
const obj = {
  foo: ref(1),
  bar: ref(2)
}

// 该函数接收一个 ref
// 需要通过 .value 取值
// 但它会保持响应性
callSomeFunction(obj.foo)

// 仍然是响应式的
const { foo, bar } = obj
```

## ref 在模板中的解包

- 当 ref 在模板中作为**顶层属性**被访问时，它们会被自动“解包”，所以不需要使用 `.value`。

- 当 ref 在模板中作为**非顶层属性**访问时，不会自动解包。

- 当 ref 在模板中以文本插值（即{{}}）访问时，会自动解包。

- 当一个 ref 被嵌套在一个响应式对象中，作为属性被访问或更改时，会自动解包。

- 跟响应式对象不同，当 ref 作为响应式数组或像 `Map` 这种原生集合类型的元素被访问时，不会进行解包。



## 计算属性 vs 方法

- **计算属性值会基于其响应式依赖被缓存**，一个计算属性仅会在其响应式依赖更新时才重新计算。
- 方法调用**总是**会在重渲染发生时再次执行函数。

该计算数学永远不会更新，因为 Date.now() 不是一个响应式。

```js
const now = computed(() => Date.now())
```



## 可写计算属性

计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建：

```vue
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>
```

现在当你再运行 `fullName.value = 'John Doe'` 时，setter 会被调用而 `firstName` 和 `lastName` 会随之更新。



## 计算属性最佳实践

### 1. getter 不应该有副作用：

计算属性的 getter 应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来说，**不要在 getter 中做异步请求或者更改 DOM**！一个计算属性的声明中描述的是如何根据其他值派生一个值。因此 getter 的职责应该仅为计算和返回该值。在之后的指引中我们会讨论如何使用[监听器](https://cn.vuejs.org/guide/essentials/watchers.html)根据其他响应式状态的变更来创建副作用。

### 2.避免直接修改计算属性值

从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。



## class 和 style

### class 绑定

- 绑定对象

  ```vue
  <template>
      <div
        class="static"
        :class="{ active: isActive, 'text-danger': hasError }"
      />
  </template>
  
  <script>
  const isActive = ref(true)
  const hasError = ref(false)
  </script>
  ```

- 绑定数组

  ```vue
  <template><div :class="[activeClass, errorClass]"></div></template>
  
  <script>
  const activeClass = ref('active')
  const errorClass = ref('text-danger')
  </script>
  ```

- 绑定对象或字符串数组

  ```vue
  <template><div :class="[{ active: isActive }, errorClass]"></div>></template>
  
  <script>
  const isActive = ref(true)
  const errorClass = ref('text-danger')
  </script>
  ```



### 组件的 class 

对于只有一个根元素的组件，当你使用了 `class` attribute 时，这些 class 会被添加到根元素上，并与该元素上已有的 class 合并。

如果你的组件有多个根元素，你将需要指定哪个根元素来接收这个 class。你可以通过组件的 `$attrs` 属性来实现指定：

```vue
<MyComponent class="baz" />
```

```vue
<!-- MyComponent 模板使用 $attrs 时 -->
<p :class="$attrs.class">Hi!</p>
<span>This is a child component</span>
```



### style 绑定

- 绑定对象

  ```vue
  <template>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
  </template>
  
  <script>
  const activeColor = ref('red')
  const fontSize = ref(30)
  </script>
  ```

- 绑定数组

  ```vue
  <template><div :style="[baseStyles, overridingStyles]"></div></template>
  
  <script>
  const baseStyles = ref({
      color: 'red',
  })
  const overridingStyles = ref({
      color: 'yellow',
  })
  </script>
  ```



### style 自动前缀

当你在 `:style` 中使用了需要[浏览器特殊前缀](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)的 CSS 属性时，Vue 会自动为他们加上相应的前缀。Vue 是在运行时检查该属性是否支持在当前浏览器中使用。如果浏览器不支持某个属性，那么将尝试加上各个浏览器特殊前缀，以找到哪一个是被支持的。

你可以对一个样式属性提供多个 (不同前缀的) 值，举例来说：

```vue
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```



## 条件渲染

一个 `v-else` 或在 `v-else-if` 元素必须跟在一个 `v-if` 或者 `v-else-if` 元素后面，否则它将不会被识别。

### `<template>` 上的 `v-if`

如果我们想对多个元素使用 v-if：

```vue
<template v-if="ok">
  <h1>Title</h1>
  <p>p1</p>
  <p>p2</p>
</template>
```

v-else 和 v-else-if 同样可以在 `<template>` 上使用。



### v-if vs v-show

`v-if` 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。

`v-if` 也是**惰性**的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。

相比之下，`v-show` 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS `display` 属性会被切换。

总的来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 `v-show` 较好；如果在运行时绑定条件很少改变，则 `v-if` 会更合适。



## 循环渲染

你也可以使用 `of` 作为分隔符来替代 `in`，这更接近 JavaScript 的迭代器语法：

```vue
<div v-for="item of items">
    
</div>
```

### 遍历对象

```vue
<template>
  <ul>
      <li v-for="(value, key, index) in myObject">
      {{ index }} {{ key }} {{ value }}
      </li>
  </ul>
</template>

<script>
const myObject = reactive({
    title: 'How to do lists in vue',
    author: 'Jane Doe',
    publishedAt: '2023.3.1'
})
</script>
```

### 在 `v-for` 里使用范围值

`v-for` 可以直接接受一个整数值。在这种用例中，会将该模板基于 `1...n` 的取值范围重复多次。

template

```vue
<span v-for="n in 10">{{ n }}</span>
```

注意此处 `n` 的初值是从 `1` 开始而非 `0`。

### `<template>` 上 的 v-for

与模板上的 v-if 类似，你也可以在 `<template>` 标签上使用 v-for 来渲染一个包含多个元素的块。例如：

```vue
<ul>
    <template v-for="item in items">
      <li>{{ item.msg }}</li>
      <li>2</li>
    </template>
</ul>
```



### v-for 和 v-if

v-for 和 v-if 不推荐使用在一个标签上，因为两者的优先级不够明显。

当它们同时存在于一个节点上时，`v-if` 比 `v-for` 的优先级更高。这意味着 `v-if` 的条件将无法访问到 `v-for` 作用域内定义的变量别名：

在外新包装一层 `<template>` 再在其上使用 `v-for` 可以解决这个问题 (这也更加明显易读)：

template

```vue
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```



### 通过 key 管理状态

Vue 默认按照“就地更新”的策略来更新通过 `v-for` 渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。

默认模式是高效的，但**只适用于列表渲染输出的结果不依赖子组件状态或者临时 DOM 状态 (例如表单输入值) 的情况**。