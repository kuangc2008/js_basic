
var f = v=>v;
// 等同于
// var f = function(v) {
//   return v;
// }

// 不需要参数
var f = () => 5;

var sum = (num1, num2) => num1 + num2;
// var sum = function(num1, num2) {
//   return num1 +num2;
// }


var getTempItem = id => ({id : id, name : "Temp"});

//console.log( getTempItem(1));

//实际使用1
var a = [1, 2, 3].map( function(x) {
  return x *x;
})
//等同于
//[1, 2, 3].map(x => x *x);
console.log(a);


var handler = {
  id : "123456",
  init : function() {
    document.addEventListener("click",
      event => this.doSomething(event.type), false);
  },
  doSomething : function(type) {
    console.log("xxx" + type + " dxx" + this.id);
  }
}
