<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods" />
      <ul>
        <li>列表数据1</li>
        <li>列表数据2</li>
        <li>列表数据3</li>
        <li>列表数据4</li>
        <li>列表数据5</li>
        <li>列表数据6</li>
        <li>列表数据7</li>
        <li>列表数据8</li>
        <li>列表数据9</li>
        <li>列表数据10</li>
        <li>列表数据11</li>
        <li>列表数据12</li>
        <li>列表数据13</li>
        <li>列表数据14</li>
        <li>列表数据15</li>
        <li>列表数据16</li>
        <li>列表数据17</li>
        <li>列表数据18</li>
        <li>列表数据19</li>
        <li>列表数据20</li>
        <li>列表数据21</li>
        <li>列表数据22</li>
        <li>列表数据23</li>
        <li>列表数据24</li>
        <li>列表数据25</li>
        <li>列表数据26</li>
        <li>列表数据27</li>
        <li>列表数据28</li>
        <li>列表数据29</li>
        <li>列表数据30</li>
        <li>列表数据31</li>
        <li>列表数据32</li>
        <li>列表数据33</li>
        <li>列表数据34</li>
        <li>列表数据35</li>
        <li>列表数据36</li>
        <li>列表数据37</li>
        <li>列表数据38</li>
        <li>列表数据39</li>
        <li>列表数据40</li>
        <li>列表数据41</li>
        <li>列表数据42</li>
        <li>列表数据43</li>
        <li>列表数据44</li>
        <li>列表数据45</li>
        <li>列表数据46</li>
        <li>列表数据47</li>
        <li>列表数据48</li>
        <li>列表数据49</li>
        <li>列表数据50</li>
        <li>列表数据51</li>
        <li>列表数据52</li>
        <li>列表数据53</li>
        <li>列表数据54</li>
        <li>列表数据55</li>
        <li>列表数据56</li>
        <li>列表数据57</li>
        <li>列表数据58</li>
        <li>列表数据59</li>
        <li>列表数据60</li>
        <li>列表数据61</li>
        <li>列表数据62</li>
        <li>列表数据63</li>
        <li>列表数据64</li>
        <li>列表数据65</li>
        <li>列表数据66</li>
        <li>列表数据67</li>
        <li>列表数据68</li>
        <li>列表数据69</li>
        <li>列表数据70</li>
        <li>列表数据71</li>
        <li>列表数据72</li>
        <li>列表数据73</li>
        <li>列表数据74</li>
        <li>列表数据75</li>
        <li>列表数据76</li>
        <li>列表数据77</li>
        <li>列表数据78</li>
        <li>列表数据79</li>
        <li>列表数据80</li>
        <li>列表数据81</li>
        <li>列表数据82</li>
        <li>列表数据83</li>
        <li>列表数据84</li>
        <li>列表数据85</li>
        <li>列表数据86</li>
        <li>列表数据87</li>
        <li>列表数据88</li>
        <li>列表数据89</li>
        <li>列表数据90</li>
        <li>列表数据91</li>
        <li>列表数据92</li>
        <li>列表数据93</li>
        <li>列表数据94</li>
        <li>列表数据95</li>
        <li>列表数据96</li>
        <li>列表数据97</li>
        <li>列表数据98</li>
        <li>列表数据99</li>
        <li>列表数据100</li>
        <li>列表数据1</li>
        <li>列表数据2</li>
        <li>列表数据3</li>
        <li>列表数据4</li>
        <li>列表数据5</li>
        <li>列表数据6</li>
        <li>列表数据7</li>
        <li>列表数据8</li>
        <li>列表数据9</li>
        <li>列表数据10</li>
        <li>列表数据11</li>
        <li>列表数据12</li>
        <li>列表数据13</li>
        <li>列表数据14</li>
        <li>列表数据15</li>
        <li>列表数据16</li>
        <li>列表数据17</li>
        <li>列表数据18</li>
        <li>列表数据19</li>
        <li>列表数据20</li>
        <li>列表数据21</li>
        <li>列表数据22</li>
        <li>列表数据23</li>
        <li>列表数据24</li>
        <li>列表数据25</li>
        <li>列表数据26</li>
        <li>列表数据27</li>
        <li>列表数据28</li>
        <li>列表数据29</li>
        <li>列表数据30</li>
        <li>列表数据31</li>
        <li>列表数据32</li>
        <li>列表数据33</li>
        <li>列表数据34</li>
        <li>列表数据35</li>
        <li>列表数据36</li>
        <li>列表数据37</li>
        <li>列表数据38</li>
        <li>列表数据39</li>
        <li>列表数据40</li>
        <li>列表数据41</li>
        <li>列表数据42</li>
        <li>列表数据43</li>
        <li>列表数据44</li>
        <li>列表数据45</li>
        <li>列表数据46</li>
        <li>列表数据47</li>
        <li>列表数据48</li>
        <li>列表数据49</li>
        <li>列表数据50</li>
        <li>列表数据51</li>
        <li>列表数据52</li>
        <li>列表数据53</li>
        <li>列表数据54</li>
        <li>列表数据55</li>
        <li>列表数据56</li>
        <li>列表数据57</li>
        <li>列表数据58</li>
        <li>列表数据59</li>
        <li>列表数据60</li>
        <li>列表数据61</li>
        <li>列表数据62</li>
        <li>列表数据63</li>
        <li>列表数据64</li>
        <li>列表数据65</li>
        <li>列表数据66</li>
        <li>列表数据67</li>
        <li>列表数据68</li>
        <li>列表数据69</li>
        <li>列表数据70</li>
        <li>列表数据71</li>
        <li>列表数据72</li>
        <li>列表数据73</li>
        <li>列表数据74</li>
        <li>列表数据75</li>
        <li>列表数据76</li>
        <li>列表数据77</li>
        <li>列表数据78</li>
        <li>列表数据79</li>
        <li>列表数据80</li>
        <li>列表数据81</li>
        <li>列表数据82</li>
        <li>列表数据83</li>
        <li>列表数据84</li>
        <li>列表数据85</li>
        <li>列表数据86</li>
        <li>列表数据87</li>
        <li>列表数据88</li>
        <li>列表数据89</li>
        <li>列表数据90</li>
        <li>列表数据91</li>
        <li>列表数据92</li>
        <li>列表数据93</li>
        <li>列表数据94</li>
        <li>列表数据95</li>
        <li>列表数据96</li>
        <li>列表数据97</li>
        <li>列表数据98</li>
        <li>列表数据99</li>
        <li>列表数据100</li>
        <li>列表数据1</li>
        <li>列表数据2</li>
        <li>列表数据3</li>
        <li>列表数据4</li>
        <li>列表数据5</li>
        <li>列表数据6</li>
        <li>列表数据7</li>
        <li>列表数据8</li>
        <li>列表数据9</li>
        <li>列表数据10</li>
        <li>列表数据11</li>
        <li>列表数据12</li>
        <li>列表数据13</li>
        <li>列表数据14</li>
        <li>列表数据15</li>
        <li>列表数据16</li>
        <li>列表数据17</li>
        <li>列表数据18</li>
        <li>列表数据19</li>
        <li>列表数据20</li>
        <li>列表数据21</li>
        <li>列表数据22</li>
        <li>列表数据23</li>
        <li>列表数据24</li>
        <li>列表数据25</li>
        <li>列表数据26</li>
        <li>列表数据27</li>
        <li>列表数据28</li>
        <li>列表数据29</li>
        <li>列表数据30</li>
        <li>列表数据31</li>
        <li>列表数据32</li>
        <li>列表数据33</li>
        <li>列表数据34</li>
        <li>列表数据35</li>
        <li>列表数据36</li>
        <li>列表数据37</li>
        <li>列表数据38</li>
        <li>列表数据39</li>
        <li>列表数据40</li>
        <li>列表数据41</li>
        <li>列表数据42</li>
        <li>列表数据43</li>
        <li>列表数据44</li>
        <li>列表数据45</li>
        <li>列表数据46</li>
        <li>列表数据47</li>
        <li>列表数据48</li>
        <li>列表数据49</li>
        <li>列表数据50</li>
        <li>列表数据51</li>
        <li>列表数据52</li>
        <li>列表数据53</li>
        <li>列表数据54</li>
        <li>列表数据55</li>
        <li>列表数据56</li>
        <li>列表数据57</li>
        <li>列表数据58</li>
        <li>列表数据59</li>
        <li>列表数据60</li>
        <li>列表数据61</li>
        <li>列表数据62</li>
        <li>列表数据63</li>
        <li>列表数据64</li>
        <li>列表数据65</li>
        <li>列表数据66</li>
        <li>列表数据67</li>
        <li>列表数据68</li>
        <li>列表数据69</li>
        <li>列表数据70</li>
        <li>列表数据71</li>
        <li>列表数据72</li>
        <li>列表数据73</li>
        <li>列表数据74</li>
        <li>列表数据75</li>
        <li>列表数据76</li>
        <li>列表数据77</li>
        <li>列表数据78</li>
        <li>列表数据79</li>
        <li>列表数据80</li>
        <li>列表数据81</li>
        <li>列表数据82</li>
        <li>列表数据83</li>
        <li>列表数据84</li>
        <li>列表数据85</li>
        <li>列表数据86</li>
        <li>列表数据87</li>
        <li>列表数据88</li>
        <li>列表数据89</li>
        <li>列表数据90</li>
        <li>列表数据91</li>
        <li>列表数据92</li>
        <li>列表数据93</li>
        <li>列表数据94</li>
        <li>列表数据95</li>
        <li>列表数据96</li>
        <li>列表数据97</li>
        <li>列表数据98</li>
        <li>列表数据99</li>
        <li>列表数据100</li>
        <li>列表数据1</li>
        <li>列表数据2</li>
        <li>列表数据3</li>
        <li>列表数据4</li>
        <li>列表数据5</li>
        <li>列表数据6</li>
        <li>列表数据7</li>
        <li>列表数据8</li>
        <li>列表数据9</li>
        <li>列表数据10</li>
        <li>列表数据11</li>
        <li>列表数据12</li>
        <li>列表数据13</li>
        <li>列表数据14</li>
        <li>列表数据15</li>
        <li>列表数据16</li>
        <li>列表数据17</li>
        <li>列表数据18</li>
        <li>列表数据19</li>
        <li>列表数据20</li>
        <li>列表数据21</li>
        <li>列表数据22</li>
        <li>列表数据23</li>
        <li>列表数据24</li>
        <li>列表数据25</li>
        <li>列表数据26</li>
        <li>列表数据27</li>
        <li>列表数据28</li>
        <li>列表数据29</li>
        <li>列表数据30</li>
        <li>列表数据31</li>
        <li>列表数据32</li>
        <li>列表数据33</li>
        <li>列表数据34</li>
        <li>列表数据35</li>
        <li>列表数据36</li>
        <li>列表数据37</li>
        <li>列表数据38</li>
        <li>列表数据39</li>
        <li>列表数据40</li>
        <li>列表数据41</li>
        <li>列表数据42</li>
        <li>列表数据43</li>
        <li>列表数据44</li>
        <li>列表数据45</li>
        <li>列表数据46</li>
        <li>列表数据47</li>
        <li>列表数据48</li>
        <li>列表数据49</li>
        <li>列表数据50</li>
        <li>列表数据51</li>
        <li>列表数据52</li>
        <li>列表数据53</li>
        <li>列表数据54</li>
        <li>列表数据55</li>
        <li>列表数据56</li>
        <li>列表数据57</li>
        <li>列表数据58</li>
        <li>列表数据59</li>
        <li>列表数据60</li>
        <li>列表数据61</li>
        <li>列表数据62</li>
        <li>列表数据63</li>
        <li>列表数据64</li>
        <li>列表数据65</li>
        <li>列表数据66</li>
        <li>列表数据67</li>
        <li>列表数据68</li>
        <li>列表数据69</li>
        <li>列表数据70</li>
        <li>列表数据71</li>
        <li>列表数据72</li>
        <li>列表数据73</li>
        <li>列表数据74</li>
        <li>列表数据75</li>
        <li>列表数据76</li>
        <li>列表数据77</li>
        <li>列表数据78</li>
        <li>列表数据79</li>
        <li>列表数据80</li>
        <li>列表数据81</li>
        <li>列表数据82</li>
        <li>列表数据83</li>
        <li>列表数据84</li>
        <li>列表数据85</li>
        <li>列表数据86</li>
        <li>列表数据87</li>
        <li>列表数据88</li>
        <li>列表数据89</li>
        <li>列表数据90</li>
        <li>列表数据91</li>
        <li>列表数据92</li>
        <li>列表数据93</li>
        <li>列表数据94</li>
        <li>列表数据95</li>
        <li>列表数据96</li>
        <li>列表数据97</li>
        <li>列表数据98</li>
        <li>列表数据99</li>
        <li>列表数据100</li>
        <li>列表数据1</li>
        <li>列表数据2</li>
        <li>列表数据3</li>
        <li>列表数据4</li>
        <li>列表数据5</li>
        <li>列表数据6</li>
        <li>列表数据7</li>
        <li>列表数据8</li>
        <li>列表数据9</li>
        <li>列表数据10</li>
        <li>列表数据11</li>
        <li>列表数据12</li>
        <li>列表数据13</li>
        <li>列表数据14</li>
        <li>列表数据15</li>
        <li>列表数据16</li>
        <li>列表数据17</li>
        <li>列表数据18</li>
        <li>列表数据19</li>
        <li>列表数据20</li>
        <li>列表数据21</li>
        <li>列表数据22</li>
        <li>列表数据23</li>
        <li>列表数据24</li>
        <li>列表数据25</li>
        <li>列表数据26</li>
        <li>列表数据27</li>
        <li>列表数据28</li>
        <li>列表数据29</li>
        <li>列表数据30</li>
        <li>列表数据31</li>
        <li>列表数据32</li>
        <li>列表数据33</li>
        <li>列表数据34</li>
        <li>列表数据35</li>
        <li>列表数据36</li>
        <li>列表数据37</li>
        <li>列表数据38</li>
        <li>列表数据39</li>
        <li>列表数据40</li>
        <li>列表数据41</li>
        <li>列表数据42</li>
        <li>列表数据43</li>
        <li>列表数据44</li>
        <li>列表数据45</li>
        <li>列表数据46</li>
        <li>列表数据47</li>
        <li>列表数据48</li>
        <li>列表数据49</li>
        <li>列表数据50</li>
        <li>列表数据51</li>
        <li>列表数据52</li>
        <li>列表数据53</li>
        <li>列表数据54</li>
        <li>列表数据55</li>
        <li>列表数据56</li>
        <li>列表数据57</li>
        <li>列表数据58</li>
        <li>列表数据59</li>
        <li>列表数据60</li>
        <li>列表数据61</li>
        <li>列表数据62</li>
        <li>列表数据63</li>
        <li>列表数据64</li>
        <li>列表数据65</li>
        <li>列表数据66</li>
        <li>列表数据67</li>
        <li>列表数据68</li>
        <li>列表数据69</li>
        <li>列表数据70</li>
        <li>列表数据71</li>
        <li>列表数据72</li>
        <li>列表数据73</li>
        <li>列表数据74</li>
        <li>列表数据75</li>
        <li>列表数据76</li>
        <li>列表数据77</li>
        <li>列表数据78</li>
        <li>列表数据79</li>
        <li>列表数据80</li>
        <li>列表数据81</li>
        <li>列表数据82</li>
        <li>列表数据83</li>
        <li>列表数据84</li>
        <li>列表数据85</li>
        <li>列表数据86</li>
        <li>列表数据87</li>
        <li>列表数据88</li>
        <li>列表数据89</li>
        <li>列表数据90</li>
        <li>列表数据91</li>
        <li>列表数据92</li>
        <li>列表数据93</li>
        <li>列表数据94</li>
        <li>列表数据95</li>
        <li>列表数据96</li>
        <li>列表数据97</li>
        <li>列表数据98</li>
        <li>列表数据99</li>
        <li>列表数据100</li>
      </ul>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <!-- <category /> -->
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
import BackTop from "components/content/backTop/BackTop";

// import Category from "../category/Category";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    // Category,
    Scroll,
    BackTop
  },
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
      isShowBackTop: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata(); // 需要加this,因为这里methods的方法名和import和函数名相同了，需要区分
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
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
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
      // console.log(this.$refs.scroll.message);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y >= 1000 ? true : false;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
    },
    // 网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
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
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
/* 使用计算属性 */
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
