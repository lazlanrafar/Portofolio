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
        v-for="(project, index) in projects"
        :key="index"
        class="project-item relative"
        :to="{ name: 'DetailProject', params: { id: project.id } }"
        @mouseenter.native="mouseEnter(index)"
        @mousemove.native="mouseMove"
      >
        <img
          v-if="index == active"
          :src="project.image"
          alt=""
          class="absolute w-72 rounded object-cover object-center"
          id="imageHover"
        />

        <div class="content">
          <p class="no">0{{ index + 1 }}/</p>
          <div class="text">
            <p class="title">{{ project.title }}</p>
            <p class="design">Design by : {{ project.designer }}</p>
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
      active: "",
      isActive: "All",
      category: ["All"],
    };
  },
  computed: {
    reports() {
      return this.$store.state.Project.reports;
    },
    // category() {
    //   return this.$store.state.Project.category;
    // },
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
    mouseEnter(index) {
      this.active = index;
    },
    mouseMove(event) {
      let imageHover = document.getElementById("imageHover");
      let x = event.clientX;
      // let y = event.clientY / (this.active + 5);
      imageHover.style.left = x + "px";
      // imageHover.style.top = y + "px";
    },
  },
  created() {
    this.projects = this.reports;
    for (const iterator of this.reports) {
      for (const item of iterator.category) {
        if (this.category.indexOf(item) === -1) {
          this.category.push(item);
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/project.scss";
</style>
