// const koaRouter = require('@koa/router')
// const a = require('../api/demoController')

import koaRouter from '@koa/router'
import publicController from '../api/publicController'

const Router = new koaRouter()

Router.get('/publicCaptcha', publicController.demo)

export default Router