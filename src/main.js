import { createApp } from 'vue';
import router from './router';
import App from '@/layouts/index.vue';

createApp(App)
  .use(router)
  .mount('#app');
