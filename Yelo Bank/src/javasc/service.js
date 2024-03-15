const header = document.getElementById("service-header");
const headerTop = document.querySelector(".head-top")
const internetBank = document.querySelector(".internet-bank")




// SCROLL HEADER

document.addEventListener("scroll", function(){

   
if (window.scrollY > 30){
header.classList.add("sticky");
headerTop.classList.add("hidden");
internetBank.classList.add("delete")
}

else{
    header.classList.remove('sticky')
    headerTop.classList.remove("hidden");
    internetBank.classList.remove("delete")
}
})

// ---------------FAQ-----------



const items = document.querySelectorAll(".faq-item");
function accordion() {
    items.forEach( el => {
        el.addEventListener("click", () =>{
            
           if(!el.classList.contains("active")){
            removeInner()
            el.classList.add("active")
         el.firstElementChild.firstElementChild.firstElementChild.lastElementChild.innerHTML = '<i class="fa-solid fa-minus"></i>'
    
           }
           else{
    el.classList.remove("active")
    
    el.firstElementChild.firstElementChild.firstElementChild.lastElementChild.innerHTML = '<i class="fa-solid fa-plus"></i>'
    
           }
        }
        )
    })
    function removeInner(){
        items.forEach( el =>{
            el.classList.remove("active")
            el.firstElementChild.firstElementChild.firstElementChild.lastElementChild.innerHTML = '<i class="fa-solid fa-plus"></i>'
         })
    }
}
accordion()


const slideInner = document.querySelector(".carousel");

const API_URL = "http://127.0.0.1:3200/Services"

async function getService(){
	try{
		const response = await fetch(API_URL);
		const data = await response.json();
		console.log(data);
		let inner = "";
		data.forEach(el => {
			inner+=

`
<div class="carousel-cell">
        <a href="#">
          <div class="slide-desc">
            <div class="text">
              <h3>${el.title}</h3>
              <p>
              ${el.content}  </p>
            </div>
           
            <div class="learn-more-btn">
            ${el.Link}
                <span><img src="${el.linkImg}" alt=""></span>
            </div>
          </div>
          <div class="slide-img">
            <img src="${el.img}" alt="">
          </div>
        </a>
      </div>



`





		});
		slideInner.innerHTML = inner
	}
	catch(e){
		console.log(e);
	}
}
getService();







