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
        <button type="submit" class="btn btn-dark btn-lg mt-3" data-bs-toggle="modal"
            data-bs-target="#contactConfirmation">Send</button>
    </form>
</template>
<script setup>
function handleSubmit(e) {
    const form = e.currentTarget;
    const modalTitle = document.querySelector("#contactConfirmationLabel");
    const modalBody = document.querySelector(".modal-body");
    const modalButton = document.querySelector(".modal-footer button");
    e.preventDefault();

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json,
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                modalTitle.innerHTML = 'Success!';
                modalBody.innerHTML = json.message + '\r\n' + "Thanks for getting in touch! I will get back to you soon.";
                modalButton.classList.add("btn-success")
            } else {
                console.log(response);
                modalTitle.innerHTML = 'There was an error!';
                modalBody.innerHTML = 'Please try again, or email me directly at N dot STEBBINGS at GMAIL dot COM. Cheers!';
                modalButton.classList.add("btn-warning")
            }
        })
        .catch((error) => {
            console.log(error);
            modalTitle.innerHTML = 'There was an error!';
            modalBody.innerHTML = 'Please try again, or email me directly at N dot STEBBINGS at GMAIL dot COM. Cheers!';
            modalButton.classList.add("btn-danger")
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                modalTitle.innerHTML = 'Contact has been made';
                modalBody.innerHTML = 'Pending...';
                modalButton.classList.remove("btn-success")
                modalButton.classList.remove("btn-warning")
            }, 5000);
            document.getElementById('return-home')?.click();
        });
}
</script>
<style>
form {
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
