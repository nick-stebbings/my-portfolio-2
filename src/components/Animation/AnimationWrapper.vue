<template>
    <div>
        <div class="animation-wrapper">
            <AnimationScene1 :class="animationScene1Class" />
            <AnimationGlowingNLoopScene v-if="AnimationGlowingNLoopSceneVisible" />
            <AnimationScene2 v-if="intro2Visible" />
            <AnimationMainLoopScene v-if="mainLoopVisible" />
            <AnimationNavScene v-if="navVisible" />
        </div>
    </div>
</template>
  
<script>
import AnimationScene1 from "./AnimationScene1.vue";
import AnimationGlowingNLoopScene from "./AnimationGlowingNLoopScene.vue";
import AnimationScene2 from "./AnimationScene2.vue";
import AnimationMainLoopScene from "./AnimationMainLoopScene.vue";
import AnimationNavScene from "./AnimationNavScene.vue";

export default {
    components: {
        AnimationScene1,
        AnimationGlowingNLoopScene,
        AnimationScene2,
        AnimationMainLoopScene,
        AnimationNavScene,
    },
    props: {
        projects: Object,
        projectHeaders: Object,
    },
    setup(props) {
    },
    data() {
        return {
            // Animation scene flags
            intro1Visible: false,
            AnimationGlowingNLoopSceneVisible: false,
            intro2Visible: false,
            mainLoopVisible: false,
            navVisible: false,
        };
    },
    computed: {
        animationScene1Class() {
            return this.intro1Visible ? "active" : "inactive";
        },
    },
    methods: {

        // Settimeout return values
        // let playMainLoop: any;
        // let skipToMainLoop: any;

        // // Scene switch helper functions

        // function launchScene(animationId: number) {
        //   intro1Visible.value = false;
        //   introLoopVisible.value = false;
        //   intro2Visible.value = false;
        //   mainLoopVisible.value = false;
        //   navVisible.value = false;

        //   switch (animationId) {
        //     case 0:
        //       intro1Visible.value = true;
        //       break;
        //     case 1:
        //       introLoopVisible.value = true;
        //       break;
        //     case 2:
        //       intro2Visible.value = true;
        //       break;
        //     case 3:
        //       mainLoopVisible.value = true;
        //       break;
        //     case 4:
        //       navVisible.value = true;
        //       break;

        //     default:
        //       navVisible.value = true;
        //       break;
        //   }
        // }
        // function launch2() {
        //   launchScene(2);
        //   const element = document.getElementById("ekFf3Z5Im6j1");
        //   (element as any).svgatorPlayer.ready(function (el: any) {
        //     // Restart the animation too
        //     el.play();
        //   });
        //   setTimeout(function () {
        //     launchMainLoop();
        //   }, 5000);
        // }
        // function launchMainLoop() {
        //   launchScene(3);
        // }
        // function skipToNav() {
        //   clearTimeout(playMainLoop);
        //   clearTimeout(skipToMainLoop);

        //   const element = document.getElementById("eXJRUNPtokm1");
        //   element!.style.display = 'none';
        //   launchNav()
        // }
        // function launchNav() {
        //   clearTimeout(skipToMainLoop);
        //   const skipBtn: HTMLBodyElement | null = document.querySelector("#skip-intro");
        //   launchScene(4);

        //   const element = document.getElementById("e8VQ6wvtuBg1");
        //   (element as any).svgatorPlayer.ready(function (el: any) {
        //     // Restart the animation too
        //     el.play();
        //   });
        //   skipBtn!.style.opacity = '0';
        //   skipBtn!.style.visibility = 'invisible';

        //   setTimeout(function () {
        //     const element = document.querySelector("nav");
        //     (element as HTMLBodyElement).style.opacity = '1';
        //     (element as HTMLBodyElement).style.visibility = 'visible';

        //     const header = document.querySelector("#wrapper header");
        //     (header as HTMLBodyElement).style.opacity = '1';
        //     (header as HTMLBodyElement).style.visibility = 'visible';


        //     const articleContent = document.querySelector(".page.two");
        //     (articleContent as any)!.style['margin-top'] = '8rem';
        //   }, 4500);
        // }
    }
};
</script>