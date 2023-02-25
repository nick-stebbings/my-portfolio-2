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
    }
}
</script>