import ApiService from '@/services/api.service'

export default {
  FETCH_LIST({ commit }) {
    return ApiService
      .get(`/api/v1/order`)
      .then((response) => {
        const data = response.data || null
        commit('SET_ORDER_LIST', data)
        return response
      })
  },
  FETCH_DETAIL({ commit }, payload) {
    const id = payload
    const isIdValid = typeof id === 'string'

    if (!isIdValid) return Promise.reject('invalid params')

    return ApiService
      .get(`/api/v1/order/${id}`)
      .then((response) => {
        const data = response.data || null
        commit('SET_ORDER_DETAIL', data)
        return response
      })
      .catch((err) => {
        throw err
      })
  },
  ADD({}, payload) {
    return ApiService
      .post(`/api/v1/order`, payload)
      .then((response) => {
        return response
      })
      .catch((err) => {
        throw err
      })
  },
  UPDATE({}, payload) {
    const id = payload.id

    if (!id) return Promise.resolve()

    return ApiService
      .put(`/api/v1/order/${id}`, payload)
      .then((response) => {
        return response
      })
      .catch((err) => {
        throw err
      })
  },
  DELETE({}, payload) {
    const id = payload.id
    if (!id) return Promise.resolve()

    return ApiService
      .delete(`/api/v1/order/${id}`)
      .then((response) => {
        return response
      })
      .catch((err) => {
        throw err
      })
  },
}