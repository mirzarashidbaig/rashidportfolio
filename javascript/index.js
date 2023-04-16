const iconsClick = document.querySelector('.icons');
const header = document.querySelector('.header');

iconsClick.addEventListener('click',()=>{
    header.classList.toggle('active');
})