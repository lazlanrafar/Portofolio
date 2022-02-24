<template>
  <div class="wrapper">
    <h1 :class="{ 'head-home': home, 'head-common': !home }">
      <span
        v-for="(letter, index) in text"
        :key="index"
        :class="{ space: letter.indexOf(' ') >= 0 }"
      >
        <span class="letter">
          {{ letter }}
        </span>
      </span>
    </h1>
    <div class="code" style="margin-left: 1rem" v-if="close">/h1</div>
  </div>
</template>

<script>
export default {
  name: "HeaderText",
  props: ["text", "close", "home"],
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}
.head-home {
  font-size: 5vw;
  letter-spacing: 4px;
}
.head-common {
  font-size: 4vw;
  letter-spacing: 2px;
}
h1 {
  font-family: coolvetica;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  cursor: text;
  .letter {
    transition: all 0.4s ease;
    display: inline-block;
    &:hover,
    &::after {
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
  .head-home {
    font-size: 10vw;
  }
  .head-common {
    font-size: 9vw;
  }
}
@media only screen and (max-width: 600px) {
  .head-home,
  .head-common {
    font-size: 12vw;
    letter-spacing: 1px;
    line-height: normal;
  }
}
</style>
