(function () {

    'use strict'

    var foo = "bar";
    var bam;

    var foo = function bar() {

        var foo = "baz";
        console.log(foo);

        function baz(foo) {

            foo=bar;

            foo = "bam";
            bam = "yay";

            console.log(foo + " " + bam);

        }

        baz();

    }

    //bar();
    foo();
    bam;
    //baz();

}());