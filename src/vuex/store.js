import Vue from 'vue'
import Vuex from 'vuex'

import client from 'api-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peers: [],
    deviceInfo: {}
  },

  mutations: {
    setPeers (state, peers) {
      state.peers = peers
    },
    setDeviceInfo (state, info) {
      state.deviceInfo = info
    }
  },

  actions: {
    fetchPeers ({ commit }) {
      return client
        .fetchPeers()
        .then(peers => commit('setPeers', peers))
    },
    fetchDeviceInfo ({ commit }) {
      return client
        .fetchDeviceInfo()
        .then(info => commit('setDeviceInfo', info))
    }
  }
})