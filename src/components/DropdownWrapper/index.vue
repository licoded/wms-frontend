<template>
  <div class="drop-down-wrapper tw-relative tw-inline-block">
    <!-- Dropdown toggle -->
    <slot />
    <!-- Dropdown list -->
    <div
      class="drop-down-list tw-hidden tw-absolute tw-py-1 tw-whitespace-nowrap
      tw-bg-gray-100 tw-divide-y tw-divide-gray-200 tw-rounded-b-md"
      :class="left ? 'tw-left-0' : 'tw-right-0'"
    >
      <a
        v-for="dropdownItem in dropdownList"
        :key="dropdownItem.name"
        class="tw-block tw-px-3.5 tw-py-1.5 tw-text-sm tw-cursor-pointer
          tw-text-gray-700 tw-hover:tw-bg-gray-400 drop-down-item"
        @click="handleClick(dropdownItem)"
      >
        {{ dropdownItem.name }}
      </a>
    </div>
  </div>
</template>

<script>
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
    function handleClick(dropdownItem) {
      ctx.emit('change', dropdownItem);
    }
    return {
      handleClick,
    };
  },
};
</script>

<style scoped>
.drop-down-wrapper:hover .drop-down-list {
  @apply tw-block;
}

.drop-down-item:hover {
  color: #06c;
}
</style>
