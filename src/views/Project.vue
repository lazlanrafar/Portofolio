<template>
  <div class="project-page">
    <div class="title-page">
      <header-text text="My Project"></header-text>
    </div>

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

    <div class="project-list">
      <ul>
        <!-- ITEM 01 -->
        <li
          v-for="(project, index) in projects"
          :key="index"
          class="project-item"
        >
          <a
            :href="project.link"
            target="_blank"
            @mousemove="mouseMove($event, index)"
            @mouseleave="mouseLeave(index)"
          >
            <div class="content">
              <p class="no">0{{ index + 1 }}/</p>
              <div class="text">
                <p class="title">{{ project.title }}</p>
                <p class="design">Design by : {{ project.designer }}</p>
              </div>
            </div>
            <div class="hover-reveal">
              <img
                class="hidden-img"
                width="100%"
                :src="project.image"
                alt=""
              />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPage",
  components: {
    HeaderText: () => import("@/components/HeaderText"),
  },
  data() {
    return {
      active: "",
      isActive: "All",
      category: ["All"],
      projects: "",
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
    mouseMove(event, index) {
      let linkHoverReveal = document.querySelectorAll(".hover-reveal");
      let linkImages = document.querySelectorAll(".hidden-img");

      linkHoverReveal[index].style.opacity = 1;
      linkHoverReveal[
        index
      ].style.transform = `translate(-170%, -50% ) rotate(5deg)`;
      linkImages[index].style.transform = "scale(1, 1)";
      linkHoverReveal[index].style.left = event.clientX * 1.5 + "px";

      console.log(event, index);
    },
    mouseLeave(index) {
      let linkHoverReveal = document.querySelectorAll(".hover-reveal");
      let linkImages = document.querySelectorAll(".hidden-img");

      linkHoverReveal[index].style.opacity = 0;
      linkHoverReveal[
        index
      ].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
      linkImages[index].style.transform = "scale(0.8, 0.8)";
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
@import "@/assets/scss/project.scss";
</style>
