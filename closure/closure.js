(function (numero) {
    console.log(numero + 1);
})(1);


var myObject = (function () {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    }
})();

myObject.increment();
myObject.increment();
myObject.increment();
console.log(myObject.getValue());