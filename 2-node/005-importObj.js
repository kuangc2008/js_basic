

var People = require("people.js");  // 没有./则去node_modules中找
//var bar = require("bar");   //找一个文件件，根据这个文件夹的pacakge.json中去读；  如果没有，该json，则默认找index.js
var time = require("time-formater");  //执行则找不到，需要去生成package.json文件

var xiaoming = new People("xiaoming" , "male", "12");

xiaoming.sayHello();

//console.log(bar.msg2);

var ttt = time().format("YYYY-MM-DD HH:mm");
console.log(ttt);

let rawDate = time().format('YYYY-MM-DD HH:mm:ss') // 当前时间
console.log(rawDate) // 2017-05-21 15:19:34


const { DateUtils, DateFormat, bindDatePrototype } = require('yao-dateutils');
let simpleFormat = 'yyyy-MM-dd HH:mm:ss.SSS';
let now = new Date();
console.log('format by "yyyy-MM-dd HH:mm:ss.SSS"', DateUtils.format(now, 'yyyy-MM-dd HH:mm:ss.SSS'));
console.log('format by "yyyy年MM月dd日HH时mm分ss秒"', DateUtils.format(now, 'yyyy年MM月dd日HH时mm分ss秒'));
console.log('format by "yyyy-MM-dd hh:mm:ss a"', DateUtils.format(now, 'yyyy-MM-dd hh:mm:ss a'));
console.log('format by "yy-MM-dd HH:mm:ss.SSS"', DateUtils.format(now, 'yy-MM-dd HH:mm:ss.SSS'));