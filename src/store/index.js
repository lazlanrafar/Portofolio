import Vue from "vue";
import Vuex from "vuex";
import Project from "@/store/Project";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hover: [],
    backgroundTransition: null,
    lastVisitedPage: null,
    menuListHeight: 0,
    navList: null,
  },
  modules: {
    Project,
  },
});
