document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');


    checkViewportWidth();

    menuIcon.addEventListener('click', () => {
        toggleNavbar();
    });

    window.addEventListener('resize', () => {
        checkViewportWidth();
    });

    function toggleNavbar() {
        if (navbar.style.display === 'none' || navbar.style.display === '') {
            navbar.style.display = 'block';
        } else {
            navbar.style.display = 'none';
        }
    }

    function checkViewportWidth() {

        const viewportWidth = window.innerWidth;


        const mobileBreakpoint = 768;

        if (viewportWidth < mobileBreakpoint) {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'block';
        }
    }
});
