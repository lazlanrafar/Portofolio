<template>
  <div class="container">
    <h1 class="title">{{ detail.title }}</h1>
    <div class="breadcrumb">
      <router-link to="/project">Project</router-link>
      <span class="active"> / {{ detail.title }}</span>
    </div>
    <div class="mini-nav">
      <p
        v-bind:class="{ active: 'Overview' == isActive }"
        @click="setIsActive('Overview')"
      >
        Overview
      </p>
      <p
        v-bind:class="{ active: 'Deskripsi' == isActive }"
        @click="setIsActive('Deskripsi')"
      >
        Deskripsi
      </p>
    </div>
    <div class="d-flex">
      <div class="left">
        <div v-if="isActive == 'Overview'">
          <img :src="detail.image" alt="" />
        </div>
        <div v-if="isActive == 'Deskripsi'">
          <p>
            {{ detail.description }}
          </p>
        </div>
      </div>
      <div class="right">
        <div class="card">
          <div class="logo">
            <img :src="detail.logo" alt="" />
          </div>
          <div class="category">
            <p v-for="item in detail.category" :key="item">{{ item }}</p>
          </div>
          <p class="created">Created at 01-01-2022</p>
          <div class="action">
            <a :href="detail.link" class="preview" target="_blank">Preview</a>
            <a :href="detail.sourceCode" class="source-code" target="_blank"
              >Source Code</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailProject",
  data() {
    return {
      detail: [],
      isActive: "Overview",
    };
  },
  computed: {
    reports() {
      return this.$store.state.Project.reports;
    },
  },
  methods: {
    setIsActive(param) {
      this.isActive = param;
    },
  },
  mounted() {
    for (const itter of this.reports) {
      if (itter.id == this.$route.params.id) {
        this.detail = itter;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 5em auto;
  color: #fff;

  .d-flex {
    justify-content: start;
  }

  .title {
    font-size: 2.3vw;
    font-weight: 700;
  }

  .breadcrumb {
    font-size: 0.8rem;

    a {
      color: var(--red-color);
      text-decoration: none;
    }
    .active {
      color: var(--muted-color);
    }
  }
  .mini-nav {
    margin: 1.5rem 0;

    p {
      cursor: pointer;
      padding-bottom: 5px;
      display: inline-block;
      margin-right: 1em;
      color: #7a7a7a;
    }

    .active {
      border-bottom: 1px solid var(--font-color);
      color: var(--font-color);
    }
  }

  .left {
    width: 60%;

    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  .right {
    width: 20%;
    margin-left: 5em;
    position: sticky;

    .card {
      padding: 0.5em;
      .logo {
        padding: 1em;
        img {
          width: 100%;
        }
      }
      .category {
        margin-top: 0.5em;
        p {
          display: inline-block;
          padding: 0.5em 1em;
          font-size: 0.8rem;
          background: #2a2a2a;
          border-radius: 5px;
          margin-right: 0.5em;
        }
      }
      .created {
        font-size: 0.9rem;
        margin-top: 1em;
      }
      .action {
        a {
          display: block;
          text-decoration: none;
          text-align: center;
          margin: 1em 0;
          border: 1px solid var(--red-color);
          border-radius: 5px;
          padding: 0.4em;
          font-weight: 500;
        }
        .preview {
          color: var(--red-color);
        }
        .source-code {
          color: var(--font-color);
          background: var(--red-color);
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .d-flex {
    justify-content: space-between !important;
  }
  .title {
    font-size: 2rem !important;
  }
  .right {
    width: 35% !important;
    margin: 0 !important;
  }
}

@media only screen and (max-width: 600px) {
  .container {
    margin: 2rem auto !important;
  }
  .d-flex {
    display: block !important;
  }
  .left {
    width: 100% !important;
  }
  .right {
    width: 100% !important;
    .logo {
      padding: 3rem !important;
    }
  }
}
</style>
