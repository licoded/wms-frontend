<template>
  <LayoutView v-if="$route.meta.layout">
    <router-view />
  </LayoutView>
  <router-view v-else />
</template>

<script>
import { defineComponent } from 'vue';
import LayoutView from './layouts/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    LayoutView,
  },
  setup() {
    return {
    };
  },
});
</script>
