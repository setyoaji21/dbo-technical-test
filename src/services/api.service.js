import axios from 'axios'

const ApiService = {
  init() {
    axios.defaults.baseURL = process.env.VUE_APP_API_URL
    axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded'
  },

  setHeaderMultipartFormData() {
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
  },

  query(resource) {
    return axios.get(resource)
  },

  get(resource, params, headers, responseType) {
    return axios
      .get(`${resource}`, {
        headers: headers ? headers : axios.defaults.headers,
        responseType: responseType ? responseType : axios.defaults.responseType,
        // params,
        params: params,
        transformResponse: [
          (data) => {
            return data
          },
        ],
      })
      .catch((err) => {
        throw err
      })
  },

  post(resource, params) {
    return axios
      .post(
        `${resource}`,
        params,
      )
      .catch((err) => {
        throw err
      })
  },

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params)
  },

  put(resource, params) {
    return axios
      .put(
        `${resource}`,
        params,
      )
      .catch((err) => {
        throw err
      })
  },

  delete(resource, params) {
    return axios
      .delete(resource, {
        params: params,
      })
      .catch((err) => {
        throw err
      })
  },
}

export default ApiService;