import { debounce } from "common/utils";
import { BACK_POSITION } from "./const";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    };
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => {
      this.newRefresh;
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
    // console.log(123);
  }
};

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
      // console.log(this.$refs.scroll.message);
    },
    backTopListener(position) {
      this.isShowBackTop = -position.y >= BACK_POSITION;
    }
  }
};
