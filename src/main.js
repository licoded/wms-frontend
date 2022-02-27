import { createApp } from 'vue';
import router from './router';
import App from '@/layouts/index.vue';
import '@/assets/styles/app.css';

createApp(App)
  .use(router)
  .mount('#app');
