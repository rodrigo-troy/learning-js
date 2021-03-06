(function () {
    let initializing = false;
    const fnTest = /xyz/.test(function () {
        xyz;
    }) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    this.Class = function () {
    };

    // Create a new Class that inherits from this class
    Class.extend = function (prop) {
        const _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        const prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (let name in prop) {
            // Check if we're overwriting an existing function
            prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ?
                (function (name, fn) {
                    return function () {
                        const tmp = this._super;

                        // Add a new ._super() method that is the same method
                        // but on the super-class
                        this._super = _super[name];

                        // The method only need to be bound temporarily, so we
                        // remove it when we're done executing
                        const ret = fn.apply(this, arguments);
                        this._super = tmp;

                        return ret;
                    };
                })(name, prop[name]) : prop[name];
        }

        // The dummy class constructor
        function Class() {
            // All construction is actually done in the init method
            if (!initializing && this.init)
                this.init.apply(this, arguments);
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.prototype.constructor = Class;

        // And make this class extendable
        Class.extend = arguments.callee;

        return Class;
    };
})();

const Person = Class.extend({
    init: function (isDancing) {
        this.dancing = isDancing;
    },
    dance: function () {
        return this.dancing;
    }
});

const Ninja = Person.extend({
    init: function () {
        this._super(false);
    },
    dance: function () {
        // Call the inherited version of dance()
        return this._super();
    },
    swingSword: function () {
        return true;
    }
});

const p = new Person(true);
p.dance(); // => true

const n = new Ninja();
n.dance(); // => false
n.swingSword(); // => true

// Should all be true
console.log(p instanceof Person);
console.log(p instanceof Class);
console.log(n instanceof Ninja);
console.log(n instanceof Person);
console.log(n instanceof Class);
