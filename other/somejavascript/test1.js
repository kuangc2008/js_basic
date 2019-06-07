
var person = {
  name : 'kc',
  //相当于birth : birth，chrome暂不支持
  birth : 'fafa',
//  birth,

   //支持
  hello() {return 'hehe'}
//  hello : function() { return 'My name is' +  this.name}
};

alert(person.birth);
alert(person.hello());
