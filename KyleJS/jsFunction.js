var foo = "1";

(function () {

    'use strict'

    var a = b();
    var c = d();

    a;
    c;

    function b() {
        return c;
    }

    /*
    var d = function(){
         retun b();
    };
    */

    var a;
    var c;
    var d;

    a = b();
    c = d();
    
    a;
    c;

    d =function(){

       return b();
       
    };

}());