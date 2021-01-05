<template>
  <div class="wrapper">
    <ul class="content">
      <button @click="btnClick">按钮</button>
      <li>商品内容1</li>
      <li>商品内容2</li>
      <li>商品内容3</li>
      <li>商品内容4</li>
      <li>商品内容5</li>
      <li>商品内容6</li>
      <li>商品内容7</li>
      <li>商品内容8</li>
      <li>商品内容9</li>
      <li>商品内容10</li>
      <li>商品内容11</li>
      <li>商品内容12</li>
      <li>商品内容13</li>
      <li>商品内容14</li>
      <li>商品内容15</li>
      <li>商品内容16</li>
      <li>商品内容17</li>
      <li>商品内容18</li>
      <li>商品内容19</li>
      <li>商品内容20</li>
      <li>商品内容21</li>
      <li>商品内容22</li>
      <li>商品内容23</li>
      <li>商品内容24</li>
      <li>商品内容25</li>
      <li>商品内容26</li>
      <li>商品内容27</li>
      <li>商品内容28</li>
      <li>商品内容29</li>
      <li>商品内容30</li>
      <li>商品内容31</li>
      <li>商品内容32</li>
      <li>商品内容33</li>
      <li>商品内容34</li>
      <li>商品内容35</li>
      <li>商品内容36</li>
      <li>商品内容37</li>
      <li>商品内容38</li>
      <li>商品内容39</li>
      <li>商品内容40</li>
      <li>商品内容41</li>
      <li>商品内容42</li>
      <li>商品内容43</li>
      <li>商品内容44</li>
      <li>商品内容45</li>
      <li>商品内容46</li>
      <li>商品内容47</li>
      <li>商品内容48</li>
      <li>商品内容49</li>
      <li>商品内容50</li>
      <li>商品内容51</li>
      <li>商品内容52</li>
      <li>商品内容53</li>
      <li>商品内容54</li>
      <li>商品内容55</li>
      <li>商品内容56</li>
      <li>商品内容57</li>
      <li>商品内容58</li>
      <li>商品内容59</li>
      <li>商品内容60</li>
      <li>商品内容61</li>
      <li>商品内容62</li>
      <li>商品内容63</li>
      <li>商品内容64</li>
      <li>商品内容65</li>
      <li>商品内容66</li>
      <li>商品内容67</li>
      <li>商品内容68</li>
      <li>商品内容69</li>
      <li>商品内容70</li>
      <li>商品内容71</li>
      <li>商品内容72</li>
      <li>商品内容73</li>
      <li>商品内容74</li>
      <li>商品内容75</li>
      <li>商品内容76</li>
      <li>商品内容77</li>
      <li>商品内容78</li>
      <li>商品内容79</li>
      <li>商品内容80</li>
      <li>商品内容81</li>
      <li>商品内容82</li>
      <li>商品内容83</li>
      <li>商品内容84</li>
      <li>商品内容85</li>
      <li>商品内容86</li>
      <li>商品内容87</li>
      <li>商品内容88</li>
      <li>商品内容89</li>
      <li>商品内容90</li>
      <li>商品内容91</li>
      <li>商品内容92</li>
      <li>商品内容93</li>
      <li>商品内容94</li>
      <li>商品内容95</li>
      <li>商品内容96</li>
      <li>商品内容97</li>
      <li>商品内容98</li>
      <li>商品内容99</li>
      <li>商品内容100</li>
    </ul>
  </div>
</template>

<script>
import BScroll, { PullUpLoad } from "better-scroll";
export default {
  name: "Category",
  // data() {
  //   return {
  //     scroll: null
  //   };
  // },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper, {
      probeType: 3,
      pullUpLoad: true
    });
    scroll.on("scroll", position => {
      console.log(position);
    });
    scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  },
  methods: {
    btnClick() {
      console.log("btnClick");
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: 300px;
  background-color: pink;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>
