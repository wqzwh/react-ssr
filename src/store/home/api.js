import API from '../../public/utils/api'

export default {
  // 获取类目信息
  getCategory: (params = {}) => API.get(`/api/head`, params, { MOCK: true }),
  // 获取第一屏幕数据
  getList: (params = {}) => API.get(`/api/homelist`, params, { MOCK: true })
}
