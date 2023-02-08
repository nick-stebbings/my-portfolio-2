<script setup lang="ts">
import { ref, toRefs } from 'vue'
import ArticleSection from "./ArticleSection.vue";
import ArticleTitle from "./ArticleTitle.vue";
import ArticleTools from "./ArticleTools.vue";

const props = defineProps({
  slide: Function,
})
const { slide } = toRefs(props)

</script>
<template>
    <article>
    <div class="article-wrapper">
        <ArticleTitle />
        <ArticleSection />
        <ArticleTools />
        <ArticleSection />
        <button class="top-button" @click="$emit("slide('top', 'first')"    )"></button>
    </div>
    </article>
</template>
<style>
</style>
