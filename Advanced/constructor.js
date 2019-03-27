(function () {

    var newObject = {};

    Object.prototype.mySpecialProperty = 'special!';
    console.log(newObject.mySpecialProperty);

    var newArray = [1, 2, 3];
    if (!Array.prototype.first) {
        Array.prototype.first = function () {
            return this[0]
        };
    }

    console.log(newArray.first());

    newObject.prop1 = 'prop1';
    Object.keys(newObject).forEach(function (item) {

        console.log(newObject[item]);

    });


    Object.freeze(newObject);

    if (!Object.isFrozen(newObject)) {
        newObject.prop1 = 'update prop!';
    }

    var unFrozenObj = {};
    Object.keys(newObject).forEach(function (item) {

        unFrozenObj[item] = newObject[item];

    });

    Object.seal(unFrozenObj);
    unFrozenObj.prop1 = 'wohooo';
    console.log(unFrozenObj.prop1);

    if (!Object.isSealed(unFrozenObj)) {
        delete unFrozenObj.prop1;
    }

    var extensible = {};
    console.log(Object.isExtensible(extensible));

    Object.preventExtensions(extensible);
    if (Object.isExtensible(extensible)) {
        extensible.newPropert = 'new';
    }

    console.log(extensible);

    var Person = function (name) {

        this.name = name;

    }

    Person.prototype = {
        greet: function () {
            return this.name;
        }
    }

    var fred = new Person('Fred');
    console.log(fred.greet());

}());