console.log("Inicio");

console.log("\n¿Es 'this' el objeto window? " + (this === window));

const a = 1;
console.log("var a = 1;");
console.log("¿es window.a === this.a?");
console.log(window.a === this.a);


console.log("\n¿Y adentro de una función que sera 'this'?");
console.log("function unaFuncion(){console.log(this)}");
console.log("unaFuncion()");

function unaFuncion() {
    console.log(this);
}

unaFuncion();
console.log("Tambien es 'windows', porque 'unaFuncion' esta vinculada al objeto window");


console.log("\n¿Y en el metodo de un objeto?");
const unObject = {
    a: 1,
    unaFuncion: function () {
        console.log(this);
    }
};
unObject.unaFuncion();
console.log("Como la función esta vinculada al objeto 'unObject', 'this' devuelve 'unObject'");


console.log("\nAunque le puedo pasar el context usando 'call':");
unObject.unaFuncion.call(window);

console.log("\n¿Y en un metodo definido dentro de otro metodo?");
const otroObjeto = {
    a: 1,
    unaFuncion: function () {
        const that = this;
        const funcionDentroDeOtraFuncion = function () {
            console.log(this);
            console.log(that);
        };

        funcionDentroDeOtraFuncion();
        console.log(this);
    }
};
otroObjeto.unaFuncion();
console.log("Se debe usar una variable auxiliar (var that) para poder acceder al objeto.\n\n");


console.log("Independiente de lo anidado, si se declara una funcion usando la forma: var x = function(){}, el contexto sera windows");
const objetosAnidados = {
    funcion0: function () {
        console.log(this);
    },
    objetoAnidado1: {
        funcion1: function () {
            console.log(this);
        },
        funcion11: function () {
            const funcionMuyAnidada = function () {
                const funcionMasAnidadaAun = function () {
                    console.log(this);
                };

                funcionMasAnidadaAun();
                console.log(this);
            };

            funcionMuyAnidada();
            console.log(this);
        }
    }
};

objetosAnidados.funcion0();
objetosAnidados.objetoAnidado1.funcion1();
objetosAnidados.objetoAnidado1.funcion11();

