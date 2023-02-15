<script setup lang="ts">
  import Header from "./components/Header.vue";
  import Animation1 from "./components/Animation1.vue";
  import AnimationIntroLoop from "./components/AnimationIntroLoop.vue";
  import Animation2 from "./components/Animation2.vue";
  import AnimationMainLoop from "./components/AnimationMainLoop.vue";
  import AnimationNav from "./components/AnimationNav.vue";
  import Article from "./components/Article.vue";
  import ContactForm from "./components/ContactForm.vue";

  import { ref, onMounted } from "vue";
  const intro1Visible = ref(true);
  const introLoopVisible = ref(false);
  const intro2Visible = ref(false);
  const mainLoopVisible = ref(false);
  const navVisible = ref(false);

  const projects = ref([
    {
      pageClass: "page two",
      title: 'Habit/Fract (for Holochain)',
      subtitle: 'a social, fractal, atomic habit tracker',
      summary: {
        paragraphs: "Ever tried to follow a goal and had trouble trying to put it into action? Ok - that's a leading question! After trying out many linear habit trackers (including some very visually and narratively interesting apps) I found that there was nothing meeting my personal requirements. \\r\\n\\r\\nI am a person who thinks in big ideas and then recursively breaks down what needs to be done to achieve these ideas (sometimes epic in scope). While it is always the day-to-day actions that one must focus on, as a result of this top-down way of thinking it can be difficult to link daily actions to the bigger picture and make consistent progress.\\r\\n\\r\\nConversely, many people are great at breaking down and acting on small-magnitude behaviours (the list-writers!). Habit/Fract came about as a way of uniting the two modes of thinking in a way that provides visual cues and helps to build and break down habitual behaviour over time.",
        imgPath: "atom.png"
      },
      langs: ['Holochain', 'TypeScript', 'Rust', 'GraphQL'], 
      libs: ['React', 'Redis', 'Redux', 'Apollo', 'd3.js', 'Storybook'],
      codebaseUrl: "https://github.com/HabFract",
      designsUrl: "https://www.figma.com/file/m8CE7oXUuSw2BGkS7fdvBD/Habfract-Holochain-1.1-Design-System?node-id=214%3A2091&t=QOvj4igG3f1neSkk-1",
      articles: [
        { paragraphs: 'This working project will in time be the culmination of my fractally-visualised personal habit tracking application - a social experience that will allow us to learn from each other through mimicry.\\r\\n\\r\\nThe end goal for the UI is to have a \"never-ending\" fractal structure that can be added to at the top, or at the bottom, perhaps terminating at the bottom in an \"atomic habit\" - the smallest unit of habit, which could optionally be stored as a simple To-do list. The data and visuals can be stored on the user\'s private account (even available offline) and then, if the agent wishes, tokenised and shared for free/traded (when the visualisation of the behaviours is valuable, e.g. the running of a business).\\r\\n\\r\\nHolochain ensures encryption and full agent-centric sovereignty over data. ', imgPath: "holochain-logo.png", imgCaption: "Holochain is a distributed (p2p) data integrity framework", imgAlt: "Holochain logo"},
        { paragraphs: 'I learnt the Rust programming language to intermediate level in order to understand how to scaffold and develop a Holochain app (hApp). I learnt how to run a Holochain conductor (node) on my local host, then I started with a \'Profiles\' microservice provided by members of the Holochain open-dev community.\\r\\n\\r\\nI have recently been focusing on the UI/UX and have completed user stories/screens (see \'Designs\' link, above) that flesh out the core functionality of the minimum viable product. There is no Holochain native mobile application currently possible and so the challenge has been to make it feel native whist remaining a web app.\\r\\n\\r\\nDeveloping on Holochain is like trying to hit a moving target, since the technology has only just reached Beta stage. I look forward to implementing a full p2p deployment integrating the new designs in the next year.\\r\\n\\r\\nIf anybody wishes to get involved in this development of this hApp, get in touch via the contact form.', imgPath: "screens/user-profile.png", imgCaption: "A look at a possible New User screen. No password is needed as an agent is identified by the app via their public/private key pair", imgAlt: "New user screenshot"},
      ],
      hasCaseStudy: true
    },
    {
      pageClass: "page three",
      title: 'Habit Triangles',
      subtitle: 'a visual, linear habit tracker',
      summary: {
        paragraphs: "This small app stemmed from a project in the Launch School back-end syllabus which focused on persistence with local storage and rendering with the ERB template language.\\r\\n\\r\\nThis was my first attempt at building a basic interface for the visualisation of personal habits using multi-level structures. I decided to use a hierarchy of triangles, attempting to make 3 levels that could stack on top of the other. I had some success but relied on monkey-patching of the SwiperJS API which quickly became unmanageable.",
        imgPath: "pyramid.png"
      },
      libs: ['jQuery Swiper', 'Bootstrap 4', 'FlatUI', 'Sinatra', 'ERB'],
      langs: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
      demoUrl: "https://habit-triangles.herokuapp.com/",
      codebaseUrl: "https://github.com/nick-stebbings/habit_triangles",
      blogUrl: "https://n-stebbings.medium.com/from-session-cookie-to-do-list-to-fractal-distributed-listmania-part-1-645911140e53",
      articles: [
        { paragraphs: "I drew inspiration from a Mathematics and fractal geometry. Check out this cool 3d version: https://www.reddit.com/r/woahdude/comments/hsu3f3/delightful_fractal_triangles/" , imgPath: "screens/happy-triangles.jpg", imgCaption: "My first attempt at visualising habits used a pyramid of triangles", imgAlt: "The app's habit visualisation interface"},
      ],
      hasCaseStudy: false
    },
    {
      pageClass: "page four",
      title: 'Habit/Fract (Web 2.0)',
      subtitle: 'a proof of concept for the ultimate habit tracker',
      summary: {
        paragraphs: "This project was an improvement of my Habit Triangles app to include hierarchical visualisation of the habits using the d3 JavaScript library (Data Driven Documents).\\r\\n\\r\\nThis was a much more ambitious project than the first. I moved to a multi-layered architecture: my first single-paged app. I also performed a full manual deployment to a Digital Ocean droplet, Dockerised both layers and used Github actions and DockerHub for continual deployment",
        imgPath: "sphere.png"
      },
      langs: ['Ruby', 'JavaScript', 'Sass', 'PostCSS'], 
      libs: ['d3.js', 'Tailwind CSS', 'Webpack 4', 'Mithril.js', 'React', 'Redux'],
      demoUrl: "https://habfract.online",
      codebaseUrl: "https://github.com/nick-stebbings/fractal-habits-SPA-tailwind-react-redux",
      designsUrl: "https://www.figma.com/file/bbLgug0bakLBh9xtbKwgon/HabitFract?node-id=0%3A1&t=x34BaWpkp7AtLn7o-1",
      blogUrl:
        'https://n-stebbings.medium.com/from-session-cookie-to-do-list-to-fractal-distributed-listmania-2da3e33728a?postPublishedType=repub',
      articles: [
        { paragraphs: "I spent some time working on integrating d3-hierarchy visualisations with a lightweight frontend framework called Mithril. Since Mithril is un-opiniated about global state management I tried to find my own solutions using functional streams of data. This prepared me well for learning Redux and understanding React state hooks, but was ultimately buggy and hard to maintain.\\r\\n\\r\\nI later completed a migration to React/Redux which solved most of the bugs. The demo link here is the migrated version, but without the landing page I originally deployed.", imgPath: "screens/habit-structure.png", imgCaption: "The primary habit visualisation is a tree structure", imgAlt: "The app's habit visualisation interface"},
        { paragraphs: "The API for the single-page-application was written in Ruby, using the Sinatra framework. I tried to separate concerns as much as possible to allow the use of different storage mediums via adapters in the ROM-rb ORM library. This was a complicated library to learn but it ultimately enabled me to populate the visualisations on the frontend from web-scraped data.\\r\\n\\r\\nI scraped data from eHow using Cheerio, formulated it in a YAML file, then used a Ruby Tree library to adapt it into a hierarchical JSON ternary tree. A similar process could be used to allow users to start from a set of common templates, derived from famous ways to organise one's habits (e.g. a template copying the \'7 Habits of Highly Effective People\'').", imgPath: "screens/habitfractv2.png", imgCaption: "The original landing screen", imgAlt: "Landing screen screenshot"}
      ],
      hasCaseStudy: false
    },
    {
      pageClass: "page five",
      title: 'Farmr',
      subtitle: 'a good price for good produce',
      summary: {
        paragraphs: "This is a concept for an hApp that is at the design and prototyping stage. Inspired by the work of the hREA project (the Holochain implementation of a bigger/older project called ValueFlows) I came up with this idea.\\r\\n\\r\\nWith traditional economic systems breaking down, and inflation rampant, there is a need for new economic alternatives. The ValueFlows project has been trying for some time to introduce a new economic ontology/grammar that will allow human beings to recognise the value of more than just money.\\r\\n\\r\\nI intend to build on the great work of these project by creating a simple app that allows consumers to find the best value produce meeting their supply-side standards (e.g. spray-free, organic, free-range).",
        imgPath: "screens/farmr-user-stories.png", 
        imgCaption: "Beginning of a user story for a food consumer", imgAlt: "User story flow-chart"
      },
      langs: ['Holochain', 'JavaScript', 'Rust'], 
      libs: ['Still', 'at', 'the', 'design', 'stage'],
      // codebaseUrl: "https://github.com/HabFract",
      designsUrl: "https://www.figma.com/file/rNEfZ6vOS1UfUW0byjZbUm/Farmer-Stories?t=smffdhIRJcbG1z3n-1",
      articles: [
        { paragraphs: 'This working project will in time be the culmination of my fractally-visualised personal habit tracking application - a social experience that will allow us to learn from each other through mimicry.\\r\\n\\r\\nThe end goal for the UI is to have a \"never-ending\" fractal structure that can be added to at the top, or at the bottom, perhaps terminating at the bottom in an \"atomic habit\" - the smallest unit of habit, which could optionally be stored as a simple To-do list. The data and visuals can be stored on the user\'s private account (even available offline) and then, if the agent wishes, tokenised and shared for free/traded (when the visualisation of the behaviours is valuable, e.g. the running of a business).\\r\\n\\r\\nHolochain ensures encryption and full agent-centric sovereignty over data. ',
        imgPath: "screens/farmr-user-stories.png", 
        imgCaption: "Beginning of a user story for a food consumer", imgAlt: "User story flow-chart"},
      ],
    },
  ]);

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
      (articleContent as any)!.style['margin-top'] = '8rem';
    }, 4500);
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
    threshold: 0.2
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
    
    <section v-for="(project, index) in projects" :class="project.pageClass">
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