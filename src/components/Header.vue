<template>
<header>
    <h1>e-commerce</h1>
    <h2>e-commerce is so cool isn't it.</h2>
    <h3>Consider the learning from working on the headless APIs for a big retailer of motorcycle goods.</h3>
    <h3>See the results of a bespoke Shopify application on a small spinning wheel distributor</h3>
</header>
</template>
<style>

header {
    position: absolute;
    font-size: 16px;
    opacity: 0;
    visibility:hidden;
    max-width: 60vw;
    top: 2.5rem;
    right: 4rem;
    color: black;
}

h1 {
    font-family: "Londrina Solid", "Roboto", "Arial", "sans-serif";
    /* font-size: 5.0625em; 81.5px */
    font-size: 3.375em; /* 54px */

    /* type scale: perfect fifth */
    font-weight: 400;
    text-transform: capitalize;
}

h1, h2 {
    text-align: center;
    line-height: 3.375rem;
    margin: 0;
    margin-bottom: 2.25rem;
    padding: 0 4rem;
}

h2,h3 {
    font-family: "Rubik", "Roboto", "Arial", "sans-serif";
}

h2 { 
    font-size: 2.25em; /* 36px */
    /* font-size: 3.375em; 54px */
    font-weight: 500;
    color: black;
}

h3 {
    font-size: 1.5em; /* 24px */
    font-weight: 400 !important;
    line-height: 1.5em; 
    letter-spacing: 1px;
    max-width: 69%;
    padding: 0 4rem;
}

@media (min-width: 1280px) {
    header {
        right: 6rem;
    }
}

@media (min-width: 1680px) {
    h1 {
        /* type scale: perfect fifth */
        font-size: 7.59375em; /* 121.5px */
    }

    h2 { 
        font-size: 5.0625em; /* 81.5px */
    }

    h1, h2 {
        margin-bottom: 5.0625rem;
        line-height: 5.0625rem;
        padding: 0 8rem;
    }

    h3 {
        font-size: 2.25em; /* 36px */
        padding: 0 12rem;
    }

    header {
        right: -6px;
        top: 105px;
        width: calc( 69% - 7rem);
        padding-right: 7rem;
    }
}
</style>
