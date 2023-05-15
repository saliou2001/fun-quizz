import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import('gsap/src/index')
import router from './router/index.js'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
