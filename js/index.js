loadText = document.querySelector('.apple')
button=document.querySelector('.btn')




load = 0
sizex = 0
sizey = 0
button.addEventListener('click', () =>{
    int = setInterval(blurring, 35)

})

function blurring() {
    load++
    if (sizex < 60){
        sizex++
    }
    if (sizey < 50){
        sizey++
    }

    if (load > 99){
        clearInterval(int)
    }
    loadText.style.opacity = 0 + load/100
    loadText.style.width = (40 + sizex) + "vw";
    loadText.style.height = (70 + sizey) + "vh";


}

