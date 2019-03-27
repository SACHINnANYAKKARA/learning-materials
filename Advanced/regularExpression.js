(function () {

    'use strict'

    /*
    A regular expression is an object that describes a pattern of characters.
    Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.
    */

    var str = "123456789";
    var patt1 = /[^1-4]/g;
    var result = str.match(patt1);
    var dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;   

    console.log(str);
    console.log(patt1);
    console.log(result);
    console.log(dateRegexp);



}());