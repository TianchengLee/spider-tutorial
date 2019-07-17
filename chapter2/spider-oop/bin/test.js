"use strict";
// import Spider from './Spider'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// new Spider({
//   url: 'http://www.itcast.cn/newsvideo/newslist.html'
// })
// new Spider({
//   url: 'http://web.itheima.com/teacher.html'
// })
// import TeacherPhotos from './TeacherPhotos'
// new TeacherPhotos({
//   url: 'http://web.itheima.com/teacher.html'
// })
const NewsList_1 = __importDefault(require("./NewsList"));
new NewsList_1.default({
    url: 'http://www.itcast.cn/news/json/f1f5ccee-1158-49a6-b7c4-f0bf40d5161a.json',
    method: 'post',
    headers: {
        "Host": "www.itcast.cn",
        "Connection": "keep-alive",
        "Content-Length": "0",
        "Accept": "*/*",
        "Origin": "http://www.itcast.cn",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36",
        "DNT": "1",
        "Referer": "http://www.itcast.cn/newsvideo/newslist.html",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Cookie": "UM_distinctid=16b8a0c1ea534c-0c311b256ffee7-e343166-240000-16b8a0c1ea689c; bad_idb2f10070-624e-11e8-917f-9fb8db4dc43c=8e1dcca1-9692-11e9-97fb-e5908bcaecf8; parent_qimo_sid_b2f10070-624e-11e8-917f-9fb8db4dc43c=921b3900-9692-11e9-9a47-855e632e21e7; CNZZDATA1277769855=1043056636-1562825067-null%7C1562825067; cid_litiancheng_itcast.cn=TUd3emFUWjBNV2syWVRCdU5XTTRhREZs; PHPSESSID=j3ppafq1dgh2jfg6roc8eeljg2; CNZZDATA4617777=cnzz_eid%3D926291424-1561388898-http%253A%252F%252Fmail.itcast.cn%252F%26ntime%3D1563262791; Hm_lvt_0cb375a2e834821b74efffa6c71ee607=1561389179,1563266246; qimo_seosource_22bdcd10-6250-11e8-917f-9fb8db4dc43c=%E7%AB%99%E5%86%85; qimo_seokeywords_22bdcd10-6250-11e8-917f-9fb8db4dc43c=; href=http%3A%2F%2Fwww.itcast.cn%2F; bad_id22bdcd10-6250-11e8-917f-9fb8db4dc43c=f2f41b71-a7a4-11e9-93cc-9b702389a8cb; nice_id22bdcd10-6250-11e8-917f-9fb8db4dc43c=f2f41b72-a7a4-11e9-93cc-9b702389a8cb; openChat22bdcd10-6250-11e8-917f-9fb8db4dc43c=true; parent_qimo_sid_22bdcd10-6250-11e8-917f-9fb8db4dc43c=fc61e520-a7a4-11e9-94a8-01dabdc2ed41; qimo_seosource_b2f10070-624e-11e8-917f-9fb8db4dc43c=%E7%AB%99%E5%86%85; qimo_seokeywords_b2f10070-624e-11e8-917f-9fb8db4dc43c=; accessId=b2f10070-624e-11e8-917f-9fb8db4dc43c; pageViewNum=2; nice_idb2f10070-624e-11e8-917f-9fb8db4dc43c=20d2a1d1-a7a8-11e9-bc20-e71d1b8e4bb6; openChatb2f10070-624e-11e8-917f-9fb8db4dc43c=true; Hm_lpvt_0cb375a2e834821b74efffa6c71ee607=1563267937"
    }
});
