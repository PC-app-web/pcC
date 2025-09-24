/**
 * summary: App bootstrap with PrimeVue, i18n and global 'pv-' prefixed components.
 * author: <Your Name>
 */
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

// PrimeVue CSS (Material Design theme) + core + icons + PrimeFlex
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

// PrimeVue components (registered globally with 'pv-' prefix)
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Image from 'primevue/image'
import SelectButton from 'primevue/selectbutton'
import Rating from 'primevue/rating'
import Toast from 'primevue/toast'

import i18n from './i18n'

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.use(ToastService)
app.use(i18n)

app.component('pv-toolbar', Toolbar)
app.component('pv-button', Button)
app.component('pv-card', Card)
app.component('pv-image', Image)
app.component('pv-select-button', SelectButton)
app.component('pv-rating', Rating)
app.component('pv-toast', Toast)

app.mount('#app')