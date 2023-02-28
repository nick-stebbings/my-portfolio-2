<template>
    <section id="contact" class="page zero">
        <div id="contact-wrapper">
            <h1>contact me</h1>
            <button id="return-home" @click="slide('next', 'home')"></button>
            <ContactForm></ContactForm>
        </div>
    </section>
</template>

<script>
import ContactForm from "./ContactForm.vue";
export default {
    props: {
        slide: Function,
    },
    components: {
        ContactForm
    }
}
</script>
<style scoped>
/* Contact page form */
section#contact {
    position: absolute;
    top: -100vh;
    max-width: 100%;
    overflow: hidden;
    background: transparent;
}

#contact-wrapper {
    background: transparent;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: start;
    margin: 10vh 0;
    position: relative;
    box-sizing: border-box;
    margin: 8rem auto;
    max-width: 1680px;
    /* padding-right: 6rem; */
}

#contact-wrapper h1 {
    font-family: "Londrina Solid", "Roboto", "Arial", "sans-serif";
    font-size: 5.0625em;
    font-weight: 400;
    text-transform: capitalize;
}

#contact-wrapper h1 {
    width: 50%;
    text-align: center;
    line-height: 3.375rem;
    margin: 0;
    margin-bottom: 2.25rem;
    padding: 0;
    color: #3C3C3C;
    filter: sepia(1)
}
</style>