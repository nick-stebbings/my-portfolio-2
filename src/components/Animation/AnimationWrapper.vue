<template>
    <button id="skip-intro" @click="skipToNav()"></button>
    <div id="animation-wrapper">
        <AnimationScene1 :class="animationScene1Class" />
        <AnimationGlowingNLoopScene v-show="glowingNLoopSceneVisible" :launch="launch2" />
        <AnimationScene2 v-show="intro2Visible" :launch="launch3" />
        <AnimationMainLoopScene v-show="mainLoopVisible" :launch="launch4" />
        <AnimationNavScene v-show="navVisible" :hoverLayerActive="hoverLayerActive" :switchToLayer="switchToLayer" />
    </div>
    <div id="animation-wrapper-static">
        <StaticNavSvg />
    </div>
</template>
  
<script>
import AnimationScene1 from "./AnimationScene1.vue";
import AnimationGlowingNLoopScene from "./AnimationGlowingNLoopScene.vue";
import AnimationScene2 from "./AnimationScene2.vue";
import AnimationMainLoopScene from "./AnimationMainLoopScene.vue";
import AnimationNavScene from "./AnimationNavScene.vue";
import StaticNavSvg from "./StaticNavSvg.vue";

export default {
    components: {
        AnimationScene1,
        AnimationGlowingNLoopScene,
        AnimationScene2,
        AnimationMainLoopScene,
        AnimationNavScene,
        StaticNavSvg,
    },
    props: {
        switchToLayer: Function,
        hoverLayerActive: Function,
    },
    mounted() {
        this.showModal()
    },
    data() {
        return {
            // Animation scene flags
            intro1Visible: false,
            glowingNLoopSceneVisible: false,
            intro2Visible: false,
            mainLoopVisible: false,
            navVisible: false,
            // Settimeout return values
            playNextSceneTimeout: undefined,
            launchNavAfterTimeout: undefined,
        };
    },
    watch: {
        playNextSceneTimeout: function (newVal) {
            this.playNextSceneTimeout = newVal;
        },
        launchNavAfterTimeout: function (newVal) {
            this.launchNavAfterTimeout = newVal;
        },
    },
    computed: {
        animationScene1Class() {
            return this.intro1Visible ? "active" : "inactive";
        },
    },
    methods: {
        showModal() {
            const disclaimerModal = document.querySelector(".trigger-disclaimer");
            disclaimerModal?.click()

            document.body.addEventListener("hidden.bs.modal", (e) => {
                if (e.target.id == 'disclaimer') {
                    this.intro1Visible = true;
                    const element = document.getElementById("eXJRUNPtokm1");
                    // Time the arrival of the first scene
                    element.svgatorPlayer.restart()

                    this.playNextSceneTimeout = setTimeout(() => {
                        element.style.display = 'none';
                        // Time the arrival of the second scene (index 1)
                        this.launchScene(1);
                    }, 8000);
                    // Assume the user will not click after this amount of time
                    this.launchNavAfterTimeout = setTimeout(this.skipToNav, 35000);
                }
            });
        },
        // Scene switch helper functions
        launchScene(animationId) {
            clearTimeout(this.playNextSceneTimeout);
            clearTimeout(this.launchNavAfterTimeout);

            this.intro1Visible = false;
            this.glowingNLoopSceneVisible = false;
            this.intro2Visible = false;
            this.mainLoopVisible = false;
            this.navVisible = false;

            switch (animationId) {
                case 0:
                    this.intro1Visible = true;
                    break;
                case 1:
                    this.glowingNLoopSceneVisible = true;
                    break;
                case 2:
                    this.intro2Visible = true;
                    break;
                case 3:
                    this.mainLoopVisible = true;
                    break;
                case 4:
                    this.navVisible = true;
                    break;

                default:
                    this.navVisible = true;
                    break;
            }
        },
        launch2() {
            this.launchScene(2);
            const element = document.getElementById("ekFf3Z5Im6j1");
            element.svgatorPlayer.ready(function (el) {
                // Restart the animation too
                el.play();
            });
            this.playNextSceneTimeout = setTimeout(this.launch3, 5000);
        },
        launch3() {
            this.launchScene(3);
        },
        launch4() {
            this.launchScene(4);

            const skipBtn = document.querySelector("#skip-intro");
            const element = document.getElementById("e8VQ6wvtuBg1");
            element.svgatorPlayer.ready(function (el) {
                // Restart the animation too
                el.play();
            });
            skipBtn.style.opacity = '0';
            skipBtn.style.visibility = 'invisible';

            setTimeout(function () {
                // bypass this on mobile
                const staticNav = document.getElementById("#animation-wrapper-static");
                console.log('staticNav :>> ', staticNav);
                if (staticNav) return;

                const element = document.querySelector("nav");
                element.style.opacity = '1';
                element.style.visibility = 'visible';

                const header = document.querySelector(".page.one header");
                header.style.opacity = '1';
                header.style.visibility = 'visible';

                const articleContent = document.querySelector(".page.two");
                articleContent.style['margin-top'] = '8rem';
            }, 4500);
        },
        skipToNav() {
            this.launch4()
            const element = document.getElementById("eXJRUNPtokm1");
            element.style.display = 'none';
        },
    }
};
</script>
<style scoped>
#animation-wrapper {
    max-width: 1680px;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    display: none;
}

#animation-wrapper-static {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
}

#animation-wrapper>svg {
    overflow: initial;
    width: 100%;
    max-width: 1680px;
}

.page.one {
    height: 100vh;
}

/* Media Queries */
@media (min-width: 1281px) {
    #animation-wrapper {
        display: initial;
    }

    #animation-wrapper-static {
        display: none;
    }
}
</style>