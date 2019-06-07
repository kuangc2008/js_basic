
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours()
      +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes()
      +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

var date = new Date();
console.log(date.timeNow());

var decodedString = atob('yMABAAAAABAAAAA9CWNsaWVudEtleQVncm91cIABAAEAAAAKbWFpdG9uSW5mbwAAAAEMAAEKAAIAAAAAAAAAZAsAAQAAAAACAAQBAgADAQIABQECAAYBAAA=');
console.log(decodedString);



var http = new XMLHttpRequest();
var url = "http://m.baidu.com/searchbox?action=publicsrv&type=walletqrlist&service=bdbox&uid=0a2qt_aS-f0OOv8wgi2Zi0aqvugN8Hfz_8vPagurSaioav8xgu2Pi_az28_OP2f1A&from=757b&ua=_a-qi4uq-igBNE6lI5me6NNy2IgUI2i0ApoNB&ut=Yu-W8otN2i4TasiDouD58gNV36yuFpoKB&osname=baiduboxapp&osbranch=a0&pkgname=com.baidu.searchbox&network=1_0&cfrom=757b&ctv=2&cen=uid_ua_ut&typeid=0";
var params = "lorem=ipsum&name=binny";
//http.open("POST", url, true);
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// http.header("Access-Control-Allow-Origin", "*");
// http.header("Access-Control-Allow-Headers", "X-Requested-With");

//http.setRequestHeader("Content-length", params.length);


http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send('version=%7B%22walletqrlist_v%22%3A%223%22%7D');
