import { createApp } from 'vue';
import router from './router';
import i18n from './i18n';
import App from './APP.vue';
import '@/assets/styles/app.css';
import './index.css';

createApp(App)
  .use(i18n)
  .use(router)
  .mount('#app');
