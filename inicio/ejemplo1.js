$(function () {
    var a2 = 1;

    console.log("INICIO JQUERY");

    console.log(this);

    console.log(this === document);

    console.log(a2);
});

(function () {
    var a = 1;
    console.log("Esto es una Immediately-Invoked Function Expression");

    console.log(this);

    console.log(this === window);

    console.log(a);
})();

console.log(a);
console.log(a2);