<script>
import {
  defineComponent,
  reactive,
  toRefs,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { languageList } from '@/i18n/constant.js';

export default defineComponent({
  name: 'LoginView',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup() {
    const {
      t, locale,
    } = useI18n();

    const state = reactive({
      languageList,
    });

    function handleChangeLanguage(languageItem) {
      locale.value = languageItem.value;
    }

    return {
      t,
      locale,
      ...toRefs(state),
      handleChangeLanguage,
    };
  },
});
</script>

<template>
  <div class="container">
    <section id="content">
      <form target="_blank">
        <h1>
          {{ t('login.tip') }}
        </h1>
        <div>
          <input
            id="username"
            type="text"
            :placeholder="t('login.username')"
            required=""
            value="root"
          >
        </div>
        <div>
          <input
            id="password"
            type="password"
            :placeholder="t('login.pwd')"
            required=""
            value="123"
          >
        </div>
        <div class="">
          <span
            id="errormessage"
            class="help-block u-errormessage"
            style="color: red"
          >&nbsp;</span>
        </div>
        <div>
          <input
            type="button"
            :value="t('login.btn')"
            class="btn btn-primary"
            onclick="login()"
          >
          <a href="#">{{ t('login.forget') }}</a>
        </div>
      </form><!-- form -->
      <div class="button">
        <span
          id="js-server-helpinfo"
          class="help-block u-errormessage"
        >&nbsp;</span>
      </div> <!-- button -->
    </section><!-- content -->
    <div class="language-switch">
      <span
        v-for="languageItem in languageList"
        :key="languageItem.value"
        :class="[{ 'active-language': locale === languageItem.value }]"
        @click="handleChangeLanguage(languageItem)"
      >
        <u>{{ languageItem.label }}</u>
      </span>
    </div>
  </div>
</template>

<style>
html{
  height: 100%;
}
body{
  background:url(../images/cloud01.jpg) 0 bottom repeat-x  #049ec4;
  -webkit-animation: animate-cloud 20s linear infinite;
  -moz-animation: animate-cloud 20s linear infinite;
  -ms-animation: animate-cloud 20s linear infinite;
  -o-animation: animate-cloud 20s linear infinite;
  animation: animate-cloud 20s linear infinite;
  width: 100%;
  height: auto;
}

@keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}

.language-switch {
  width: 100px;
  margin: 60px auto 0;
  display: flex;
  justify-content: space-between;
}

.language-switch .active-language {
  color: #0000ee;
}
</style>
