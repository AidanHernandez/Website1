loadText = document.querySelector('.apple')


load = 0

int = setInterval(blurring, 35)

function blurring() {
    load++
    if (load > 99){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`

    loadText.style.opacity = 0 + load/100


}
