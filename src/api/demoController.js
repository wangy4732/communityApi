class DemoCtroller {
  constructor () {}
  async demo(ctx) {
    ctx.body = 'body message'
  }
}

export default new DemoCtroller()