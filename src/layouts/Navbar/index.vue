<template>
  <div
    class="tw-text-white tw-px-3.5"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div class="navbar tw-flex tw-justify-between">
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
      <div class="right-menu tw-flex tw-items-center">
        <span>root</span>
        <DropdownWrapper
          :dropdown-list="menuList"
          @change="handleMenuChange"
        >
          <i
            class="tw-cursor-pointer iconfont tw-px-2.5 icon-arrow-down1
            tw-inline-block tw-h-11 tw-leading-11"
          />
        </DropdownWrapper>
        <i class="tw-cursor-pointer iconfont tw-px-2.5 icon-cart2f tw-text-red-600" />
        <DropdownWrapper
          :dropdown-list="themeList"
          :left="false"
          @change="handleThemeChange"
        >
          <i
            class="tw-cursor-pointer iconfont tw-px-2.5 icon-clothes-fill
            tw-inline-block tw-h-11 tw-leading-11"
          />
        </DropdownWrapper>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import DropdownWrapper from '@/components/DropdownWrapper/index.vue';

const menuList = [
  { name: '个人信息', path: '/personal-info' },
  { name: '切换账户', path: '/login' },
  { name: '退出', path: '/login' },
];

const themeList = [
  { name: '默认（黑色）', color: '#222' },
  { name: '蓝色', color: '#2d6dcc' },
  { name: '绿色', color: '#19a97b' },
  { name: '红色', color: '#c81623' },
  { name: '黄色', color: '#ffd200' },
  { name: '橙色', color: '#ff4a00' },
];

export default defineComponent({
  name: 'NavbarView',
  components: {
    DropdownWrapper,
  },
  setup() {
    const state = reactive({
      backgroundColor: '#222',
    });

    const router = useRouter();

    function handleMenuChange(dropdownItem) {
      router.push(dropdownItem.path);
    }

    function handleThemeChange(dropdownItem) {
      state.backgroundColor = dropdownItem.color;
    }

    return {
      ...toRefs(state),
      menuList,
      themeList,
      handleMenuChange,
      handleThemeChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  background: #222;
}
</style>
