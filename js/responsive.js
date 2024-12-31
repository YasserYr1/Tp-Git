// Responsive bar dde navigation
const menu = document.getElementById('menu-icon');
const nav = document.querySelector('nav');
const buttons = document.getElementById('button-row-responsive');


menu.addEventListener('click', () => {
    nav.classList.toggle('nav-visible');
    buttons.classList.toggle('nav-visible');
});

function resizeMenu() {
    if (window.innerWidth > 860) {
        nav.classList.add('nav-visible');
        buttons.classList.remove('nav-visible');
    } else {
        nav.classList.remove('nav-visible');
        buttons.classList.remove('nav-visible');
    }
}
resizeMenu();

window.addEventListener('resize', resizeMenu);