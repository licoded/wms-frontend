<script>
import {
  defineComponent,
  ref,
} from 'vue';

export default defineComponent({
  name: 'LoginView',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup() {
    const count = ref(0);
    return { count };
  },
});
</script>

<template>
  <div class="container">
    <section id="content">
      <form target="_blank">
        <h1 th:text="#{login.tip}">
          用户登录
        </h1>
        <div>
          <input
            id="username"
            type="text"
            th:placeholder="#{login.username}"
            required=""
            value="root"
          >
        </div>
        <div>
          <input
            id="password"
            type="password"
            th:placeholder="#{login.pwd}"
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
          <!-- <input type="submit" value="Log in" /> -->
          <input
            type="button"
            th:value="#{login.btn}"
            class="btn btn-primary"
            onclick="login()"
          >
          <a href="#">[[#{login.forget}]]</a>
          <!-- <a href="#">Register</a> -->
        </div>
      </form><!-- form -->
      <div class="button">
        <span
          id="js-server-helpinfo"
          class="help-block u-errormessage"
        >&nbsp;</span>
      </div> <!-- button -->
    </section><!-- content -->
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
</style>
