import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types";

export default {
  addToCart(context, payload) {
    // payload新添加的商品
    // let oldProduct = null;
    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item;
    //   }
    // }
    // 1.查找之前的数组中书否有该商品了
    let oldProduct = context.state.cartList.find(
      item => item.iid === payload.iid
    );
    // 2.判断oldProduct
    if (oldProduct) {
      // oldProduct.count += 1;
      context.commit(ADD_COUNTER, oldProduct);
    } else {
      payload.count = 1;
      // context.state.cartList.push(payload);
      context.commit(ADD_TO_CART, payload);
    }
  }
};
