<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
      message: "123"
    };
  },
  mounted() {
    // 1.创建BScroll对象
    let wrapper = this.$refs.wrapper;
    this.scroll = new BScroll(wrapper, {
      click: true
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style scoped></style>
