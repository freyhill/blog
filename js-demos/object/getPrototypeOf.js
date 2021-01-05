// Object.getPrototypeOf 返回指定对象的原型

// prototype是用于类的 Object.getPrototypeOf是用于实例的

!function (params) {
   var obj = {name: 1};
   var obj2 = Object.create(obj);
   
   console.log(Object.getPrototypeOf(obj2) === obj); // true
}()