<template>
  <button type="button" class="trigger-disclaimer" data-bs-toggle="modal" data-bs-target="#disclaimer"></button>
  <main class="pages">
    <HamburgerNav></HamburgerNav>
    <section class="page one">
      <AnimationWrapper :switchToLayer="switchToLayer" :hoverLayerActive="hoverLayerActive" />
      <Header :activeLayer="activeLayer" :hoveredLayer="hoveredLayer" :headerTitles="headerTitles"></Header>
      <Nav :slide="slide" :hoveredLayer="hoveredLayer"></Nav>
    </section>

    <ContactSection :slide="slide" />
    <section v-for="(project) in activeProjects" :class="(project as any).pageClass" :data-active="activeFirstSection">
      <Article :details="project" :slide="slide"></Article>
    </section>
  </main>

  <DisclaimerModal />
  <ContactConfirmationModal />
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

import Header from "./components/Header.vue";
import Article from "./components/Article/Article.vue";
import AnimationWrapper from "./components/Animation/AnimationWrapper.vue";
import DisclaimerModal from "./components/Modal/DisclaimerModal.vue";
import ContactConfirmationModal from "./components/Modal/ContactConfirmationModal.vue";

import projects from "./projectData.js";
import projectHeaders from "./headerData.js";
import ContactSection from "./components/ContactSection.vue";
import Nav from "./components/Layout/Nav.vue";
import HamburgerNav from "./components/Layout/HamburgerNav.vue";

// Nav state
interface projectsDict {
  [key: string]: object;
}
const activeLayer = ref('web3');
const hoveredLayer = ref('web3');
const activeProjects = computed(() => ['web3', 'ecommerce', 'elearning'].includes(activeLayer.value) && (projects as projectsDict)[(activeLayer.value as string)]);
const headerTitles: any = ref(projectHeaders['web3']);
let headerLinks: any;

// Nav state controller functions
function switchToLayer(layerName: string) {
  getHeaderTitles(layerName);
  document.querySelectorAll(".bg-svg")[0].classList.remove('active');
  document.querySelectorAll(".bg-svg")[1].classList.remove('active');
  document.querySelectorAll(".bg-svg")[2].classList.add('active');

  activeLayer.value = layerName;
}
let currentHeaderChangeSetTimeout: any;
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


// Header state
interface headerDict {
  [key: string]: object;
}
function getHeaderTitles(pageName: string) {
  headerTitles.value = (projectHeaders as headerDict)[pageName]
}
// First articles title state
const activeFirstSection = computed(() => activeLayer.value === hoveredLayer.value);

// Slide functionality adapted from https://medium.com/@mignunez/how-to-create-a-slide-transition-between-separate-pages-with-html-css-and-javascript-bb7a14393d1
let translate = 0;
let translateAmount;

function slide(direction: string, articleName: string, event: any = null) {
  if (event && event.target.parentNode.previousElementSibling.classList.contains('inactive')) return;
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

  if (direction == "top") {
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

const makeVisible = (upBtn: any) => {
  upBtn.style.visibility = "visible";
  upBtn.style.opacity = "1";
}

const intersectionObsCallback = (entries: any) => {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      const upBtns = document.querySelectorAll('.return-home-up');
      switch (true) {
        case entry.target.classList.contains('two'):
          makeVisible(upBtns[0]);
          break;
        case entry.target.classList.contains('three'):
          makeVisible(upBtns[1]);
          break;

        case entry.target.classList.contains('four'):
          makeVisible(upBtns[2]);
          break;

        case entry.target.classList.contains('five'):
          makeVisible(upBtns[3]);
          break;
      }
    };

  });
}

onMounted(() => {
  let observer = new IntersectionObserver(intersectionObsCallback, options);
  let target2: Element | null = document.querySelector('.page.two');
  let target3: Element | null = document.querySelector('.page.three');
  let target4: Element | null = document.querySelector('.page.four');
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

});
</script>
<style scoped>
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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

.trigger-disclaimer {
  position: relative;
  left: -100vh;
}

header.inactive+.page-nav-container {
  width: 45%;
  margin-bottom: 12rem;
  gap: 4rem;
  padding: 2rem 3rem;
}

header.inactive+.page-nav-container .page-nav-btn {
  transform: scale(1.5);
  cursor: initial;
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
    text-shadow: 0 0 45px rgba(0, 0, 0, 0.5);
  }
}
</style>