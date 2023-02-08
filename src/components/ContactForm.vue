<template>
    <form name="contact-form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="cpntact-form" />
            <div class="form-row col-md-6">
                <div class="form-group col-md-6 mt-3">
                    <label for="name">Your Name</label>
                    <input type="text" class="form-control" id="name" name="name">
                </div>
            </div>
            <div class="form-row col-md-6">
                <div class="form-group col-md-6 mt-3">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" name="email">
                </div>
            </div>
            <div class="form-row col-md-6 mt-3">
                <div class="form-group col-md-12">
                    <label for="inputMessage">Message</label>
                    <input type="textarea" class="form-control" id="inputMessage" name="message" />
                </div>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Send</button>
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
