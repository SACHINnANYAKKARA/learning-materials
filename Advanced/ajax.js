(function () {

    'use strict'

    var xhr = new XMLHttpRequest();
    console.log(xhr);

    var txt = '{"name":"John", "age":30, "city":"New York"}'
    var obj = JSON.parse(txt);

    console.log(obj);

    //xhr.open('GET','Advanced/data.json');
    //xhr.send();

}());