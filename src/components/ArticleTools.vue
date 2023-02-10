<template>
    <section
        :class="['article-tools']"
    >
        <span class="tools-titles">
            <h2>Tool Summary</h2>
            <h2>Demo</h2>
            <h2>Codebase</h2>
            <h2>Designs</h2>  
        </span>
        <div class="tools-content">
            <div class="langs-libs"></div>
            <div class="links"></div>
        </div>
    </section>
</template>
<style>
    section.article-tools {
        width: 65%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
    }
    
    section.article-tools .tools-titles {
        display: grid;
        width: 100%;
        grid-auto-rows: auto;
        grid-template-columns: 4fr 2fr 1fr 1fr;
        gap: 1rem;
        padding-left: 3rem;
    }

    section.article-tools h1, section.article-tools h2  {
        font-family: 'Ropa Sans', 'Roboto', 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        font-weight: 500;
        width: 100%;
        font-size: 1.5em;
        text-align: left;
    } 

    /* section.article-tools h1 {
        line-height: 1rem;
        margin-bottom: .75rem;
    }
    .case-study .article-title h1 {
        font-size: 2.25em; 
        font-weight: 600;
    } */
    
    section.article-tools .tools-content::before {
        position: absolute;
        content: '';
        top: -0.05rem;
        width: 100%;
        height: 2px;
        background-repeat: no-repeat;
        max-width: 100%;
        background-image: url("../assets/images/bg/divider-left.png");
        background-position: right;
        left: 0;
        align-items: flex-start;
        max-width: 100%;
    }

    section.article-tools .tools-content {
        position: relative;
        line-height: 1.5rem;
        background-repeat: repeat-y;
        font-size: 1em;
        height: 2rem;
        max-width: 100%;
        background-image: url("../assets/images/bg/page-nav-bg-left.png");
        background-position: left;
    }
    
</style>
<script>
// export default {
//   props: {
//     h1text: String,
//     h2text: String,
//     childclass: String
//   },
// }
</script>
