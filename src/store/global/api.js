import API from '../../public/utils/api'

export default {
  // 用户信息
  getInfo: (params = {}) => API.get(`/info`, params, { MOCK: true }),
  // 获取第一屏数据
  getList: (params = {}) => API.get(`/homelist`, params, { MOCK: true }),
  getListData: (params = {}) => API.get(`/listparams`, params, { MOCK: true })
}
