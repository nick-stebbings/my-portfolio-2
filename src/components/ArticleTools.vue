<template>
    <section
        :class="['article-tools']"
    >
        <div class="tools-titles">
            <h2>Tool Summary</h2>
            <h2>Demo</h2>
            <h2>Codebase</h2>
            <h2>Designs</h2>  
        </div>
        <div class="tools-content">
            <div class="langs-libs">
                <div class="langs-libs-icons">
                    <div class="langs-icon">
                        <img src="../assets/images/icons/code-icon.png" alt="languages icon" />
                    </div>
                    <div class="libs-icon">
                        <img src="../assets/images/icons/tools-icon.png" alt="tools icon" />
                    </div>
                </div>
                <div class="langs-libs-lists">
                    <div class="langs">
                        <div class="langs-list"></div>
                        <ul v-for="lang in langs">
                            <li>{{ lang }}</li>
                        </ul>
                    </div>
                    <div class="libs">
                        <div class="libs-list"></div>
                        <ul v-for="lib in libs">
                            <li>{{ lib }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="demo-content">
                <div class="content-icon">
                    <img src="../assets/images/icons/viewports-icon.png" alt="viewports-icon" />
                </div>
                <div class="content-link">
                    <a href="#" target="_blank">
                        <img src="../assets/images/icons/link-icon.png" alt="demo hyperlink" />
                    </a>
                </div>
            </div>
            <div class="codebase-content">
                <div class="content-icon">
                    <img src="../assets/images/icons/gitcat-icon.png" alt="code-icon" />
                </div>
                <div class="content-link">
                    <a href="#" target="_blank">
                        <img src="../assets/images/icons/link-icon.png" alt="codebase hyperlink" />
                    </a>
                </div>
            </div>
            <div class="designs-content">
                <div class="content-icon">
                    <img src="../assets/images/icons/figma-icon.png" alt="code-icon" />
                </div>
                <div class="content-link">
                    <a href="#" target="_blank">
                        <img src="../assets/images/icons/link-icon.png" alt="designs hyperlink" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
    section.article-tools {
        width: 75%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
    }
    
    section.article-tools .tools-titles, section.article-tools .tools-content {
        display: grid;
        width: 100%;
        grid-auto-rows: auto;
        grid-template-columns: 2fr 2fr 1fr 1fr;
        gap: 1rem;
        padding-left: 3rem;
    }

    section.article-tools h2  {
        color: #3C3C3C;
        font-family: 'Ropa Sans', 'Roboto', 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        font-weight: 500;
        width: 100%;
        font-size: 1.5em;
        text-align: center;
    } 
    section.article-tools h2:first-child  {
        text-align: left;
    }

    section.article-tools .demo-content, section.article-tools .designs-content, section.article-tools .codebase-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    section.article-tools .content-icon, section.article-tools .content-link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
        position: relative;
        transition: .3s all;
    }
    .article-tools .content-link img:hover {
        border: 2px dashed #846B63;
        padding: .5rem;
        height: 5rem;
        width: 5rem;
        background-position: center;
        border-radius: 1rem;
    }
    section.article-tools .content-icon::before {
        height: 4rem;
        width: 100%;
        content: '';
        position: absolute;
        left: 0;
        bottom: -2rem;
        background-image: url(../assets/images/bg/link-arrow-down.png);
        background-repeat: no-repeat;
        background-position: center;
    }
    
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
        height: auto;
    }
    section.article-tools .langs-libs, section.article-tools .langs-libs-lists, section.article-tools .langs-libs-icons {
        display: flex;
        justify-content: space-between;
    }
    section.article-tools .langs-libs {
        flex-direction: column;
    }

    section.article-tools .tools-content ul {
        list-style: none;
        padding: 0;
        margin: 0;
        color: #3C3C3C;
        font-size: 1rem;
        font-family: 'Merriweather', 'Georgia', 'Times New Roman', serif;
        line-height: 1.5rem;
    }
    section.article-tools .tools-content ul li {
        padding: 0;
        margin: 0 0 .1rem 0;
    }
    
</style>
<script>
export default {
  props: {
    demoUrl: String,
    designsUrl: String,
    langs: Array,
    libs: Array,
  },
}
</script>
