<template>
  <div class="contact">
    <div class="container">
      <div class="left">
        <header-text
          text="Contact Me"
          close="true"
          open="true"
          class="title"
        ></header-text>
        <div class="deks">
          <div class="code" style="margin-top: -15px">p</div>
          <p style="margin-bottom: 1rem">
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>
          <i class="code" style="top: -20px">/p</i>
        </div>
        <div class="code" style="margin-top: -20px">form</div>
        <form action="mailto:lazlanrafar@gmail.com" autocomplete="off">
          <div class="flex">
            <input type="text" name="name" placeholder="Name" class="double" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="double"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            class="single flex"
          />
          <textarea
            name="field"
            id="field"
            cols="30"
            rows="5"
            placeholder="Message"
            class="flex"
          ></textarea>
          <a
            type="submit"
            onclick="location.href='mailto:lazlanrafar@gmail.com';"
            class="btn-primary"
          >
            <span>Send Message</span>
          </a>
        </form>
        <div class="code">/form</div>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item, index) in socialMedia" :key="index">
            <a :href="item.link" target="_blank">
              <box-icon :name="item.icon" type="logo"></box-icon>
              <span>{{ item.username }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {
    HeaderText: () => import("@/components/atoms/HeaderText"),
  },
  data() {
    return {
      socialMedia: [
        {
          icon: "gmail",
          username: "lazlanrafar@gmail.com",
          link: "mailto:lazlanrafar@gmail.com",
        },
        {
          icon: "instagram-alt",
          username: "lazlanrafar",
          link: "https://www.instagram.com/lazlanrafar/",
        },
        {
          icon: "github",
          username: "lazlanrafar",
          link: "https://github.com/lazlanrafar",
        },
        {
          icon: "twitter",
          username: "lazlanrafar",
          link: "https://twitter.com/lazlanrafar",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/contact.scss";
</style>
