

var addition = 1 + 1;
var substraction = 1 - 1;
var multiplication = 5 * 2;
var division = 5 / 2.5;
var remainder = 5 % 2;

var a = 1;
console.log(a++); // 1
console.log(a); // 2
// Decrement
var b = 1;
console.log(b--); // 1
console.log(b); // 0


var additionAssignment = 1;
additionAssignment +=1;

console.log(additionAssignment);

var substractAddition = 1;
substractAddition -=1;

console.log(substractAddition);

var multiAddition = 1;
multiAddition *= 1;

console.log(multiAddition);

var divisionAssignemnt = 1.5;
divisionAssignemnt %= 1;

console.log(divisionAssignemnt);

var global = 1;
function aFunction(){
    var local = 2;
    console.log(global);
    console.log(local);
}

var precedance1 = 1+4*2;
var precedance2 = (1+4)*2;
var precedance3 = 2+10-2;

console.log(precedance1);
console.log(precedance2);
console.log(precedance3);

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

(function () {

    'use strict';
    console.log(this);

    var object = {
        property: 'Belong',
        method: function () {
            return this.property;
        }
    }

    console.log(object.method());

    function Person(name) {
        this.name = name;
    }

});





