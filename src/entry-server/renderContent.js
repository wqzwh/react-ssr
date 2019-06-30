import React, { Fragment } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import minify from 'html-minifier'

export const renderContent = (req, store, routes, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Fragment>{renderRoutes(routes)}</Fragment>
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic()

  const cssStr = context.css.length ? context.css.join('\n') : ''
  const minifyStr = minify.minify(
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
        <link href="/static/css/reset.css" rel="stylesheet" />
        <script src="/static/js/rem.js"></script>
        <style>${cssStr}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src='/client-bundle.js'></script>
      </body>
    </html>
  `,
    {
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      processConditionalComments: true,
      removeScriptTypeAttributes: true,
      minifyCSS: true
    }
  )
  return minifyStr
}
