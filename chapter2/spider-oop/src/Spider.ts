// 目标: 希望将来写爬虫的时候, 来一个类继承祖宗类
// 然后, 在子类中处理得到的结果即可

// 爬虫用法: 创建爬虫对象, 传入URL自动开爬
const http = require('http')
import SpiderOptions from './interfaces/SpiderOptions'

export default abstract class Spider {
  // 定义成员
  options: SpiderOptions
  // 使用接口定义options的成员
  constructor(options: SpiderOptions = { url: '', method: 'get' }) {
    // 初始化
    this.options = options
    this.start()
  }
  start() {
    // 创建请求对象
    let req = http.request(this.options.url, {
      headers: this.options.headers,
      method: this.options.method
    }, (res: any) => {
      let chunks: any[] = []
      res.on('data', (c: any) => chunks.push(c))

      res.on('end', () => {
        let result = Buffer.concat(chunks).toString('utf-8')
        // console.log(result)
        // 抽象方法调用  子子孙孙干的事儿 他都不知道 他只管调用一下抽象方法
        // 具体的实现由子子孙孙继承时实现即可
        this.onCatchHTML(result)
      })
    })

    // 发送请求
    req.end()
  }

  abstract onCatchHTML(result: string): any
}