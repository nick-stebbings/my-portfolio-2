<script setup lang="ts">
    function handleSubmit(e: any) {
        e.preventDefault();
        e.currentTarget.reset();
        document.getElementById('return-home')?.click();
    }
</script>
<template>
    <form name="contact-form" method="POST" action="https://api.web3forms.com/submit" @submit="handleSubmit">
            <input type="hidden" name="access_key" value="3b1f2606-e4c4-4a19-87ae-4e19878c66f8">
            <div class="form-row col-md-6">
                <div class="form-group col-md-6 mt-3">
                    <label for="name">Your Name</label>
                    <input required type="text" class="form-control" id="name" name="name">
                </div>
            </div>
            <div class="form-row col-md-6">
                <div class="form-group col-md-6 mt-3">
                    <label for="inputEmail">Email</label>
                    <input required type="email" class="form-control" id="inputEmail" name="email">
                </div>
            </div>
            <div class="form-row col-md-6 mt-3">
                <div class="form-group col-md-12">
                    <label for="inputMessage">Message</label>
                    <input required type="textarea" class="form-control" id="inputMessage" name="message" />
                </div>
            </div>
            <button type="submit" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#contactConfirmation">Send</button>
    </form>
</template>
<style>
form {
    max-width: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

form label {
    color: black;
    margin: .5rem 0;
    font-size: 1.5em;
}
form input {
    font-size: 1.5rem;
}
form input[type=textarea] {
    height: 12rem;
    font-size: 1.5rem;
}
</style>
