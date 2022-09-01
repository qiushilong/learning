<template>
  <div>
    <!-- 访问办法  this.$store.state.键  在template中this可以省略 -->
    <h3>最新的count值为:{{$store.state.count}}</h3>
    <!-- 使用getters的数据 -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="addFn">+1</button>
    <button @click="addNFn">+n</button>
    <button @click="addFnAsync">+1(async)</button>
    <button @click="addNFnAsync">+n(async)</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    // 同步+1
    addFn () {
      // 使用this.$store.commit()来修改数据
      this.$store.commit('add')
    },
    // 同步+n
    addNFn () {
      const n = +prompt('加多少')
      this.$store.commit('addN', n)
    },
    // 异步+1
    addFnAsync () {
      // 使用this.$store.dispatch触发action中的方法
      this.$store.dispatch('addAsync')
    },
    // 异步+n
    addNFnAsync () {
      const n = +prompt('加多少')
      this.$store.dispatch('addNAsync', n)
    }
  }
}
</script>
