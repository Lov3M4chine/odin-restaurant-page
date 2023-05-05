import './styles.css';
import { loadHomePage } from './home.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';


export function addClickListeners () {
    const homeBtns = document.querySelectorAll(".home-button");
    const menuBtns = document.querySelectorAll(".menu-button");
    const contactBtns = document.querySelectorAll(".contact-button");

    homeBtns.forEach(btn => {
        btn.addEventListener("click", loadHomePage);
    });
    menuBtns.forEach(btn => {
        btn.addEventListener("click", loadMenuPage);
    });
    contactBtns.forEach(btn => {
        btn.addEventListener("click", loadContactPage);
      });
}

loadHomePage();