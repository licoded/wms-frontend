<template>
  <div
    ref="elem"
    class="drop-down-wrapper tw-relative tw-inline-block"
  >
    <!-- Dropdown toggle -->
    <slot />
    <!-- Dropdown list -->
    <div
      class="drop-down-list tw-absolute tw-whitespace-nowrap
      tw-bg-gray-100 tw-divide-y tw-divide-gray-200 tw-rounded-b-md
        tw-overflow-hidden tw-transition-max-height tw-duration-500"
      :class="[left ? 'tw-left-0' : 'tw-right-0', isHovered ? 'tw-max-h-56' : 'tw-max-h-0']"
    >
      <a
        v-for="dropdownItem in dropdownList"
        :key="dropdownItem.name"
        class="drop-down-item tw-block tw-px-3.5 tw-py-1.5 tw-text-sm tw-cursor-pointer
          tw-text-gray-700 tw-hover:tw-bg-gray-400 tw-hover:tw-text-blue-1"
        @click="handleClick(dropdownItem)"
      >
        {{ dropdownItem.name }}
      </a>
    </div>
  </div>
</template>

<script>
import { useElementHover } from '@vueuse/core';
import { ref } from 'vue';

export default {
  name: 'DropdownWrapper',
  props: {
    dropdownList: {
      type: Array,
      required: true,
    },
    left: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['change'],
  setup(props, ctx) {
    const elem = ref();
    const isHovered = useElementHover(elem);

    function handleClick(dropdownItem) {
      ctx.emit('change', dropdownItem);
    }

    return {
      elem,
      isHovered,
      handleClick,
    };
  },
};
</script>
