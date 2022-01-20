<template>
  <div class="work-page">
    <header-text text="My Work" class="title"></header-text>

    <div class="work-list">
      <div class="work" v-for="work in reports" :key="work.key">
        <div class="information">
          <span class="code">h1</span>
          <h1 class="work-number">0{{ work.key }}.</h1>
          <h1 class="work-title">
            {{ work.title }}
            <span class="space"></span>
            <span class="space"></span>
            <span class="code" style="margin-left: 0.5rem">/h1</span>
          </h1>
          <img :src="work.img" alt="" class="mobile-img" />
          <span class="code">p</span>
          <p class="description">
            {{ work.description }}
          </p>
          <div class="tools">
            <p>
              Code Tools :
              <span>{{ work.codeTools.join(", ") }}</span>
            </p>
            <p class="design">
              Design : <span>{{ work.design }}</span>
            </p>
          </div>
          <span class="code">/p</span>
          <div class="links">
            <a
              target="_blank"
              :href="work.link"
              :class="work.link === '' ? 'disabled' : ''"
            >
              Visit Now
            </a>
          </div>
        </div>
        <div class="img">
          <img :src="work.img" alt="" />
          <div class="visit">
            <a
              target="_blank"
              :href="work.link"
              :class="work.link === '' ? 'disabled' : ''"
            >
              Visit Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkPage",
  components: {
    HeaderText: () => import("@/components/atoms/HeaderText"),
  },
  data() {
    return {};
  },
  computed: {
    reports() {
      return this.$store.state.Work.reports;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/work.scss";
</style>
