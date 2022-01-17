<template>
  <div>
    <i v-if="open" class="code">h1</i>
    <h1>
      <span
        v-for="(letter, index) in text"
        :key="index"
        :class="{ space: letter.indexOf(' ') >= 0 }"
      >
        <span class="letter">
          {{ letter }}
        </span>
      </span>

      <i v-if="close" class="code" style="margin-left: 1rem">/h1</i>
    </h1>
  </div>
</template>

<script>
export default {
  name: "HeaderText",
  props: ["text", "close", "open"],
};
</script>

<style lang="scss" scoped>
h1 {
  letter-spacing: 2px;
  font-size: 4vw;
  line-height: 7vw;

  .letter {
    width: auto;
    transition: all 0.4s ease;
    display: inline-block;

    &:hover {
      transform: rotateZ(-10deg) scale(1.2);
    }
  }
  .space {
    padding: 5px;
  }
}

@media only screen and (max-width: 1024px) {
  h1 {
    font-size: 7vw;
  }
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 10vw;
    line-height: normal;
  }
}
</style>
