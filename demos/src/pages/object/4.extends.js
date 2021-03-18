/***
 * from 
 * https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 */
{
    function Instrument(name) {
        this.name = name;
    }
    Instrument.prototype.getName = function name() {
        return this.name;
    }
    function Guitar(name) {
        Instrument.call(this, name)
        this.__proto__ = Instrument.prototype;
    }

    const guitar = new Guitar('guitar');

    console.log(guitar.name, guitar.getName());
}