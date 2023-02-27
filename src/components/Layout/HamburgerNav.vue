<template>
    <div class="hamburger-nav">
        <div class="hamburger-icon" @click="toggleNav">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="nav-menu" :class="{ 'is-active': navOpen }">
            <ul>
                <li><a href="#">e-learning</a></li>
                <li><a href="#">e-commerce</a></li>
                <li><a href="#">web3</a></li>
                <li><a href="#">book me</a></li>
            </ul>
        </nav>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            navOpen: false,
        };
    },
    methods: {
        toggleNav() {
            this.navOpen = !this.navOpen;
        },
    },
};
</script>
  
<style>
.hamburger-nav {
    display: none;
}

@media only screen and (max-width: 1280px) {
    .hamburger-nav {
        display: flex;
        width: 100vw;
        justify-content: end;
        padding: 20px;
        position: relative;
        z-index: 100;
        padding-bottom: 40px;
        background-color: white;
    }

    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 1;
    }

    .nav-menu.is-active {
        display: block;
    }

    .nav-menu ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav-menu li {
        margin-bottom: 1rem;
    }

    .nav-menu a {
        display: block;
        padding: 0.5rem;
        font-size: 1.2rem;
        color: #3c3c3c;
        text-decoration: none;
        transition: color 0.2s ease-in-out;
    }

    .nav-menu a:hover {
        color: #846b63;
    }

    .hamburger-icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 1.5rem;
        cursor: pointer;
    }

    .hamburger-icon span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: #3c3c3c;
        transition: transform 0.2s ease-in-out;
    }

    .hamburger-icon span:not(:last-child) {
        margin-bottom: 0.5rem;
    }

    .hamburger-icon.is-active span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }

    .hamburger-icon.is-active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger-icon.is-active span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }
}
</style>
  