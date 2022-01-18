<template>
  <div>
    <i v-if="open" class="code">h1</i>
    <h1>
      <span
        v-for="(letter, index) in text"
        :key="index"
        :class="{ space: letter.indexOf(' ') >= 0 }"
      >
        <div v-if="letter == '*'" class="eyes">
          <div class="pupil">
            <div class="light"></div>
          </div>
        </div>

        <span v-else class="letter">
          {{ letter }}
        </span>
      </span>

      <i v-if="close" class="code close" style="margin-left: 1rem">/h1</i>
    </h1>
  </div>
</template>

<script>
export default {
  name: "HeaderText",
  props: ["text", "close", "open"],
  mounted() {
    const pupil = document.querySelectorAll(".pupil");
    document.onmousemove = function () {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";
      pupil.forEach((eye) => {
        eye.style.left = x;
        eye.style.top = y;
        eye.style.transform = "translate(-" + x + ", -" + y + ")";
      });
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  letter-spacing: 2px;
  font-size: 5vw;
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

h1 div {
  display: inline-block;
}
// TODO : Eyes

.eyes {
  height: 5vw;
  width: 5vw;
  border: 4px solid var(--font-color);
  border-radius: 50%;
  position: relative;
  animation: eye 2s infinite;
  overflow: hidden;
  margin: -0.5em 0.5rem 0 0.5rem;
  z-index: 99;

  .pupil {
    height: 2.5vw;
    width: 2.5vw;
    border-radius: 50%;
    background: var(--font-color);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes eye {
  0% {
    transform: translateY(30%) scaleY(1);
  }
  35% {
    transform: translateY(30%) scaleY(1);
  }
  45% {
    transform: translateY(30%) scaleY(0);
  }
  55% {
    transform: translateY(30%) scaleY(1);
  }
  100% {
    transform: translateY(30%) scaleY(1);
  }
}

@media only screen and (max-width: 1024px) {
  h1 {
    font-size: 9vw !important;
    line-height: 10vw !important;
  }
  .eyes {
    height: 11vw !important;
    width: 11vw !important;
    border: 5px solid var(--font-color) !important;

    .pupil {
      height: 5vw !important;
      width: 5vw !important;
    }
  }
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 9vw !important;
    line-height: 12vw !important;
  }
  .close {
    display: none;
  }
  .eyes {
    height: 11vw !important;
    width: 11vw !important;
    border: 2px solid var(--font-color) !important;

    .pupil {
      height: 5vw !important;
      width: 5vw !important;
    }
  }
}
</style>
