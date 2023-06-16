import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  // ...
  plugins: [createPersistedState({
    storage: localStorage
  })],
  state:{
    auth: false,
    username: undefined
  },
  getters:{
    getAuth(state){
        return state.auth
    },
    getUsername(state){
        return state.username
    },
  },
  mutations:{
    setAuth(state, payload){
        state.auth = payload
    },
    setUsername(state, payload){
        state.username = payload
    },
  },
  actions:{},

});

export default store