<template>
  <aside
    class="left-route tw-w-52 tw-pt-2.5 tw-relative
      tw-border-solid tw-border-r-1 tw-border-mgrey-1
      tw-transition-all tw-duration-300"
    :style="collaspeState.sidebarStyle"
  >
    <Menu>
      <SubMenu
        v-for="subMenuItem in menuList"
        :key="subMenuItem.name"
      >
        <template #title>
          {{ subMenuItem.name }}
        </template>
        <MenuItem
          v-for="menuItem in subMenuItem.menuList"
          :key="menuItem.path"
          @click="$router.push(menuItem.path)"
        >
          {{ menuItem.name }}
        </MenuItem>
      </SubMenu>
    </Menu>
    <div
      ref="collaspeElem"
      class="trapezoid tw-absolute
          tw-flex tw-items-center
          tw-top-1/2 -tw-right-0
          tw-translate-x-full -tw-translate-y-1/2"
      :style="collaspeWrapperStyle"
      @click="handleCollaspe()"
    >
      <i
        class="iconfont icon-triangle-left
            -tw-ml-4"
        :style="collaspeIconStyle"
        :class="collaspeState.classes"
      />
    </div>
  </aside>
</template>

<script>
import {
  computed, reactive, ref, toRefs
} from 'vue';
import Menu from '@/components/CustomMenu/Menu.vue';
import SubMenu from '@/components/CustomMenu/SubMenu.vue';
import MenuItem from '@/components/CustomMenu/MenuItem.vue';
import { useElementHover, useCycleList } from '@vueuse/core';

function useCollaspe() {
  const collaspeList = [
    {
      sidebarStyle: {},
      iconClasses: '',
    },
    {
      sidebarStyle: { marginLeft: '-13rem' },
      iconClasses: 'tw-origin-center tw-rotate-180',
    },
  ];
  const {
    state: collaspeState,
    next: handleCollaspe,
  } = useCycleList(collaspeList);
  return {
    handleCollaspe,
    collaspeState,
  };
}

export default {
  name: 'SidebarView',
  components: {
    MenuItem,
    Menu,
    SubMenu,
  },
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const collaspeElem = ref();
    const isHovered = useElementHover(collaspeElem);

    const collaspeWrapperStyle = computed(() => ({
      borderLeftColor: isHovered.value
        ? '#54232c' : 'rgb(238 238 238 / 98%)'
    }));
    const collaspeIconStyle = computed(() => ({
      color: isHovered.value
        ? '#fff' : '#bcbcbc'
    }));

    const state = reactive({
      collaspeWrapperStyle,
      collaspeIconStyle,
    });

    return {
      ...toRefs(state),
      collaspeElem,
      ...useCollaspe(),
    };
  },
};
</script>

<style lang="scss" scoped>
.left-route {
  background: rgb(238 238 238 / 98%);
}

.trapezoid {
  height: 60px;
  border-top: 10px solid transparent;
  border-left: 18px solid;
  border-bottom: 10px solid transparent;
}
</style>
