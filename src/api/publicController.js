import svgCaptcha from 'svg-captcha'

class DemoCtroller {
  constructor () {}
  async demo(ctx) {
    const newCaptcha = svgCaptcha.create({
      noise:Math.floor(Math.random()*5),
      color:true,
      width:150,
      height:38
    })
    console.log(newCaptcha)
    ctx.body = {
      code: 200,
      data: newCaptcha.data
    }
  }
}

export default new DemoCtroller()