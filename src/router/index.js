import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Work from "@/views/Work.vue";
import Blog from "@/views/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
  },
  {
    path: "/about",
    name: "About Page",
    component: About,
  },
  {
    path: "/work",
    name: "Work Page",
    component: Work,
  },
  {
    path: "/blog",
    name: "Blog Page",
    component: Blog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
