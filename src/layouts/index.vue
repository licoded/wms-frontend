<template>
  <div class="layout-wrapper tw-h-screen">
    <Navbar />
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from './Navbar/index.vue';

export default defineComponent({
  name: 'LayoutView',
  components: {
    Navbar,
  },
  setup() {
    return {
    };
  },
});
</script>

<style lang="scss" scoped>
.layout-wrapper {
  background: #dcdddf;
}
</style>
