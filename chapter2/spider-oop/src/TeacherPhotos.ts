// 封装完毕后,如果需要做爬虫,只需要以下几步:
// 1. 写一个爬虫类, 继承Spider
// 2. 实现onCatchHTML方法(爬虫获取资源后需要做的事情)
// 3. 使用: 创建该爬虫对象,传入URL即可
const cheerio = require('cheerio')
const download = require('download')
import Spider from './Spider'
export default class TeacherPhotos extends Spider {
  onCatchHTML(result: string) {
    // 获取到html之后的操作  由子类具体实现
    // console.log(result)

    // 根据html的img标签src属性来下载图片
    let $ = cheerio.load(result)
    let imgs = Array.prototype.map.call($('.tea_main .tea_con .li_img > img'), (item: any) => 'http://web.itheima.com/' + encodeURI($(item).attr('src')))
    Promise.all(imgs.map(x => download(x, 'dist'))).then(() => {
      console.log('files downloaded!');
    });
  }
}