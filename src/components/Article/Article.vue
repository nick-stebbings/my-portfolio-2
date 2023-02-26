<template>
  <article>
    <div class="article-content-wrapper">
      <ArticleTitle childClass="left" :h1text="details.title" :h2text="details.subtitle" />
      <section v-if="details?.hasCaseStudy" class="case-study">
        <ArticleTitle childClass="right" h1text="Case Study" h2text=" " />
        <Carousel></Carousel>
      </section>
      <ArticleSection :paragraphs="details.summary.paragraphs" :imgPath="details.summary.imgPath" sectionType="summary" />
      <ArticleTools :libs="details.libs" :langs="details.langs" :demoUrl="details.demoUrl"
        :codebaseUrl="details.codebaseUrl" :designsUrl="details.designsUrl" :blogUrl="details.blogUrl" />

      <ArticleSection v-for="article in details.articles" :paragraphs="article.paragraphs" :imgPath="article.imgPath"
        :imgCaption="article.imgCaption" :imgAlt="article.imgAlt" sectionType="para" />

      <div class="top-button">
        <button class="return-home-up" @click="slide('top', 'first')"></button>
      </div>
    </div>
  </article>
</template>
<script>
import ArticleSection from "../Article/ArticleSection.vue";
import ArticleTitle from "../Article/ArticleTitle.vue";
import ArticleTools from "../Article/ArticleTools.vue";
import Carousel from "../Carousel.vue";

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
  },
  mounted: () => {
    const expandCaseStudyBtns = document.querySelectorAll(".case-study header");
    const carouselCaseStudies = document.querySelectorAll(".carousel.slide");
    expandCaseStudyBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        console.log("Expanding case study...");
        (carouselCaseStudies[i]).style.height = btn.classList.contains('active') ? '0' : 'auto';
        btn.style.width = !btn.classList.contains('active') ? 'calc(100%)' : '50%';
        btn.classList.toggle('active');
      });
    });
  }
}
</script>
<style>
.page .article-content-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 6rem minmax(8rem, auto) minmax(8rem, auto) 14rem minmax(8rem, auto);
  grid-template-areas: "title title button" "row1 row1 row1" "row2 row2 row2" "row3 row3 row3" "row4 row4 row4";
  row-gap: 3rem;
}

.page>article>.article-content-wrapper,
.top-button {
  background-image: url("../../assets/images/bg/page-nav-bg-white.png");
  background-repeat: repeat-y;
  background-position: right;
}

.page article .top-button {
  grid-area: button;
  border: none;
  background-color: #fff;
  justify-content: flex-end;
  display: flex;
  align-items: center
}

.page article .article-title {
  grid-area: title;
}

.page article .article-tools {
  grid-area: row3;
}

.page .article-content-wrapper>section.case-study {
  grid-area: row2;
}

.case-study {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

@media only screen and (max-width: 1280px) {
  .page .article-content-wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: 6rem auto auto auto auto;
    grid-template-areas:
      "title"
      "row1"
      "row2"
      "row3"
      "row4";
    row-gap: 20px;
  }
}
</style>