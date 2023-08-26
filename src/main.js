import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

import '@/assets/font/iconfont.css'
import './assets/css/normalize.css'
import '@/assets/css/app.css'
import 'element-plus/theme-chalk/display.css'
import VueParticles from 'vue-particles'

createApp(App).use(router).use(ElementPlus).use(VueParticles).mount('#app')
