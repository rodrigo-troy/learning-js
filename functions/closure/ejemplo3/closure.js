function f(x) {
    function g() {
        return x;
    }

    return g;
}

//Tell f to create a new g
var g5 = f(5);

var g1 = f(1);


console.log(g5());


console.log(g1());
