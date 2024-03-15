

// MOBILE MENU


const menuBtn = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-side-menu");
const closeBtn = document.querySelector(".close-button");

menuBtn.addEventListener('click', () =>{
  mobileMenu.style.transform = "translateX(0%)"
  
})
closeBtn.addEventListener("click" ,() => {
  mobileMenu.style.transform= 'translateX(100%)';
})

// MOBILE MENU LIST

const items = document.querySelectorAll(".mobile-menu-list");

items.forEach( el => {
    el.addEventListener("click", () =>{
        
       if(!el.classList.contains("open")){
        removeContent()
        el.classList.add("open")
        el.firstElementChild.firstElementChild.innerHTML = '<i class="fa-solid fa-caret-down"></i>'

       }
       else{
el.classList.remove("open")

el.firstElementChild.firstElementChild.innerHTML = '<i class="fa-solid fa-caret-right"></i>'
       }
    }
    )
})

function removeContent(){
    items.forEach( el =>{
        el.classList.remove("open")
       
     })
}


const subList = document.querySelectorAll(".get-sub-menu");

subList.forEach( el => {
  el.addEventListener("click", () =>{
      
     if(!el.classList.contains("enlarge")){
      removeSublist()
      el.classList.add("enlarge")
  el.firstElementChild.firstElementChild.innerHTML = '<i class="fa-solid fa-caret-down"></i>'

     }
     else{
el.classList.remove("enlarge")


     }
  }
  )
})

function removeSublist(){
  subList.forEach( el =>{
      el.classList.remove("enlarge")
     
   })
}

// FLORIST SWIPER
var swiper = new Swiper(".florist", {
  pagination: {
  el: ".swiper-pagination",
  type: "fraction",
},
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 

  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
});