
/*
//GMT时间 UTC； 还有就是本地时间
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55)); 
var now = new Date(2005, 4, 5, 17, 55, 55);
alert(now);
alert(allFives);  //东8取，加了8个小时 
*/



/*
// 当前时间
var start = Date.now();
alert(start);
*/


var hehe = new Date(2014, 3, 2);
hehe.setUTCMilliseconds(Date.now);
alert(hehe);




