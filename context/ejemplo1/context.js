console.log("Inicio");

console.log("\n¿Es 'this' el objeto window? " + (this === window));

var a = 1;
console.log(window.a === this.a);

console.log("\n¿Y adentro de una función que sera?");
function unaFuncion() {
    console.log(this);
}
unaFuncion();
console.log("Tambien es 'windows', porque unaFuncion las declaraciones en la raiz quedan montadas en el objeto window");

console.log("\n¿Y adentro de un objeto?");
var unObject = {
    a: 1,
    unaFuncion: function () {
        console.log(this);
    }
};
unObject.unaFuncion();
console.log("Como la funcion esta montada sobre el objeto 'unObject', this devuelve 'unObject'");

console.log("\nAunque le puedo pasar el context usando 'call' :)");
unObject.unaFuncion.call(window);

unObject = {
    a: 1,
    unaFuncion: function () {
        console.log(this);
    }
};
