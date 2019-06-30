import API from '../../public/utils/api'

export default {
  // 用户信息
  getInfo: (params = {}) => API.get(`/api/info`, params, { MOCK: true })
}
