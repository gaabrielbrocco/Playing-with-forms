import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'
 


//createApp(App).mount('#app')
const app = createApp(App)
app.config.globalProperties.$moment = moment
app.config.globalProperties.$moment.locale('pt-br')

app.use(Maska)
app.mount('#app')