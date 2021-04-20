// const koaRouter = require('@koa/router')
// const a = require('../api/demoController')

import koaRouter from '@koa/router'
import demoController from '../api/demoController'

const Router = new koaRouter()

Router.get('/demo', demoController.demo)

export default Router