<script setup lang="ts">
import Header from "./components/Header.vue";
import Animation1 from "./components/Animation1.vue";
import AnimationIntroLoop from "./components/AnimationIntroLoop.vue";
import Animation2 from "./components/Animation2.vue";
import AnimationMainLoop from "./components/AnimationMainLoop.vue";
import AnimationNav from "./components/AnimationNav.vue";
import ArticleSection from "./components/ArticleSection.vue";
import ArticleTitle from "./components/ArticleTitle.vue";
import ArticleTools from "./components/ArticleTools.vue";
import ContactForm from "./components/ContactForm.vue";

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
    (element as any).svgatorPlayer.ready(function (el:any) {
      // Restart the animation too
      el.play();
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
    (element as any).svgatorPlayer.ready(function (el:any) {
      // Restart the animation too
      el.play();
    });
    setTimeout(function () {
      const element = document.querySelector(".page-nav-container");
      (element as HTMLBodyElement).style.opacity = '1';
      (element as HTMLBodyElement).style.visibility = 'visible';
    }, 4500);
  }

  // Slide functionality adapted from https://medium.com/@mignunez/how-to-create-a-slide-transition-between-separate-pages-with-html-css-and-javascript-bb7a14393d1
  let translate = 0;
  function slide(direction:string, articleName:string) {
    const pages = document.querySelectorAll(".page");
    let translateAmount = 100; 

    switch (articleName) {
      case "home":
        translateAmount = 100
        break;
      case "bookme":
        translateAmount = 100
        break;
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
        (page as HTMLBodyElement).style.transform = `translateY(${translate}%)`;
      }
    );
  }

  onMounted(() => {
    const bookMeLinkTarget = document.getElementById("book-me-label");
    bookMeLinkTarget?.addEventListener('click', () => slide('top', 'bookme'))

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
      <nav class="page-nav-container">
        <button id="page-nav-1-1" class="page-nav-btn" @click="slide('next', 'first')"></button>
        <button id="page-nav-1-2" class="page-nav-btn" @click="slide('next', 'second')"></button>
        <button id="page-nav-1-3" class="page-nav-btn" @click="slide('next', 'third')"></button>
      </nav>
    </div>
    <section id="contact" class="page one">
      <div id="contact-wrapper">
        <h1>contact me</h1>
        <button id="return-home" @click="slide('next', 'home')"></button>
        <ContactForm></ContactForm>
      </div>
    </section>
    <section class="page two">
      <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1280 720"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          style="overflow:initial"
        >

          <g id="e8VQ6wvtuBg23" transform="matrix(-1 0 0-.300403 1530 -300)">
            <rect
              width="14"
              height="1800"
              rx="0"
              ry="0"
              transform="matrix(-1 0 0-1.476148 344 715.22737)"
              fill="#EEEDE7"
          fill-opacity="1"
            />
            <rect
              width="7"
              height="1800"
              rx="0"
              ry="0"
              transform="matrix(1.000001 0 0-1.476148 350.999997 715.22737)"
              fill="#EEEDE7"
          fill-opacity="1"
            />
          </g>

        </svg> -->
      <article>
        <ArticleTitle />
        <ArticleSection />
        <ArticleTools />
        <ArticleSection />
        <button class="top-button" @click="slide('top', 'first')"></button>
      </article>
    </section>
    <section class="page three">
      <article>
        <ArticleTitle />
        <ArticleSection />
        <ArticleTools />
        <ArticleSection />
        <button class="top-button" @click="slide('top', 'second')"></button>
      </article>
    </section>
    <section class="page four">
      <article>
        <ArticleTitle />
        <ArticleSection />
        <ArticleTools />
        <ArticleSection />
        <button class="top-button" @click="slide('top', 'third')"></button>
      </article>
    </section>

    <!-- Modal -->
    <div class="modal fade" id="contactConfirmation" tabindex="-1" aria-labelledby="contactConfirmationLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="contactConfirmationLabel">Contact has been made</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Pending...
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
              </div>
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
  display: flex;
  flex-direction: column;
}

#wrapper > svg {
  width: 100%;
  max-width: 1680px;
}

.page.two > svg {
  position: absolute;
}
.page > article {
  width: 100%;
  height: 100%;
  padding: 5rem 6vw;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 8rem 2fr 1fr 2fr;
  grid-template-areas: "title button" "article1 article1" "tools tools" "article2 article2" ;
}

.page article .top-button { grid-area: button;}
.page article .article-section:first-of-type { grid-area: article1;}
.page article .article-section:last-of-type { grid-area: article2;}
.page article .article-title { grid-area: title;}
.page article .tools { grid-area: tools;}

.modal-dialog {
  top: 30vh;
}

.page-nav-container {
  display: flex;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease-in 0s, right 0.5s ease-out 0s;
  bottom: 1rem; 
  right: 8.5vw; 
  gap: 2rem;
  width: 24rem;
  background-image: url("assets/page-nav-bg-bottom.png");
  background-repeat:repeat-x;
  background-position: right bottom;
  
}

section#contact {
  position: absolute;
  top: -100vh;
  max-width: 100%;
  overflow: hidden;
}

#contact-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  margin: 10vh 0;
  margin-left: 32%;
  box-sizing: border-box;
}

#contact-wrapper h1 {
    font-family: "Londrina Solid", "Roboto", "Arial", "sans-serif";
    font-size: 5.0625em;
    
    /* type scale: perfect fifth */
    font-weight: 400;
    text-transform: capitalize;
}

#contact-wrapper h1, h2 {
    max-width: 75%;
    text-align: right;
    line-height: 3.375rem;
    margin: 0;
    margin-bottom: 2.25rem;
    padding: 0;
    color: #3C3C3C;
    filter: sepia(1)
}

button#return-home {
  position: absolute;
  left: 10vh;
  top: 10vh;
  border: 0;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  background-image: url("assets/down-icon.png");
}

@media (min-width: 1680px) {
  #wrapper > svg  {
    overflow: initial;
  }
  .page-nav-container {
    right: calc(50% - 12rem) !important;
  }
  .page > article {
    padding: 5rem 5vw;
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
}
.page {
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
}
.page.one {
  height: auto;
}
</style>