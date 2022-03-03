<template>
  <li
    ref="elem"
    class="custom-menu-item
      tw-select-none
      tw-pl-7
      tw-h-8 tw-leading-8"
    tabindex="-1"
    :style="style"
    @click="handleClick"
  >
    <slot />
  </li>
</template>

<script>
import { useElementHover } from '@vueuse/core';
import {
  computed, reactive, ref, toRefs
} from 'vue';

const normalStyle = {
  color: '#666',
};

const hoveredStyle = {
  color: '#148cf1',
  backgroundColor: '#fafafa',
};

export default {
  name: 'MenuItem',
  setup() {
    const elem = ref();
    const isHovered = useElementHover(elem);

    const state = reactive({
      style: computed(() => (isHovered.value ? hoveredStyle : normalStyle)),
    });

    function handleClick() {
    }

    return {
      elem,
      handleClick,
      ...toRefs(state),
    };
  },
};
</script>
