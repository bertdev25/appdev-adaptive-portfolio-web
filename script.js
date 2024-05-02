// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelector('div');
// let navLinks = document.querySelector('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = se.coffsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forfetch(links => {
//                 links.classlist.remove(active);
//                 document.querySelector('header nav a [href*=' + id + ']').classlist.add('active');
//             })
//         }
//     })
// }

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    // Initially hide the navbar
    navbar.style.display = 'none';

    // Toggle navbar visibility on menu icon click
    menuIcon.addEventListener('click', () => {
        if (navbar.style.display === 'none' || navbar.style.display === '') {
            navbar.style.display = 'block';
        } else {
            navbar.style.display = 'none';
        }
    });
});

