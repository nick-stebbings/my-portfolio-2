<template>
    <section class="article-section">
        <div class="image"></div>
        <div class="copy"></div>
    </section>
</template>
<style>

section.article-section {
    display: flex;
    justify-content: space-between;
    
    background-image: url("../assets/page-nav-bg-left.png");
    background-repeat: repeat-y;
    background-position: left;
    
    padding-right: 3rem;
    
}
section.article-section .copy {
    display: flex;
    background-color: beige !important;
}
section.article-section .image {
    display: flex;
    background-color: aquamarine !important;
}
</style>
