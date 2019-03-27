(function () {

    'use strict'

    console.log(document.getElementById('mainHeading'));
    console.log(document.getElementById('heading'));
    console.log(document.getElementsByTagName('header'));

    var mainHeading = document.getElementById('mainHeading');
    var subHeading = document.getElementsByClassName('heading')[1];

    console.log(mainHeading.id);
    console.log(subHeading.id);


    mainHeading.id = 'firstHeading';
    console.log(mainHeading.id);
    console.log(document.getElementById('firstHeading'));
    console.log(subHeading.className);

    subHeading.classList.add('special');
    subHeading.classList.remove('special');
    console.log(subHeading.classList.contains('spicial'));

    console.log(mainHeading.tagName);
    console.log(mainHeading.nodeType);
    console.log(mainHeading.childNodes[0].nodeType);

    var heading = document.getElementsByTagName('header')[0];

    subHeading.textContent = 'I love Envato';

    subHeading.setAttribute('contentidibale', true);
    subHeading.removeAttribute('contendibale');
    console.log(heading.childNodes.length);





}());