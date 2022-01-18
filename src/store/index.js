import Vue from "vue";
import Vuex from "vuex";
import Project from "@/store/Project";
import Work from "@/store/Work";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navActive: "",
  },
  mutations: {
    SET_NAVBAR_ACTIVE(state, payload) {
      state.navActive = payload;
    },
  },
  modules: {
    Project,
    Work,
  },
});
