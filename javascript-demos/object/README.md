# OOP

在程序里，我们通过使用对象去构建现实世界的模型，把原本很难（或不可能）能被使用的功能，简单化并提供出来，以供访问。对象包存储着对象的数据（包括函数）使数据组织访问变得更容易。

在一些面向对象的语言中，我们用类（class）的概念去描述一个对象（您在下面就能看到JavaScript使用了一个完全不同的术语）-类并不完全是一个对象，它更像是一个定义对象特质的模板。

从上面我们创建的class中， 我们能够基于它创建出一些对象 - 一些拥有class中属性及方法的对象。基于我们的Person类，我们可以创建出许许多多的真实的人

当一个对象需要从类中创建出来时，类的构造函数就会运行来创建这个实例。这种创建对象的过程我们称之为实例化-实例对象被类实例化。

在 OOP 里，我们可以创建基于其它类的新类，这些新的子类可以继承它们父类的数据和功能。比起复制来说这样能够使用父对象共有的功能




# QA

## 下面的输入是什么
```
"hello world".__proto__.__proto__.__proto__
```
答案：null

## 创建一个对象有哪些方式
答案：

1. 使用语法结构创建
```
var obj = {name: 'leinov', age: 18}
```

2. 使用构造函数创建
```
function Person (name, age) {
        this.name = name;
        this.age = age;
    }
Person.prototype.getName = function() {
    return this.name;
}
var p = new Person('leinov', 18);
```

3. 使用Object构造函数创建
```
var person = new Object();
var person2 = new Object({name:'jone', age:18});
```

4. 使用class类创建
```
class Animal {
    constructor(type) {
        this.type = type
    }
}
var a1  =  new Animal('cat');
console.log(a1.type);
```

5. 使用create方法创建

 Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__

```
var person1 ={name: 'steven', age:19};
var person2 = Object.create(person1);
console.log(person2.__proto__ === person1); // true
```

## 描述一下原型链