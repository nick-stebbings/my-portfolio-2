<script setup lang="ts">
  import { ref, onMounted, computed} from "vue";
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
  import { Modal } from 'bootstrap';

  // Animation scene flags
  const intro1Visible = ref(false);
  const introLoopVisible = ref(false);
  const intro2Visible = ref(false);
  const mainLoopVisible = ref(false);
  const navVisible = ref(false);
  const animation1Class = computed(() => intro1Visible.value ? "active" : "inactive");
  // Settimeout return values
  let playMainLoop : any;
  let skipToMainLoop : any;
  
  // Scene switch helper functions
    
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

    const element = document.getElementById("eXJRUNPtokm1");
    element!.style.display  = 'none';
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
      const element = document.querySelector("nav");
      (element as HTMLBodyElement).style.opacity = '1';
      (element as HTMLBodyElement).style.visibility = 'visible';
      
      const header = document.querySelector("#wrapper header");
      (header as HTMLBodyElement).style.opacity = '1';
      (header as HTMLBodyElement).style.visibility = 'visible';


      const articleContent = document.querySelector(".page.two");
      (articleContent as any)!.style['margin-top'] = '8rem';
    }, 4500);
  }

  // Nav state

  interface projectsDict {
    [key: string]: object;
  }
  const activeLayer = ref('web3');
  const hoveredLayer = ref('web3');
  const activeProjects = computed(() => ['web3', 'ecommerce','elearning'].includes(activeLayer.value) && (projects as projectsDict)[(activeLayer.value as string)]);
  const headerTitles : any = ref(projectHeaders['web3']);
  let headerLinks: any;
  
  // Nav state controller functions
  function switchToLayer(layerName: string) {
    getHeaderTitles(layerName);
    document.querySelectorAll(".bg-svg")[0].classList.remove('active');
    document.querySelectorAll(".bg-svg")[1].classList.remove('active');
    document.querySelectorAll(".bg-svg")[2].classList.add('active');

    activeLayer.value = layerName;
  }
  let currentHeaderChangeSetTimeout : any;
  function hoverLayerActive(layerName: string) {
    const subNav = document.querySelector("nav");

    clearTimeout(currentHeaderChangeSetTimeout);
    currentHeaderChangeSetTimeout = setTimeout(() => {
      getHeaderTitles(layerName);
    }, layerName !== activeLayer.value ? 0 : 0);
    headerLinks = document.querySelectorAll("span.header-link");

    hoveredLayer.value = layerName;
    subNav!.className = "page-nav-container " + layerName;
  }

  // Subnav state
  const showSecondNavBtn = computed(() => ['web3', 'ecommerce', 'elearning'].includes(hoveredLayer.value));
  const showThirdNavBtn = computed(() => hoveredLayer.value == 'web3');
  const activeFirstSection = computed(() => activeLayer.value === hoveredLayer.value);

  // Header state
  interface headerDict {
    [key: string]: object;
  }
  function getHeaderTitles(pageName: string) {
    headerTitles.value = (projectHeaders as headerDict)[pageName]
  }

  // Slide functionality adapted from https://medium.com/@mignunez/how-to-create-a-slide-transition-between-separate-pages-with-html-css-and-javascript-bb7a14393d1
  let translate = 0;
  let translateAmount;

  function slide(direction:string, articleName:string, event: any = null) {
    if(event && event.target.parentNode.previousElementSibling.classList.contains('inactive')) return;
    // if in hover state, change layer

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
    threshold: 0.1
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

  function showModal() {
    var disclaimerModal = new Modal(document.getElementById("disclaimer") as any); 
    disclaimerModal.show()

    document.body.addEventListener("hidden.bs.modal", function (e) {
        if((e!.target as any)!.id == 'disclaimer') {
          intro1Visible.value = true;
          const element = document.getElementById("eXJRUNPtokm1");
          // Time the arrival of the first scene
          (element as any).svgatorPlayer.restart()
          
          playMainLoop = setTimeout(function () {
            element!.style.display  = 'none';
            // Time the arrival of the second scene (index 1)
            launchScene(1);
          }, 8000);

        // Assume the user will not click after this amount of time
        skipToMainLoop = setTimeout(function () {
          skipToNav();
        }, 35000);
        }
    });
  }
  
  onMounted(() => {
    let observer = new IntersectionObserver(callback, options);
    let target2 : Element | null = document.querySelector('.page.two');
    let target3 : Element | null = document.querySelector('.page.three');
    let target4 : Element | null = document.querySelector('.page.four');
    observer!.observe(target2 as Element);
    observer!.observe(target3 as Element);
    observer!.observe(target4 as Element);
    
    const navBtns = document.querySelectorAll(".page-nav-btn");
    headerLinks = document.querySelectorAll("span.header-link");
    navBtns.forEach((btn: any, i: number) => {
      btn.addEventListener('mouseover', () => {
        (headerLinks[i] as any).style['text-decoration'] = 'underline';
      });
      btn.addEventListener('mouseout', () => {
        (headerLinks[i] as any).style['text-decoration'] = 'initial';
      });
    })

    const bookMeLinkTarget = document.getElementById("book-me-label");
    bookMeLinkTarget?.addEventListener('click', () => slide('top', 'bookme'))

    const expandCaseStudyBtns = document.querySelectorAll(".case-study header");
    const carouselCaseStudies = document.querySelectorAll(".carousel.slide");
    expandCaseStudyBtns.forEach((btn: any, i: number) => {
      btn.addEventListener('click', () => {
        console.log("Expanding case study...");
        (carouselCaseStudies[i] as any)!.style.height = btn.classList.contains('active') ? '0' : 'auto'; 
        btn.style.width = !btn.classList.contains('active') ? 'calc(100%)' : '50%';
        btn.classList.toggle('active');
      });
    });
    

    showModal();
  });
</script>
<template>
  <main class="pages">
    <button id="skip-intro" @click="skipToNav()"></button>
    <div id="wrapper" class="page one"> 
        <Animation1 :class="animation1Class" />
        <AnimationIntroLoop v-show="introLoopVisible" :launch2="launch2" />
        <Animation2 v-show="intro2Visible" :launchMainLoop="launchMainLoop" />
        <AnimationMainLoop v-show="mainLoopVisible" :launchNav="launchNav" />
        <AnimationNav v-show="navVisible" :switchToLayer="switchToLayer" :hoverLayerActive="hoverLayerActive" />
        <Header :activeLayer="activeLayer" :hoveredLayer="hoveredLayer" :headerTitles="headerTitles"></Header>
      <nav class="page-nav-container web3">
        <button id="page-nav-1-1" class="page-nav-btn" @click="slide('next', 'first', $event)"></button>
        <button id="page-nav-1-2" v-show="showSecondNavBtn" class="page-nav-btn" @click="slide('next', 'second', $event)"></button>
        <button id="page-nav-1-3" v-show="showThirdNavBtn" class="page-nav-btn" @click="slide('next', 'third', $event)"></button>
        <!-- <button id="page-nav-1-4" v-show="showThirdFourthNavBtn" class="page-nav-btn" @click="slide('next', 'fourth', $event)"></button> -->
      </nav>
    </div>
    <section id="contact" class="page zero">
      <div id="contact-wrapper">
        <h1>contact me</h1>
        <button id="return-home" @click="slide('next', 'home')"></button>
        <ContactForm></ContactForm>
      </div>
    </section>
    
    <section v-for="(project) in activeProjects" :class="(project as any).pageClass" :data-active="activeFirstSection">
      <Article :details="project" :slide="slide"></Article>
    </section>

    <!-- First Disclaimer Modal -->
    <div class="modal fade" id="disclaimer" tabindex="-1" aria-labelledby="disclaimerLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="disclaimerLabel">
                    <blockquote>"Reality is What You Can Get Away With"</blockquote><span class="quote-author"> - Robert Anton Wilson</span></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>This is an experimental portfolio to see what I can get away with. It is playful but for the moment doesn't play well with all devices.</p>
                <div class="viewports">
                  <div class="viewport">
                    <img src="./assets/images/icons/mob.png" alt="small-screen" />
                    <img src="./assets/images/icons/sad.png" alt="sad-face" />
                  </div>
                  <div class="viewport">
                    <img src="./assets/images/icons/tablet.png" alt="md-screen" />
                    <img src="./assets/images/icons/neutral.png" alt="ok-face" />
                  </div>
                  <div class="viewport">
                    <div class="screens">
                      <img src="./assets/images/icons/lap.png" alt="large-screen" />
                      <img src="./assets/images/icons/desktop.png" alt="larger-screen" />
                    </div>
                    <img src="./assets/images/icons/happy.png" alt="happy-face" />
                  </div>
                </div>
                <p>To view a mobile friendly & less resource-hungry site, with similar content (& CV and social media links)  <a href="http://n-stebb.dev"> click here</a>.</p>
                <p>Enjoy exploring. Look for clickable things!</p>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-success" data-bs-dismiss="modal">Let's Go</button>
              </div>
              </div>
        </div>
    </div>
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
/* 
.modal-dialog {
  top: 30vh;
} */

#disclaimer {
  overflow: hidden;
    position: fixed; 
    top: 3%; 
    right: 3%; 
    left: 3%; 
    width: auto; 
    margin: 0; 
}
#disclaimer .modal-body { 
    height: 100%; 
    padding: 15px; 
    overflow-y: auto; 
    -webkit-overflow-scrolling: touch; 
 }

#disclaimer .modal-dialog {
  height: 100%;
  display: grid;
  place-items: center;
  padding-bottom: 15rem;
  min-width: 50vw;
}
#disclaimer .modal-content {
  padding: 1rem;
  display: grid !important;
  grid-template-rows: auto;
  grid-template-columns: auto;
  gap: 2rem;
  height: 90vh;
}
#disclaimer .modal-header blockquote, #disclaimer .modal-header .quote-author {
  font-family: "Merriweather", "Georgia", "Times New Roman", serif;
  font-size: 1.5rem;
}
#disclaimer .modal-header {
  display: flex;
  justify-content: center;
}

#disclaimerLabel + button {
  display: none;
}
#disclaimer .modal-header .quote-author {
  font-size: 0.9rem;
  text-align: right;
  display: block;
  width: 100%;
}

#disclaimer .modal-content p {
  box-sizing: border-box !important;
  width: 100%;
  margin: .5rem;
}

#disclaimer .modal-content .viewports, #disclaimer .modal-content .viewport {
  display: flex;
  gap: .5rem;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
}
#disclaimer .modal-content .screens {
  display: flex;
  gap: 1rem;
}
#disclaimer .modal-content .viewports {
  padding: 1rem;
  margin: 0 auto;
}
#disclaimer .modal-content .viewport {
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  width: 100%;
}

#disclaimer .modal-content p:nth-last-of-type(2){
  font-size: .9rem;
  font-weight: 300;
  text-align: center;
}
#disclaimer .modal-content p:nth-last-of-type(1){
  text-align: center;
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
  transition-delay: background-image 1s;
  transition: all .5s ease-in;
}
.page-nav-btn:hover {
  opacity: 0.8;
  transform: scale(1.25);
}

    .elearning.page-nav-container .page-nav-btn, .ecommerce.page-nav-container .page-nav-btn, .web3.page-nav-container .page-nav-btn  {
      animation: fade-in-img 2s;
    }
    .page-nav-container .page-nav-btn {
      animation: fade-out-img 1s;
      }

  .elearning.page-nav-container .page-nav-btn:first-of-type {
  background: url("assets/images/icons/nuku-icon.png");
  background-repeat: no-repeat;
  background-size: contain;
}

  .elearning.page-nav-container .page-nav-btn:nth-of-type(2) {
  background: url("assets/images/pyramid.png");
  background-repeat: no-repeat;
  background-size: contain;
}

  .ecommerce.page-nav-container .page-nav-btn:first-of-type {
  background: url("assets/images/icons/bike-icon.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.ecommerce.page-nav-container .page-nav-btn:nth-of-type(2) {
  background: url("assets/images/icons/spinning-icon.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.web3.page-nav-container .page-nav-btn:first-of-type {
  background: url("assets/images/icons/atom-small.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.web3.page-nav-container .page-nav-btn:nth-of-type(2) {
  background: url("assets/images/sphere.png");
  background-repeat: no-repeat;
  background-size: contain;
}
/* .page-nav-btn:nth-of-type(3) {
  background: url("assets/images/sphere.png");
  background-repeat: no-repeat;
  background-size: contain;
} */
.page-nav-btn:nth-of-type(3) {
  background: url("assets/images/icons/veg-icon.png");
  background-repeat: no-repeat;
  background-size: contain;
}


header.inactive + .page-nav-container {
  width: 45%;
  margin-bottom: 12rem;
  gap: 4rem;
  padding: 2rem 3rem;
}
header.inactive + .page-nav-container .page-nav-btn {
  transform: scale(1.5);
  cursor: initial;
}

#eXJRUNPtokm1.active {
  opacity: 1;
  visibility: visible;
  transition: 1s all ease-in;
}
#eXJRUNPtokm1.inactive {
  opacity: 0;
  visibility: hidden;
}

@keyframes fade-in-img {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        color: #3C3C3C;
        text-shadow: none;
    }
}
@keyframes fade-out-img {
    0% {
        color: #3C3C3C;
        text-shadow: none;
    }
    100% {
        color: transparent;
        text-shadow: 0 0 45px rgba(0,0,0,0.5);
    }
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


  #disclaimer .modal-content {
    padding: 4rem;
    height: 60vh;
  }

  #disclaimer .modal-body {
    height: 100%;
    max-height: 400px;
    overflow: hidden;
    max-height: none!important;
  }
  #disclaimer .modal-content p {
    height: auto;
  }

  #disclaimer .modal-content p {
    margin: 0 2rem 1rem 2rem;
  }
  #disclaimer .modal-content .viewport {
    flex-direction: column;
    width: 33%;
    gap: 2rem;
  }
  #disclaimer .modal-content .viewports {
    max-width: 50%;
    gap: 2rem;
    flex-direction: row;
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