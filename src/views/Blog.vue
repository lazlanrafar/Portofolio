<template>
  <div class="blog-page">
    <h1 class="title-page">
      <span class="hov">M</span>
      <span class="hov">y</span>
      <span class="space"></span>
      <span class="hov">B</span>
      <span class="hov">l</span>
      <span class="hov">o</span>
      <span class="hov">g</span>
    </h1>

    <div class="blog-list">
      <div class="articles">
        <article v-for="article in articles" v-bind:key="article.id">
          <span class="code">article</span>
          <h3 class="title">
            <router-link to="#">
              {{ article.title }}
            </router-link>
          </h3>
          <p class="desc">
            {{ article.description }}
          </p>
          <span class="code">/article</span>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Web Application for Online Consultation (Kliniku)",
          description:
            "Kliniku is an online consultation platform where people can fill in an online form about their health issue to send for a doctor.",
        },
        {
          id: 2,
          title: "Web Application for Online Consultation (Kliniku)",
          description:
            "Kliniku is an online consultation platform where people can fill in an online form about their health issue to send for a doctor.",
        },
        {
          id: 3,
          title: "Web Application for Online Consultation (Kliniku)",
          description:
            "Kliniku is an online consultation platform where people can fill in an online form about their health issue to send for a doctor.",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/blog.scss";
</style>
