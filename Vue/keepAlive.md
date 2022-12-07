# KeepAlive

https://cn.vuejs.org/guide/built-ins/keep-alive.html#basic-usage

## 基本用法

\<KeepAlive> 是一个内置组件，它的功能是在多个组件动态切换时缓存被移除的组件实例。

\<component> 实现动态组件：

```vue
<component :is="activeComponent" />
```

默认情况下，一个组件实例在被替换掉后会被销毁。这会导致它丢失其中所有已变化的状态 —— 当这个组件再一次被显示时，会创建一个指代有初始化状态的新实例。

如果要保留本来的状态。可以使用 \<KeepAlive> 内置组件将这些动态组件包装起来：

```vue
<KeepAlive>
  <component :is="activeComponent" />
</KeepAlive>
```

这样，在组件切换状态时原来组件也能保存了。



## 包含 / 排除

\<KeepAlive> 默认会缓存内部的所有组件实例，但我们可以通过 include 和 exclude 属性来定制这一行为。这两个属性的值都可以是一个以英文逗号分割的字符串，一个正则表达式，或是包含这两种类型的数组：

```vue
<KeepAlive include="a,b">
  <component :is="view" />
</KeepAlive>

<KeepAlive include="/a|b/">
  <component :is="view" />
</KeepAlive>

<KeepAlive include="['a', 'b']">
  <component :is="view" />
</KeepAlive>
```

它会根据组件的 name 选项进行匹配，所以组件如果想要条件性的被 KeepAlive 缓存，就必须显式声明一个 name 选项。

> 在 3.2.34 或以上版本中，使用 \<script setup> 的单文件组件会自动根据文件名生成对于的 name 选项，无需再手动声明。



## 最大缓存实例数

可以通过传入 max 属性来限制可被缓存的最大组件实例数。\<KeepAlive> 的行为在指定了 max 后类似一个 LRU 缓存：如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，以便为新的实例腾出空间：

```vue
<KeepAlive :max="10">
  <component :is="activeComponent" />
</KeepAlive>
```



## 缓存实例的生命周期

当一个组件实例从 DOM 上移除但因为被 \<KeepAlive> 缓存而仍作为组件树的一部分时，它将变为不活跃状态而不是被卸载。当一个组件实例作为缓存树的一部分插入到 DOM 时，它将重新被激活。

一个持续存在的组件可以通过 onActivated() 和 onDeactivated() 注册相应的两个状态的生命周期钩子。

```vue
<script setup>
import { onActivated, onDeactivated } from 'vue'
    
onActivated(() => {
    // 调用时机为首次挂载
    // 以及每次从缓存中从新插入
})
    
onDeactivated(() => {
    // 在从 DOM 上移除，进入缓存
    // 以及组件卸载时调用
})
</script>
```

注意：

- onActivated 在组件挂载时也会调用，onDeactivated 在组件卸载时也会调用。
- 这两个钩子不仅适用于 \<KeepAlive> 缓存的根组件，也适用于缓存树中的后代组件。