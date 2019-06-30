## react-ssr 原生实现

### 后端渲染流程图

<img src="https://github.com/wqzwh/react-ssr/blob/master/react-ssr.png" width="700" />

### 项目基本目录结构

```
├── build // 打包目录
│   ├── webpack.base.config.js
│   ├── webpack.client.config.js
│   └── webpack.server.config.js
├── build-client // 客户端打包文件夹
├── build-server // 服务端打包文件夹
├── config // 打包相关配置文件
└── src // 同构代码源码目录
    ├── App.js // 同构代码入口文件
    ├── assets // 需要引入项目中的静态资源
    ├── components // 公共组件文件夹
    ├── components-hoc // 高阶组件文件夹
    ├── entry-client // 客户端入口文件夹
    │   └── index.js
    ├── entry-server // 服务端入口文件夹
    │   ├── index.js
    │   └── renderContent.js
    ├── public // 公共函数方法等
    ├── router // 路由配置文件夹
    ├── static // 直接会打包生成到entry-client文件夹下，不会直接引入项目中
    ├── store // 共享数据store文件夹
    └── views // 不同页面文件夹
```

### 数据主流程

页面组成基本如下图，APP 组件是入口文件，通过路由分析跳转 Home 组件，Home 组件包含 4 个子组件，这里主要介绍 Category 组件和 ContentList 组件的数据获取逻辑，页面服务端渲染通过 Home 组件 定义 loadData 去触发 getInitData 函数，然后初始化 getList 和 getCategory 函数，更新 state 定义的 items 和 list，存储到 window.state 变量上，然后 Category 和 ContentList 组件根据 state 定义的数据进行展示。

Category 和 ContentList 组件中都会有一段如下逻辑，判断服务端渲染是否有初始数据，如果没有则触发相应自己的 saga 函数，然后通过 ajax 获取数据，更新 state 定义的变量，最终渲染组件。

```js
// Category组件中
componentDidMount() {
  const { items, dispatchGetCategoryData } = this.props
  if (items.length) return
  dispatchGetCategoryData()
}
```

<img src="https://github.com/wqzwh/react-ssr/blob/master/react-ssr-components.png" width="700" />

### 最终效果图

页面项目来自[meituan-webapp](https://github.com/wqzwh/meituan-webapp)(采用`Hybrid`技术实现)

<img src="https://github.com/wqzwh/react-ssr/blob/master/demo.jpg" width="700" />
