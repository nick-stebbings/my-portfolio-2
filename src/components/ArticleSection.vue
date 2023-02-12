<template>
    <section :class="[sectionType, 'article-section']">
        <div class="image">
            <img :src="getImageUrl()" alt="" srcset="">
        </div>
        <div class="copy">
            <p v-for="p in computedParas()">{{ p }}</p>
        </div>
    </section>
</template>
<style>
    section.article-section {
        display: flex;
        justify-content: space-between;
        background-image: url("../assets/images/bg/page-nav-bg-left.png");
        background-repeat: repeat-y;
        background-position: left;
        padding: 0 3rem 0 0;
        gap: 3rem;
    }
    .page article .article-section:nth-of-type(2n) { grid-column-start: 1; grid-column-end: 3;}
    .page article .article-section:nth-of-type(2n+1) { grid-column-start: 2; grid-column-end: 4;}
    .page article .article-section.summary:nth-of-type(2n) { grid-column-start: 1; grid-column-end: 4;}

    section.article-section.image {
        display: grid;
    }
    section.article-section.summary {
        background-image: url("../assets/images/bg/page-nav-bg-right.png");
        background-position: right;
    }
    section.article-section .copy {
        padding: 0 1rem;
    }
    section.article-section .image {
        display: flex;
    }

    p {
        font-size: 12.8px;
        line-height: 1rem;
        margin-bottom: .75rem;
        font-family: 'Merriweather', 'Georgia', 'Times New Roman', serif;
        color: #3c3c3c;
    }

    @media (min-width: 1280px) {
        
        p {
            font-size: 1.5rem;
            line-height: 1.5em;
            margin-bottom: 1rem;
        }
    }
</style>
<script setup>
    const props = defineProps({
        paragraphs: { type: String },
        imgPath: { type: String },
        sectionType: { type: String },
    })
    function computedParas() {
        return props.paragraphs.split("\\r\\n\\r\\n")
    }
    function getImageUrl() {
        const path = new URL('../assets/images/', import.meta.url);
        return `${path}/${props.imgPath}`
    }
</script>