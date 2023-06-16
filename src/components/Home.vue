<template>
    <section class="pt-4">
        <div>
            <a-spin :style="{ width: '100%' }" :loading="loading" tip="This may take a while...">
                <a-card  :style="{ width: '100%', height:'70vh' }"  class="overflow-hidden"  title="Main ChatRoom">
                    <template #extra>
                        <a-link :hoverable="true" size="mini" status="danger" @click="logOut" >Log Out</a-link>
                    </template>
                    <Scrollbar :disable-vertical="true" type="embed" style="height:61vh;overflow: auto;">
                        <div class="w-100 position-relative d-flex flex-column gap-3">
                            
                            <template v-for="message in listMessage">

                                <span v-if="message.author === username && message.message !== null" class="w-100 gap-3 d-flex flex-row-reverse align-items-center">
                                    <a-avatar @click="tagUser(message.author)" :auto-fix-font-size="false" shape="square" :size="35" image-url="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" >Me</a-avatar>
                                    <div class="m-0 d-flex flex-column text-end align-items-end position-relative">
                                        <small class="position-absolute bg-white" >{{message.author}}</small>
                                        <ATypographyText class="bg-body border-0 small border-end text-dark p-3 pe-2 pb-0">{{message.message}}</ATypographyText>
                                    </div>
                                </span>


                                <span v-else-if="message.message !== null" class="w-100 gap-3 d-flex flex-row  align-items-center ">
                                    <a-avatar @click="tagUser(message.author)"  :auto-fix-font-size="true"  :size="35" class="bg-warning" image-url="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" ></a-avatar>
                                    <div class="m-0 d-flex flex-column align-items-start position-relative">
                                        <small class="position-absolute bg-white" >{{message.author}}</small>
                                        <ATypographyText class="bg-body border-0 small border-start text-dark p-3 pe-2 pb-0" >
                                            {{message.message}}
                                        </ATypographyText>
                                    </div>
                                </span>

                                <span v-else class="w-100 small text-muted text-center">
                                    <a-tag bordered checked :color="'#eaeaea'" class="small text-muted ">-- {{message.author}}  connected--</a-tag>
                                </span>

                            </template>
                            

                        </div>
                    </Scrollbar>
                </a-card>
             </a-spin>
        </div>
        <a-comment align="right">
            <template #actions>
                <a-button key="1" @click="sendmessage" type="primary"> Reply </a-button>
            </template>
            <template #content>
                <a-textarea required v-model:model-value="messageForm.message" placeholder="Here is you message." />
            </template>
        </a-comment>
    </section>
</template>
<script setup>
import { Message, Scrollbar } from '@arco-design/web-vue';
import store from '../store';
import { ref } from 'vue';
import router from '../router';
import SockJS from 'sockjs-client/dist/sockjs.min.js'
import 'stompjs/lib/stomp.js'

const username = store.getters.getUsername

const messageForm = ref({
    message: '',
    author: username
})
let loading = ref(false)
const listMessage = ref([
    
])

const tagUser = function(author){
    Message.success(author)
    messageForm.value.message = messageForm.value.message.concat(' @').concat(author)
}

let stompClient = undefined
let socket = new SockJS("http://172.21.176.242:8081/stomp")

stompClient = Stomp.over(socket)
stompClient.connect({},function (params) {
  if(stompClient.connected === true){
    console.warn("STOMP",stompClient);
    const welcome = {
      author: username,
      message: undefined
    }
    stompClient.send("/app/message",{},JSON.stringify(welcome))
  }

   
    stompClient.subscribe('/chat/main', function (message) {
        console.log("RECEIVED MESSAGE",stompClient);
        const body = JSON.parse(message.body)

        listMessage.value.push({
            author: body.author,
            message: body.message
        })
    })
})


const sendmessage = function(){
    if(messageForm.value.message === '')
        Message.error('Message Not Sent')
    else{
    stompClient.send("/app/message",{},JSON.stringify(messageForm.value))
    Message.info('Message Sent')

    // listMessage.value.push({
    //     author: 'cyruspaul',
    //     message: message.value
    // })
    messageForm.value.message = ''
    }    

}
const logOut = function(){
    store.commit('setAuth', false)
    store.commit('setUsername', undefined)
    loading.value = true
    setTimeout(() => {
        router.push('/')
    }, 3000);
}
</script>
<style>
* {
    padding: 0;
}
.arco-comment.mine{
    flex-direction: row-reverse;
}
</style>