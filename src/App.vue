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
import Carousel from "./components/Carousel.vue";
  const intro1Visible = ref(true);
  const introLoopVisible = ref(false);
  const intro2Visible = ref(false);
  const mainLoopVisible = ref(false);
  const navVisible = ref(false);
  let playMainLoop : any;
  let skipToMainLoop : any;
  
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
                  navVisible.value = true;
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
  function skiptonav() {
    clearTimeout(playMainLoop);
    clearTimeout(skipToMainLoop);
    launchnav()
  }
  
  function launchnav() {
    clearTimeout(skipToMainLoop);
    const skipBtn: HTMLBodyElement | null = document.querySelector("#skip-intro");
    launchScene(4);
    
    const element = document.getElementById("e8VQ6wvtuBg1");
    (element as any).svgatorPlayer.ready(function (el:any) {
      // Restart the animation too
      el.play();
    });
    skipBtn!.style.opacity = '0';
    skipBtn!.style.visibility = 'invisible';
    
    setTimeout(function () {
      const element = document.querySelector(".page-nav-container");
      (element as HTMLBodyElement).style.opacity = '1';
      (element as HTMLBodyElement).style.visibility = 'visible';
      
      const header = document.querySelector("#wrapper header");
      (header as HTMLBodyElement).style.opacity = '1';
      (header as HTMLBodyElement).style.visibility = 'visible';


      const articleContent = document.querySelector(".page.two");
      (articleContent as any)!.style['margin-top'] = 0;
    }, 4500);
  }

  // Slide functionality adapted from https://medium.com/@mignunez/how-to-create-a-slide-transition-between-separate-pages-with-html-css-and-javascript-bb7a14393d1
  let translate = 0;
  let translateAmount;
  function slide(direction:string, articleName:string) {
    document.documentElement.scroll(0,0);

    const pages = document.querySelectorAll(".page");
    const frontPage = document.querySelector(".page.one");
    const frontPageHeight = (frontPage as any).offsetHeight;
    let translatingFromFrontPage = ["home", "first"].includes(articleName) ;

    translateAmount = 100; 

    switch (articleName) {
      case "home":
        if(direction == "down") {
          translateAmount = frontPageHeight;
          // contact form to front page is 100vh translation
          translatingFromFrontPage = false;
        }
        translateAmount = 100;
        break;
      case "bookme":
        translateAmount = 100;
        break;
      case "first":
        translateAmount = frontPageHeight;
        break;
      case "second": // second and third get frontPageHeight added later 
        translateAmount = 100;
        break;
      case "third": // second and third get frontPageHeight added later
        translateAmount = 200;
        break;
      }

    direction === "next" ? translate -= translateAmount : translate += translateAmount;

    if(direction == "top") {
      document.querySelectorAll(".return-home-up").forEach(
        button => {
          (button as any)!.style.opacity = "0";
          (button as any)!.style.visibility = "hidden";
        }
      );
    }
    pages.forEach(
      page => {
        // Who needs a switch statement when you can have a torturously nested ternary expression?
        (page as HTMLBodyElement).style.transform = (translatingFromFrontPage ? `translateY(${translate}px)` : `translateY(${translate}vh) translateY(${articleName == "bookme" ? "0" : (direction === "next" ? ("-" + frontPageHeight) : "0")}px)`);
      }
    );
  }

  // Lazy loading of images/buttons further down the page
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9
  }

  const callback = (entries:any) => {
    entries.forEach((entry:any) => {
      if(entry.isIntersecting) {
        let upBtn;
        const upBtns = document.querySelectorAll('.return-home-up');
        switch (true) {
          case entry.target.classList.contains('two'):
            upBtn = upBtns[0];
            (upBtn as any).style.opacity = "1";
            (upBtn as any).style.visibility = "visible";
            translateAmount = 100;
            break;
            
          case entry.target.classList.contains('three'):
            upBtn = upBtns[1];
            (upBtn as any).style.opacity = "1";
            (upBtn as any).style.visibility = "visible";
            translateAmount = 200;
            break;
            
          case entry.target.classList.contains('four'):
            upBtn = upBtns[2];
            (upBtn as any).style.opacity = "1";
            (upBtn as any).style.visibility = "visible";
            translateAmount = 300;
            break;
        }
      };
    
  });
  }
  let observer = new IntersectionObserver(callback, options);
  
  onMounted(() => {
    let target2 : Element | null = document.querySelector('.page.two');
    let target3 : Element | null = document.querySelector('.page.three');
    let target4 : Element | null = document.querySelector('.page.four');
    observer!.observe(target2 as Element);
    observer!.observe(target3 as Element);
    observer!.observe(target4 as Element);
    
    const navBtns = document.querySelectorAll(".page-nav-btn");
    const headerLinks = document.querySelectorAll("span.header-link");
    navBtns.forEach((btn: any, i: number) => {
      btn.addEventListener('mouseover', () => {
        (headerLinks[i] as any).style['font-size'] = '1.1em';
      });
      btn.addEventListener('mouseout', () => {
        (headerLinks[i] as any).style['font-size'] = '0.909090909em';
      });
    })

    const bookMeLinkTarget = document.getElementById("book-me-label");
    bookMeLinkTarget?.addEventListener('click', () => slide('top', 'bookme'))

    const expandCaseStudyBtns = document.querySelectorAll(".case-study header");
    const carouselCaseStudies = document.querySelectorAll(".carousel.slide");
    expandCaseStudyBtns.forEach((btn: any, i: number) => {
      btn.addEventListener('click', () => {
        (carouselCaseStudies[i] as any)!.style.height = btn.classList.contains('active') ? '0' : 'auto'; 
        btn.style.width = !btn.classList.contains('active') ? 'calc(100% - 4vw)' : '35%';
        btn.classList.toggle('active');
      });
    });
    
    // Time the arrival of the second scene (index 1)
    playMainLoop = setTimeout(function () {
      launchScene(1);
    }, 8000);

    // Assume the user will not click after this amount of time
    skipToMainLoop = setTimeout(function () {
      skiptonav();
    }, 30000);
  });
</script>
<template>
  <main class="pages">
    <button id="skip-intro" @click="skiptonav()"></button>
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
    <section id="contact" class="page zero">
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
        <div class="article-wrapper">
          <ArticleTitle childclass="left" h1text="HabitFract" h2text="Hello" />

          <section class="case-study">
            <ArticleTitle childclass="right" h1text="Case Study" h2text=" " />
            <Carousel></Carousel>
            <ArticleSection />
          </section>
          <ArticleSection />
          <ArticleTools />
          <!-- <ArticleSection /> -->
          <div class="top-button">
            <button class="return-home-up" @click="slide('top', 'first')"></button>
          </div>
        </div>
      </article>
    </section>
    <section class="page three">
      <article>
        <div class="article-wrapper">
          <ArticleTitle childclass="left" h1text="HabitFract" h2text="Hello" />
          <ArticleSection />
          <ArticleTools />
          <ArticleSection />
          <div class="top-button">
            <button class="return-home-up" @click="slide('top', 'second')"></button>
          </div>
      </div>  
      </article>
    </section>
    <section class="page four">
      <article>
        <div class="article-wrapper">
          <ArticleTitle childclass="left" h1text="HabitFract" h2text="Hello" />
          <ArticleSection />
          <ArticleTools />
          <ArticleSection />
          <div class="top-button">
            <button class="return-home-up" @click="slide('top', 'third')"></button>
          </div>
        </div>
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
  padding: 1rem 6vw;
  position: relative;
  min-height: 100vh;
}
.page .article-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 8rem minmax(8rem, auto) 8rem minmax(8rem, auto) minmax(8rem, auto);
  grid-template-areas: "title button" "row1 row1" "row2 row2" "row3 row3" "row3 row3" "row4 row4";
  gap: 1rem;
}
.page > article > .article-wrapper, .top-button {
  background-image: url("assets/page-nav-bg-white.png");
  background-repeat: repeat-y;
  background-position: right;
}

.page article .top-button { grid-area: button; border: none; background-color: #fff}
.page article .article-title { grid-area: title;}
.page article .article-section:first-of-type { grid-area: row1;}
.page article .tools { grid-area: row2;}
.page .article-wrapper > section.case-study { grid-area: row3;}
.page article .article-section:last-of-type { grid-area: row4;}
.case-study { display: flex; align-items: flex-end; flex-direction: column;}

modal-dialog {
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
  align-items: end;
  justify-content: start;
  margin: 10vh 0;
  position: relative;
  box-sizing: border-box;
  margin: 7rem 5vw;
  max-width: 1680px;
  padding-right: 6rem;
}

#contact-wrapper h1 {
    font-family: "Londrina Solid", "Roboto", "Arial", "sans-serif";
    font-size: 5.0625em;
    
    /* type scale: perfect fifth */
    font-weight: 400;
    text-transform: capitalize;
}

#contact-wrapper h1 {
    width: 50%;
    text-align: center;
    line-height: 3.375rem;
    margin: 0;
    margin-bottom: 2.25rem;
    padding: 0;
    color: #3C3C3C;
    filter: sepia(1)
}

button#return-home, button.return-home-up, button#skip-intro {
  position: absolute;
  border: 0;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  background-color: transparent;
  background-image: url("assets/down-icon.png");
  background-repeat: no-repeat;
  transition: all .3s;
}
button#skip-intro {
  left: 11vw;
  top: 2rem;
  z-index: 100;
  background-image: url("assets/skip-icon.png");
}

button#return-home {
  left: 7rem;
  top: 0;
}
button.return-home-up {
  padding: 0 !important;
  background-image: url("assets/up-icon.png");
  right: 5.75rem;
  top: 8rem;
  opacity: 0;
  visibility: hidden;
}
button#return-home:hover, button.return-home-up:hover, button#skip-intro:hover {
  border: 4px dashed #846B63;
  padding: 1rem;
  height: 6rem;
  width: 6rem;
  background-position: center;
  border-radius: 1rem;
}
button#skip-intro:hover {
  left: calc(11vw - 1rem);
  top: 1rem;
}
button#return-home:hover {
  left: 6rem;
  top: -1rem;
}
button.return-home-up:hover {
  right: 4.75rem;
  top: 7rem;
}
button.return-home-up:hover {
  right: 4.75rem;
  top: 7rem;
}

#wrapper > svg  {
  overflow: initial;
}

@media (min-width: 1440px) {
  .page > article {
    padding: 5rem 5vw;
  }
}

@media (min-width: 1680px) {
  .page-nav-container {
    width: 20vw;
    right: 6vw !important;
  }
  .page > article {
    padding: 5rem 6.5rem 5rem 4.85vw;
  }

  button#skip-intro {
    left: 3rem;
  }
  button#skip-intro:hover {
    left: 2rem;
  }

}

.page-nav-btn {
  border: 0;
  width: 33%;
  height: 10vh;
  background-position: center !important;
  opacity: 0.5;
  cursor: pointer;
  margin: 1rem;
}
.page-nav-btn:not(.page-nav-btn:first-of-type) {
  opacity: 0.4;
}
.page-nav-btn:hover {
  opacity: 0.8;
  transform: scale(1.25);
}
.page-nav-btn:first-of-type {
  background: url("assets/atom.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.page-nav-btn:nth-of-type(2) {
  background: url("assets/tree.svg");
  background-repeat: no-repeat;
  background-size: contain;
}

.page-nav-btn:nth-of-type(3) {
  background: url("assets/pyramid.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.pages {
  box-sizing: border-box;
  scroll-snap-type: y mandatory;
}
.page {
  color: white;
  width: 100%;
  margin: 0 auto;
  max-width: 1680px;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  transition: all 0.7s;
}
.page.one {
  height: auto;
}
.page.two {
  height: auto;
  margin-top: 36rem;
}
</style>