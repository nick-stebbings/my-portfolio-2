<template>
  <!-- <button type="button" class="trigger-disclaimer" data-bs-toggle="modal" data-bs-target="#disclaimer"></button> -->
  <!-- <Layout>
    <template v-for="(project, i) in activeProjects" :key="i" :slot="'section-' + i" :class="(project as any).pageClass"
      :data-active="activeFirstSection">
      <Article :details="project" :slide="slide"></Article>
    </template>
  </Layout> -->
  <Layout>
    <template v-slot:nav>
      <HamburgerNav :switchPage="switchPage"></HamburgerNav>
      <Nav :slide="slide" :hoveredLayer="hoveredLayer" :activeLayer="activeLayer"></Nav>
    </template>
    <template v-slot:article-sections>
      <section v-for="(project, i) in activeProjects" :key="i" :slot="'section-' + i" :id="'section-' + i"
        :class="'project section' + i + 1" :data-active="activeFirstSection">
        <Article :details="project" :slide="slide"></Article>
      </section>
    </template>
  </Layout>
  <!-- <main class="pages">
        <section class="page one">
          <AnimationWrapper :switchToLayer="switchToLayer" :hoverLayerActive="hoverLayerActive" />
          <Header :activeLayer="activeLayer" :hoveredLayer="hoveredLayer" :headerTitles="headerTitles"></Header>
        </section>

        <ContactSection :slide="slide" />
    
      </main> -->

  <!-- <DisclaimerModal />
  <ContactConfirmationModal /> -->
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import Header from "./components/Header.vue";
import Layout from "./components/Layout/Layout.vue";
import Article from "./components/Article/Article.vue";
import AnimationWrapper from "./components/Animation/AnimationWrapper.vue";
import ContactSection from "./components/ContactSection.vue";
import DisclaimerModal from "./components/Modal/DisclaimerModal.vue";
import ContactConfirmationModal from "./components/Modal/ContactConfirmationModal.vue";

import projects from "./projectData.js";
import projectHeaders from "./headerData.js";
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


// Nav state controller functions

// Hamburger
function switchPage(e: any) {
  activeLayer.value = (e.target.innerText.replace('-', ''));
}
// Desktop
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
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};
const makeVisible = (upBtn: any) => {
  upBtn.style.visibility = 'visible';
  upBtn.style.opacity = '1';
};

const intersectionObsCallback = (entries: IntersectionObserverEntry[], observer: any) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      const targetClassList = entry.target.classList;
      const upBtns = document.querySelectorAll('.return-home-up');
      const targetIndex: any = ['two', 'three', 'four', 'five'].indexOf(
        targetClassList[1]
      );
      if (targetIndex !== -1) {
        makeVisible(upBtns[targetIndex]);
      }
      observer.unobserve(entry.target);
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(intersectionObsCallback, options);
  const targets = document.querySelectorAll('.page.two, .page.three, .page.four, .page.five');
  targets.forEach((target) => observer.observe(target));
});
</script>
<style scoped>
.trigger-disclaimer {
  position: relative;
  left: -100vh;
  display: contents;
}
</style>