import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import customers from './modules/customers'
import orders from './modules/orders'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    auth,
    customers,
    orders,
  },
})

export default store
