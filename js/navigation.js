nav = document.querySelector('.nav')
console.log("hi")
window.addEventListener('scroll', fixNav)

function fixNav(){

    if (window.scrollY > 256) {
        nav.classList.add('active')
    } else{
        nav.classList.remove('active')
    }
}
