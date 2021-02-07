
// 对象的__proto__属性 即对象的原型对象指向 构造函数的prototype对象

// 也可以通过 Object.getPrototypeOf(obj)来获取对象的原型对象 
{
   
    function Foobar(params) {
    }

    var foobar = new Foobar();

    console.log(foobar.__proto__ === Object.getPrototypeOf(foobar)); // true
    console.log(Object.getPrototypeOf(foobar) === Foobar.prototype); // true
}

// 每个函数都有个特殊的属性叫原型（prototype）可以给函数的原型添加属性或方法
{
    function doSomething(params) {
    }
    console.log(doSomething.prototype);
    /*
   {
    constructor: ƒ doSomething(params)
    __proto__:{
        constructor: ƒ Object()
        hasOwnProperty: ƒ hasOwnProperty()
        isPrototypeOf: ƒ isPrototypeOf()
        propertyIsEnumerable: ƒ propertyIsEnumerable()
        toLocaleString: ƒ toLocaleString()
        toString: ƒ toString()
        valueOf: ƒ valueOf()
        __defineGetter__: ƒ __defineGetter__()
        __defineSetter__: ƒ __defineSetter__()
        __lookupGetter__: ƒ __lookupGetter__()
        __lookupSetter__: ƒ __lookupSetter__()
        get __proto__: ƒ __proto__()
        set __proto__: ƒ __proto__()
    }
    */
   // 给方法原型上添加属性
   doSomething.prototype.name = 'do it'
   console.log(doSomething.prototype.__proto__ === Object.prototype); // true
}

// 使用new关键字来创建一个函数的实例 
{
    function Person(params) {
        
    }
    Person.prototype.job = 'engineer';
    var jone = new Person();
    jone.age = 18;

    console.log("jone:", jone);
    /**
     Person {
        age: 18
        __proto__:
            job: "engineer"
            constructor: ƒ Person(params)
            __proto__: Object
     */
    console.log("Person.prototype:",Person.prototype);
    /*
    {
        job: "engineer"
        constructor: ƒ Person(params)
        __proto__: Object
    */
   // 可以看出 jone的__proto__ 就是 Person的prototype, 这个作用是 当我们访问jone的一个属性时
   // 浏览器首先会查找jone自身是否包含这个属性，如果没有这个属性，就会在jone的__proto__中查找(也就是Person.prototype)
   // 如果jone的__proto__有这个属性，那这个属性就会被使用，否则 如果jone的__proto__没有这个属性，浏览器就会去查找
   // jone的__proto__的__proto__属 默认情况下 所有的所有函数的原型属性的__proto__都是指向window.Object.prototype。
   // 所以 jone.__proto__.__proto__ === Person.prototype.__proto_ === window.Object.prototype
   // 如果还没有 就在 jone.__proto__.__proto__.__proto__上找 也就是 Person.prototype.__proto__.proto__ 也就是
   // window.Object.prototype.__proto__; 而window.Object.prototype.__proto__指向null，如果还没找到
   // 那就返回undefined。这种一层层查找关系就叫原型链，比如访问jone.address 返回就是undefined，因为整个原型链都
   // 找不到这个属性
}
{
    // prototype 属性的值是一个对象，我们希望被原型链下游的对象继承的属性和方法，都被储存在其中。
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.getName =  function() {
        return '这是构造函数自身的方法，不会被继承，Person的实例里无法调要该方法';
    }
    console.log('----', Person.getName());
    Person.prototype.getInfo = function () {
        return this.name + this.age + this.address;
    }
    const p1 = new Person('Frith', 23, 'England');
    console.log('p1', p1);
    console.log(p1.hasOwnProperty('name')); // true
    console.log(p1.hasOwnProperty('getInfo')); // false
    console.log(Object.getPrototypeOf(p1));
    // console.log('Person.getName', p1.getName()); 报错 因为找不到该方法
}
{
    // create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
    var person1 = {name:'leinov'}
    var person2  = Object.create(person1);

    console.log(person2.__proto__ === person1);

}

{
    // 每个实例对象都从原型中继承了一个constructor属性，该属性指向了用于构造此实例对象的构造函数。
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    const p1 = new Person();
    console.log(p1.constructor); // Person（）{...}
    console.log(p1.constructor.name); // Person

    const p2 = new p1.constructor('leinov', 18);

    // 通过一个实例的constructor属性来创建一个新对象
    console.log(p2.name, p2.age); // leinov 18 
}

{
    // 修改原型
    function Person(name, age) {
        this.name = name
        this.age = age;
    }
    // 给原型添加一个方法
    Person.prototype.getInfo = function () {
        return `My name is ${this.name} and i'm ${this.age} years old;`;
    }
    const p1 = new Person('leinov', 18);
    alert(p1.getInfo());

}