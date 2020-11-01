import Vue from "vue";
import Vuex from "vuex";
import Portfolio from "./modules/portfolio";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
   Portfolio,
  },
});