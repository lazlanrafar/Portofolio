<template>
  <div class="contact">
    <div class="container">
      <div class="text">
        <div class="code" style="margin-bottom: -15px">h1</div>
        <h1>
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
          <span class="space"></span>
          <span>M</span>
          <span>e</span>
          <i class="code" style="margin-left: 20px">/h1</i>
        </h1>
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
        <form action="" autocomplete="off">
          <div class="flex">
            <input type="text" name="name" placeholder="Name" class="double" />
            <input
              type="text"
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
          <button type="submit" class="btn-primary">
            <span>Send Message</span>
          </button>
        </form>
        <div class="code">/form</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/contact.scss";
</style>
