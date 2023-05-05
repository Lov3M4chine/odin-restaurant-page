import homePageVideo from './video/pexels-cottonbro-studio-6054010-4096x2160-25fps.mp4';


function loadHomePage () { 
    const content = document.getElementById("content");
    const homePageHTML = `<div id="header" class="h-30 flex flex-col justify-center items-center">
        <div class="">
            <p class="text-white text-4xl font-bold italic my-4 flex justify-center items-center">RISTORANTE ITALIANO</p>
            <div class="flex justify-center gap-2 pb-3">
                <button class="home-button bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white">Home</button>
                <button class="menu-button bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white">Menu</button>
                <button class="contact-button bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white">Contact</button>
            </div>
        </div>
        </div>
        <div id="home-content" class="flex flex-col">
        <div class="relative">
            <video class="w-full h-auto" preload="auto" autoplay playsinline muted loop src="${homePageVideo}"></video>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <p class="text-white font-bold mb-4 text-xl">THE COMFORT YOU CRAVE</p>
                <button class="menu-button bg-white text-slate-900 px-6 py-3 rounded-full hover:bg-amber-950 hover:text-white">SEE MENU</button>
            </div>
        </div>
        <div class="relative">
            <img src="/src/imgs/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg" alt="">
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <p class="text-white font-bold mb-4 text-xl">CELEBRATE MOM WITH OUR SPECIALS</p>
                <button class="bg-white text-slate-900 px-6 py-3 rounded-full hover:bg-amber-950 hover:text-white">LEARN MORE</button>
            </div>
        </div>
        <div class="relative">
            <img src="/src/imgs/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg" alt="">
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <p class="text-white font-bold mb-4 text-xl">GET IN TOUCH WITH THE FLAVOUR OF ITALY</p>
                <button class="contact-button bg-white text-slate-900 px-6 py-3 rounded-full hover:bg-amber-950 hover:text-white">CONTACT US</button>
            </div>
        </div>
        </div>`

    content.innerHTML = "";
    content.innerHTML = homePageHTML;
}

export { loadHomePage };
