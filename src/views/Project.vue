<template>
  <div class="project-page">
    <h1 class="title-page">
      <span class="hov">M</span>
      <span class="hov">y</span>
      <span class="space"></span>
      <span class="hov">P</span>
      <span class="hov">r</span>
      <span class="hov">o</span>
      <span class="hov">j</span>
      <span class="hov">e</span>
      <span class="hov">c</span>
      <span class="hov">t</span>
      <span class="hov">s</span>
    </h1>

    <ul class="cetegory">
      <li
        v-for="(item, index) in category"
        :key="index"
        @click="setCategory(item)"
        v-bind:class="{ active: item == isActive }"
      >
        {{ item }}
      </li>
    </ul>

    <div class="wrapper">
      <router-link
        class="card"
        v-for="(project, index) in projects"
        :key="index"
        :to="{ name: 'Detail Project', params: { id: project.id } }"
      >
        <div class="image">
          <img :src="project.image" alt="..." />
          <div class="content">
            <p class="title">{{ project.title }}</p>
            <p class="design">Design by :</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: "All",
      projects: [],
    };
  },
  computed: {
    reports() {
      return this.$store.state.Project.reports;
    },
    category() {
      return this.$store.state.Project.category;
    },
  },
  methods: {
    setCategory(item) {
      this.isActive = item;
      let x = [];
      if (item == "All") {
        this.projects = this.reports;
      } else {
        for (const data of this.reports) {
          if (data.category == item) {
            x.push(data);
          }
        }
        this.projects = x;
      }
    },
  },
  created() {
    this.projects = this.reports;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/project.scss";
</style>
