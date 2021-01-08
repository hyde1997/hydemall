<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/Feature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
import { itemListenerMixin, backTopMixin } from "common/mixin";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      // result: null
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      tabOffsetTop: window.innerHeight + 44,
      isTabFixed: false,
      saveY: 0,
      ImageListener: null
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 1);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 保存Y值
    this.saveY = this.$refs.scroll.getScrollY();
    // 取消全局事件的监听
    this.$bus.$off("imageLoad", this.ImageListener);
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata(); // 需要加this,因为这里methods的方法名和import和函数名相同了，需要区分
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 1.监听item中图片加载完成
    // const refresh = debounce(this.$refs.scroll.refresh, 100);
    // // 对监听的事件进行保存
    // this.itemImgListener = () => {
    //   // this.$refs.scroll.refresh();
    //   refresh();
    // };
    // this.$bus.$on("itemImageLoad", this.ImageListener);
    // 2.获取tabControl的offsetTop
    // this.tabOffsetTop = this.$refs.tabControl.offsetTop
    // 所有的组件都有一个属性$el:用于获取组建中的元素
    // console.log(this.$refs.tabControl.$el.offsetTop);
  },
  methods: {
    // 事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    contentScroll(position) {
      // 1.判断backtop是否显示
      this.backTopListener(position);
      // this.isShowBackTop = -position.y >= 1000 ? true : false;
      // 2.决定tabOffsetTop是否吸顶(position:fixed)
      this.isTabFixed = -position.y >= this.tabOffsetTop ? true : false;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    // 网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
#home {
  /* margin-top: 44px; */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /* 在使用浏览器原生滚动时为了让导航不跟随一起滚动时采用的属性 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
.tab-control {
  position: relative;
  z-index: 9;
}
/* 使用计算属性 */
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
