import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@heroicons/vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@arco-design/web-vue/dist/arco.css';
import ArcoVue from '@arco-design/web-vue'
import router from './router'
import store from './store'
createApp(App).use(store).use(router).use(ArcoVue).mount('#app')
