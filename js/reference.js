//Values are passed around by reference

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;

console.log(nick);

// nick is 'Curly' because x and stooge
// are references to the same object