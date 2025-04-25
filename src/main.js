import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

/* import the fontawesome core */
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowRight,
  faBars,
  faBriefcase,
  faCode,
  faComments,
  faEnvelope,
  faLeaf,
  faLightbulb,
  faMapMarkerAlt,
  faPaintBrush,
  faShieldAlt,
  faUsers,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(
  faBriefcase,
  faPaintBrush,
  faCode,
  faArrowRight,
  faTwitter,
  faLinkedin,
  faInstagram,
  faMapMarkerAlt,
  faEnvelope,
  faWhatsapp,
  faBars,
  faXmark,
  faUsers,
  faComments,
  faLeaf,
  faLightbulb,
  faShieldAlt,
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
