<template>
    <div class="container-fluid px-0">
        <div class="row align-items-center text-center text-md-start">
            <div class="col-md-12 col-lg-8 col-xl-7">
                <h1 class="display-4">{{ heading }}</h1>
                <h2 class="lead my-4">{{ subheading }}</h2>
                <a href="#" class="btn btn-primary btn-lg">{{ buttonText }}</a>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HeroSection',
    props: {
        heading: {
            type: String,
            required: true
        },
        subheading: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            default: 'Book Me'
        }
    }
}
</script>
  
<style scoped>
@media (min-width: 1280px) {
    h1.display-4 {
        font-size: 4rem;
    }

    h2.lead {
        font-size: 2rem;
    }
}

@media (min-width: 1680px) {
    h1.display-4 {
        font-size: 5rem;
    }

    h2.lead {
        font-size: 2.5rem;
    }
}</style>
  