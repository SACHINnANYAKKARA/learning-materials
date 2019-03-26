var global = 1;

function aFunction() {
    var local = 2;
    console.log(global);
    console.log(local);
}


(function () {

    'use strict';
    console.log(this);

    var object = {
        property: 'Belong',
        method: function () {
            return this.property;
        }
    }

    console.log(object.method());

    function Person(name) {
        this.name = name;
    }

});