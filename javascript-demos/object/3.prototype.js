
// 对象的__proto__属性 即对象的原型对象指向 构造函数的prototype对象
// 也可以通过 Object.getPrototypeOf(obj)来获取对象的原型对象 
{
   
    function Foobar(params) {
    }

    var foobar = new Foobar();

    console.log(foobar.__proto__ === Object.getPrototypeOf(foobar)); // true
    console.log(Object.getPrototypeOf(foobar) === Foobar.prototype); // true
}

// 每个函数都有个特殊的属性要原型（prototype）可以给函数的原型添加属性或方法
{
    let as=111;
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
   // 如果jone的__proto__有这个属性，那这个属性就会被使用，否则 如果jone的__proto__没有这个属性，路蓝旗就会去查找
   // jone的__proto__的__proto__属 默认情况下 所有的所有函数的原型属性的__proto__都是指向window.Object.prototype。
   // 所以 jone.__proto__.__proto__ === Person.prototype.__proto_ === window.Object.prototype
   // 如果还没有 就在 jone.__proto__.__proto__.__proto__上找 也就是 Person.prototype.__proto__.proto__ 也就是
   // window.Object.prototype.__proto__; 而window.Object.prototype.__proto__指向null，如果还没找到
   // 那就返回undefined。这种一层层查找关系就叫原型链，比如访问jone.address 返回就是undefined，因为整个原型链都
   // 找不到这个属性
}