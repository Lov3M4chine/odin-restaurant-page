import { addClickListeners } from './index.js';

function loadMenuPage () { 
    const content = document.getElementById("content");
    const menuPageHTML = `<div id="header" class="h-30 flex flex-col justify-center items-center">
    <div class="">
        <p class="text-white text-4xl font-bold italic my-4 flex justify-center items-center">RISTORANTE ITALIANO</p>
        <div class="flex justify-center gap-2 pb-3">
            <button class="home-button bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white">Home</button>
            <button class="menu-button bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white">Menu</button>
            <button class="contact-button bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white">Contact</button>
        </div>
    </div>
</div>
<div class="flex flex-col justify-center items-center">
    <div class="flex flex-col justify-center items-center bg-slate-800 w-fit rounded-full px-32 pb-24 pt-12 max-sm:w-screen">
        <p class="text-white rounded py-2 px-6 text-3xl underline mb-10">il antipasto</p>
        <div class="flex justify-center items-center gap-8 flex-wrap">
            <div class="w-96 h-auto bg-white p-5 rounded-3xl max-w-fit max-sm:w-screen">
                <img src="/src/imgs/anna-pelzer-IGfIGP5ONV0-unsplash.jpg" alt="" class="rounded">
                <div class="flex gap-3">
                    <p>salad</p>
                    <p>15</p>
                </div>
                <p>arugula, spinach, chard, watercress</p>
            </div>
            <div class="w-96 h-auto bg-white p-5 rounded-3xl max-w-fit max-sm:w-screen">
                <img src="/src/imgs/emy-XoByiBymX20-unsplash.jpg" alt="">
                <div class="flex gap-3">
                    <p>soup</p>
                    <p>14</p>
                </div>np
                <p>potato, cheese, broth, chicken</p>
            </div>
            <div class="w-96 h-auto bg-white p-5 rounded-3xl max-w-fit max-sm:w-screen">
                <img src="/src/imgs/davide-cantelli-jpkfc5_d-DI-unsplash.jpg" alt="">
                <div class="flex gap-3">
                    <p>bread</p>
                    <p>12</p>
                </div>
                <p>flour, yeast, cheese, herbs</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center bg-slate-800 w-fit rounded-full px-32 pb-24 pt-12 max-sm:w-screen">
        <p class="text-white rounded py-2 px-6 text-3xl underline mb-10">il secondo</p>
        <div class="flex justify-center items-center gap-8 flex-wrap">
            <div class="w-96 h-auto bg-white p-5 rounded-3xl max-w-fit max-sm:w-screen">
                <img src="/src/imgs/alex-munsell-Yr4n8O_3UPc-unsplash.jpg" alt="">
                <div class="flex gap-3">
                    <p>chicken</p>
                    <p>24</p>
                </div>
                <p>yams, broccolini, sauce, deliciousness</p>
            </div>
            <div class="w-96 h-auto bg-white p-5 rounded-3xl max-w-fit max-sm:w-screen">
                <img src="/src/imgs/ella-olsson-mmnKI8kMxpc-unsplash.jpg" alt="">
                <div class="flex gap-3">
                    <p>salmon</p>
                    <p>30</p>
                </div>
                <p>broccoli, quinoa, cilantro, lemon</p>
            </div>
            <div class="w-96 h-auto bg-white p-5 rounded-3xl max-w-fit max-sm:w-screen">
                <img src="/src/imgs/olayinka-babalola-r01ZopTiEV8-unsplash.jpg" alt="">
                <div class="flex gap-3">
                    <p>pasta</p>
                    <p>26</p>
                </div>
                <p>shrimp, noodles, tomato, green onion</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center bg-slate-800 w-fit rounded-full px-32 pb-24 pt-12 max-sm:w-screen">
        <p class="text-white rounded py-2 px-6 text-3xl underline mb-10">dolce</p>
        <div class="flex justify-center items-center gap-8 flex-wrap">
            <div class="w-96 h-auto bg-white p-5 rounded-3xl max-w-fit max-sm:w-screen">
                <img src="/src/imgs/thought-catalog-9aOswReDKPo-unsplash.jpg" alt="">
                <div class="flex gap-3">
                    <p>avocado</p>
                    <p>42</p>
                </div>
                <p>does not come with toast</p>
            </div>
        </div>
    </div>`

    content.innerHTML = "";
    content.innerHTML = menuPageHTML;
    content.className = ("h-fit w-full bg-cover bg-center font-serif");
    content.style.backgroundImage = "url('/src/imgs/pexels-pixabay-326333.jpg')"
    addClickListeners();
}

export { loadMenuPage };



