import './styles.css';
import { loadHomePage } from './home.js';


const homeBtns = document.querySelectorAll(".home-button");
const menuBtns = document.querySelectorAll(".menu-button");
const contactBtns = document.querySelectorAll(".contact-button");

homeBtns.forEach(btn => {
    btn.addEventListener("click", loadHomePage);
  });
// menuBtn.addEventListener("click", loadMenuPage);
// contactBtn.addEventListener("click", loadContactPage);

loadHomePage();