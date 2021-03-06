import { createI18n } from 'vue-i18n';
import enUS from './locales/en-US.json';
import zhCN from './locales/zh-CN.json';

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
});

export default i18n;
