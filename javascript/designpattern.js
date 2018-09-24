// 工厂模式

function CreatePerson(name, age, sex) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.sex = sex;
  obj.sayName = function() {
    return this.name;
  };
  return obj;
}

var p1 = new CreatePerson("longen", "28", "男");
var p2 = new CreatePerson("tugenhua", "27", "女");

// 返回都是object 无法识别对象的类型 不知道他们是哪个对象的实列
console.log(typeof p1); // object
console.log(typeof p2); // object
console.log(p1 instanceof Object); // true

// 工厂模式是为了解决多个类似对象声明的问题;也就是为了解决实列化对象产生重复的问题。

// 优点：能解决多个相似的问题。

// 缺点：不能知道对象识别的问题(对象的类型不知道)。
