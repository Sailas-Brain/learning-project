import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import componenst from '@/componenst/ui'
import MyBotton from './components/ui/MyBotton.vue'

const app = createApp(App)

// componenst.forEach(component => {
//   app.component(component.name, component)
// });

app.component('my-button', MyBotton)

app.use(router)

app.mount('#app')
