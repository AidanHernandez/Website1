loadText = document.querySelector('.apple')
button=document.getElementById('.next-button')




load = 0
next = 0
button.addEventListener('click', () =>{
    next = 1;
})

if (next = 1)
{
int = setInterval(blurring, 35)
}
function blurring() {
    load++
    if (load > 99){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`

    loadText.style.opacity = 0 + load/100


}
