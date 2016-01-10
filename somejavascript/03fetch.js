
// fetch('http://javascript.ruanyifeng.com/advanced/promise.html', {
//   method : 'get'
// }).then(  function(response) {
//   console.log(response.status);
//   console.log(response.statusText);
//
//   return response.text();
//   })
//   .then((resStr) => console.log(resStr))
//   .catch(error => console.log(error)) ;




// body: JSON.stringify({
//   email: document.getElementById('email')
//   answer: document.getElementById('answer')
// })

// POST http://m.baidu.com/searchbox?action=publicsrv&type=operate&service=bdbox&uid=gOvqa_iI2tgfa2iV_PvO8jaQ28_LavikguH6t0iO288Xu28T_avr8_u6BtgCa2fHA&from=757b&ua=_avLC_aE-i4qywoUfpw1z4aBsi45a2iLA&ut=5tVYPrkfHk_pt3uIyaXJizuUL8j4ILqqNpmcqqqqB&osname=baiduboxapp&osbranch=a0&pkgname=com.baidu.searchbox&network=1_0&cfrom=757b&ctv=2&cen=uid_ua_ut&typeid=0 HTTP/1.1
// Content-Length: 42
// Content-Type: application/x-www-form-urlencoded
// Host: m.baidu.com
// Connection: Keep-Alive
// User-Agent: Apache-HttpClient/UNAVAILABLE (java 1.4)
//
// version=%7B%22skincenter_v%22%3A%220%22%7D
var url =  'http://m.baidu.com/searchbox?action=publicsrv&type=operate&service=bdbox&uid=gOvqa_iI2tgfa2iV_PvO8jaQ28_LavikguH6t0iO288Xu28T_avr8_u6BtgCa2fHA&from=757b&ua=_avLC_aE-i4qywoUfpw1z4aBsi45a2iLA&ut=5tVYPrkfHk_pt3uIyaXJizuUL8j4ILqqNpmcqqqqB&osname=baiduboxapp&osbranch=a0&pkgname=com.baidu.searchbox&network=1_0&cfrom=757b&ctv=2&cen=uid_ua_ut&typeid=0';

// fetch(url, {
//   method : 'POST',
//   headers : {
//     // 'Access-Control-Allow-Origin': '*',
//     // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//     "Content-Type": "application/x-www-form-urlencoded"
//     //  dataType: 'JSONP',
//   },
//   body : 'version={"skincenter_v"%3A"0"}',
// }).then(function(response) {
//   console.log(response.status);
// }, function(error) {
//    console.log('bbbb' + error);
//    return "";
// })
// .catch(error =>  console.log('aaaaa' + error) );


var url = "http://p4.qhimg.com/dmfd/208_110_100/t017893fcfee277f6f3.jpg"
fetch(url, {
  method : 'POST',
  headers : {
    // 'Access-Control-Allow-Origin': '*',
    // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    "Content-Type": "application/x-www-form-urlencoded"
    //  dataType: 'JSONP',
  },
  // body : 'version={"skincenter_v"%3A"0"}',
}).then(function(response) {
  console.log(response.status);
}, function(error) {
   console.log('bbbb' + error);
   return "";
})
.catch(error =>  console.log('aaaaa' + error) );
