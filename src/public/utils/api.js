import axios from 'axios'
import C from '../conf'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials = true

const configData = (type, params) => {
  // POST传参序列化
  if (type === 'post') {
    return params
  } else if (type === 'put') {
    return params
  } else if (type === 'delete') {
    return params
  }
  return null
}

function isMock(mock) {
  if (process.env.NODE_ENV === 'production') return false
  if (mock) return true
  return false
}

function ajax(url, type, options, config = {}) {
  const { serverConfig } = config
  let createInstance = ''
  if (serverConfig.serverLoad) {
    createInstance = axios.create({
      baseURL: isMock(config.MOCK) ? C.MOCK_HOST + url : C.HOST + url,
      headers: {
        // 服务端转发设置cookies
        cookie: `ck=${serverConfig.req.cookies}`
      }
    })
  } else {
    createInstance = axios.create({
      baseURL: isMock(config.MOCK) ? C.MOCK_HOST + url : '' + url
    })
  }
  return new Promise((resolve, reject) => {
    createInstance({
      method: type,
      params: type === 'get' ? options : null,
      data: configData(type, options),
      timeout: 3000
    })
      .then(
        result => {
          if (result && result.status === 200) {
            if (result.data.code === 0) {
              resolve(result.data)
            } else {
              reject({
                error: true,
                msg: result.data.msg,
                code: result.data.code
              })
            }
          } else {
            reject({
              errno: result.errno,
              msg: result.msg
            })
          }
        },
        error => {
          reject(error)
        }
      )
      .catch(function(error) {
        // const status = error.response.status
        if (status === 404) {
        } else if (status === 500) {
        } else {
        }
        reject({
          error: true,
          msg: error
        })
      })
  })
}

const config = {
  get(url, options, config) {
    return new Promise((resolve, reject) => {
      ajax(url, 'get', options, config).then(
        data => {
          resolve(data)
        },
        error => {
          reject(error)
        }
      )
    })
  },

  post(url, options, config) {
    return new Promise((resolve, reject) => {
      ajax(url, 'post', options, config).then(
        data => {
          resolve(data)
        },
        error => {
          reject(error)
        }
      )
    })
  },

  put(url, options) {
    return new Promise((resolve, reject) => {
      ajax(url, 'put', options).then(
        data => {
          resolve(data)
        },
        error => {
          reject(error)
        }
      )
    })
  },

  delete(url, options, config) {
    return new Promise((resolve, reject) => {
      ajax(url, 'delete', options, config).then(
        data => {
          resolve(data)
        },
        error => {
          reject(error)
        }
      )
    })
  }
}

export default config
