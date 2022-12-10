<template>
  <view>
    <view class="scroll-box">
      <uni-search-bar
        @confirm="search"
        @input="input"
        :radius="100"
        cancelButton="none"
      ></uni-search-bar>
    </view>

    <view class="sugg-list">
      <view
        class="sugg-item"
        v-for="(item, i) in searchResults"
        :key="i"
        @click="gotoDetail(item)"
      >
        <view class="goods-name">{{ item.goods_name }}</view>
        <uni-icons type="arrowright" size="16"></uni-icons>
      </view>
    </view>

    <view class="history-box" v-if="searchResults.length === 0">
      <view class="history-title">
        <text>搜索历史</text>
        <uni-icons type="trash" size="17" @click="clean"></uni-icons>
      </view>
      <view class="history-list">
        <uni-tag
          :text="item"
          v-for="(item, i) in histories"
          :key="i"
          @click="gotoGoodsList(item)"
        ></uni-tag>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      kw: '',
      searchResults: [],
      historyList: JSON.parse(uni.getStorageSync('kw') || '[]')
    };
  },
  methods: {
    search() {},
    input(value) {
      // 防抖
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log(value);
        this.kw = value;
        this.getSearchList();
      }, 500);
    },
    async getSearchList() {
      if (this.kw === '') {
        this.searchResults = [];
        return;
      }
      const { data: res } = await uni.$http.get(
        '/api/public/v1/goods/qsearch',
        {
          query: this.kw
        }
      );
      if (res.meta.status !== 200) return uni.$showMsg();
      this.searchResults = res.message;
      this.saveSearchHistory();
    },
    gotoDetail(item) {
      console.log(item);
      uni.navigateTo({
        url: '/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id
      });
    },
    saveSearchHistory() {
      const set = new Set(this.historyList);
      set.delete(this.kw);
      set.add(this.kw);
      this.historyList = Array.from(set);
      uni.setStorageSync('kw', JSON.stringify(this.historyList));
    },
    clean() {
      this.historyList = [];
      uni.setStorageSync('kw', '');
    },
    gotoGoodsList(kw) {
      uni.navigateTo({
        url: '/subpkg/goods_list/goods_list?query=' + kw
      });
    }
  },
  computed: {
    histories() {
      return [...this.historyList].reverse();
    }
  }
};
</script>

<style lang="scss">
.scroll-box {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #c00000;
}
.sugg-list {
  padding: 0 5px;
  .sugg-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #efefef;
    .goods-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      padding: 13px 0;
    }
  }
}
.history-box {
  padding: 0 5px;
  .history-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    font-size: 13px;
    border-bottom: 1px solid #efefef;
  }
  .history-list {
    display: flex;
    flex-wrap: wrap;
    .uni-tag {
      margin-top: 5px;
      margin-right: 5px;
    }
  }
}
</style>
