var line = 1;

var goumai = true;

var seller = '<br>\
卖出价格: <input type="number" step="any" id="seller_price" />\
总余额 <text type="number" id="zong_yu_e></text> ';





document.onkeydown = function(e) {  
    //捕捉回车事件  
    var ev = (typeof event!= 'undefined') ? window.event : e;  
    if(ev.keyCode == 13) {  
    	var total_num = document.getElementById('total_num').value;
     	var price = document.getElementById('price').value;

     	var j = total_num / price;
     	var first100 = Math.floor(j / 100) * 100;

     	document.getElementById('gupiao_num').textContent = first100;
     	document.getElementById('shengxi').textContent = (total_num - first100 * price);
     	

     	var div = document.getElementById('div1');
     	div.insertAdjacentHTML('beforeend', seller);
     	
     	line++;


    }  
}  


