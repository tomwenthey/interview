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

// 单例模式

// 单体模式的优点是：

// 可以用来划分命名空间，减少全局变量的数量。
// 使用单体模式可以使代码组织的更为一致，使代码容易阅读和维护。
// 可以被实例化，且实例化一次。

var Singleton = function(name) {
  this.name = name;
  this.instance = null;
};
Singleton.prototype.getName = function() {
  return this.name;
};
// 获取实例对象
function getInstance(name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}
// 测试单体模式的实例
var a = getInstance("aa");
var b = getInstance("bb");

// 模块模式的思路是为单体模式添加私有变量和私有方法能够减少全局变量的使用
var singleMode = (function() {
  // 创建私有变量
  var privateNum = 112;
  // 创建私有函数
  function privateFunc() {
    // 实现自己的业务逻辑代码
  }
  // 返回一个对象包含公有方法和属性
  return {
    publicMethod1: publicMethod1,
    publicMethod2: publicMethod1
  };
})();

// 代理模式

// 发布订阅模式

// 观察者模式