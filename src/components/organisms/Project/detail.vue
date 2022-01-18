<template>
  <div class="backround" :style="{ backgroundImage: `url(${detail.image})` }">
    <div class="detail-project">
      <div class="container">
        <div class="d-flex">
          <div class="left">
            <p class="sub">Case Study</p>
            <h1 class="title">{{ detail.title }}</h1>
            <br />
            <p class="sub">Category</p>
            <ul>
              <li v-for="(item, index) in detail.category" :key="index">
                {{ item }}
              </li>
            </ul>
            <br />
            <p class="sub">Design by</p>
            <p class="designer">
              <a
                :href="detail.linkDesigner"
                style="text-decoration: none; color: white"
                >{{ detail.designer }}</a
              >
            </p>
            <br />
            <p class="sub">Created at</p>
            <p class="created">{{ detail.created }}</p>
            <br />
            <p class="sub">Link Preview</p>
            <a :href="detail.link" target="_blank">{{ detail.link }}</a>
            <br /><br />
            <p class="sub">Source Code</p>
            <a :href="detail.sourceCode" target="_blank">{{
              detail.sourceCode
            }}</a>
          </div>
          <div class="right">
            <p class="sub">Description</p>
            <p class="desc">
              {{ detail.description }}
            </p>
            <br />
            <img
              class="image"
              v-for="(image, i) in images"
              v-bind:key="i"
              :src="image"
              @click="index = i"
            />
            <vue-gallery-slideshow
              :images="images"
              :index="index"
              class="imageslideshow"
              @close="index = null"
            ></vue-gallery-slideshow>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";
export default {
  name: "detailProject",
  components: {
    VueGallerySlideshow,
  },
  data() {
    return {
      detail: "",
      index: null,
      images: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      },
    };
  },
  computed: {
    reports() {
      return this.$store.state.Project.reports;
    },
  },
  mounted() {
    for (const itter of this.reports) {
      if (itter.id == this.$route.params.id) {
        this.detail = itter;
        this.images.push(itter.image);
        const [i] = itter.images;
        this.images.push(i);
      }
    }
    console.log(this.images);
  },
};
</script>

<style lang="scss" scoped>
.backround {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
}

.detail-project {
  background: linear-gradient(rgba(0, 0, 0, 0.7), var(--main-color));
  height: 100%;
  padding-top: 1vw !important;
}
.imageslideshow {
  img {
    margin-top: 10vh !important;
  }
}
.container {
  width: 90%;
  margin: 5em auto;
  color: #fff;
  .d-flex {
    display: flex;
    justify-content: space-between;

    .left {
      width: 60vw;

      p {
        text-transform: uppercase;
        font-size: 1vw;
      }

      .sub {
        opacity: 0.5;
        margin-bottom: 0.5rem;
        font-size: 0.8vw;
      }

      li {
        list-style: none;
        text-transform: uppercase;
        font-size: 1vw;
      }

      a {
        color: var(--red-color);
        font-size: 1vw;
      }
    }

    .right {
      margin-left: 2vw;
      .sub {
        opacity: 0.5;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        font-size: 0.8vw;
      }
      p {
        font-size: 1vw;
      }
      img {
        display: inline-block;
        margin-right: 1%;
        width: calc(97% / 4);
        cursor: pointer;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .container {
    padding-bottom: calc(var(--size-navbar-mobile) + 1rem);
    .d-flex {
      display: block;
      .left {
        width: 60vw;

        .sub {
          font-size: 2vw;
        }
        p {
          font-size: 2.5vw;
        }

        li {
          font-size: 2.5vw;
        }

        a {
          font-size: 2.5vw;
        }
      }

      .right {
        margin-left: 0 !important;
        margin-top: 2rem;
        p {
          font-size: 2.5vw;
        }
        .sub {
          font-size: 2vw;
        }
        img {
          width: calc(100% / 3);
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .container {
    .d-flex {
      .left {
        width: 100%;

        h1 {
          font-size: 7vw;
        }
        .sub {
          font-size: 3vw;
        }
        p {
          font-size: 4vw;
        }

        li {
          font-size: 4vw;
        }

        a {
          font-size: 4vw;
        }
      }

      .right {
        margin-left: 0 !important;
        margin-top: 2rem;
        p {
          font-size: 4vw;
        }
        .sub {
          font-size: 3vw;
        }
        img {
          width: 100%;
          margin: 0 !important;
        }
      }
    }
  }
}
</style>
