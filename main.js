const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener('click', toggleDeskTopMenu)


function toggleDeskTopMenu(){

    desktopMenu.classList.toggle('inactive') //.toggle Alternar entre clases

}

console.log('Works')