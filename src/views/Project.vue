<template>
  <div class="project-page">
    <header-text text="My Project" class="title-page"></header-text>

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
        :to="{ name: 'DetailProject', params: { id: project.id } }"
      >
        <div class="image">
          <img :src="project.image" alt="..." />
          <div class="content">
            <div class="text">
              <p class="title">{{ project.title }}</p>
              <p class="design">Design by :</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPage",
  components: {
    HeaderText: () => import("@/components/atoms/HeaderText"),
  },
  data() {
    return {
      isActive: "All",
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
          for (let i = 0; i < data.category.length; i++) {
            if (data.category[i] == item) {
              x.push(data);
            }
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
