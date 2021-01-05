!function() {
    function Instrument(type) {
        console.log('this', this);
        this.type = type
    }
    Instrument.prototype.getType = function () {
        return this.type;
    }
    var guitar = new Instrument('guitar');
    console.log(guitar)
    // 当执行new操作时 实际上是
    // 1. 创建一个对象
    var piano = new Object(); 
    // 2. 将新创建的对象的__proto__指向构造函数的prototype
    piano.__proto__ = Instrument.prototype;
    // 3. 使用piano作为Instrument.call的参数执行Instrument
    Instrument.call(piano, 'piano');
    console.log(piano);

}();
