myObject.double = function () {
    const that = this;

    const helper = function () {
        that.value = add(that.value, that.value);
    };

    helper();
};

console.log("Antes de myObject.value: " + myObject.value);
myObject.double();
console.log("Despues de myObject.value: " + myObject.value);
