console.log("hello")
const toggleModeButton = document.querySelector('#toggle-mode-button');
const body = document.querySelector('body')

toggleModeButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode')
})


const animation = lottie.loadAnimation({
    container: document.getElementById('walking_lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'sources/walking-lottie.json' // replace with your animation URL
});

const counter = document.getElementById('odometer');
od = new Odometer({
    el: counter,
    value: 8000000000,
    duration: 1000,
    theme: 'minimal'
});

async function getData() {
    const res = await fetch(
        'https://real-time-statistics.p.rapidapi.com/counters/current_population', {
            headers: {
                'X-RapidAPI-Host': 'real-time-statistics.p.rapidapi.com',
                'X-RapidAPI-Key': 'fe5cedd3b9mshdc2822c0764594ap180b52jsn1caaef072a89'
                // free api, create your api key by signing up, api link : https://rapidapi.com/SAdrian/api/real-time-statistics/
            }
        }
    )
    const result = await res.json();
    od.update(result.response);
}

getData();

// Update the counter every 2 second
setInterval(async () => {
    getData();
}, 2000);

