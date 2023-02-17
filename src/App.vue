<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import Header from "./components/Header.vue";
  import Animation1 from "./components/Animation1.vue";
  import AnimationIntroLoop from "./components/AnimationIntroLoop.vue";
  import Animation2 from "./components/Animation2.vue";
  import AnimationMainLoop from "./components/AnimationMainLoop.vue";
  import AnimationNav from "./components/AnimationNav.vue";
  import Article from "./components/Article.vue";
  import ContactForm from "./components/ContactForm.vue";
  import projects from "./projectData.js";
  import projectHeaders from "./headerData.js";

  interface headerDict {
    [key: string]: object;
  }

  const intro1Visible = ref(true);
  const introLoopVisible = ref(false);
  const intro2Visible = ref(false);
  const mainLoopVisible = ref(false);
  const navVisible = ref(false);
  const activeLayer = ref('web3');
  const hoveredLayer = ref('web3');
  const headerTitles = ref(projectHeaders['web3']);
  let headerLinks: any;
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
      launchMainLoop();
    }, 5000);
  }
  function launchMainLoop() {
    launchScene(3);
  }
  function skipToNav() {
    clearTimeout(playMainLoop);
    clearTimeout(skipToMainLoop);
    launchNav()
  }
  function launchNav() {
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
      (articleContent as any)!.style['margin-top'] = '8rem';
    }, 4500);
  }

  // Nav state controller functions
  function switchToLayer(layerName: string) {
    getHeaderTitles(layerName);
    activeLayer.value = layerName;
  }
  function hoverLayerActive(layerName: string) {
    getHeaderTitles(layerName);
    headerLinks = document.querySelectorAll("span.header-link");
    hoveredLayer.value = layerName;
  }

  function getHeaderTitles(pageName: string) {
    headerTitles.value = (projectHeaders as headerDict)[pageName]
  }

  // Slide functionality adapted from https://medium.com/@mignunez/how-to-create-a-slide-transition-between-separate-pages-with-html-css-and-javascript-bb7a14393d1
  let translate = 0;
  let translateAmount;

  function slide(direction:string, articleName:string) {
    const pages = document.querySelectorAll(".page");

    translateAmount = 0; 

    switch (articleName) {
      case "home":
      case "bookme":
        translateAmount = 100;
        direction === "next" ? translate -= translateAmount : translate += translateAmount;
        pages.forEach(
          page => {
            (page as HTMLBodyElement).style.transform = `translateY(${translate}vh)`;
          }
        );
      break;

      case "first": 
        const page1 = document.querySelector('.page.two');
        page1!.scrollIntoView();
        break;
      case "second": 
        const page2 = document.querySelector('.page.three');
        page2!.scrollIntoView();
        break;
      case "third": 
      const page3 = document.querySelector('.page.four');
      page3!.scrollIntoView();
        break;
      case "fourth":
        const page4 = document.querySelector('.page.five');
        page4!.scrollIntoView();
        break;
      }
      
    if(direction == "top") {
      document.querySelectorAll(".return-home-up").forEach(
        button => {
          (button as any)!.style.opacity = "0";
          (button as any)!.style.visibility = "hidden";
        }
      );

      const page0 = document.querySelector('.page.zero');
      page0!.scrollIntoView();
    }
  }

  // Lazy loading of images/buttons further down the page
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  }

  const callback = (entries:any) => {
    entries.forEach((entry:any) => {
      // console.log('entry :>> ', entry);
      if(entry.isIntersecting) {
        let upBtn;
        const upBtns = document.querySelectorAll('.return-home-up');
        switch (true) { 
          case entry.target.classList.contains('two'):
            upBtn = upBtns[0];
            (upBtn as any).style.opacity = "1";
            (upBtn as any).style.visibility = "visible";
            break;
          case entry.target.classList.contains('three'):
            upBtn = upBtns[1];
            (upBtn as any).style.opacity = "1";
            (upBtn as any).style.visibility = "visible";
            break;
            
          case entry.target.classList.contains('four'):
            upBtn = upBtns[2];
            (upBtn as any).style.opacity = "1";
            (upBtn as any).style.visibility = "visible";
            break;
            
          case entry.target.classList.contains('five'):
            upBtn = upBtns[3];
            (upBtn as any).style.opacity = "1";
            (upBtn as any).style.visibility = "visible";
            break;
        }
      };
    
  });
  }
  
  onMounted(() => {
    let observer = new IntersectionObserver(callback, options);
    let target2 : Element | null = document.querySelector('.page.two');
    let target3 : Element | null = document.querySelector('.page.three');
    let target4 : Element | null = document.querySelector('.page.four');
    let target5 : Element | null = document.querySelector('.page.five');
    observer!.observe(target2 as Element);
    observer!.observe(target3 as Element);
    observer!.observe(target4 as Element);
    observer!.observe(target5 as Element);
    
    const navBtns = document.querySelectorAll(".page-nav-btn");
    headerLinks = document.querySelectorAll("span.header-link");
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
        btn.style.width = !btn.classList.contains('active') ? 'calc(100%)' : '50%';
        btn.classList.toggle('active');
      });
    });
    
    // Time the arrival of the second scene (index 1)
    playMainLoop = setTimeout(function () {
      launchScene(1);
    }, 8000);

    // Assume the user will not click after this amount of time
    skipToMainLoop = setTimeout(function () {
      skipToNav();
    }, 30000);
  });
</script>
<template>
  <main class="pages">
    <button id="skip-intro" @click="skipToNav()"></button>
    <div id="wrapper" class="page one"> 
        <Animation1 v-show="intro1Visible" />
        <AnimationIntroLoop v-show="introLoopVisible" :launch2="launch2" />
        <Animation2 v-show="intro2Visible" :launchMainLoop="launchMainLoop" />
        <AnimationMainLoop v-show="mainLoopVisible" :launchNav="launchNav" />
        <AnimationNav v-show="navVisible" :switchToLayer="switchToLayer" :hoverLayerActive="hoverLayerActive" />
        <Header :activeLayer="activeLayer" :hoveredLayer="hoveredLayer" :headerTitles="headerTitles"></Header>
      <nav class="page-nav-container">
        <button id="page-nav-1-1" class="page-nav-btn" @click="slide('next', 'first')"></button>
        <button id="page-nav-1-2" class="page-nav-btn" @click="slide('next', 'second')"></button>
        <button id="page-nav-1-3" class="page-nav-btn" @click="slide('next', 'third')"></button>
        <button id="page-nav-1-4" class="page-nav-btn" @click="slide('next', 'fourth')"></button>
      </nav>
    </div>
    <section id="contact" class="page zero">
      <div id="contact-wrapper">
        <h1>contact me</h1>
        <button id="return-home" @click="slide('next', 'home')"></button>
        <ContactForm></ContactForm>
      </div>
    </section>
    
    <section v-for="(project) in projects" :class="project.pageClass">
      <Article :details="project" :slide="slide"></Article>
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
  overflow: initial;
  width: 100%;
  max-width: 1680px;
}

modal-dialog {
  top: 30vh;
}

/* Contact page form */
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

/* Navigation Bar */
.page-nav-container {
  display: flex;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease-in 0s, right 0.5s ease-out 0s;
  bottom: -6rem; 
  right: 8.5vw; 
  gap: 2rem;
  width: 24rem;
  background-image: url("assets/images/bg/page-nav-bg-bottom.png");
  background-repeat:repeat-x;
  background-position: right bottom;
}
.page-nav-btn {
  border: 0;
  width: 33%;
  height: 10vh;
  background-position: center !important;
  opacity: 0.75;
  cursor: pointer;
  margin: 1rem;
}
.page-nav-btn:hover {
  opacity: 0.8;
  transform: scale(1.25);
}
.page-nav-btn:first-of-type {
  background: url("assets/images/atom.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.page-nav-btn:nth-of-type(3) {
  background: url("assets/images/sphere.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.page-nav-btn:nth-of-type(2) {
  background: url("assets/images/pyramid.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.page-nav-btn:nth-of-type(4) {
  background: url("assets/images/icons/veg-icon.png");
  background-repeat: no-repeat;
  background-size: contain;
}

/* Project pages */
.pages {
  box-sizing: border-box;
  scroll-snap-type: y mandatory;
}
.page {
  color: white;
  width: 100%;
  margin: 0 auto;
  max-width: 1680px;
  margin-bottom: 12rem;
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
  margin-top: 32rem;
}

/* Media Queries */
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
</style>