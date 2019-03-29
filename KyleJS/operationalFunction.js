(function () {

    'use strict'

    function foo() {

        var bar = "bar";

        for (let i = 0; i < bar.length; i++) {
            console.log(bar.charAt(i));
        }

    }

    try {

        throw void 0

    } catch {

        function foo() {

            foo = "foo";
            console.log(foo);

        }
    }

    /*
        function foo(bar) {
            if (bar) {
                let baz = bar;

                if (baz) {
                    let bam = baz;
                }
                console.log(bam);
            }
            console.log(baz);
        }
    */

    function foo(bar) {
        console.log(bar);
    }

    function baz() {

        var bar = "bar";
        foo(bar);
    }

    baz();

    foo("bar");

}());