function  Person() {
    
}
var person = new Person();
person.name = 'leinov';
console.log(person.name);

// 每个JavaScript对象（除了null）都有一个属性__proto__ 这个属性指向对象的原型

console.log(person.__proto__ === Person.prototype); // true

// 每个原型都有一个constructor属性指向构造函数
console.log(Person === Person.prototype.constructor); // true

// 获取对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype);

// 原型的__proto__指向Object的prototype
console.log(Person.prototype.__proto__ === Object.prototype); // true

// Object.prototype的原型指向null
console.log(Object.prototype.__proto__ === null); // true


function doSomething() {
    
}

doSomething.prototype.foo = 'bar';
var doSomethingInstancing = new doSomething();
doSomethingInstancing.prop = 'some values';
console.log('doSomethingInstancing.prop:' + doSomethingInstancing.prop); // some values
console.log('doSomethingInstancing.foo:' + doSomethingInstancing.foo); // bar
console.log('doSomething.prop:' + doSomething.prop); // undefined
console.log('doSomething.foo:' + doSomething.foo); // undefined
console.log('doSomething.prototype.prop:' + doSomething.prototype.prop); // undefined
console.log('doSomething.prototype.foo:' + doSomething.prototype.foo); // bar