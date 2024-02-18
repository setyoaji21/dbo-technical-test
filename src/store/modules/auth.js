import ApiService from '@/services/api.service'
// import router from '@/router'

const auth = {
  namespaced: true,
  state: () => ({
    errors: null,
    message: null,
    user: {},
    loggedIn: true,
  }),
  getters: {
    currentUser(state) {
      return state.user
    },
    isLoggedIn(state) {
      return state.loggedIn
    },
  },
  actions: {
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        ApiService.init()
        ApiService.post('/api/v1/auth', {
          username: credentials.username,
          password: credentials.password,
        }).then(
          (response) => {
            if (response.status === 200) {
              context.commit('setAccessToken', response.data.accessToken)
              context.commit('setAuth', {
                user: response.data.user,
              })
              // router.push({ path: credentials.redirect })
              resolve(response)
            }
          },
          (error) => {
            reject(error)
          }
        )
      })
    },
    logout(context) {
      context.commit('purgeAuth')
      // router.push({ path: '/login' })
    },
  },

  mutations: {
    setError(state, error) {
      state.errors = error
    },
    setAuth(state, user) {
      state.loggedIn = true
      state.user = user
      state.errors = {}
    },
    purgeAuth(state) {
      state.loggedIn = false
      state.user = {}
      state.errors = {}
    },
  },
}

export default auth;
