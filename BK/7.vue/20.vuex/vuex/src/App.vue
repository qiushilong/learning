<template>
  <div id="app">
    <my-addition></my-addition>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from './components/Addition.vue'
import Subtraction from './components/Subtraction.vue'
export default {
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction
  }
}
</script>

<style lang="scss">
</style>
