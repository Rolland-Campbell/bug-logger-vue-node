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
    currentBug: {},
    notes: []
  },
  mutations: {
    setBugs(state, bug) {
      state.bugs = bug
    },

    setCurrentBug(state, bug) {
      state.currentBug = bug
    },

    setNotes(state, notes) {
      state.notes = notes
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

    async getNotesByBugId({ commit }, id) {
      try {
        let res = await api.get('bugs/' + id + '/notes')
        commit("setNotes", res.data)
      } catch (error) {
        console.error(error);
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

    async addNote({ dispatch }, note) {
      try {
        await api.post('notes', note)
        dispatch("getNotesByBugId", note.bug)
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
