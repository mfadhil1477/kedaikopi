// Toggle Class Active

const navbarnav = document.querySelector('.navbar-nav');
// ketika hamburger di pencet
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active')
}


// pencet diluar untuk mengembalikannya

const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active')
    }
})