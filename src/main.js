import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

/* import the fontawesome core */
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faBriefcase, faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons'

library.add(faBriefcase, faPaintBrush, faCode, faArrowRight)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
