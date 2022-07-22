'use strict'

const menuSize = '250px';

let open = true;

document.querySelector('#btnMenu').addEventListener('click', e => {
    open = !open;
    toggleMenu();
})

document.querySelector('#btnClose').addEventListener('click', e => {
    open = false;

    toggleMenu();
})

function toggleMenu() {
    if (open) {
        document.querySelector('#menu').style.marginLeft = 0;
        return;
    } 

    document.querySelector('#menu').style.marginLeft = `-${menuSize}`;
}
setInterval(() => {
    document.getElementsByTagName("p")[0].innerText = document.getElementsByTagName("p")[0].innerText ==  'Nicolas Cavalcanti' ? 'Nicolas Cavalcanti_' : 'Nicolas Cavalcanti'}, 700)

//setInterval(() => {
    //document.getElementsByTagName("p")[0].innerText = document.getElementsByTagName("p")[0].innerText == 'Hello World?' ? 'Hello World' : 'Hello World?'}, 500)