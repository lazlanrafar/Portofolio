import Vue from "vue";
import Vuex from "vuex";
import App from "@/store/App";
import Project from "@/store/Project";
import Work from "@/store/Work";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    App,
    Project,
    Work,
  },
});
