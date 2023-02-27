<template>
    <nav class="page-nav-container web3">
        <button id="page-nav-1-1" class="page-nav-btn" @click="slide('next', 'first', $event)"></button>
        <button id="page-nav-1-2" v-show="showSecondNavBtn" class="page-nav-btn"
            @click="slide('next', 'second', $event)"></button>
        <button id="page-nav-1-3" v-show="showThirdNavBtn" class="page-nav-btn"
            @click="slide('next', 'third', $event)"></button>
    </nav>
</template>
<script>
export default {
    props: {
        slide: Function,
        hoveredLayer: String,
    },
    computed: {
        showSecondNavBtn() {
            return ['web3', 'ecommerce', 'elearning'].includes(this.hoveredLayer);
        },
        showThirdNavBtn() {
            return this.hoveredLayer == 'web3';
        },
    }
}
</script>
<style scoped>
/* Navigation Bar */
.page-nav-container {
    display: flex;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease-in 0s, right 0.5s ease-out 0s;
    bottom: clamp(8vh, 8vh, 12vh);
    gap: 2rem;
    width: 24rem;
    background-image: url("../../assets/images/bg/page-nav-bg-bottom.png");
    background-repeat: repeat-x;
    background-position: right bottom;
}

.page-nav-btn {
    border: 0;
    width: 33%;
    height: 15vh;
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

.elearning.page-nav-container .page-nav-btn,
.ecommerce.page-nav-container .page-nav-btn,
.web3.page-nav-container .page-nav-btn {
    animation: fade-in-img 2s;
}

.page-nav-container .page-nav-btn {
    animation: fade-out-img 1s;
}

.elearning.page-nav-container .page-nav-btn:first-of-type {
    background: url("../../assets/images/icons/nuku-icon.png");
    background-repeat: no-repeat;
    background-size: contain;
}

.elearning.page-nav-container .page-nav-btn:nth-of-type(2) {
    background: url("../../assets/images/pyramid.png");
    background-repeat: no-repeat;
    background-size: contain;
}

.ecommerce.page-nav-container .page-nav-btn:first-of-type {
    background: url("../../assets/images/icons/bike-icon.png");
    background-repeat: no-repeat;
    background-size: contain;
}

.ecommerce.page-nav-container .page-nav-btn:nth-of-type(2) {
    background: url("../../assets/images/icons/spinning-icon.png");
    background-repeat: no-repeat;
    background-size: contain;
}

.web3.page-nav-container .page-nav-btn:first-of-type {
    background: url("../../assets/images/icons/atom-small.png");
    background-repeat: no-repeat;
    background-size: contain;
}

.web3.page-nav-container .page-nav-btn:nth-of-type(2) {
    background: url("../../assets/images/sphere.png");
    background-repeat: no-repeat;
    background-size: contain;
}

.page-nav-btn:nth-of-type(3) {
    background: url("../../assets/images/icons/veg-icon.png");
    background-repeat: no-repeat;
    background-size: contain;
}



@media only screen and (min-width: 1281px) {
    .page-nav-container {
        right: var(--margin-top-sm-md-l) !important;
    }
}


@media only screen and (min-width: 1680px) {

    .page-nav-container {
        width: 36vw;
        right: var(--margin-xl) !important;
        margin-right: 26px;
    }
}
</style>