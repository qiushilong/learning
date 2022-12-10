<template>
  <view>
    <view class="goods-list">
      <block v-for="(goods, i) in goodsList" :key="i">
        <my-goods :goods="goods"></my-goods>
      </block>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      queryObj: {
        query: '',
        cid: '',
        pagenum: 1,
        pagesize: 10
      },
      goodsList: [],
      total: 0
    };
  },
  onLoad(options) {
    this.queryObj.query = options.query || '';
    this.queryObj.cid = options.cid || '';
    this.getGoodsList();
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await uni.$http.get(
        '/api/public/v1/goods/search',
        this.queryObj
      );
      if (res.meta.status !== 200) return uni.$showMsg();
      this.goodsList = res.message.goods;
      this.total = res.message.total;
    }
  }
};
</script>

<style lang="scss"></style>
