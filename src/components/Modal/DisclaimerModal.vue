<template>
    <div class="modal fade" id="disclaimer" tabindex="-1" aria-labelledby="disclaimerLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="disclaimerLabel">
                        <blockquote>"Reality is What You Can Get Away With"</blockquote><span class="quote-author"> - Robert
                            Anton Wilson</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>This is an experimental portfolio to see what I can get away with. It is playful but for the moment
                        doesn't play well with all devices.</p>
                    <div class="viewports">
                        <div class="viewport">
                            <img src="../../assets/images/icons/mob.png" alt="small-screen" />
                            <img src="../../assets/images/icons/sad.png" alt="sad-face" />
                        </div>
                        <div class="viewport">
                            <img src="../../assets/images/icons/tablet.png" alt="md-screen" />
                            <img src="../../assets/images/icons/neutral.png" alt="ok-face" />
                        </div>
                        <div class="viewport">
                            <div class="screens">
                                <img src="../../assets/images/icons/lap.png" alt="large-screen" />
                                <img src="../../assets/images/icons/desktop.png" alt="larger-screen" />
                            </div>
                            <img src="../../assets/images/icons/happy.png" alt="happy-face" />
                        </div>
                    </div>
                    <p>To view a mobile friendly approximation <a href="http://n-stebb.dev"> click here</a>.</p>
                    <p>Enjoy exploring. Look for clickable things!</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">Let's Go</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
#disclaimer {
    overflow: hidden;
    position: absolute;
    padding-right: 6%;
    top: 3%;
    right: 3%;
    left: 3%;
    display: block;
    margin: 0;
}

#disclaimer .modal-body {
    height: 100%;
    padding: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
}

#disclaimer .modal-dialog {
    height: 100%;
    display: grid;
    place-items: center;
    padding-bottom: 15rem;
    min-width: 50vw;
}

#disclaimer .modal-content {
    padding: 1rem;
    display: grid !important;
    grid-template-rows: 8rem auto 3rem;
    grid-template-columns: auto;
    gap: 1vh;
    height: auto;
}

#disclaimer .modal-header blockquote,
#disclaimer .modal-header .quote-author {
    font-family: "Merriweather", "Georgia", "Times New Roman", serif;
    font-size: 1.5rem;
}

#disclaimer .modal-header {
    display: flex;
    justify-content: center;
}

#disclaimerLabel+button {
    display: none;
}

#disclaimer .modal-header .quote-author {
    font-size: 0.9rem;
    text-align: right;
    display: block;
    width: 100%;
}

#disclaimer .modal-content p {
    box-sizing: border-box !important;
    width: 100%;
    margin: .5rem;
}

#disclaimer .modal-content .viewports,
#disclaimer .modal-content .viewport {
    display: flex;
    gap: .5rem;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    max-width: 24rem;
}

#disclaimer .modal-content .screens {
    display: flex;
    gap: 1rem;
}

#disclaimer .modal-content .viewports {
    padding: 1rem;
    margin: 0 auto;
}

#disclaimer .modal-content .viewport {
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    width: 100%;
}

#disclaimer .modal-content p:nth-last-of-type(2) {
    font-size: .9rem;
    font-weight: 300;
    text-align: center;
}

#disclaimer .modal-content p:nth-last-of-type(1) {
    text-align: center;
}

@media (min-width: 1440px) {
    #disclaimer .modal-content {
        padding: 2vh;
        height: auto;
    }

    #disclaimer .modal-body {
        height: 100%;
        max-height: 400px;
        overflow: hidden;
        max-height: none !important;
    }

    #disclaimer .modal-content p {
        height: auto;
    }

    #disclaimer .modal-content p {
        margin: 0;
    }

    #disclaimer .modal-content .viewport {
        flex-direction: column;
        width: 33%;
        gap: 2rem;
    }

    #disclaimer .modal-content .viewports {
        max-width: 50%;
        gap: 2rem;
        flex-direction: row;
    }
}
</style>