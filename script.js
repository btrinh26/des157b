(function(){
    "use strict"
    console.log('running js');

    const button = document.querySelector('button'); //event listener, changer color, border, radius, font
    const body = document.querySelector('body'); //change color, fonts
    const header = document.querySelector('header'); //change background and text color, border radius
    const main = document.querySelector('main'); //change font mayber
    const section = document.querySelectorAll('section'); //hover efect
    const h3 = document.querySelectorAll('h3'); //color
    const li = document.querySelectorAll('ul li'); //border radius, hover
    const lia = document.querySelectorAll('ul li a'); //color
    const namesvg = document.querySelector('#bannername');

    let mode = 'blue';

    button.addEventListener('click', function() {
        if (mode === 'blue') {
            body.className = 'switch';
            button.className = 'switch';
            header.className = 'switch';
            main.className = 'switch';
            for (let i = 0; i < section.length; i++) {
                section[i].className = 'switch';
            }
            for (let i = 0; i < h3.length; i++) {
                h3[i].className = 'switch';
            }
            for (let i = 0; i < li.length; i++) {
                li[i].className = 'switch';
            }for (let i = 0; i < lia.length; i++) {
                lia[i].className = 'switch';
            }
            namesvg.innerHTML = '<img src="images/name2.svg" alt="name" height="187" width="400">';

            mode = 'orange';
        } else {
            body.removeAttribute('class');
            button.removeAttribute('class');
            header.removeAttribute('class');
            main.removeAttribute('class');
            for (let i = 0; i < section.length; i++) {
                section[i].removeAttribute('class');
            }for (let i = 0; i < h3.length; i++) {
                h3[i].removeAttribute('class');
            }
            for (let i = 0; i < li.length; i++) {
                li[i].removeAttribute('class');
            }for (let i = 0; i < lia.length; i++) {
                lia[i].removeAttribute('class');
            }
                namesvg.innerHTML = '<img src="images/name1.svg" alt="name" height="187" width="400">';

            mode = 'blue'
        }
    })
})()