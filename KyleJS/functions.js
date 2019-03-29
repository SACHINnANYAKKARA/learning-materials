(function () {

    'use strict'

    var foo = "bar";

    function bar() {

        var foo = "baz";
        console.log(foo);
    }

    function baz() {

        foo = "bam";
        var bam = "yay";

        console.log(foo + " " + bam);

    }


    bar();
    baz();



}());