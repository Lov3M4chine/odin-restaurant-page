import { addClickListeners } from './index.js';

function loadContactPage () { 
    const content = document.getElementById("content");
    const contactPageHTML = `<div id="header" class="h-30 flex flex-col justify-center items-center">
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
        <p class="text-white rounded py-2 px-6 text-3xl underline mb-10">locations</p>
        <div class="flex justify-center items-center gap-8 flex-wrap">
            <div class="w-96 h-auto bg-white p-5 rounded-3xl max-w-fit max-sm:w-screen">
                <img src="imgs/pexels-vojta-kovařík-3243090.jpg" alt="" class="rounded">
                <div class="flex gap-3">
                    <p>Phone: (555) 555 5555</p>
                </div>
                <p>1234 N Sicily Way, Rome, Italy </p>
            </div>
            <div class="w-96 h-auto bg-white p-5 rounded-3xl max-w-fit max-sm:w-screen">
                <img src="imgs/pexels-dominika-roseclay-1252500.jpg" alt="" class="rounded">
                <div class="flex gap-3">
                    <p>Phone: (444) 444 4444</p>
                </div>
                <p>1234 N Rome Way, Rome, Italy </p>
            </div>
        </div>
    </div>
</div>`

    content.innerHTML = "";
    content.innerHTML = contactPageHTML;
    content.className = ("h-screen w-full bg-cover bg-center font-serif max-sm:h-full max-lg:h-full");
    content.style.backgroundImage = "url('/src/imgs/pexels-pixabay-326333.jpg')"
    addClickListeners();
}

export { loadContactPage };





