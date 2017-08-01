Function.prototype.agregarMetodo = function (name, func) {
    if (!this.prototype[name]) {
        console.log(this);
        console.log("Nombre función: " + name);
        console.log("Definicion Función: " + func);
        this.prototype[name] = func;
    }

    return this;
};

Number.agregarMetodo('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});


Number.agregarMetodo('lala', 'LELE');   //LELE NO ES UNA FUNCION, PERO COMO JAVASCRIPT NO ES FUERTEMENTE TIPEADO, ESTA LLAMADA ES VALIDA

console.log("lala");
console.log((1).lala);

console.log((10 / 3).integer());


var Persona = function (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
};

var persona1 = new Persona('juan', 'Perez');
console.log(persona1);

Persona.prototype.imprimete = function () {
    console.log("Nombre:" + this.nombre);
    console.log("Apellido: " + this.apellido);
    return this;
};

console.log(persona1.imprimete());