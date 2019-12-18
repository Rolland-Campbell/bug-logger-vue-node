import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: []
  },
  mutations: {
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

    async getBugById({ commit }, bugId) {
      try {
        let res = await api.get('bugs/' + bugId)
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
  },
  modules: {
  }
})
