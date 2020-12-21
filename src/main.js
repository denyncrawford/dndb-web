import { createApp } from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/es'
import App from './App.vue'
import './assets/styles/tailwind.index.css'
import VueHighlightJS from 'vue3-highlightjs'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementUI, { locale })
app.use(VueHighlightJS)
app.mount('#app')
