var myObject = {
    value: 0,
    textoFijo: 'pepe',
    increment: function (inc) {
        this.incrementAndMessage(inc, 'Llamada interna');

        var that = this;
        var otraFuncion = function () {
            console.log(that.textoFijo);
        };

        otraFuncion();
    },
    incrementAndMessage: function (inc, message) {
        console.log(message);
        this.value += typeof inc == 'number' ? inc : 1;
    }
};

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

myObject.incrementAndMessage(10, 'Prueba');
console.log(myObject.value);

myObject.incrementAndMessage();
console.log(myObject.value);
