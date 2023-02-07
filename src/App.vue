<script setup lang="ts">
import Header from "./components/Header.vue";
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

// Slide functionality adapted from https://medium.com/@mignunez/how-to-create-a-slide-transition-between-separate-pages-with-html-css-and-javascript-bb7a14393d1
let translate = 0;
function slide(direction:string, articleName:string) {
  const pages = document.querySelectorAll(".page");
  let translateAmount = 100; 

  switch (articleName) {
    case "first":
      translateAmount = 100
      break;
    case "second":
      translateAmount = 200 
      break;
    case "third":
      translateAmount = 300 
      break;
    }

  direction === "next" ? translate -= translateAmount : translate += translateAmount;
  pages.forEach(
    page => {
      page.style.transform = `translateY(${translate}%)`;
    }
  );
}

onMounted(() => {
  // Time the arrival of the second scene (index 1)
  setTimeout(function () {
    launchScene(1);
  }, 8000);
});

</script>
<template>
  <main class="pages">
    <div id="wrapper" class="page one"> 
        <Animation1 v-show="intro1Visible" />
        <AnimationIntroLoop v-show="introLoopVisible" :launch2="launch2" />
        <Animation2 v-show="intro2Visible" :launchmainloop="launchmainloop" />
        <AnimationMainLoop v-show="mainLoopVisible" :launchnav="launchnav" />
        <AnimationNav v-show="navVisible" />
        <Header></Header>
      <div>
        <button @click="slide('next', 'first')">1</button>
        <button @click="slide('next', 'second')">2</button>
        <button @click="slide('next', 'third')">3</button>
      </div>
    </div>
    <div class="page two">
      <h1>PAGE 2</h1>
      <div>
        <button @click="slide('top', 'first')">Top</button>
      </div>
    </div>
    <div class="page three">
      <h1>PAGE 3</h1>
      <div>
        <button @click="slide('top', 'second')">Top</button>
      </div>
    </div>
    <div class="page four">
      <h1>PAGE 4</h1>
      <div>
        <button @click="slide('top', 'third')">Top</button>
      </div>
    </div>
  </main>
</template>
<style scoped>
#app {
  padding: 0;
  margin: 0;
}

#wrapper {
  max-width: 1680px;
  margin: 0 auto;
  position: relative;
}

#app {
width: 100%;
height: 100vh;
overflow: hidden;
}.pages {
box-sizing: border-box;
}.page {
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
transition: all 0.7s;
color: white;
}.two{
background-color: dodgerblue;
}.three{
background-color: indigo;
}.four{
background-color: limegreen;
}
</style>