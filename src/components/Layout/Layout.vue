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
html,
body {
    padding: 0;
    margin: 0 !important;
}

body,
#app {
    overflow-x: hidden !important;
}

/* Default styles */
:root {
    --margin-x: 1rem;
    --margin-y: 1rem;
    --h1-line-height: 1.2;
    --h2-line-height: 1.1;
    --h1-margin: 2rem 0 1rem;
    --h2-margin: 1.5rem 0 0.5rem;

    --section-padding: 2rem;
    --section-font-size: 1.2rem;
    --section-margin: var(--h1-margin);

    --svg-x: 80;
    --svg-x-px: 80px;
    --svg-max-w-px: 1680px;
    --svg-x-header-start: 400;
    --svg-x-header-start-px: 400px;

    --svg-height: 945;
    --svg-logo-y: 80;

}

.layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    gap: var(--margin-x) var(--margin-y);
}

main>* {
    flex: 1 0 100%;
    margin: 0;
    padding: 0;
    background-color: var(--section-color, #cfd8dc);
}

main>section:not(.anim-to-nav) {
    padding: 0 var(--margin-x)
}

section>* {
    margin: 0;
    padding: var(--section-padding, 1rem);
    font-size: var(--section-font-size, 1rem);
}

/* Buttons */
button#skip-intro {
    display: none;
    right: calc(var(--margin-x) + 1rem);
    top: 2rem;
    z-index: 100;
    background-image: url("../assets/images/icons/skip-icon.png");
}

button#skip-intro:hover {
    right: calc(var(--margin-x));
}

/* Medium viewport */
@media (min-width: 768px) {
    :root {
        --header-left: calc(var(--margin-x) + 360px);

        --margin-y: 2rem;
        --h1-line-height: 1.3;
        --h2-line-height: 1.2;
        --h1-margin: 3rem 0 2rem;
        --h2-margin: 2.5rem 0 1.5rem;
    }
}

/* Large viewport */
@media (min-width: 1280px) {
    :root {
        --margin-x: calc(((var(--svg-x) / 1280) * 100vw));
        --margin-y: 3rem;
        --h1-line-height: 1.4;
        --h2-line-height: 1.3;
        --h1-margin: 4rem 0 3rem;
        --h2-margin: 3.5rem 0 2.5rem;
    }

    main>section:not(.anim-to-nav) {
        padding: 0 var(--margin-x)
    }

    button#skip-intro {
        display: block;
    }
}

/* Extra large viewport */
@media (min-width: 1680px) {
    :root {
        --margin-x: calc((100vw - var(--svg-max-w-px)) / 2 + 1.3*var(--svg-x-px));
        --header-left: calc(var(--margin-x) + 400px);

        --margin-y: 4rem;
        --h1-line-height: 1.5;
        --h2-line-height: 1.4;
        --h1-margin: 5rem 0 4rem;
        --h2-margin: 4.5rem 0 3.5rem;
    }
}
</style>