import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages: {
    'zh-CN': {
      language: '中文',
      login: {
        btn: '登录',
        forget: '忘记密码？',
        pwd: '密码',
        tip: '用户登录',
        username: '用户名',
      },
    },
    'en-US': {
      language: 'English',
      login: {
        btn: 'Sign in',
        forget: 'Forget Password?',
        pwd: 'Password',
        tip: 'Please sign in',
        username: 'Username',
      },
    },
  },
});

export default i18n;
