<template>
    <header class="article-title">
        <h1>
            HabitFract
        </h1>
        <h2>
            a social, fractal, atomic habit tracker
        </h2>
    </header>
</template>
<style>
    header.article-title {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }
    header.article-title h1, header.article-title h2  {
        font-family: "Montserrat, Georgia, serif";
        margin: 0;
        padding: 0;
        padding-left: 3rem;
        font-weight: 500;
    }

    header.article-title h1 {
        font-size: 1.5em; 
        line-height: 1rem;
        margin-bottom: .75rem;
    }

    header.article-title h2::before {
        position: absolute;
        content: '';
        left: 0rem;
        top: -0.05rem;
        width: 100%;
        height: 2px;
        background-image: url("../assets/divider-1.png");
    }

    header.article-title h2 {
        position: relative;
        line-height: 1.5rem;
        background-image: url("../assets/page-nav-bg-left.png");
        background-repeat: repeat-y;
        background-position: left;
        font-size: 1em;
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
