<template>
  <div>
    <i v-if="open" class="code">h1</i>
    <h1>
      <span
        v-for="(letter, index) in text"
        :key="index"
        :class="{ 'p-2': letter.indexOf(' ') >= 0 }"
      >
        <div v-if="letter == '*'" class="eyes">
          <div class="pupil">
            <div class="light"></div>
          </div>
        </div>

        <span v-else class="letter font-bold">
          {{ letter }}
        </span>
      </span>

      <i v-if="close" class="code close ml-3">/h1</i>
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
}

h1 div {
  display: inline-block;
}
// TODO : Eyes

.eyes {
  height: 5vw;
  width: 5vw;
  border: 4px solid var(--second-color);
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
    background: var(--second-color);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .light {
      background-color: var(--main-color);
      height: 0.2em;
      width: 0.2em;
      border-radius: 50%;
      position: absolute;
      left: 15%;
      top: 15%;
      transform: translate(-10%, -10%);
    }
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
