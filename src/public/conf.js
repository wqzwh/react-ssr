/**
 *  系统 配置项
 */
const HOST =
  process.env.NODE_ENV === 'production'
    ? ''
    : 'https://www.easy-mock.com/mock/5d0e3d0a649ad61c15bb3b96'

export default {
  HOST,
  MOCK_HOST: 'https://www.easy-mock.com/mock/5d0e3d0a649ad61c15bb3b96'
}
