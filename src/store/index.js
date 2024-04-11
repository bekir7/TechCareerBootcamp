import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      cart: []
    }
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    total(state) {
      return state.cart.reduce((total, item) => total + item.price, 0);
    }
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
    emptyCart(state) {
      state.cart = [];
    }
  }
});
