const hamMenu = document.querySelector('.ham-menu');
const offscreenmenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offscreenmenu.classList.toggle('active');
});
