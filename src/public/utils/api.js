import axios from 'axios'
import C from '../conf'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials = true

// 代码来自 https://github.com/axios/axios/issues/164#issuecomment-327837467
// 访问超时后再次发起请求设置
// 设置全局的请求次数，请求的间隙
axios.defaults.retry = 0
axios.defaults.retryDelay = 2000

axios.interceptors.response.use(undefined, err => {
  var config = err.config
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(err)

  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0

  // Check if we've maxed out the total number of retries
  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err)
  }

  // Increase the retry count
  config.__retryCount += 1

  // Create new promise to handle exponential backoff
  var backoff = new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, config.retryDelay || 1000)
  })

  // Return the promise in which recalls axios to retry the request
  return backoff.then(() => {
    return axios(config)
  })
})

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
  if (process.env.NODE_ENV === 'dist') return false
  if (mock) return true
  return false
}

function ajax(url, type, options, config = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: isMock(config.MOCK) ? C.MOCK_HOST + url : C.HOST + url,
      timeout: 3000,
      // responseType:'stream',
      // params: options
      params: type === 'get' ? options : null,
      data: configData(type, options)
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
          // location.href = './static/html/404.html'
        } else if (status === 500) {
          // location.href = './static/html/500.html'
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
  },

  getOtherHost(url, options) {
    return new Promise((resolve, reject) => {
      ajax(url, 'get', options, {
        otherHost: C.OTHER_HOST
      }).then(
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
