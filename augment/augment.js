/*jshint esversion: 8 */
/* global console*/
Function.prototype.addMethod = function (name, func) {
    "use strict";
    if (!this.prototype[name]) {
        console.log(this);
        console.log("Nombre función: " + name);
        console.log("Definicion Función: " + func);
        this.prototype[name] = func;
    }

    return this;
};

Number.addMethod('integer', function () {
    "use strict";
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

Number.addMethod('lala', 'LELE');   //LELE NO ES UNA FUNCION, PERO COMO JAVASCRIPT NO ES FUERTEMENTE TIPEADO, ESTA LLAMADA ES VALIDA

console.log("lala");
console.log((1).lala);
console.log((10 / 3).integer());

const Persona = function (nombre, apellido) {
    "use strict";
    this.nombre = nombre;
    this.apellido = apellido;
};

const persona1 = new Persona('juan', 'Perez');
console.log(persona1);

Persona.prototype.imprime = function () {
    "use strict";
    console.log("Nombre:" + this.nombre);
    console.log("Apellido: " + this.apellido);
    return this;
};

console.log(persona1.imprime());
