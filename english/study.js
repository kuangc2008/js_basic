


var clazz = document.documentElement.getElementsByClassName("go");
for (var i = 0; i < clazz.length; i++) {
	//let clazzT = clazz[i].firstChild.nodeValue;
	clazz[i].onclick=function(){
		var value = (this.firstChild.nodeValue);
		window.open('http://dict.youdao.com/w/' + value + '/#keyfrom=dict2.top');
	};
}



// alert(clazz.length);
// var parentDOM = document.getElementById("first");
// alert(parentDOM);







