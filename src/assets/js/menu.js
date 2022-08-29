'use strict'

const menuSize = '250px';

let open = true;

document.querySelector('#btnClose').addEventListener('click', e => {
    open = false;

    toggleMenu();
})

document.querySelector('#btnMenu').addEventListener('click', e => {
    open = !open;
    toggleMenu();
})

function toggleMenu() {
    if (open) {
        document.querySelector('#menu').style.marginLeft = 0;
        fadeOutEffect();
    } 

    document.querySelector('#menu').style.marginLeft = `-${menuSize}`;
}

/*function fadeOutEffect() {
    var fadeTarget = document.getElementById("opac");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 20);
}
*/

setInterval(() => {
    document.getElementsByTagName("p")[0].innerText = document.getElementsByTagName("p")[0].innerText ==  'Nicolas Cavalcanti' ? 'Nicolas Cavalcanti_' : 'Nicolas Cavalcanti'}, 700)

//setInterval(() => {
    //document.getElementsByTagName("p")[0].innerText = document.getElementsByTagName("p")[0].innerText == 'Hello World?' ? 'Hello World' : 'Hello World?'}, 500)