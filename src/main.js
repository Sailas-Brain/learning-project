import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import componenst from './components/ui/index'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
const app = createApp(App)

// console.log(componenst);

componenst.forEach(component => {
  app.component(component.name, component)
});

// app.component('my-button', MyBotton)
// app.component('link-button', LinkButton)

app.use(router)

app.use( VueSplide );


app.mount('#app')
