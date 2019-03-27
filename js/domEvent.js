(function () {

    'use strict'

    var subHeading = document.getElementsByTagName('h2')[0];
    var header = document.getElementsByTagName('header')[0];

    subHeading.addEventListener('click',function(){
        console.log('The h2 was clicked');
    });

    header.addEventListener('click',function(e){
        console.log(e.target.nodeName);
        e.stopPropagation();
    });

    document.addEventListener('click',function(){
        console.log('something was clicked');
    });

    var anchor = document.createElement('a');
    anchor.textContent = 'google';
    anchor.setAttribute('href','http://gogole.co.uk')
    document.body.appendChild(anchor);

}());