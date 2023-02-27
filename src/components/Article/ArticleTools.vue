<template>
    <section :class="['article-tools']">
        <div class="tools-titles">
            <h2>Tool Summary</h2>
            <h2 v-show="hasDemo">Demo</h2>
            <h2 v-show="hasCode">Codebase</h2>
            <h2 v-show="hasFigma">Designs</h2>
            <h2 v-show="hasBlog">Blog</h2>
        </div>
        <div class="tools-content">
            <div class="langs-libs">
                <div class="langs-libs-icons">
                    <div class="langs-icon">
                        <img src="../../assets/images/icons/code-icon.png" alt="languages icon" />
                    </div>
                    <div class="libs-icon">
                        <img src="../../assets/images/icons/tools-icon.png" alt="tools icon" />
                    </div>
                </div>
                <div class="langs-libs-lists">
                    <div class="langs">
                        <div class="langs-list">
                            <ul v-for="lang in langs">
                                <li>{{ lang }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="libs">
                        <div class="libs-list">
                            <ul v-for="lib in libs">
                                <li>{{ lib }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="hasDemo" class="demo-content">
                <div class="content-icon">
                    <img src="../../assets/images/icons/viewports-icon.png" alt="viewports-icon" />
                </div>
                <div class="content-link">
                    <a :href="demoUrl" target="_blank">
                        <img src="../../assets/images/icons/link-icon.png" alt="demo hyperlink" />
                    </a>
                </div>
            </div>
            <div v-show="hasCode" class="codebase-content">
                <div class="content-icon">
                    <img src="../../assets/images/icons/gitcat-icon.png" alt="code-icon" />
                </div>
                <div class="content-link">
                    <a :href="codebaseUrl" target="_blank">
                        <img src="../../assets/images/icons/link-icon.png" alt="codebase hyperlink" />
                    </a>
                </div>
            </div>
            <div v-show="hasFigma" class="designs-content">
                <div class="content-icon">
                    <img src="../../assets/images/icons/figma-icon.png" alt="code-icon" />
                </div>
                <div class="content-link">
                    <a :href="designsUrl" target="_blank">
                        <img src="../../assets/images/icons/link-icon.png" alt="designs hyperlink" />
                    </a>
                </div>
            </div>
            <div v-show="hasBlog" class="designs-content">
                <div class="content-icon">
                    <img src="../../assets/images/icons/blog-icon.png" alt="blog-icon" />
                </div>
                <div class="content-link">
                    <a :href="blogUrl" target="_blank">
                        <img src="../../assets/images/icons/link-icon.png" alt="blog hyperlink" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        demoUrl: String,
        codebaseUrl: String,
        designsUrl: String,
        blogUrl: String,
        langs: Array,
        libs: Array,
    },
    computed: {
        hasCode() {
            return typeof this?.codebaseUrl != "undefined"
        },
        hasBlog() {
            return typeof this?.blogUrl != "undefined"
        },
        hasFigma() {
            return typeof this?.designsUrl != "undefined"
        },
        hasDemo() {
            return typeof this?.demoUrl != "undefined"
        },
    }
}
</script>
<style>
section.article-tools {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

section.article-tools .tools-titles,
section.article-tools .tools-content {
    display: grid;
    width: 100%;
    grid-auto-rows: auto;
    grid-template-columns: 3fr 2fr 1fr 1fr 1fr;
    gap: 1rem;
    padding-left: 3rem;
}

section.article-tools h2 {
    color: #3C3C3C;
    font-family: 'Ropa Sans', 'Roboto', 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 500;
    width: 100%;
    font-size: 1.5em;
    text-align: center;
}

section.article-tools h2:first-child {
    text-align: left;
}

section.article-tools .demo-content,
section.article-tools .designs-content,
section.article-tools .codebase-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section.article-tools .content-icon,
section.article-tools .content-link {
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
    background-image: url(../../assets/images/bg/link-arrow-down.png);
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
    background-image: url("../../assets/images/bg/divider-left.png");
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
    background-image: url("../../assets/images/bg/page-nav-bg-left.png");
    background-position: left;
    height: auto;
}

section.article-tools .langs-libs,
section.article-tools .langs-libs-lists,
section.article-tools .langs-libs-icons {
    display: flex;
    justify-content: space-between;
}

section.article-tools .langs-list {
    padding-left: .5rem;
}

section.article-tools .libs-list {
    text-align: right;
}

section.article-tools .langs-libs {
    flex-direction: column;
    padding-right: 3rem;
}

section.article-tools .langs,
section.article-tools .libs {
    width: 50%;
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


@media only screen and (max-width: 1280px) {
    section.article-tools {
        display: grid;
        grid-template-columns: 1fr 3fr;
    }

    section.article-tools .tools-titles {
        justify-content: start;
    }

    section.article-tools .tools-titles h2 {
        margin: 1.5rem 0 0 0;
        flex-basis: 3rem;
        text-align: left;
    }

    section.article-tools .tools-titles,
    section.article-tools .tools-content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /* grid-template-rows: 3fr 2fr minmax(auto, 2fr) minmax(auto, 2fr) minmax(auto, 2fr);
        grid-template-columns: 100%; */
        width: 100%;
        gap: 10px;
        padding-left: 0;
    }

    header.article-title.left {
        padding-right: 3rem;
    }

    section.article-section.para:nth-of-type(2n + 1) {
        padding: 0;
    }

    section.article-tools .langs-libs {
        padding-right: 0;
    }
}
</style>