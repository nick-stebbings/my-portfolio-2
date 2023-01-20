<script setup lang="ts">
import Animation1 from "./components/Animation1.vue";
import AnimationIntroLoop from "./components/AnimationIntroLoop.vue";
import Animation2 from "./components/Animation2.vue";
import AnimationMainLoop from "./components/AnimationMainLoop.vue";
import AnimationNav from "./components/AnimationNav.vue";

import { ref, onMounted } from "vue";
const intro1Visible = ref(true);
const introLoopVisible = ref(false);
const intro2Visible = ref(false);
const mainLoopVisible = ref(false);
const navVisible = ref(false);

function launchScene(animationId: number) {
  intro1Visible.value = false;
  introLoopVisible.value = false;
  intro2Visible.value = false;
  mainLoopVisible.value = false;
  navVisible.value = false;

  switch (animationId) {
    case 0:
      intro1Visible.value = true;
      break;
    case 1:
      introLoopVisible.value = true;
      break;
    case 2:
      intro2Visible.value = true;
      break;
    case 3:
      mainLoopVisible.value = true;
      break;
    case 4:
      navVisible.value = true;
      break;

    default:
      intro1Visible.value = true;
      break;
  }
}

function launch2() {
  launchScene(2);
  const element = document.getElementById("ekFf3Z5Im6j1");
  element.svgatorPlayer.ready(function () {
    // Restart the animation too
    this.play();
  });
  setTimeout(function () {
    launchmainloop();
  }, 5000);
}
function launchmainloop() {
  launchScene(3);
}
function launchnav() {
  launchScene(4);
  const element = document.getElementById("e8VQ6wvtuBg1");
  element.svgatorPlayer.ready(function () {
    // Restart the animation too
    this.play();
  });
}

onMounted(() => {
  // Time the arrival of the second scene (index 1)
  setTimeout(function () {
    launchScene(1);
  }, 8000);
});
</script>
<template>
  <Animation1 v-show="intro1Visible" />
  <AnimationIntroLoop v-show="introLoopVisible" :launch2="launch2" />
  <Animation2 v-show="intro2Visible" :launchmainloop="launchmainloop" />
  <AnimationMainLoop v-show="mainLoopVisible" :launchnav="launchnav" />
  <AnimationNav v-show="navVisible" />
</template>

<style scoped>
#app {
  padding: 0;
  margin: 0;
}
</style>
