// MOBILE-MENU

const menuBtn = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-side-menu");
const closeBtn = document.querySelector(".close-button");

menuBtn.addEventListener('click', () =>{
  mobileMenu.style.transform = "translateX(0%)"
  
})
closeBtn.addEventListener("click" ,() => {
  mobileMenu.style.transform= 'translateX(100%)';
})

// MOBILE-MENU-LIST

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