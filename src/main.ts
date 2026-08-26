import './assets/main.css'

import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import App from './App.vue'

createApp(App).mount('#app')

inject()