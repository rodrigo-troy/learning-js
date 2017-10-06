//Values are passed around by reference

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;

console.log(nick);

// nick is 'Curly' because x and stooge
// are references to the same object