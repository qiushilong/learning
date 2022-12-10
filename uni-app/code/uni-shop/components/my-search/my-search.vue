<template>
  <view
    class="my-search-container"
    :style="{ backgroundColor: bgColor }"
    @click="searchBoxHandler"
  >
    <view class="my-search-box" :style="{ borderRadius: radius + 'px' }">
      <uni-icons type="search" size="18"></uni-icons>
      <text class="placeholder">搜索</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'my-search',
  data() {
    return {};
  },
  props: {
    bgColor: {
      type: String,
      default: '#c00000'
    },
    radius: {
      type: Number,
      default: 18
    }
  },
  methods: {
    searchBoxHandler() {
      console.log('handler');
      // 执行绑定在 my-search 上的自定义事件
      this.$emit('myClick');
    }
  }
};
</script>

<style lang="scss">
.my-search-container {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  .my-search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36px;
    background-color: #ffffff;
    .placeholder {
      font-size: 15px;
      margin-left: 5px;
    }
  }
}
</style>
