<script>
import {
  defineComponent,
  reactive,
  toRefs,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { languageList } from '@/i18n/constant';

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
          {{ t('tip') }}
        </h1>
        <div class="input-wrapper">
          <i class="iconfont icon-username" />
          <input
            id="username"
            type="text"
            :placeholder="t('username')"
            required=""
            value="root"
          >
        </div>
        <div class="input-wrapper">
          <i class="iconfont icon-password" />
          <input
            id="password"
            type="password"
            :placeholder="t('pwd')"
            required=""
            value="123"
          >
        </div>
        <div class="form-btns">
          <input
            type="button"
            :value="t('btn')"
            class="btn btn-primary"
            onclick="login()"
          >
          <a href="#">{{ t('forget') }}</a>
        </div>
      </form><!-- form -->
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

<style lang="scss" scoped>
.container {
  padding-top: 140px;

  &::after {
    z-index: -2;
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: url("@/assets/images/cloud01.jpg") 0 bottom repeat-x #049ec4;
    animation: animate-cloud 20s linear infinite;
  }
}

#content {
  background: #f9f9f9;
  background: linear-gradient(top, rgb(248 248 248 / 100%) 0%, rgb(249 249 249 / 100%) 100%);
  box-shadow: 0 1px 0 #fff inset;
  border: 1px solid #c4c6ca;
  margin: 0 auto;
  padding: 25px 0 0;
  position: relative;
  text-align: center;
  text-shadow: 0 1px 0 #fff;
  width: 400px;

  &::after,
  &::before {
    z-index: -1;
    background: #f9f9f9;
    background: linear-gradient(top, rgb(248 248 248 / 100%) 0%, rgb(249 249 249 / 100%) 100%);
    border: 1px solid #c4c6ca;
    content: "";
    display: block;
    height: 100%;
    left: -1px;
    top: 0;
    position: absolute;
    width: 100%;
  }

  &::after {
    transform: rotate(3deg);
  }

  &::before {
    transform: rotate(-4deg);
  }

  h1 {
    color: #7e7e7e;
    font: bold 25px Helvetica, Arial, sans-serif;
    letter-spacing: -0.05em;
    line-height: 20px;
    margin: 10px 0 30px;

    &::before,
    &::after {
      content: "";
      height: 1px;
      position: absolute;
      top: 10px;
      width: 27%;
      background: rgb(126 126 126);
      background: linear-gradient(right, rgb(126 126 126 / 100%) 0%, rgb(255 255 255 / 100%) 100%);
    }

    &::after {
      right: 0;
    }

    &::before {
      left: 0;
    }
  }

  form {
    margin: 0 20px;
    position: relative;

    .input-wrapper {
      .iconfont {
        position: absolute;
        color: #bfbdbd;
        font-size: 19px;
        left: calc(19px + 5px);
        height: 45px;
        line-height: 45px;
      }
    }

    .form-btns {
      display: flex;
      justify-content: space-between;
    }

    input[type="text"],
    input[type="password"] {
      box-sizing: unset;
      border-radius: 3px;
      box-shadow: 0 1px 0 #fff, 0 -2px 5px rgb(0 0 0 / 8%) inset;
      transition: all 0.5s ease;
      background: #eae7e7;
      border: 1px solid #c8c8c8;
      color: #777;
      font: 13px Helvetica, Arial, sans-serif;
      margin: 0 0 10px;
      padding: 15px 10px 15px 40px;
      width: 80%;

      &:focus {
        box-shadow: 0 0 2px #ed1c24 inset;
        background-color: #fff;
        border: 1px solid #ed1c24;
        outline: none;
      }
    }

    #username {
      background-position: 10px 10px !important;
    }

    #password {
      background-position: 10px -53px !important;
    }

    input[type="button"] {
      background: rgb(254 231 154);
      background: linear-gradient(top, rgb(254 231 154 / 100%) 0%, rgb(254 193 81 / 100%) 100%);
      border-radius: 30px;
      box-shadow: 0 1px 0 rgb(255 255 255 / 80%) inset;
      border: 1px solid #d69e31;
      color: #85592e;
      cursor: pointer;
      font: bold 15px Helvetica, Arial, sans-serif;
      height: 35px;
      margin: 20px 0 35px 15px;
      position: relative;
      text-shadow: 0 1px 0 rgb(255 255 255 / 50%);
      width: 120px;

      &:hover {
        background: rgb(254 193 81);
        background: linear-gradient(top, rgb(254 193 81 / 100%) 0%, rgb(254 231 154 / 100%) 100%);
      }
    }

    div a {
      color: #004a80;
      font-size: 12px;
      margin: 30px 15px 0 0;
    }
  }
}

.language-switch {
  width: 100px;
  margin: 60px auto 0;
  display: flex;
  justify-content: space-between;

  .active-language {
    color: #00e;
  }
}

@keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }

  to {
    background-position: 0 100%;
  }
}

</style>

<i18n>
{
  "zh-CN": {
    "btn": "登录",
    "forget": "忘记密码？",
    "pwd": "密码",
    "tip": "用户登录",
    "username": "用户名",
  },
  "en-US": {
    "btn": "Sign in",
    "forget": "Forget Password?",
    "pwd": "Password",
    "tip": "Please sign in",
    "username": "Username",
  },
}
</i18n>
