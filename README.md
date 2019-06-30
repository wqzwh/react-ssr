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
    ├── assets // 静态资源
    ├── components // 公共组件文件夹
    ├── entry-client // 客户端入口文件夹
    │   └── index.js
    ├── entry-server // 服务端入口文件夹
    │   └── index.js
    ├── components-hoc // 高阶组件文件夹
    ├── App.js // 同构代码入口文件
    ├── public // 公共函数方法等
    ├── router // 路由配置文件夹
    │   └── index.js
    ├── store // 共享数据store文件夹
    └── views // 不同页面文件夹
```
