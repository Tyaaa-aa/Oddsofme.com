<script setup lang="ts">
import Questions from '../components/Questions.vue'
import { ref } from 'vue'

</script>

<template>
    <div class="top_blob">
        <div class="start_container">
            <nav>
                <RouterLink to="/" class="logo">
                    <img src="@/assets/images/logo.svg" alt="Logo">
                </RouterLink>

                <RouterLink to="/sources" class="learn_more" target="_blank">
                    Learn More
                </RouterLink>
            </nav>
            <div class="headings">
                <h1>Oddsofme.com</h1>
                <h3>Find out how unique you are.</h3>
            </div>

            <section id="question_container">
                <Transition name="scaleIn">
                    <Questions />
                </Transition>
            </section>
        </div>
    </div>
</template>

<style scoped>
.top_blob {
    background-image: url("@/assets/images/top_blob.svg");
    background-repeat: no-repeat;
    width: 100%;
    min-height: calc(100vh - (var(--padding-large)));
    margin: 0;
    background-position: 0% 0%;
    animation: slideInFromTop var(--transitionL) 0s forwards;
}

.start_container {
    padding: 0 3%;
    padding-top: var(--padding-large);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.learn_more {
    color: var(--odometer-color);
    text-decoration: none;
    font-weight: bold;
    margin: 0;
    transition: all 0.2s;
}

.learn_more:hover {
    color: #fff;
}

.headings {
    font-size: 2em;
    text-align: center;
    color: var(--text-color-light);
}

#question_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10%;
    /* outline: 2px solid red; */
}

.scaleIn-enter-active,
.scaleIn-leave-active {
    transition: transform var(--transitionL);
    /* transition-delay: var(--transitionL); */
}

.scaleIn-enter-from {
    transform: scale(0);
}

.scaleIn-leave-to {
    transform: scale(1);
}

/* animation slide in from top background image */
@keyframes slideInFromTop {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0%);
    }
}
</style>
