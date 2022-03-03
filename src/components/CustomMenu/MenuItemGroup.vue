<template>
  <li class="custom-menu-item-group">
    <div
      class="custom-menu-item-group__title"
    >
      <template v-if="!$slots.title">
        {{ title }}
      </template>
      <slot
        v-else
        name="title"
      />
    </div>
    <ul class="tw-list-disc">
      <slot />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'MenuItemGroup',
  props: {
    title: {
      type: String,
      require: true,
      default: '',
    },
  },
  setup() {
    return {
    };
  },
};
</script>
