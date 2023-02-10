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
        width: 100%;
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
        left: 0rem;
        top: -2rem;
        height: 4rem;
        width: 4rem;
        background-repeat: no-repeat;
        background-position: center;
        padding: 1rem;
        background-image: url("../assets/expand-icon.png");
    }
    .case-study header.active.article-title::before {
        background-image: url("../assets/contract-icon.png");
    }
    .case-study header.article-title:hover {
        cursor: pointer;
    }
    .case-study header.article-title:hover::before {
        border: 4px dashed #846B63;
        padding: 1rem;
        height: 6rem;
        width: 6rem;
        background-position: center;
        border-radius: 1rem;
        transition: .3s all;
    }   
    .case-study header.article-title:hover::before {
        left: -1rem;
        top: -3rem;
    }

    header.article-title h1, header.article-title h2  {
        font-family: "Montserrat, Georgia, serif";
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
        background-image: url("../assets/divider-left.png");
        background-position: left;
        left: 0;
        align-items: flex-start;
        max-width: 100%;
    }
    header.article-title.right h2::before {
        background-image: url("../assets/divider-right.png");
        background-position: right;
        right: 0;
        align-items: flex-end;
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
        background-image: url("../assets/page-nav-bg-right.png");
        background-position: right;
    }
    
    header.article-title.left h2 {
        background-image: url("../assets/page-nav-bg-left.png");
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
