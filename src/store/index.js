import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/API'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   usuario:''
  },
  getters: {
    
  },
  mutations: {
   setToken(state, payload) {
    state.usuario = payload
   }
  
  },
  actions: {
    async login({ commit }, user) {
      try {
        const res = await API("iniciar_sesion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const userDB = await res.json();
        commit("setToken", userDB.data.token);
        localStorage.setItem("token", userDB.data.token);
      } catch (error) {
        console.log("Error: ", error);
      }
    },
  },
  modules: {
  }
})
