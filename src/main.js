import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import router from './router'
import './router/permission'
import pinia from './stores'

import { GlobalComponents } from './components'
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(GlobalComponents)
app.mount('#app')
