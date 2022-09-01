# BFC

Block Formatting  Context，块级格式化上下文。

BFC 是一个完全独立的空间（布局环境），让空间里的子元素不会影响到父元素外面的布局。

也可以把 BFC 看成一个 CSS 属性。



## Css 流

- 普通流（文档流）：
  - 元素按照其在 HTML 中的先后位置至上而下布局。
  - 行内元素水平排列，直到当行被占满然后换行。
  - 块级元素则会被渲染成完整的一行。
  - 所有元素默认都是普通流。

- 浮动：
  - 元素按普通流的位置出现，但会脱离普通流，然后根据浮动的方向尽可能的向左边或者右边偏移。

- 绝对定位：
  - 元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响。



BFC 属于普通流。



## 触发 BFC

1. 根元素（html）
2. float 属性不为 none
3. position 为 absolute 或 fixed
4. display 为 inline-block，flex，inline-flex，table-cell，table-caption
5. overflow 不为 visible



## BFC 作用

- 避免外边距重叠

两个块级别盒子 margin 会发生重叠，会取最大的 margin 作为间距，而不是 margin1 + margin2。

margin 为 10。

```html
<style>
  div {
    margin: 10px;
  }
</style>

<div></div>
<div></div>
```

margin 为 20。



```html
<style>
  div {
    margin: 10px;
  }
</style>

<div></div>
<p><div></div></p>
```



- 清除浮动