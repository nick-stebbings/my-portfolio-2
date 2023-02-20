<template>
    <header :class="computedHeaderClass">
        <h1 :class="computedHeaderClass" :data-val="headerTitles['h1']">{{  headerTitles['h1'] }}</h1>
        <h2 :class="computedHeaderClass">{{  headerTitles['h2'] }}</h2>
        <div class="header-container">
            <h3 :class="computedHeaderClass" v-for="h3 in headerTitles['h3']" >
                {{  h3.p }}<span class="header-link">{{ h3.span }}</span>...
            </h3>
        </div>
    </header>
</template>
<style scoped>
header {
    display: flex;
    flex-direction: column;
    gap: 0;
    height: 100%;
    max-height: 75%;
    position: absolute;
    font-size: 16px;
    opacity: 0;
    visibility:hidden;
    max-width: 60vw;
    top: 2rem;
    right: 3rem;
}
header .header-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4vh;
    max-width: 80%;
    margin: 0 auto;
}
h1, h2 {
    margin: 0;
    padding: 0 4rem;
    color: #3C3C3C;
    opacity: 0.85;
    text-align: center;
}
h2,h3, form label {
    font-family: "Rubik", "Roboto", "Arial", "sans-serif";
}

h1 {
    font-family: "Londrina Solid", "Roboto", "Arial", "sans-serif";
    /* font-size: 5.0625em; 81.5px */
    font-size: 3.375em; /* 54px */

    /* type scale: perfect fifth */
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 1rem;
    line-height: 3.375rem;
    transition: .8s all cubic-bezier(0.075, 0.82, 0.165, 1) ;
}

h2 { 
    /* font-size: 3.375em; 54px */
    font-size: 2.25em; /* 36px */
    line-height: 2.25rem;
    margin: 0 auto 2.25rem auto;
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
    margin: 0rem 4rem 1rem 4rem;
}

h3 span {
    transition: all 0.3s;
    color: #303C6C;
    font-weight: 600;
}

h3:nth-of-type(2) {
    padding-left: 4rem; 
}

h1.inactive {
    animation: fade-in;
}
h1.inactive {
    margin-top: 33%;
}
h2.inactive, h3.inactive, h3.inactive span {
    opacity: 0;
}

h1.inactive {
    animation-duration: .3s;
    animation-delay: 0s;
    transition: 0s margin-top ease-in;
}

@media (min-width: 1024px) {
    header {
        top: 4rem;
    }  
    h1 {
        font-size: 5.0625em; /* 81.5px */
        margin-bottom: 1.5rem;
    }
    h3 {
        /* height: 6rem; */
        padding-right: 2rem;
    }
}

@media (min-width: 1280px) {
    header {
        right: 6rem;
        top: 6rem;
    }  
    
    h1 {
        font-size: 7.59375em; /* 121.5px */
        /* type scale: perfect fifth */
    }
    
    h2 { 
        font-size: 3.375em; /* 24px */
        margin-bottom: 3.375rem;
        line-height: 3.375rem;
    }
    
    h3 {
        font-size: 1.5em; /* 121.5px */
        line-height: 1.5rem;
        margin: 0 4rem auto 4rem;
    }
}
@media (min-width: 1440px) {
    header {
        right: 6rem;
        top: 5rem;
    }    
    h1, h2 {
        /* margin-bottom: 5.0625rem; */
        line-height: 5.0625rem;
        padding: 0 6rem;
    }

    h2 { 
        font-size: 5.0625em; /* 81.5px */
    }

    h3 {
        font-size: 1.5em; /* 24px */
        line-height: 1.1em;
        font-weight: 400;
        margin: 0 2rem auto 2rem;
        max-width: 90%;
        /* height: 3.5rem; */
    }

    h3:nth-of-type(2) {
        padding-left: 8rem;
    }
}

@media (min-width: 1680px) {
    h1 {
        /* type scale: perfect fifth */
        font-size: 7.59375em; /* 121.5px */
        margin: 1.5rem 0;
    }

    h2 { 
        font-size: 5.0625em; /* 81.5px */
        margin-bottom: 3.375rem;
    }

    h1, h2 {
        line-height: 5.0625rem;
        padding: 0 8rem;
    }

    h3 {
        font-size: 1.5em; /* 36px */
        line-height: 2.25em; /* 34px */
        font-weight: 400;
        max-width: 90%;
    }

    h3:nth-of-type(2) {
        padding-left: 12rem;
    }

    header {
        right: 6rem;
        top: 4rem;
        width: calc( 69% - 7rem);
    }
}
</style>

<script>
export default {
    props: {
        hoveredLayer: String,
        activeLayer: String,
        headerTitles: Object,
    },
  computed : {
        computedHeaderClass() {
            return this.activeLayer === this.hoveredLayer ? "active" : "inactive"
        },
    }
}
</script>