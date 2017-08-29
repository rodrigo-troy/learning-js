
(function () {
    var a = 1;
    console.log("Esto es una Immediately-Invoked Function Expression");

    console.log(this);

    console.log(this === window);

    console.log(a);

    console.log(this.a === window.a);
})();


$(function () {
    var a2 = 1;

    console.log("\nCon jquery:");

    console.log(this);

    console.log(this === document);

    console.log(a2);

    console.log(this.a2 === document.a2);
});
