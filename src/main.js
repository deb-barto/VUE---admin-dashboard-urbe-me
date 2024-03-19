import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { register } from 'swiper/element/bundle';
register();

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(MotionPlugin)
app.use(ElementPlus)
app.mount('#app')
