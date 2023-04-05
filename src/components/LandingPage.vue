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

setInterval(getData, 2000)

const peopleGraphic = ref({
    transform: 'scale(1)',
    opacity: '1'
}),
    hero_blob = ref(),
    oddsofme_graphic = ref('translate(-50%, -50%) scale(1)')

function startTest() {
    peopleGraphic.value.transform = 'scale(3)'
    peopleGraphic.value.opacity = '0'
    hero_blob.value = 'translateX(-100%)'
    oddsofme_graphic.value = 'translate(-50%, -50%) scale(0)'



    // wait 1 second for animation to finish
    setTimeout(() => {
        // click on .startTest 
        const startTestPsuedoLink = document.querySelector('.startTest')
        if (startTestPsuedoLink instanceof HTMLElement) {
            startTestPsuedoLink.click();
        }
    }, 400);
}
</script>

<template>
    <section id="landing_page">
        <div class="hero_blob" :style="{ transform: hero_blob }">
            <RouterLink to="/" class="logo">
                <img src="@/assets/images/logo.svg" alt="Logo">
            </RouterLink>
            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_h4mjsyjz.json" background="transparent"
                speed="1" style="width: 300px; height: 300px;" loop autoplay id="walking_lottie"></lottie-player>
            <div class="population_container">

                <div id="odometer" class="odometer">{{ population }}</div>
                <p>People on earth right now</p>
                <button type="button" class="btn" id="start-test-btn" @click="startTest">Start The Test</button>
                <RouterLink to="/sources" class="sources">Sources here</RouterLink>
                <RouterLink to="/start" class="startTest"></RouterLink>
            </div>
        </div>
        <div class="oom_graphic_container">
            <img src="@/assets/images/oddsofme_graphic.png" alt="Oddsofme Graphic" class="oddsofme_graphic"
                :style="{ transform: oddsofme_graphic }">
            <img src="@/assets/images/people.png" class="people_graphic" :style="peopleGraphic">
        </div>
    </section>
</template>
<style>
@import "@/assets/resources/odometer.css";

#landing_page {
    outline: 2px solid red;
    position: relative;
    transition: var(--transitionL);
    overflow: hidden;
}

.oom_graphic_container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    pointer-events: none;
}

.oddsofme_graphic {
    position: absolute;
    top: 50%;
    left: 70%;
    width: 40%;
    height: auto;
    transform: translate(-50%, -50%);
    transition: var(--transitionL);
}

.people_graphic {
    position: absolute;
    left: 15%;
    transform: scale(1.1);
    transition: var(--transitionL);
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
    z-index: 5;
    position: relative;

    transition: var(--transitionL);
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
    color: var(--odometer-color);
    font-size: 0.7em;
    color: #362E2E;
}

.population_container p {
    color: var(--odometer-color);
}

.sources {
    font-size: 0.5em;
    margin-top: var(--padding-small);
    transition: all 0.2s;
    color: var(--odometer-color);
}

.sources:hover {
    color: #fff;
}

@media (prefers-color-scheme: dark) {
    .oddsofme_graphic {
        filter: invert(1);
    }
}
</style>