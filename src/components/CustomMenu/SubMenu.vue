<template>
  <li
    class="custom-submenu"
    tabindex="-1"
  >
    <div
      class="custom-submenu__title tw-relative
      tw-flex tw-items-center
      tw-h-9 tw-px-3
      tw-border-solid tw-border-b-1 tw-border-mgrey-1"
      ref="titleElem"
      @click="handleToggle"
    >
      <i
        class="iconfont icon-menu_ic_zdgjjl
        tw-text-base tw-text-mgrey-3 tw-px-2.5"
      />
      <span
        :style="titleStyle"
        class="tw-font-normal"
      >
        <slot name="title" />
      </span>
      <i
        class="iconfont icon-arrow-down1
        tw-text-mgrey-2
        tw-absolute tw-right-4"
      />
    </div>
    <ul
      class="tw-px-5
        tw-overflow-hidden tw-transition-max-height tw-duration-500"
      :class="[show ? 'tw-max-h-56' : 'tw-max-h-0']"
    >
      <slot />
    </ul>
  </li>
</template>

<script>
import { useElementHover } from '@vueuse/core';
import {
  computed, reactive, ref, toRefs
} from 'vue';

const normalStyle = {
  color: '#333',
};

const hoveredStyle = {
  color: '#148cf1',
};

export default {
  name: 'SubMenu',
  setup() {
    const titleElem = ref();
    const isHovered = useElementHover(titleElem);

    const state = reactive({
      isHovered,
      titleStyle: computed(() => (isHovered.value ? hoveredStyle : normalStyle)),
      show: true,
    });

    function handleToggle() {
      this.show = !this.show;
    }

    return {
      titleElem,
      ...toRefs(state),
      handleToggle,
    };
  },
};
</script>
