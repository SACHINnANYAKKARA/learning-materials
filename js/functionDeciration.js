(function () {

    'use strict'

    var person = {

        name: 'Dan',
        job: 'Developer'
    }

    function introduce(inductee) {
        console.log(inductee + '' + name);
    }

    introduce.call(person, 'Bob');

    console.log("test");

    function chat(respondent, subject) {
        console.log(respondent + '' + subject);
    }

    function engage(mode,object,args){
        mode.apply(object,args);
    }

    engage(introduce,person,['Fred']);
    engage(chat,person,['Al','EW IDE']);

}());