<template>
  <h1>
    <span v-for="(word, i) in splittedText" :key="i" :data-index="i" class="word">{{ word }}</span>
  </h1>
</template>

<script>
export default {
  data() {
    return {
      text: "Welcome To Vuetify+"
    }
  },
  computed: {
    splittedText() {
      return this.text.split('');
    }
  },
  mounted() {
    this.textAnimation();
  },
  methods: {
    textAnimation() {
      const els = document.querySelector('H1').children
      for (let i = 0; i < els.length; i++) {
        if(els[i].innerHTML !== ' ') {
          setTimeout(() => {
            els[i].classList.add("float");
          }, 50 * i)
        } else {
          els[i].style.width = "10px"
        }
      }
    }
  }
}
</script>

<style scoped>
.word {
  display: inline-block
}
.float {
  animation: floating 1.5s linear;
}
@keyframes floating {
  0% {transform: translateY(0) rotate(0deg)}
  25% {transform: translateY(-40%) rotate(90deg)}
  50% {transform: translateY(-50%) rotate(180deg)}
  75% {transform: translateY(-40%) rotate(270deg)}
  100% {transform: translateY(0) rotate(360deg)}
}
</style>
