(function () {

    'use strict';

    if (1 + 1 === 3) {

        console.log('The expresseon');
    }

    if (true === false) {
        console.log('We will never see this');
    } else {
        console.log('We will always see this');
    }

    var colour = 'red';
    if (colour === 'red') {
        console.log('It is Blue');
    } else if (colour === 'green') {
        console.log('It is Green');
    } else {
        console.log('It is Nothing');
    }

    var array = ['item1'];
    if(array.length){
        console.log(array[0]);
    }

}());