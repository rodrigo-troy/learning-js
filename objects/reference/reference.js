//Values are passed around by reference

const stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

const x = stooge;
x.nickname = 'Curly';
const nick = stooge.nickname;

console.log(nick);

// nick is 'Curly' because x and stooge
// are references to the same object
