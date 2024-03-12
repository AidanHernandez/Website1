loadText = document.querySelector('.apple')
button=document.querySelector('.btn')




load = 0
next = 0
button.addEventListener('click', () =>{
    int = setInterval(blurring, 35)
    next = 1;
})

if (next = 1)
{

}
function blurring() {
    load++
    if (load > 99){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`

    loadText.style.opacity = 0 + load/100


}
