(function () {

    'use strict'

    var array = ['one', 'two', 'three'];

    console.log(array.length);

    array.push('four');
    console.log(array);

    array.unshift('zero');
    console.log(array);

    console.log(array.pop());
    console.log(array.shift());

    array.splice(0, 3, 'a', 'b', 'c');
    console.log(array);

    console.log(array.reverse());

    console.log(array.sort());

    console.log("done");

    console.log(['a', 'b', 'c'].sort());
    console.log([3, 20, 10000]).sort(function (a, b) {

        if (a < b) {
            return -1;
        } else if (a === b) {
            return 0;
        } else {
            return 1;
        }
    });

    array.forEach(function (vale, index) {

        console.log('Item at index' + index + 'has the value' + value);

    });

    console.log(array.map(function(value){
        return typeof value !== 'number'; 
    }));

    console.log(['a',1,'b',2,'c',3].filter(function(value){
        
        return typeof value !== 'string';

    }));

    console.log(array.map(function(value){
         //
    }));

});