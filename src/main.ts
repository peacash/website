import 'focus-visible'
import { createApp } from 'vue'
import App from './App.vue'
import VueTippy from 'vue-tippy'
import router from './router'
import './styles/index.css'
import './styles/particles.css'
import 'tippy.js/dist/tippy.css'
import './styles/tippy.css'
const app = createApp(App)
app.use(router)
app.use(VueTippy)
app.mount('#app')