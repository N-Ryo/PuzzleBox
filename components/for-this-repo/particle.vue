<template>
  <div id="particle" />
</template>

<script>
export default {
  mounted() {
    particlesJS.load('particle', '/PuzzleBox/particlesjs-config.json', function() {
    // particlesJS.load('particle', '/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}
</script>

<style>
#particle {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>