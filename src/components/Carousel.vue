<script setup>
</script>
<template>
    <div id="case-study-carousel" class="carousel slide" data-bs-interval="false" data-bs-ride="true">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="8" aria-label="Slide 9"></button>
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="9" aria-label="Slide 10"></button>
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="10" aria-label="Slide 11"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="../assets/images/casestudyframes/habitfract1/1.png" class="d-block w-100" alt="App screens Slide">
        </div>
        <div class="carousel-item">
        <img src="../assets/images/casestudyframes/habitfract1/2.png" class="d-block w-100" alt="Title Slide">
        </div>
        <div class="carousel-item">
        <img src="../assets/images/casestudyframes/habitfract1/3.png" class="d-block w-100" alt="Overview Slide">
        </div>
        <div class="carousel-item">
        <img src="../assets/images/casestudyframes/habitfract1/4.png" class="d-block w-100" alt="Structure Slide">
        </div>
        <div class="carousel-item">
        <img src="../assets/images/casestudyframes/habitfract1/5.png" class="d-block w-100" alt="Problem Slide">
        </div>
        <div class="carousel-item">
        <img src="../assets/images/casestudyframes/habitfract1/6.png" class="d-block w-100" alt="Problem Slide">
        </div>
        <div class="carousel-item">
        <img src="../assets/images/casestudyframes/habitfract1/7.png" class="d-block w-100" alt="Constraints Slide">
        </div>
        <div class="carousel-item">
        <img src="../assets/images/casestudyframes/habitfract1/8.png" class="d-block w-100" alt="Desired Outcomes Slide">
        </div>
        <div class="carousel-item">
        <img src="../assets/images/casestudyframes/habitfract1/9.png" class="d-block w-100" alt="Solutions Slide">
        </div>
        <div class="carousel-item">
        <img src="../assets/images/casestudyframes/habitfract1/10.png" class="d-block w-100" alt="Solutions Slide">
        </div>
        <div class="carousel-item">
        <img src="../assets/images/casestudyframes/habitfract1/11.png" class="d-block w-100" alt="Summary Slide">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#case-study-carousel" data-bs-slide="prev">
        <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span> -->
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#case-study-carousel" data-bs-slide="next">
        <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span> -->
    </button>
    </div>
</template>
<style>
.case-study .carousel-control-prev, .case-study .carousel-control-next {
    position: absolute;
    top: -5.5rem;
    bottom: initial;
}

.case-study .carousel-control-prev, .case-study .carousel-control-next {
    height: 3rem;
    width: 3rem;    
    padding: .5rem;
    background-color: #846B63;
    border-radius: .5rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.case-study .carousel-control-prev {
    left: initial;
    right: 55%;
    background-image: url("../assets/images/icons/left-icon.png");
}

.case-study .carousel-control-next {
    right: initial;
    left: 55%;
    background-image: url("../assets/images/icons/right-icon.png");
}

.carousel {
    position: relative;
    padding: 0 4rem 0 0;
    background-image: url("../assets/images/bg/page-nav-bg-right.png");
    background-position: right;
    background-repeat: repeat-y;
    height: 0;
    overflow: hidden;
    transition: .3s all ease-out;
    padding-bottom: 2rem;
    margin-left: 65%;
}
.case-study > header.active + .carousel {
    overflow: initial;
    margin-left: 0;
}

.case-study > .article-title.active + .carousel .carousel-indicators {
    left: 0;
}

.carousel-indicators button {
    display: flex;
    align-items: center;
}

.carousel-indicators {
    width: 100%;
    z-index: 1;
    height: 2rem;
    display: flex;
    align-items: center;
    bottom: 0;
    left: -2.5rem;
    margin: 0;
    padding: 0;
    background-color: #846B63;
    opacity: 0.5;
}
</style>
