nav = document.querySelector('.nav')
console.log("hi")
window.addEventListener('scroll', fixNav)

function fixNav(){

    if(window.scrollY > 223){
        nav.classList.add('active')
    } else{
        nav.classList.remove('active')
    }
}
