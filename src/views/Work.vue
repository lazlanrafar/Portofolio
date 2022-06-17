<template>
  <div class="work-page">
    <div class="title">
      <header-text text="My Work"></header-text>
    </div>

    <div class="work-list">
      <div class="work" v-for="work in reports" :key="work.key">
        <div class="information">
          <span class="code">h1</span>
          <h1 class="work-title">0{{ work.key }}.</h1>
          <h1 class="work-title">
            {{ work.title }}
            <span class="code" style="margin-left: 0.5rem; font-weight: normal"
              >/h1</span
            >
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
              :class="work.link === '' ? 'disabled' : 'links'"
            >
              Visit Now
            </a>
          </div>
        </div>
        <div class="img">
          <img :src="require(`@/assets/img/${work.img}`)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkPage",
  components: {
    HeaderText: () => import("@/components/HeaderText"),
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
@import "@/assets/scss/work.scss";
</style>
