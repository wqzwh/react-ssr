import API from '../../public/utils/api'

export default {
  // 获取类目信息
  getCategory: (params = {}) => API.get(`/head`, params, { MOCK: true })
}
