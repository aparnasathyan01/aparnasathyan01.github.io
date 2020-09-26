const menuIcon = document.querySelector('.hamburger-menu');
const hambar = document.querySelector('.ham-bar');
function handleClick(){
    hambar.classList.toggle("change");
}
menuIcon.addEventListener('click', handleClick);