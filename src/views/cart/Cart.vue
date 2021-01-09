<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

// 从Vue中调用mapGetters辅助函数
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar
  },
  computed: {
    // 两种语法
    ...mapGetters(["cartLength", "cartList"])
    // 当前组件中定义的名称和getters.js中不同时，用下面这种
    // ...mapGetters({
    //   length: 'cartLength',
    //   list: 'cartList'
    // })
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  /* font-weight: 700; */
}
</style>
