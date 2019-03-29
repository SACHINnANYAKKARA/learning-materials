var foo="1";

(function () {

    'use strict'

    var bar = "bar";

    function foo(str) {
        eval(str);
        //   console.log(str);
        console.log(bar);
    }

    var obj = {
        a: 2,
        b: 3,
        c: 4
    };

    obj.a = obj.b + obj.c;
    obj.c = obj.b - obj.a;

    /*
    with (obj) {

        a = b + c;
        d = b - c;
        d = 3;

    }
    */


    foo("Eval fucntion");

}());

console.log(foo);