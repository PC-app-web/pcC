import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Rating from 'primevue/rating'
import SelectButton from 'primevue/selectbutton'

import i18n from './i18n'

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.use(ToastService)
app.use(i18n)

app.component('pv-toolbar', Toolbar)
app.component('pv-button', Button)
app.component('pv-card', Card)
app.component('pv-avatar', Avatar)
app.component('pv-rating', Rating)
app.component('pv-select-button', SelectButton)

app.mount('#app')