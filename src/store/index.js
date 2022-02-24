import Vue from "vue";
import Vuex from "vuex";
import App from "./App";
import Work from "./Work";
import Project from "./Project";

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {},
  actions: {},
  modules: {
    App,
    Work,
    Project,
  },
});
