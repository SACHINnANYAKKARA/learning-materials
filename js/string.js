(function () {

    'use Strict'

    var testString = 'test String';

    console.log(testString.length);
    console.log(testString.indexOf('t', 1));
    console.log(testString.indexOf('t'));
    console.log(testString.toUpperCase());
    console.log(testString.substring(5));
    console.log(testString.substring(0, 4));

    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // expected output: Array ["bison", "camel", "duck", "elephant"]



}());