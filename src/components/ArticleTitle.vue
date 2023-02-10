<template>
    <header
        :class="[childclass, 'article-title']"
    >
        <h1>
            {{ h1text }}
        </h1>
        <h2>
            {{ h2text }}
        </h2>
    </header>
</template>
<style>
    header.article-title {
        width: 35%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
    }
    header.article-title.left {
        align-items: flex-start;
    }
    header.article-title.right {
        align-items: flex-end;
    }
    .case-study header.article-title::before {
        position: absolute;
        content: '';
        left: -1rem;
        top: -1rem;
        height: 4rem;
        width: 4rem;
        background-repeat: no-repeat;
        padding: 1rem;
        background-image: url("../assets/images/icons/expand-icon.png");
    }
    .case-study header.article-title h1 {
        font-family: 'Ropa Sans', 'Roboto', 'Arial', sans-serif;
    }
    .case-study header.active.article-title::before {
        background-image: url("../assets/images/icons/contract-icon.png");
    }
    .case-study header.active.article-title h2::before {
        background-position: right;
    }
    .case-study header.article-title:hover {
        cursor: pointer;
    }
    .case-study header.article-title:hover::before {
        background-position: center;
        border: 2px dashed #846B63;
        padding: 1rem;
        height: 5rem;
        width: 5rem;
        background-position: center;
        border-radius: 1rem;
        transition: .3s all;
    }   
    .case-study header.article-title:hover::before {
        left: -1.5rem;
        top: -1.5rem;
    }

    header.article-title h1, header.article-title h2  {
        font-family: 'Merriweather', 'Georgia', serif;
        margin: 0;
        padding: 0;
        font-weight: 500;
        width: 100%;
    }

    header.article-title.left h1, header.article-title.left h2  {
        text-align: left;
        padding-left: 3rem;
    }
    header.article-title.right h1, header.article-title.right h2  {
        text-align: right;
        padding-right: 3rem;
    }
    

    header.article-title h1 {
        font-size: 1.5em; 
        line-height: 1rem;
        margin-bottom: .75rem;
    }
    .case-study .article-title h1 {
        font-size: 2.25em; 
        font-weight: 500;
    }
    
    header.article-title h2::before {
        position: absolute;
        content: '';
        top: -0.05rem;
        width: 100%;
        height: 2px;
        background-repeat: no-repeat;
        max-width: 100%;
    }
    
    header.article-title.left h2::before {
        background-image: url("../assets/images/bg/divider-left.png");
        background-position: left;
        left: 0;
        align-items: flex-start;
        max-width: 100%;
    }
    header.article-title.right h2::before {
        background-image: url("../assets/images/bg/divider-right.png");
        right: 0;
        align-items: flex-end;
    }
    .case-study .article-title.right h2::before {
        background-position: left;
    }

    header.article-title h2 {
        position: relative;
        line-height: 1.5rem;
        background-repeat: repeat-y;
        font-size: 1em;
        height: 2rem;
        max-width: 100%;
    }
    
    header.article-title.right h2 {
        background-image: url("../assets/images/bg/page-nav-bg-right.png");
        background-position: right;
    }
    
    header.article-title.left h2 {
        background-image: url("../assets/images/bg/page-nav-bg-left.png");
        background-position: left;
    }

    @media (min-width: 1280px) {
        header.article-title h1 {
            font-size: 2.25em; /* 36px */
            line-height: 2rem;
            margin-bottom: .75rem;
        }
        header.article-title h2 {
            font-size: 1.5em; 
            line-height: 2rem;
        }
    }

    @media (min-width: 1680px) {
        header.article-title h1 {
            font-size: 3.375em; 
            line-height: 2.25rem;
            margin-bottom: .75rem;
        }
        header.article-title h2 {
            font-size: 2.25em; /* 36px */
            line-height: 2.5rem;
        }
    }
</style>
<script>
export default {
  props: {
    h1text: String,
    h2text: String,
    childclass: String
  },
}
</script>
