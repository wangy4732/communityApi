// const koa = require('koa')
// const path = require('path')
// const koaHelmet = require('koa-helmet')
// const koaStatic = require('koa-static')
// const routes = require('./routes/routes')



// app.use(koaHelmet())
// app.use(koaCors())
// app.use(koaStatic(path.join(__dirname, './public')))
// app.use(koaBody())
// app.use(koaJson({pretty: false, param: 'pretty'}))
// app.use(routes())
 
import koa from 'koa'
import path from 'path'
import koaPress from 'koa-compress'
import koaHelmet from 'koa-helmet'
import koaJson from 'koa-json'
import koaBody from 'koa-body'
import koaCors from '@koa/cors'
import koaCompose from 'koa-compose'
import koaStatic from 'koa-static'
import routes from './routes/routes'

const app = new koa()

// 判断模式
const isDevMode = process.env.NODE_ENV === 'production' ? false : true

// 使用koa-compose 集成中间件
const midlleware = koaCompose([
  koaHelmet(),
  koaBody(),
  koaJson({pretty: false, param: 'pretty'}),
  koaStatic(path.join(__dirname,'./public')),
  koaCors(),
  //koaJson({ pretty: false, param: 'pretty' }),
]) 

// 压缩中间件
if (!isDevMode) {
  app.use(koaPress())
}

app.use(midlleware)
app.use(routes())

app.listen(3003, () => {
  console.log('successful')
})