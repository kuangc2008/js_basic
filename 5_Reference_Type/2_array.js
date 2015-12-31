
/**
var colors = new Array();
var count = colors.push("red", "green");
alert(count);

count = colors.push("black");
alert(count);

var item = colors.pop();
alert(item);
alert(colors.length);
*/



/*
var values = [0, 1, 5, 10, 15];
values.sort();
alert(values);

function compare(value1, value2) {
	if (value1 < value2) {
		return -1;
	} else if(value1 > value2) {
		return 1;
	} else {
		return 0;
	}
}
values.sort(compare);
alert(values);
*/




/*
//concat  slice   splice
var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);
alert(colors);
alert(colors2);   //在最后插入几项，得到新数组

var colors3 = colors2.slice(1, 4);   //[)
alert(colors3);

var removed = colors.splice(0, 1); //删除第一项
alert(colors);
alert(removed);

removed = colors.splice(1, 0, "yellow", "orange"); //从位置1插入
alert(colors);  //green yellow orange blue

removed = colors.splice(1, 2, "red", "purple");
alert(colors);
alert(removed);
*/


/*
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
alert(numbers.indexOf(3));
alert(numbers.lastIndexOf(3));
alert(numbers.indexOf(3, 4));
alert(numbers.lastIndexOf(3,4));
*/



//every  filter foreach map some

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var filterResult = numbers.filter(function(item, index, array) {
	return (item>2);
});
alert(filterResult);


var mapResult = numbers.map(function(item, index, array) {
	return "kc" + item;
});
alert(mapResult)



var everyResult = numbers.every( function(item, index, array) {
	return (item > 2);
})
alert(everyResult)


var someResult = numbers.some( function(item, index, array) {
	return (item > 2);
})
alert(someResult)


numbers.foreach(function(item, index, array) {
	//xxx
}


var result2 = false;
for(var i=0; i<numbers.length; i++) {
	alert(numbers[i]);
	if (numbers[i] < 2) {
		result2 = true;
		break;
	}
}
alert(result2);



