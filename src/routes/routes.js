// const koaConbine = require('koa-combine-routers')
// const aRouter = require('./demoRouter')
// const bRouter = require('./bRouter')

// module.exports = koaConbine(aRouter, bRouter)


import koaConbine from 'koa-combine-routers'
import demoRouter from './publicRouter'
import loginRouter from './loginRouter'

export default koaConbine(demoRouter, loginRouter)