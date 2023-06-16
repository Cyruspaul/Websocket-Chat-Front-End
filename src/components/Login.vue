<template>
    <div style="min-height: calc(100vh - 30vh); height: 100%;" class="w-100 d-flex flex-row justify-content-center align-items-center">
        <ACard class="" style="min-width: 25%;">
            <template #title>
                Login
            </template>
            <a-form  :model="FormData" :label-align="'left'" :layout="'vertical'" @submit-success="submitData" >
                <AFormItem :rules="[{required:true, empty:false,message:'Required'},
                {type:'string', minLength:6, message:'Minimum 6 characters'}]" 
                field="username" label="Enter your Username" >
                    <AInput allow-clear type="text" v-model:model-value="FormData.username" />
                </AFormItem>
                <AButton class="mt-3" html-type="submit" type="primary">Confirm</AButton>
            </a-form>
        </ACard>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import store from '../store'
import router from '../router/index';

const FormData = ref({
    username: ''
})

const submitData = function (params) {
    console.log("params", params);
   
    store.commit('setUsername', FormData.value.username)
    store.commit('setAuth', true)
    router.push('/home')

    // const pattern = new RegExp("\\<.*?\\>");
 
    // // Use regex_replace function in regex
    // // to erase every tags enclosed in <>
    // FormData.value.username = String(FormData.value.username).replace(pattern, "");
    //  console.log("params", s);
    //ADDING THE USERNAME
    
    //CHANGING THE VALUE OF LOCALSTORAGE TO TRUE

}
</script>