(function (numero) {
    console.log(numero + 1);
})(1);


const myObject = (function () {
    let value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };
})();

console.log("We are not assigning a function to 'myObject'. We are assigning the result of invoking that function.");

myObject.increment();
myObject.increment();
myObject.increment();
console.log(myObject.getValue());
