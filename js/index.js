loadText = document.querySelector('.apple')
var apple = document.getElementById('appl')
button=document.querySelector('.btn')
title_text = document.querySelector('.container h1')
back = document.querySelector('.docimg')
red = document.querySelector('.red')
overlay = document.querySelector('.container')
body = document.querySelector('body')
links = document.querySelector('a')
nav = document.querySelector('.nav')

load = 0
smaller = 0;
sizex = 0
sizey = 0
button.addEventListener('click', () =>{
    int = setInterval(blurring, 35)

})

function blurring() {
    load++
    load++
    if (sizex < 60){
        sizex++


    }
    if (sizey < 50){
        sizey++
    }

    if (load > 99){
        clearInterval(int)
        int = setInterval(smol, 35)

    }

    red.style.opacity= 0 + load/100
    back.style.opacity= 1-load/100
    title_text.style.opacity= 1-load/100
    loadText.style.opacity = 0 + load/100
    loadText.style.width = (40 + sizex) + "vw";
    loadText.style.height = (70 + sizey) + "vh";



}

function smol() {
    smaller++
    smaller++
    if (smaller > 99){
        nav.style.opacity = 0 + smaller/100
        links.style.zIndex = 0;
        body.style.overflow = "visible";
        loadText.style.width = (0) + "vw";
        loadText.style.height = (0) + "vh";
        red.style.width = (0) + "vw";
        red.style.height = (0) + "vh";
        back.style.width = (0) + "vw";
        back.style.height = (0) + "vh";
        clearInterval(int)

    }
    overlay.style.opacity= 1-smaller/100
    red.style.opacity= 1-smaller/100
    loadText.style.opacity = 1 - smaller/100
}

