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

// Define the start date for the counter (in milliseconds since the Unix epoch)
const startDate = new Date('January 1, 2022 00:00:00 UTC').getTime();

// Define the estimated current population of the world
const currentPopulation = 7794798739; // update with the latest estimate

// Get the current time (in milliseconds since the Unix epoch)
const now = new Date().getTime();

// Calculate the elapsed time (in milliseconds)
const elapsed = now - startDate;

// Calculate the estimated current population based on the elapsed time
const estimatedPopulation = Math.floor(currentPopulation + (elapsed * 2.6)); // assuming a growth rate of 2.6 people per second

// Display the estimated population in the counter element
const counter = document.getElementById('counter');
counter.innerHTML = estimatedPopulation.toLocaleString();

// Update the counter every second
setInterval(() => {
  // Get the current time (in milliseconds since the Unix epoch)
  const now = new Date().getTime();

  // Calculate the elapsed time (in milliseconds)
  const elapsed = now - startDate;

  // Calculate the estimated current population based on the elapsed time
  const estimatedPopulation = Math.floor(currentPopulation + (elapsed * 2.6)); // assuming a growth rate of 2.6 people per second

  // Display the updated estimated population in the counter element
  counter.innerHTML = estimatedPopulation.toLocaleString();
}, 1000);