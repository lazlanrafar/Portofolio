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
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  cursor: text;

  .letter {
    width: auto;
    transition: all 0.4s ease;
    display: inline-block;

    &:hover {
      animation: spanhover linear 1s;
    }
  }
  .space {
    padding: 5px;
  }
}
@keyframes spanhover {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
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
