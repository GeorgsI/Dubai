
let btn__burger = document.querySelector('.btn__burger');
const MENU = document.querySelector('.menu-small');
const HTML = document.querySelector('html');
//const HTMLcontainer = document.querySelector('.header-blockFirst-container');





btn__burger.onclick = () => {
  console.log(1);
  MENU.classList.toggle('_activeMenu');
  HTML.classList.toggle('_hidden');
  btn__burger.classList.toggle('btn__burger_active');
  //HTMLcontainer.style.padding = 0;
  console.log(2);
};



















//let menuSpoller = document.querySelector('.menuFooter__titleWrepper');




//if(document.querySelector('.menuHeader-small___spollerTitlt')/*.widthOffSet = 'block'*/){
  /*  menuSpoller.forEach(item => {
    item.addEventListener('click', spollerOpen);
    });*/
//}



let menuSpoller = document.querySelectorAll('.titltSpoller');


menuSpoller.forEach(item => {
    item.addEventListener('click', spollerOpen);
});



function spollerOpen(e) {
   // console.log(this.nextElementSibling);
   // closeSpoller();
    this.classList.toggle('_active');
    this.nextElementSibling.classList.toggle('_active');
    //console.log(this);
   // console.log(this.childNodes[2]);
    this.childNodes[3].classList.toggle('_cross-revers');
  //  console.log(this.childNodes[3]);
}








const contentPhoto = {
    realУstate:{
        1:{
            photo:"image/Villa-1.jpg",
            title: "Villas",
           
            linck:"",
        } ,
        2:{
            photo:"",
            title: "Dubai",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.",
            
            linck:"",

        } ,
        3:{
            photo:"image/Villa-2.jpg",
            title: "Villas",
            linck:"",

        } ,
        4:{
            photo:"image/Villa-3.jpg",
            title: "Houses",
          
            linck:"",
        } ,
        5:{
            photo:"image/Villa-4.jpg",
            title: "Houses",
           
            linck:"",
        } ,
        6:{
            photo:"image/Villa-5.jpg",
            title: "Houses",
           
            linck:"",
        } ,
        7:{
            photo:"image/Villa-5.jpg",
            title: "Houses",
           
            linck:"",
        } ,



    }


}














let wrep = document.querySelector('.swiperVilla_wrepper');
let cont = '';

for(let key in contentPhoto){

    for(let key2 in contentPhoto[key]){


        let idCard = [ '_text', '_photo'];

        cont += `<div class="swiper-slide swiper-slide-villa">`;
        if(contentPhoto[key][key2].text){
            cont +=`<div class="swiper-slide-villa__innerWrepper villa__innerWrepper${idCard[0]}">`;
            cont +=`<p class="swiper-slide-villa__title${idCard[0]}">${contentPhoto[key][key2].title}</p>
                    <p class="swiper-slide-villa__text${idCard[0]}">${contentPhoto[key][key2].text}</p>
                    <botton class='btn seeProject-btn'>
                        <span class='seeProject-btn__title'>See project</span> 
                        <i class='icon-chevron-right seeProject-btn__chevron'></i>
                    </botton>`;


        }
        else{
            cont +=`<img  src="${contentPhoto[key][key2].photo}">`;
            cont +=`<div class="swiper-slide-villa__innerWrepper villa__innerWrepper${idCard[1]}">
                    <p class="swiper-slide-villa__title">${contentPhoto[key][key2].title}</p>`;
            


        }
        cont +=`</div>
                </div>`;





       // console.log( contentPhoto[key][key2] );




    }
}

wrep.innerHTML = cont;




let first =  new Swiper('.firstSlider', {
    speed: 400,
    spaceBetween: 100,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    /*pagination:{
        el:".swiper-pagination",
        clickable: true,
        renderBullet:function(index, className){
            return `<span class="${className}">0${(index+1)}</span>`;
        },
    }*/
});








let villa = new Swiper('.swiperVilla', {
    speed: 400,
    spaceBetween: 10,
    pagination:{
        el:".swiper-pagination",
        clickable: true,  
    },
    breakpoints: {
        320: {
            grid: {
                rows: 2,
            },
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            grid: {
                rows: 1,
            },
            slidesPerView: 4,
        }
    }
});






const contentPhotoHouses = {
    realУstate:{
        1:{
            photo:"image/Villa-1.jpg",
            title: "Villas",
           
            linck:"",
        } ,
       
        2:{
            photo:"image/Villa-2.jpg",
            title: "Villas",
            linck:"",

        } ,
        3:{
            photo:"image/Villa-3.jpg",
            title: "Houses",
          
            linck:"",
        } ,
        4:{
            photo:"image/Villa-4.jpg",
            title: "Houses",
           
            linck:"",
        } ,
        5:{
            photo:"image/Villa-4.jpg",
            title: "Houses",
           
            linck:"",
        } ,



    }


}

let wrep2 = document.querySelector('.swiperHouse_wrepper');
let contHouse = '';

for(let key in contentPhotoHouses){

    for(let key2 in contentPhotoHouses[key]){


        let idCard = [ '_text', '_photo'];

        contHouse += `<div class="swiper-slide swiper-slide-villa">`;
        if(contentPhotoHouses[key][key2].text){
            contHouse +=`<div class="swiper-slide-villa__innerWrepper villa__innerWrepper${idCard[0]}">`;
            contHouse +=`<p class="swiper-slide-villa__title${idCard[0]}">${contentPhotoHouses[key][key2].title}</p>
                    <p class="swiper-slide-villa__text${idCard[0]}">${contentPhotoHouses[key][key2].text}</p>
                    <botton class='btn seeProject-btn'>
                        <span class='seeProject-btn__title'>See project</span> 
                        <i class='icon-chevron-right seeProject-btn__chevron'></i>
                    </botton>`;


        }
        else{
            contHouse +=`<img  src="${contentPhotoHouses[key][key2].photo}">`;
            contHouse +=`<div class="swiper-slide-villa__innerWrepper villa__innerWrepper${idCard[1]}">
                    <p class="swiper-slide-villa__title">${contentPhotoHouses[key][key2].title}</p>`;
            


        }
        contHouse +=`</div>
                </div>`;





       // console.log( contentPhoto[key][key2] );




    }
}

wrep2.innerHTML = contHouse;


let House = new Swiper('.swiperHouse', {
    speed: 400,
    spaceBetween: 10,
    pagination:{
        el:".swiper-pagination",
        clickable: true,  
    },
    breakpoints: {
        320: {
            grid: {
                rows: 2,
            },
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            grid: {
                rows: 1,
            },
            slidesPerView: 4,
        }
    }
});





const contentPhotoInterior = {
    realУstate:{
        1:{
            photo:"image/Villa-1.jpg",
            title: "Villas",
           
            linck:"",
        } ,
        2:{
            photo:"",
            title: "Dubai",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.",
            
            linck:"",

        } ,
        3:{
            photo:"image/Villa-2.jpg",
            title: "Villas",
            linck:"",

        } ,
        4:{
            photo:"image/Villa-3.jpg",
            title: "Houses",
          
            linck:"",
        } ,
        5:{
            photo:"image/Villa-4.jpg",
            title: "Houses",
           
            linck:"",
        } ,
        6:{
            photo:"image/Villa-5.jpg",
            title: "Houses",
           
            linck:"",
        } ,
        7:{
            photo:"image/Villa-5.jpg",
            title: "Houses",
           
            linck:"",
        } ,
    }
}

let wrep3 = document.querySelector('.swiperInterior_wrepper');
let contInterior = '';

for(let key in contentPhotoInterior){

    for(let key2 in contentPhotoInterior[key]){


        let idCard = [ '_text', '_photo'];

        contInterior += `<div class="swiper-slide swiper-slide-villa">`;
        if(contentPhotoInterior[key][key2].text){
            contInterior +=`<div class="swiper-slide-villa__innerWrepper villa__innerWrepper${idCard[0]}">`;
            contInterior +=`<p class="swiper-slide-villa__title${idCard[0]}">${contentPhotoInterior[key][key2].title}</p>
                    <p class="swiper-slide-villa__text${idCard[0]}">${contentPhotoInterior[key][key2].text}</p>
                    <botton class='btn seeProject-btn'>
                        <span class='seeProject-btn__title'>See project</span> 
                        <i class='icon-chevron-right seeProject-btn__chevron'></i>
                    </botton>`;


        }
        else{
            contInterior +=`<img  src="${contentPhotoInterior[key][key2].photo}">`;
            contInterior +=`<div class="swiper-slide-villa__innerWrepper villa__innerWrepper${idCard[1]}">
                    <p class="swiper-slide-villa__title">${contentPhotoInterior[key][key2].title}</p>`;
            
        }
        contInterior +=`</div>
                </div>`;

    }
}
wrep3.innerHTML = contInterior;


let Interior = new Swiper('.swiperInterior', {
    speed: 400,
    spaceBetween: 10,
    pagination:{
        el:".swiper-pagination",
        clickable: true,  
    },
    breakpoints: {
        320: {
            grid: {
                rows: 2,
            },
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            grid: {
                rows: 1,
            },
            slidesPerView: 4,
        }
    }
});








const contentPhotoViewAllProjects= {
    realУstate:{
        1:{
            photo:"image/Villa-1.jpg",
            title: "Villas",
           
            linck:"",
        } ,
        2:{
            photo:"",
            title: "Dubai",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.",
            
            linck:"",

        } ,
        3:{
            photo:"image/Villa-2.jpg",
            title: "Villas",
            linck:"",

        } ,
        4:{
            photo:"image/Villa-3.jpg",
            title: "Houses",
          
            linck:"",
        } ,
        5:{
            photo:"image/Villa-4.jpg",
            title: "Houses",
           
            linck:"",
        } ,
        6:{
            photo:"image/Villa-5.jpg",
            title: "Houses",
           
            linck:"",
        } ,
        7:{
            photo:"image/Villa-5.jpg",
            title: "Houses",
           
            linck:"",
        } ,
    }
}

let wrep4 = document.querySelector('.swiperViewAllProjects_wrepper');
let contViewAllProjects = '';

for(let key in contentPhotoViewAllProjects){

    for(let key2 in contentPhotoViewAllProjects[key]){


        let idCard = [ '_text', '_photo'];

        contViewAllProjects += `<div class="swiper-slide swiper-slide-villa">`;
        if(contentPhotoViewAllProjects[key][key2].text){
            contViewAllProjects +=`<div class="swiper-slide-villa__innerWrepper villa__innerWrepper${idCard[0]}">`;
            contViewAllProjects +=`<p class="swiper-slide-villa__title${idCard[0]}">${contentPhotoViewAllProjects[key][key2].title}</p>
                    <p class="swiper-slide-villa__text${idCard[0]}">${contentPhotoViewAllProjects[key][key2].text}</p>
                    <botton class='btn seeProject-btn'>
                        <span class='seeProject-btn__title'>See project</span> 
                        <i class='icon-chevron-right seeProject-btn__chevron'></i>
                    </botton>`;


        }
        else{
            contViewAllProjects +=`<img  src="${contentPhotoViewAllProjects[key][key2].photo}">`;
            contViewAllProjects +=`<div class="swiper-slide-villa__innerWrepper villa__innerWrepper${idCard[1]}">
                    <p class="swiper-slide-villa__title">${contentPhotoViewAllProjects[key][key2].title}</p>`;
            
        }
        contViewAllProjects +=`</div>
                </div>`;

    }
}
wrep4.innerHTML = contViewAllProjects;


let ViewAllP = new Swiper('.swiperViewAllProjects', {
    speed: 400,
    spaceBetween: 10,
    pagination:{
        el:".swiper-pagination",
        clickable: true,  
    },
    breakpoints: {
        320: {
            grid: {
                rows: 2,
            },
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            grid: {
                rows: 1,
            },
            slidesPerView: 4,
        }
    }
});























/*
if(document.querySelectorAll('.video')){

    let video = document.querySelectorAll('.video');
    video.forEach(item=>{

        item
    });
}
function setUpVideo(video){

}*/
function findVideos() {
    let videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.video__linck');
    let media = video.querySelector('.video__media');
    let button = video.querySelector('.video__btn');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();




const swiper = new Swiper('.swiper-person', {
    speed: 400,
    spaceBetween: 100, 
    pagination:{
        el:".person__swiper-pagination",
        clickable: true,  
    },
    slidesPerGroup: 3,
    centerSliedes: true,
    initialSlide: 1,
   // loop: true, 
    breakpoints: {
        320: {

            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {

            slidesPerView: 2,
            spaceBetween: 30,  
        },
        1920:{
            slidesPerView: 4,
            spaceBetween: 51, 
        }
    }
});





const elemPage = {
    bookConsult: document.querySelectorAll('.btn-bookConsult'),
    body: document.querySelector('body'),
    html: document.querySelector('html'),


}








elemPage.bookConsult.forEach((item)=>{
    item.onclick=function(){
        
        let modalWind = document.createElement('div'); 
        modalWind.classList.add('modalWind');
        modalWind.innerHTML = contrntform;
        elemPage.body.appendChild(modalWind); 


        if(!document.querySelector('._hiddenModal')){
            elemPage.html.classList.add('_hiddenModal');
        }


    }
}) 


function closeE(e){
    if( document.querySelector('.modalWind')){
        document.querySelector('.modalWind').remove();
       
    }
    if( document.querySelector('._hiddenModal')){
        elemPage.html.classList.remove('_hiddenModal');
    }


}






let contrntform = `<div class='modalWindInnerWrepper'> 
    <div class='modalbtn'>
        <div class='modalbtn__close' onclick='closeE(this)'>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.39324 25.6077L25.6064 4.39453" stroke="#FCD54C" stroke-width="3" stroke-linecap="round"/>
            <path d="M4.39324 4.39226L25.6064 25.6055" stroke="#FCD54C" stroke-width="3" stroke-linecap="round"/>
            </svg>
        </div>
    </div>
    <div class='modalForm'>
        <div class='modalForm_innerWrepper'>
            <h2 class='modalbtn__title'>Leave your contacts</h2>
            <p class='modalbtn__text'>we will contact you within three hours</p>
            <input type='text' class='modalbtn__input' placeholder='Name'> 
            <input type='text' class='modalbtn__input' placeholder='Phone'> 
            <button class='modalbtn__send'>Send</button>
        </div>
    </div>
    </div>`;





