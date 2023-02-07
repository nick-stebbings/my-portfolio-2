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
      <div class="page-nav-container">
        <button id="page-nav-1-1" class="page-nav-btn" @click="slide('next', 'first')"></button>
        <button id="page-nav-1-2" class="page-nav-btn" @click="slide('next', 'second')"></button>
        <button id="page-nav-1-3" class="page-nav-btn" @click="slide('next', 'third')"></button>
      </div>
    </div>
    <div class="page two">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1280 720"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          style="overflow:initial"
        >

          <g id="e8VQ6wvtuBg23" transform="matrix(-1 0 0-.300403 1530 -10)">
            <rect
              width="14"
              height="805"
              rx="0"
              ry="0"
              transform="matrix(-1 0 0-1.476148 344 715.22737)"
              fill="#745951"
              fill-opacity="0.3"
            />
            <rect
              width="7"
              height="805"
              rx="0"
              ry="0"
              transform="matrix(1.000001 0 0-1.476148 350.999997 715.22737)"
              fill="#745951"
              fill-opacity="0.3"
            />
          </g>

        </svg>
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
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#wrapper {
  max-width: 1680px;
  margin: 0 auto;
  position: relative;
}

#wrapper > svg {
  width: 100%;
  max-width: 1680px;
  /* height: calc(100% - 1rem); */
}

.page-nav-container {
  display: flex;
  position: absolute;
  bottom: 1rem; 
  right: 8.5vw; 
  gap: 2rem;
  width: 24rem;
  background-image: url("assets/page-nav-bg-bottom.png");
  background-repeat:repeat-x;
  background-position: right bottom;
  
}
@media (min-width: 1680px) {
  #wrapper > svg  {
    overflow: initial;
  }
  .page-nav-container {
    right: calc(50% - 12rem) !important;
  }
}
.page-nav-btn {
  border: 0;
  width: 10vh;
  height: 10vh;
  background-position: center !important;
  opacity: 0.5;
  cursor: pointer;
}
.page-nav-btn:hover {
  opacity: 1;
}
.page-nav-btn:first-of-type {
  background: url("assets/tree.svg");
  background-repeat: no-repeat;
}

.page-nav-btn:nth-of-type(2) {
  background: url("assets/radial.svg");
  background-repeat: no-repeat;
  transform: rotate(90deg);
}

.page-nav-btn:nth-of-type(3) {
  background: url("assets/pyramid.png");
  background-repeat: no-repeat;
}


.pages {
box-sizing: border-box;
}.page {
width: 100%;
margin: 0 auto;
max-width: 1680px;
height: 100vh;
display: flex;
align-items: center;
justify-content: start;
flex-direction: column;
gap: 10px;
transition: all 0.7s;
color: white;
}.two{
/* background-color: dodgerblue; */
}.three{
background-color: indigo;
}.four{
background-color: limegreen;
}
</style>