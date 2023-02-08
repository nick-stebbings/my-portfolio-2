<template>
    <header>
        <h1>e-commerce</h1>
        <h2>e-commerce is so cool isn't it.</h2>
        <h3>Consider the learning from working on the headless APIs for a big retailer of motorcycle goods.</h3>
        <h3>See the results of a bespoke Shopify application on a small spinning wheel distributor</h3>
    </header>
</template>
<style>

#wrapper > header {
    position: absolute;
    font-size: 16px;
    opacity: 0;
    visibility:hidden;
    max-width: 60vw;
    top: 2rem;
    right: 3rem;
}

h1, h2 {
    text-align: left;
    margin: 0;
    padding: 0 4rem;
    color: #3C3C3C;
}
h2,h3, form label {
    font-family: "Manrope", "Roboto", "Arial", "sans-serif";
}

h1 {
    font-family: "Londrina Solid", "Roboto", "Arial", "sans-serif";
    /* font-size: 5.0625em; 81.5px */
    font-size: 3.375em; /* 54px */

    /* type scale: perfect fifth */
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 2.25rem;
    line-height: 3.375rem;
}

h2 { 
    /* font-size: 3.375em; 54px */
    font-size: 2.25em; /* 36px */
    line-height: 2.25rem;
    margin-bottom: 2.25rem;
    font-weight: 500;
}

h3 {
    color: #3C3C3C;
    filter: brightness();
    font-size: 1em; /* 16px */
    font-weight: 300;
    line-height: 1.5rem; 
    letter-spacing: 1px;
    max-width: 95%;
    padding: 0 4rem;
    margin:2rem 0;
}
h3:nth-of-type(2) {
    padding-left: 8rem; 
}

@media (min-width: 1024px) {
    #wrapper > header {
        right: 6rem;
        top: 4rem;
    }  
}
@media (min-width: 1440px) {
    #wrapper > header {
        right: 6rem;
        top: 5rem;
    }    
    h1, h2 {
        margin-bottom: 5.0625rem;
        line-height: 5.0625rem;
        padding: 0 6rem;
    }
    h1 {
        /* type scale: perfect fifth */
        font-size: 7.59375em; /* 121.5px */
    }

    h2 { 
        font-size: 5.0625em; /* 81.5px */
    }

    h3 {
        font-size: 1.5em; /* 24px */
        line-height: 1.5em; /* 24px */
        font-weight: 400;
        margin: 2rem 0;
        max-width: 90%;
    }

    h3:nth-of-type(2) {
        padding-left: 12rem;
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
        font-size: 1.5em; /* 24px */
        line-height: 1.5em; /* 24px */
        font-weight: 400;
        margin: 2rem 0;
        max-width: 90%;
    }
    h3:nth-of-type(2) {
        padding-left: 12rem;
    }

    header {
        right: -6px;
        top: 105px;
        width: calc( 69% - 7rem);
        padding-right: 7rem;
    }
}
</style>
