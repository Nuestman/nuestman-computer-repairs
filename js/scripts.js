const menuBtn = document.getElementById('mobile-cta')
    nav = document.querySelector('nav')
    menuBtnExit = document.getElementById ('mobile-exit');

menuBtn.addEventListener('click', () => {
    nav.classList.add('menuBtn');
})

menuBtnExit.addEventListener('click', () => {
    nav.classList.remove('menuBtn');
})


















// const mobileBtn = document.getElementById('mobile-open')
//             nav = document.querySelector('nav')
//             mobileBtnExit=document.getElementById('mobile-exit');

// mobileBtn.addEventListener('click', ()=> {
//     nav.classList.add('menu-btn');
// })


// mobileBtnExit.addEventListener('click', () => {
//     nav.classList.remove('menu-btn')
// })