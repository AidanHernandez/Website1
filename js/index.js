loadText = document.querySelector('.apple')
button=document.querySelector('.btn')
title_text = document.querySelector('.container h1')
back = document.querySelector('.docimg')
red = document.querySelector('.red')




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
    button.style.opacity= 1- load/100
    loadText.style.opacity = 0 + load/100
    loadText.style.width = (40 + sizex) + "vw";
    loadText.style.height = (70 + sizey) + "vh";



}

function smol() {
    smaller++
    smaller++
    if (smaller > 99){
        document.body.style.backgroundImage= "url("back-images/white.png")";
        clearInterval(int)

    }
    red.style.opacity= 1-smaller/100
    loadText.style.opacity = 1 - smaller/100
}

