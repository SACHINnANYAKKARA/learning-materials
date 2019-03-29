(function () {

    'use strict'

    function foo() {

        var bar = "bar";

        function baz() {
            console.log(bar);
        }

        setTimeout(function () {
            console.log(bar);
        }, 1000);

        setTimeout(function () {
            console.log(bar);
        }, 1000);

        bam(baz)

    }

    var foo = (function () {

        var o = {

            bar: "bar"
        };

        return {
            obj: 0
        };

    })();

    var foo = (function () {
        
        var o = {bar:"bar"};

        return {
            bar:function(){
                 console.log(o.bar);
            }
        };

    })();

    foo.bar();
  //  console.log(foo.obj.bar);

    function bam(baz) {
        baz();
    }

    foo();


}());