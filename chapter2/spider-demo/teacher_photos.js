// 引入http模块
const http = require('http')
const cheerio = require('cheerio')
const download = require('download')

// 创建请求对象 (此时未发送http请求)
const HOST = 'http://web.itheima.com/'
let req = http.request(HOST + 'teacher.html', res => {
  // 异步的响应
  // console.log(res)
  let chunks = []
  // 监听data事件,获取传递过来的数据片段
  // 拼接数据片段
  res.on('data', c => chunks.push(c))

  // 监听end事件,获取数据完毕时触发
  res.on('end', () => {
    // 拼接所有的chunk,并转换成字符串 ==> html字符串
    // console.log(Buffer.concat(chunks).toString('utf-8'))
    let htmlStr = Buffer.concat(chunks).toString('utf-8')
    let $ = cheerio.load(htmlStr)
    // console.log($('.tea_main .tea_con .li_img > img').attr('src'))
    // console.log($('.tea_main .tea_con .li_img > img').length)
    // let imgs = []
    // $('.tea_main .tea_con .li_img > img').each((index, item) => {
    //   // console.log(HOST + $(item).attr('src'))
    //   imgs.push(HOST + $(item).attr('src'))
    // })

    // 如果下载的文件地址有中文,一定要用encodeURI进行base64编码
    let imgs = Array.prototype.map.call($('.tea_main .tea_con .li_img > img'), item => HOST + encodeURI($(item).attr('src')))
    // let imgs = $('.tea_main .tea_con .li_img > img').map((index, item) => HOST + $(item).attr('src'))
    // console.log(imgs)

    Promise.all(imgs.map(x => download(x, 'dist'))).then(() => {
      console.log('files downloaded!');
    });
  })
})

// 将请求发出去
req.end()
