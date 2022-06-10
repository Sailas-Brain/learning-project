import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import componenst from './components/ui/index'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel';
// import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'



const app = createApp(App)

// console.log(componenst);

componenst.forEach(component => {
  app.component(component.name, component)
});

// app.component('my-button', MyBotton)
// app.component('link-button', LinkButton)

app.use(router)

app.use( VueSplide );

app.use(VueCollapsiblePanel);


app.mount('#app')
