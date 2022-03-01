<template>
  <div class="navbar-wrapper tw-text-white tw-px-3.5">
    <div class="navbar">
      <div class="left-logo tw-flex tw-items-center tw-h-11">
        <a
          class="tw-text-base"
          href="#"
        >
          仓储信息管理系统
        </a>
        <span class="tw-block tw-text-xs tw-ml-2.5">
          V1.0
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavbarView',
  setup() {
    return {
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  background: #222;
}
</style>
