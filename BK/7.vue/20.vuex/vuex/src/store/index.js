import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0 // 提供全局共享数据
  },
  mutations: {
    // mutations用来变更state里的数据,能但是不推荐直接改state数据
    // mutations中不能写异步操作
    add (state) {
      // 更变状态
      state.count++
    },
    sub (state) {
      state.count--
    },
    // 传递参数
    addN (state, step) {
      state.count += step
    },
    subN (state, step) {
      state.count -= step
    }
  },
  actions: {
    // actions是专门用来执行异步操作的
    // action中通过触发mutation的方式间接更变数据
    addAsync (context) {
      setTimeout(() => {
        // 不能直接改,需要调用mutation中的方法
        context.commit('add')
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    // 异步
    addNAsync (context, step) {
      setTimeout(() => {
        // 不能直接改,需要调用mutation中的方法
        context.commit('addN', step)
      }, 1000)
    },
    subNAsync (context, step) {
      setTimeout(() => {
        // 不能直接改,需要调用mutation中的方法
        context.commit('subN', step)
      }, 1000)
    }
  },
  getters: {
    // 包装state数据
    showNum (state) {
      return '当前最新的数量[' + state.count + ']'
    }
  },
  modules: {
  }
})


function add (n) {
  let sum = 0;
  sum += n;
  return (n) => {
    sum += n;
  }
}