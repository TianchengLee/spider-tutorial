"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 封装完毕后,如果需要做爬虫,只需要以下几步:
// 1. 写一个爬虫类, 继承Spider
// 2. 实现onCatchHTML方法(爬虫获取资源后需要做的事情)
// 3. 使用: 创建该爬虫对象,传入URL即可
const cheerio = require('cheerio');
const download = require('download');
const Spider_1 = __importDefault(require("./Spider"));
class TeacherPhotos extends Spider_1.default {
    onCatchHTML(result) {
        // 获取到html之后的操作  由子类具体实现
        // console.log(result)
        // 根据html的img标签src属性来下载图片
        let $ = cheerio.load(result);
        let imgs = Array.prototype.map.call($('.tea_main .tea_con .li_img > img'), (item) => 'http://web.itheima.com/' + encodeURI($(item).attr('src')));
        Promise.all(imgs.map(x => download(x, 'dist'))).then(() => {
            console.log('files downloaded!');
        });
    }
}
exports.default = TeacherPhotos;
