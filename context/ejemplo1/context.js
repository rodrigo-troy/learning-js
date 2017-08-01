console.log("Inicio");

console.log("\n¿Es 'this' el objeto window? " + (this === window));

var a = 1;
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
var unObject = {
    a: 1,
    unaFuncion: function () {
        console.log(this);
    }
};
unObject.unaFuncion();
console.log("Como la función esta vinculada al objeto 'unObject', 'this' devuelve 'unObject'");


console.log("\nAunque le puedo pasar el context usando 'call'");
unObject.unaFuncion.call(window);


var myClick = function () {
    console.log("\n¿En un evento?");
    console.log(this);
};

console.log("\n¿Y en un metodo definido dentro de otro metodo?");
var otroObjeto = {
    a: 1,
    unaFuncion: function () {
        var that = this;
        var funcionDentroDeOtraFuncion = function () {
            console.log(this);
            console.log(that);
        };

        funcionDentroDeOtraFuncion();
    }
};
otroObjeto.unaFuncion();
console.log("Se debe usar una variable (var that) para poder acceder al objeto.");


var objetosAnidados = {
    funcion0: function () {
        console.log(this);
    },
    objetoAnidado1: {
        funcion1: function () {
            console.log(this);
        },
        funcion11: function () {
            var funcionMuyAnidada = function () {
                var funcionMasAnidadaAun = function () {
                    console.log(this);
                };

                console.log(this);
                funcionMasAnidadaAun();
            };

            funcionMuyAnidada();
            console.log(this);
        }
    }
};

objetosAnidados.funcion0();
objetosAnidados.objetoAnidado1.funcion1();
objetosAnidados.objetoAnidado1.funcion11();

