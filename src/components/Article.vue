<template>
  <article>
    <div class="article-wrapper">
      <ArticleTitle childClass="left" :h1text="details.title" :h2text="details.subtitle" />
      <section v-if="details?.hasCaseStudy" class="case-study">
        <ArticleTitle childClass="right" h1text="Case Study" h2text=" " />
        <Carousel></Carousel>
      </section>
      <ArticleSection 
        :paragraphs="details.summary.paragraphs"
        :imgPath="details.summary.imgPath"
        sectionType="summary" />
      <ArticleTools
        :libs="details.libs"
        :langs="details.langs"
        :demoUrl="details.demoUrl"
        :codebaseUrl="details.codebaseUrl"
        :designsUrl="details.designsUrl"
        :blogUrl="details.blogUrl"
      />
      
      <ArticleSection
        v-for="article in details.articles"
        :paragraphs="article.paragraphs"
        :imgPath="article.imgPath"
        sectionType="para" />
      
      <div class="top-button">
          <button class="return-home-up" @click="slide('top', 'first')"></button>
      </div>
    </div>
  </article>
</template>
<script>
import ArticleSection from "./ArticleSection.vue";
import ArticleTitle from "./ArticleTitle.vue";
import ArticleTools from "./ArticleTools.vue";
import Carousel from "./Carousel.vue";
export default {
  props: {
    details: Object,
    slide: Function,
  },
  components: {
    ArticleSection,
    ArticleTitle,
    ArticleTools,
    Carousel,
  }
}
</script>
<style>
  .page > article {
    width: 100%;
    height: 100%;
    padding: 1rem 6vw;
    position: relative;
    min-height: 100vh;
  }
  .page .article-wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 35% 30% 35%;
    grid-template-rows: 6rem minmax(8rem, 24rem) minmax(8rem, auto) 14rem minmax(8rem, auto);
    grid-template-areas: "title title button" "row1 row1 row1" "row2 row2 row2" "row3 row3 row3" "row4 row4 row4";
    row-gap: 3rem;
  }
  .page > article > .article-wrapper, .top-button {
    background-image: url("../assets/images/bg/page-nav-bg-white.png");
    background-repeat: repeat-y;
    background-position: right;
  }

  .page article .top-button { grid-area: button; border: none; background-color: #fff}
  .page article .article-title { grid-area: title;}
  .page article .article-tools { grid-area: row3;}
  .page .article-wrapper > section.case-study { grid-area: row2;}
  .case-study { display: flex; align-items: flex-end; flex-direction: column;}

</style>