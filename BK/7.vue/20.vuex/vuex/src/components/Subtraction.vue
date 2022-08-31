<template>
  <div>
    <h3>最新的count值为:{{count}}</h3>
    <h3>{{showNum}}</h3>
    <button @click="subFn">-1</button>
    <button @click="subNFn">-n</button>
    <button @click="subFnAsync">-1(Async)</button>
    <button @click="subNFnAsync">-n(Async)</button>
  </div>
</template>

<script>
// 使用全局共享数据方法二
// 改变全局共享数据(state数据)方法二
// 触发action的方式二
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    // 注册值
    ...mapState(['count']),
    // 注册getters值
    ...mapGetters(['showNum'])
  },
  methods: {
    // 导入方法
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    subFn () {
      // 直接调用即可
      this.sub()
    },
    subNFn () {
      const n = +prompt('减多少')
      this.subN(n)
    },
    subFnAsync () {
      // 也可以直接用来绑定在click上
      this.subAsync()
    },
    subNFnAsync () {
      const n = +prompt('减多少')
      this.subNAsync(n)
    }
  }
}
</script>
