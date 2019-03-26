function myFunction(message) {
    console.log(message);
    return true;
}

var myOtherFunction = function myOtherFunction() {
    console.log('function');
}

console.log(hostedVaribale);
var hostedVaribale = 'test';

(function invokeImmediately() {
    console.log('invoke automatically');
}());

! function invokeImmediately() {
    console.log('invoke automatically');
}();