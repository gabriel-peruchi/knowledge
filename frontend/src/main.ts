import App from './App.vue'
import router from './router'
import store from './store'
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
