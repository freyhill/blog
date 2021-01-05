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