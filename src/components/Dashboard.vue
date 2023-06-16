<script setup>
  import { ref } from 'vue'
  import {
  IconApps,
  IconBug,
  IconBulb,
} from '@arco-design/web-vue/es/icon';
import { Message } from '@arco-design/web-vue';
const collapsed = ref(false);
const toggleCollapse= () => { collapsed.value = !collapsed.value; }
 const onCollapse = (val, type) =>{
        const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
        Message.info({
          content,
          duration: 2000,
        });
      }
  const isShowing = ref(true)
</script>

<template>
  <div class="layout-demo">
    <a-layout>
      <a-layout-header class="shadow-sm">
        <div class="menu-demo">
          <a-menu mode="horizontal" theme="dark" :default-selected-keys="['1']">
            <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
              <div
                :style="{
                  width: '80px',
                  height: '30px',
                  borderRadius: '2px',
                  background: 'var(--color-fill-3)',
                  cursor: 'text',
                }"
              />
            </a-menu-item>
            <a-menu-item key="1">Home</a-menu-item>
          </a-menu>
        </div>
      </a-layout-header>
      <a-layout style="min-height: calc(100vh - 60px)">
        <a-layout-sider style="width: auto; ">
          <a-menu
          :style="{ width: '200px', height: '100%' }"
          :default-open-keys="['0']"
          :default-selected-keys="['0_2']"
          show-collapse-button
          breakpoint="xl"
          @collapse="onCollapse"
        >
          <a-sub-menu key="0">
            <template #icon><icon-apps></icon-apps></template>
            <template #title>Navigation 1</template>
            <a-menu-item key="0_0">Menu 1</a-menu-item>
            <a-menu-item key="0_1">Menu 2</a-menu-item>
            <a-menu-item key="0_2">Menu 3</a-menu-item>
            <a-menu-item key="0_3">Menu 4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="1">
            <template #icon><icon-bug></icon-bug></template>
            <template #title>Navigation 2</template>
            <a-menu-item key="1_0">Menu 1</a-menu-item>
            <a-menu-item key="1_1">Menu 2</a-menu-item>
            <a-menu-item key="1_2">Menu 3</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="2">
            <template #icon><icon-bulb></icon-bulb></template>
            <template #title>Navigation 3</template>
            <a-menu-item key="2_0">Menu 1</a-menu-item>
            <a-menu-item key="2_1">Menu 2</a-menu-item>
            <a-sub-menu key="2_2" title="Navigation 4">
              <a-menu-item key="2_2_0">Menu 1</a-menu-item>
              <a-menu-item key="2_2_1">Menu 2</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
          
        </a-layout-sider>
        <a-layout-content class="container-fluid">
          DASHBOARD
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
 
  

</template>

<style scoped>
*{
  box-sizing: border-box;
  padding: 0;
}

.menu-demo {

  width: 100%;
  padding: 0px;
  background-color: var(--color-neutral-2);
}



</style>
