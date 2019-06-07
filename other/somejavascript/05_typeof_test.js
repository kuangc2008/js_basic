function a(){
}

var b;
console.log("function->" + typeof a);
console.log('未赋值->' + typeof b);
console.log('undefined与null->' + (undefined == null));  //undefined是null子值


var c = '';
if(c /*Boolean(c)*/) {
  console.log('自动boolean为true');
} else {
  console.log('自动boolean为false')
}

//var number = Number('871207');
var number = parseInt('871207');
console.log((typeof number) + '' + number);

var number1 = 15;
var string1 = number1.toString(2);
console.log(string1);
var number2;
//var string2 = number2.toString();  //会异常，所以会用String方法
var string2 = String(number2);   //如果null则返回null，如果undefined返回其，否则返回正常string
console.log(string2);


//Object:
//Constructor   hasOwnProperty    isPrototypeOf    propertyIsEnumberable   toString  valueOf
var o = new Object();
console.log(o.Constructor);

var s1 = 'abc';
function changeSs(ss) {
  ss = 'cde';
}
changeSs(s1);
console.log('s1-' + s1);

var a = new Array();
console.log('array is ' + (a instanceof Array) +  ' and type is ' + (typeof a));
console.log('array ' + Array.isArray(a));

function createComparisonFunction(propertyName) {
  return function(object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
}

var data = [
  {name : 'kcc', age : 28 , toString : function(){return this.name}},
  {name : 'Nic', age : 14, toString : function(){return this.name}},
  {name : 'zef', age : 50, toString : function(){return this.name}},
  {name : 'afe', age : 6, toString : function(){return this.name}}
]

console.log(data.toString());
data.sort(createComparisonFunction('name'));
console.log(data.toString());
data.sort(createComparisonFunction('age'));
console.log(data.toString());

function factorial(num) {
  if (num < 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
};
var value = factorial(5);
console.log(value);  //4 * 3 *2 = 24 * 5 = 120


function outer() {
  innter();
  var s = 'ssss';
}
function innter() {
//  console.log(innter.caller);   //指向掉哟昂该函数的函数
//  console.log(innter);  //指向自己
//  console.log(this);  //指向window
  console.log(arguments.callee.caller);
}
outer();


function sum(num1, num2) {
  return num1 + num2;
}
function callSum1(num1, num2) {
  return sum.apply(this, arguments);
}
function callSum2(num1, num2) {
  return sum.apply(this, [num1, num2]);
}
console.log('sum1->' + callSum1(10, 3));
console.log('sum2->' + callSum2(9, 7));
