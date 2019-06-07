



var url = "http://p4.qhimg.com/dmfd/208_110_100/t017893fcfee277f6f3.jpg";
//var url = "http://news.gamedog.cn/a/20151026/1425057.html";
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	console.log(xhr.readyState);
	if (xhr.readyState == 4) {
		if( (xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
			alert(xhr.responseText);
		} else {
			alert('Request was unsuccessfual:' + xhr.status);
		}
	}

}
xhr.open('get', url, true);
xhr.send(null);


//长连接
//Comet 服务器推送
