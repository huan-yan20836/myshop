import { createApp } from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
//import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'    // 引入 Pinia 核心库，用于创建状态管理存储
import piniaPluginPersist from 'pinia-plugin-persist' // 引入 Pinia 持久化插件，用于实现状态数据的持久化存储

const pinia = createPinia()   // 引入并初始化 Pinia 状态管理库
pinia.use(piniaPluginPersist) // 使用 Pinia 持久化插件，用于实现状态数据的持久化存储
createApp(App).use(pinia).use(router).use(Vant).mount('#app')
