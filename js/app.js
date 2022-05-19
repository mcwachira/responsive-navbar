const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')

// Toggle mobile menu

const toggleMenu = () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')


        //add menu hamburger icon
        toggle.querySelector('a').innerHTML = "<i class='fas fa - bars > </i >"
    } else {
        menu.classList.add('active');

        //add menu close  icon
        toggle.querySelector('a').innerHTML = "<i class='fas fa - times > </i >"

    }
}

// Event listener

toggle.addEventListener('click', toggleMenu, false)

//submenu 

const items = document.querySelectorAll('.item');

function toggleSubMenu() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");

    } else {
        if (menu.querySelector(".submenu.active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active")
            this.classList.add('submenu-active')
        } else {
            this.classList.add('submenu-active')
        }
    }
}

// Event listeners

for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener('click', toggleSubMenu, false);
        item.addEventListener('keypress', toggleSubMenu, false)
    }
}