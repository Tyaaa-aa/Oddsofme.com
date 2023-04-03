import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import LottieVuePlayer from '@lottiefiles/vue-lottie-player'
import './assets/main.css'
// import LottieVuePlayer from '@lottiefiles/vue-lottie-player';
const app = createApp(App)

app.use(router)
// app.use(LottieVuePlayer)

app.mount('#app')