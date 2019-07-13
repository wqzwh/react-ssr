import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import { all } from 'redux-saga/effects'
import Loadable from 'react-loadable'
import { renderContent } from './renderContent'
import { configureServerStore } from '../store/'
import routes from '../router'
import C from '../public/conf'

const app = express()

app.use(express.static('build-client'))

app.use(
  '/api',
  proxy(`${C.MOCK_HOST}`, {
    proxyReqPathResolver: req => {
      return `/api/` + req.url
    }
  })
)

app.get('*', (req, res) => {
  const store = configureServerStore()

  // 向store里面填充数据
  // 需要根据不同的路由，填充不同的store数据
  // 获取匹配的路由（包含嵌套）
  const matchedRoutes = matchRoutes(routes, req.path)
  const matchedRoutesSagas = []
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      matchedRoutesSagas.push(item.route.loadData({ serverLoad: true, req }))
    }
  })

  store
    .runSaga(function* saga() {
      yield all(matchedRoutesSagas)
    })
    .toPromise()
    .then(() => {
      const context = {
        css: []
      }
      const html = renderContent(req, store, routes, context)

      // 301重定向设置
      if (context.action === 'REPLACE') {
        res.redirect(301, context.url)
      } else if (context.notFound) {
        // 404设置
        res.status(404)
        res.send(html)
      } else {
        res.send(html)
      }
    })
})
Loadable.preloadAll().then(() => {
  app.listen(8000, () => {
    console.log('8000启动')
  })
})
