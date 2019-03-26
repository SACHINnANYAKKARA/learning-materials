(function () {

    var anArray = ['item1', 'item2', 'item3'];
    for (var x = 0; x < anArray.length; x++) {
        console.log(anArray[x]);

    }

    var anObject = {
        prop1: 'property1',
        prop2: 'property2',
        prop3: 'property3'
    };


    for (var prop in anObject) {

        if (anObject.hasOwnProperty(prop)) {
            console.log(anObject[prop]);
        }

    }

    var limit = 0;
    while (limit < 5) {

        if (limit < 3) {
            break;
        }
        console.log(limit += 1);
    }

    var condition = true;
    do {
       console.log('once');
       break;
    }while(condition);

}());