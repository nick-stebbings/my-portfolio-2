<template>
    <main class="layout">
        <slot name="nav"></slot>
        <slot name="hero"></slot>
        <slot name="animation"></slot>
        <slot name="article-sections"></slot>
    </main>
</template>
  
<script>
export default {
    name: "Layout",
};
</script>
  
<style>
/* Default styles */
:root {
    --margin-x: 1rem;
    --margin-y: 1rem;
    --h1-line-height: 1.2;
    --h2-line-height: 1.1;
    --h1-margin: 2rem 0 1rem;
    --h2-margin: 1.5rem 0 0.5rem;
}

/* Medium viewport */
@media (min-width: 768px) {
    :root {
        --margin-x: 2rem;
        --margin-y: 2rem;
        --h1-line-height: 1.3;
        --h2-line-height: 1.2;
        --h1-margin: 3rem 0 2rem;
        --h2-margin: 2.5rem 0 1.5rem;
    }
}

/* Large viewport */
@media (min-width: 1200px) {
    :root {
        --margin-x: 3rem;
        --margin-y: 3rem;
        --h1-line-height: 1.4;
        --h2-line-height: 1.3;
        --h1-margin: 4rem 0 3rem;
        --h2-margin: 3.5rem 0 2.5rem;
    }
}

/* Extra large viewport */
@media (min-width: 1680px) {
    :root {
        --margin-x: 4rem;
        --margin-y: 4rem;
        --h1-line-height: 1.5;
        --h2-line-height: 1.4;
        --h1-margin: 5rem 0 4rem;
        --h2-margin: 4.5rem 0 3.5rem;
    }
}

.layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    gap: var(--margin-x) var(--margin-y);
}

.section {
    flex: 1 0 25%;
    margin: 0;
    padding: 0;
    background-color: var(--section-color, #cfd8dc);
}

.section>* {
    margin: 0;
    padding: var(--section-padding, 1rem);
    font-size: var(--section-font-size, 1rem);
    line-height: var(--section-line-height, 1.5);
}

.section[slot="section-0"] {
    --section-color: #ffebee;
    --section-padding: 2rem;
    --section-font-size: 1.2rem;
    --section-line-height: var(--h1-line-height);
    --section-margin: var(--h1-margin);
}
</style>