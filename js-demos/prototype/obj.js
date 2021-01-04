/***
 * 创建对象的四种方式
 */

console.log('---------创建对象的方式---------------------------');

const {log:lg} = console
lg('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain')
!function (params) {
    console.log('---------1.用语法结构创建----');
    // 1. 使用语法结构创建对象
    // o 这个对象继承了 Object.prototype 上面的所有属性
    // o ---> Object.prototype ---> null
    
    var o = {a: 1} 
    lg('对象')
    lg("var o = {a: 1} ");
    lg("o.hasOwnProperty('a'):", o.hasOwnProperty('a'));
    lg("o.__proto__ === Object.prototype:", o.__proto__ === Object.prototype);
    
    var a = ['a', 'b', 'c'];
    // 数组都继承Array.prototype
    // Array.prototype包含 indexOf，forEach等方法
    // 原型链如下
    // a ---> Array.proptotype ----> Object.prototype ---> null
    // a.__proto__ === Array.proptotype;
    // Array.prototype.__proto__ === Object.prototype
    // Object.prototype.__propto__ === null;
    lg('数组');
    lg("var a = ['a', 'b', 'c'];")
    lg("a.__proto__ === Array.prototype", a.__proto__ === Array.prototype); // true
    lg("Array.prototype.__proto__", Array.prototype.__proto__ === Object.prototype); // true

    var f = function () {};
    // 函数都继承于 Function.prototype
    // 原型如下
    // f ---> Function.prototype -----> Object.prototype ---> null
    // f.__proto__ === Function.prototype
    // Function.prototype.__proto__ === Object.prototype
    // Object.prototype.__proto__ === null;
    lg('函数')
    lg("var f = function () {};")
    lg('f.__proto__ === Function.prototype', f.__proto__ === Function.prototype)
        
    lg('---------2.使用构造器创建对象----');
    function Person (name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function() {
        return this.name;
    }
    var p = new Person('leinov', 18);
    lg(p.getName());
    lg('---------3.使用Object.create创建对象---');
    var obj = {name:'leinov'} // obj --> Object.prototype ---> null
    var obj2 = Object.create(obj); // obj2 -> obj -> Object.prototype ---> null
    lg('obj2.__proto__ === obj', obj2.__proto__ === obj) // true

    lg('---------4.使用 class 关键字创建的对象---');
    class Animal {
        constructor(type) {
            this.type = type
        }
    }
    var a1  =  new Animal('cat');
    console.log(a1.type);
}()
