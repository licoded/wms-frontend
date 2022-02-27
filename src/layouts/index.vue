<template>
  <div class="layout-wrapper">
    <router-view />
  </div>
</template>

<script>
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'LayoutView',
  setup() {
    return {
    };
  },
});
</script>
