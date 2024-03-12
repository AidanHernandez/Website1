loadText = document.querySelector('.apple')
button=document.querySelector('.btn')




load = 0
size = 0
button.addEventListener('click', () =>{
    int = setInterval(blurring, 35)

})

function blurring() {
    load++
    size++
    if (load > 99){
        clearInterval(int)
    }

    loadText.style.opacity = 0 + load/100
    loadText.style.width = (0 + size) + "vw";
    loadText.style.height = (0 + size) + "vh";


}

