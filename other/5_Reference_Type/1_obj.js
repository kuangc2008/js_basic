

var person = {
	name : "kuangcheng",
	age : 29
}

person.toString = function() {
	return "name:" + this.name  + " age:" + this.age;
}

alert(person);


