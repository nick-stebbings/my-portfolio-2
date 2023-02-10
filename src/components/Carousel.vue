<script setup>
</script>
<template>
    <div id="case-study-carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#case-study-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="../assets/images/casestudyframes/habitfract1/1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="../assets/images/casestudyframes/habitfract1/2.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="../assets/images/casestudyframes/habitfract1/3.png" class="d-block w-100" alt="...">
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
.case-study .carousel-control-prev, .case-study .carousel-control-next, .carousel-indicators {
    position: absolute;
    top: -6rem;
    bottom: initial;
}

.case-study .carousel-control-prev, .case-study .carousel-control-next {
    height: 4rem;
    width: 4rem;
    background-position: center;
    background-repeat: no-repeat;
}

.case-study .carousel-control-prev {
    left: initial;
    right: 55%;
    background-image: url("../assets/left-icon.png");
}

.case-study .carousel-control-next {
    right: initial;
    left: 55%;
    background-image: url("../assets/right-icon.png");
}

#case-study-carousel {
    position: relative;
    padding: 0 4rem;
    background-image: url("../assets/page-nav-bg-right.png");
    background-position: right;
    background-repeat: repeat-y;
    height: 0;
    overflow: hidden;
    transition: 1s all ease-in;
}

.carousel-indicators button {
    display: flex;
    align-items: center;
}

.carousel-indicators {
    width: 100%;
    z-index: 1;
    height: 4rem;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background-color: #3c3c3c;
    opacity: 0.5;
}
</style>
