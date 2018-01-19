import axios from 'axios'

// 设置基准路径
axios.defaults.baseURL = 'http://47.96.21.88:8888/api/private/v1/'

// 拦截器处理token
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('mytoken')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
export const login = (params) => {
  return axios.post('login', params).then(res => {
    return res.data
  })
}

// 测试请求头
export const testData = (params) => {
  // console.log(params)
  return axios.get('users', {params: params}).then(res => {
    // console.log(res)
    return res.data
  })
}
