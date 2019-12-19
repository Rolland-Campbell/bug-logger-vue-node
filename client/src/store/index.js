import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    bugs: [],
    currentBug: {}
  },
  mutations: {
    setBugs(state, bug) {
      state.bugs = bug
    },

    setCurrentBug(state, bug) {
      state.currentBug = bug
    }
  },
  actions: {
    async getBugs({ commit }) {
      try {
        let res = await api.get(`bugs`)
        commit("setBugs", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async getBugById({ commit }, id) {
      try {
        let res = await api.get('bugs/' + id)
        commit("setActiveBug", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async addBug({ dispatch }, bug) {
      try {
        await api.post('bugs', bug)
        dispatch("getBugs")
      } catch (error) {
        console.error(error)
      }
    },

    setCurrentBug({ commit }, data) {
      commit('setCurrentBug', data)
    }
  },
  modules: {
  }
})
