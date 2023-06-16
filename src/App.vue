
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
            <a-menu-item key="1">ChatRoom</a-menu-item>
          </a-menu>
        </div>
      </a-layout-header>
      <a-layout style="min-height: calc(100vh - 70px); height:fit-content">
        <a-layout-content class="container">
            <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>

</template>
<script setup>
import { onMounted, onUpdated } from 'vue';
 import Login from './components/Login.vue'
 import Home from './components/Home.vue'
  onMounted(()=>{ 
    console.warn( "APP MOUNTED  ");
  })

  onUpdated(()=>{
    console.log("ok"); 
  })
</script>

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
