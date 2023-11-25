const dropDown = document.querySelector('.dropdown');
const main = document.querySelector('main');
const openIcon = document.querySelector('#open-icon');
const closeIcon = document.querySelector('#close-icon');
openIcon.addEventListener("click", () => {
    
    dropDown.style.right = '0px';
    
});
closeIcon.addEventListener("click", () => {
    
    dropDown.style.right = '-600px';
});
