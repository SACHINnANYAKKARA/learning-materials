var foo = "1";

(function () {

    'use strict'

    function foo() {

        var bar = "bar1";
       // this.baz = baz;
        baz();
    }

    function baz() {
        console.log(bar);
    }

    var bar = "bar2";
    foo();


}());