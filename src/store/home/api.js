import API from '../../public/utils/api'

export default {
  // 获取类目信息
  getCategory: (serverConfig, params = {}) =>
    API.get(`/api/head`, params, { serverConfig, MOCK: true }),
  // 获取第一屏幕数据
  getList: (serverConfig, params = {}) =>
    API.get(`/api/homelist`, params, { serverConfig, MOCK: true })
}
