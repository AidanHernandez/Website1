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
open = document.getElementById('open')
modal=document.getElementById('modal')
close = document.getElementById('close')
ani=document.querySelector('.ani')
help=document.querySelector('.cta-btn')
spon=document.querySelector('.sponsor')


open.addEventListener('click', () =>{
    modal.classList.add('show-modal')
})

close.addEventListener('click', ()=>{
    modal.classList.remove('show-modal')
})

window.addEventListener('click', (e) =>{
    if(e.target == modal){
        modal.classList.remove('show-modal')
    }
})



load = 0
smaller = 0;
sizex = 0
sizey = 0

ani.addEventListener('click', () =>{
        help.style.opacity=1;
        nav.style.opacity =1;
        back.style.opacity=0;
        links.style.zIndex = 0;
        body.style.overflow = "visible";
        loadText.style.width = (0) + "vw";
        loadText.style.height = (0) + "vh";
        red.style.width = (0) + "vw";
        red.style.height = (0) + "vh";
        back.style.width = (0) + "vw";
        back.style.height = (0) + "vh";
        overlay.style.opacity= 0;
        red.style.opacity= 0;
        loadText.style.opacity = 0;
        ani.style.width = (0) + "vw";
        ani.style.height = (0) + "vh";
        spon.style.opacity=1;
    })


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
        spon.style.opacity=0+ smaller/100;
        help.style.opacity=0+ smaller/100;
        nav.style.opacity = 0 + smaller/100;
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

