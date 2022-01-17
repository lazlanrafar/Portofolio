import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Work from "@/views/Work.vue";
import Project from "@/views/Project.vue";
import Contact from "@/views/Contact.vue";
import ProjectDetail from "@/components/organisms/Project/detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: About,
  },
  {
    path: "/work",
    name: "WorkPage",
    component: Work,
  },
  {
    path: "/project",
    name: "ProjectPage",
    component: Project,
  },
  {
    path: "/project/:id",
    name: "DetailProject",
    component: ProjectDetail,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
