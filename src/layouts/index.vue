<template>
  <div class="layout-wrapper tw-h-screen tw-flex tw-flex-col">
    <Navbar />
    <main class="tw-flex tw-flex-1">
      <Sidebar :menu-list="subMenuList" />
      <section>
        <slot />
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from './Navbar/index.vue';
import Sidebar from './Sidebar/index.vue';

const defaultMenuList = [
  {
    name: '首页',
    path: '/',
  },
  {
    name: '关于我',
    path: '/about',
  },
  {
    name: '联系',
    path: '/contact',
  },
];

const subMenuList = [
  {
    name: '导航一',
    menuList: defaultMenuList,
  },
  {
    name: '导航二',
    menuList: defaultMenuList,
  },
];

export default {
  name: 'LayoutView',
  components: {
    Navbar,
    Sidebar
  },
  setup() {
    return {
      subMenuList,
    };
  }
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
