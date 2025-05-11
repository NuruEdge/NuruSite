import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import App from './App.vue'

/* import the fontawesome core */
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faBriefcase,
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faCode,
  faComments,
  faEnvelope,
  faLeaf,
  faLightbulb,
  faMapMarkerAlt,
  faPaintBrush,
  faShieldAlt,
  faSpinner,
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
  faArrowLeft,
  faChevronUp,
  faChevronDown,
  faCheckCircle,
  faSpinner,
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(Vue3Toastify, {
  autoClose: 3000, // 3 seconds
  position: 'top-right',
  theme: 'colored',
})

app.mount('#app')
