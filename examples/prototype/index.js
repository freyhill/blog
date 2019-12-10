function  Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.getInfo = function () {
    return this.age + this.name;
}
console.log(Person.prototype);

const person1 = new Person('leinov', 18);
// delete person1.__proto__.getInfo;
console.log(person1.__proto__);
let info = person1.getInfo();
console.log(info);
const name = 1;
Person.prototype = {
    getUserInfo: function (){
        console.log(this);
        return this.name;
    }
}
person1.__proto__ = Person.prototype;
let x = person1.getUserInfo();
console.log(x);