<script setup lang="ts">
import { ref } from 'vue';
import '@/assets/resources/odometer.js'
import 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'

// Ref creates a reactive variable that can be used in the template this is called the composition API
let population = ref(8025561909)

async function getData() {
    const res = await fetch(
        'https://real-time-statistics.p.rapidapi.com/counters/current_population', {
        headers: {
            'X-RapidAPI-Host': 'real-time-statistics.p.rapidapi.com',
            'X-RapidAPI-Key': 'fe5cedd3b9mshdc2822c0764594ap180b52jsn1caaef072a89'
        }
    }
    )
    const result = await res.json();
    // When updating a reactive variable, use the .value property
    population.value = result.response
    // console.log(population.value)
}
getData()
// 2s interval getData()
setInterval(getData, 2000)

</script>
<style>
@import "@/assets/resources/odometer.css";

#landing_page {
    background-image: url("@/assets/images/people.png");
    background-position: -100% 50%;
    position: relative;
}

.oddsofme_graphic {
    position: absolute;
    top: 50%;
    left: 70%;
    width: 40%;
    height: auto;
    transform: translate(-50%, -50%);
    pointer-events: none;
}

.hero_blob {
    /* Set the background image and position */
    background-image: url("@/assets/images/hero_blob.svg");
    background-position: -150px 50%;
    background-repeat: no-repeat;
    /* background-size: auto; */
    /* outline: 2px solid red; */

    /* Set the width and height of the element */
    width: 50%;
    min-height: calc(100vh - (var(--padding-large)));

    /* Add some padding to the top and bottom */
    padding-top: var(--padding-large);
    padding-left: 3%;

    /* Center the text horizontally and vertically */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
}

#walking_lottie {
    width: 400px;
    mix-blend-mode: luminosity;
    margin-top: 150px;
    margin-left: 5%;
}

.population_container {
    /* margin-left: 10%; */
    margin-top: var(--padding-large);
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#odometer {
    color: var(--text-color);
}

.population_container p {
    margin-top: var(--padding-small);
}

.sources {
    font-size: 0.5em;
    margin-top: var(--padding-small);
    transition: all 0.2s;
}

.sources:hover {
    color: var(--background-color);
}
</style>
<template>
    <section id="landing_page">
        <div class="hero_blob">
            <a href="#" class="logo">
                <img src="@/assets/images/logo.svg" alt="Logo">
            </a>
            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_h4mjsyjz.json" background="transparent"
                speed="1" style="width: 300px; height: 300px;" loop autoplay id="walking_lottie"></lottie-player>
            <div class="population_container">

                <div id="odometer" class="odometer">{{ population }}</div>
                <p>People on earth right now</p>
                <button type="button" class="btn" id="start-test-btn">Start The Test</button>
                <RouterLink to="/sources" class="sources">Sources here</RouterLink>
            </div>
        </div>
        <img src="@/assets/images/oddsofme_graphic.png" alt="Oddsofme Graphic" class="oddsofme_graphic">
    </section>
</template>
