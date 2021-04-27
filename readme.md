**koa**
**@koa/router    路由
**koa-body    协议解析
**@koa/cors   跨域处理
**koa-json    koaJson({pretty: false, param: 'pretty'})返回格式化
**prefix      
**params      ctx.request.query
**koa-combine-routers   合并router
**koa-helmet     安全头
**koa-static     静态文件
**nodemon        热加载

**npm-check-updates    ncu   检查更新npm的依赖包是否有更新的版本
**koa-compose       整合koa中间件

**npx webpack ./config/webpack.config.dev.js 测试webpacpack.config.js有没有错误
**webpack webpack-cli 
  webpack-merge
  plugins
  clean-webpack-plugin
  new webpack.DefinePlugin()
  terser-webpack-plugin           压缩js代码
  SplitChunksPlugin
  
  webpack-node-externals      对node_modules下文件做一个排除处理,排除一些不会使用到的模块
  @babel/core
  @babel/node
  @babel/preset-env  对一些新特性做支持
  babel-loader
  cross-env 设置环境变量


  npx node --inspect-brk ./node_modules/.bin/webpack --inline --progress
  chrome://inspect/#devices      调试webpack
  vscode     调试（🐛）

## src/config  公共文件的配置
  ## mongoose 操作mangodb
