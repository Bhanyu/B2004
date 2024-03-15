const header = document.getElementById("main-header");
const headerTop = document.querySelector(".head-top")
const imgSlide = document.querySelector(".slide-bg");
const internetBank = document.querySelector(".internet-bank")
// TOP MENU

const topMenu = document.querySelector(".applications-top");

const closeBtn = document.querySelector(".close");

const swiperSec = document.getElementById("swiper-section")

closeBtn.addEventListener("click" ,() => {
topMenu.style.height= '0%';
header.classList.add("top")
swiperSec.classList.add("topp");
imgSlide.firstElementChild.style.height = "112%"
})

// REMOVE BUTTON
const remove = document.querySelector(".remove")
const search = document.querySelector(".search-wrap")
remove.addEventListener("click", ()=>{
	search.style.top = "-100px";
	search.style.background = "transparent"
})
const selink = document.querySelector(".search")
function Down(){
	selink.addEventListener("click", ()=> {

		search.classList.add(".down")
		
		
		
		})
}

const burger = document.querySelector(".burger-menu");
const add = document.querySelector(".head-adds")
const exit = document.querySelector(".exit")
const menu = document.querySelector(".menu")
const coreHead =document.querySelector(".head-core")
burger.addEventListener("click",() => {

if (!add.classList.contains("up")) {
	// add.classList.remove("up")
	coreHead.style.background = "white"
	add.classList.add("up")
exit.style.display = "block"
menu.style.display = "none"
}
else{
	add.classList.remove("up")
	exit.style.display = "none"
menu.style.display = "block"
coreHead.style.background = "transparent"
}

})






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

// SWIPER 
const turnBtn = document.querySelectorAll(".dot");

const slide = document.querySelectorAll(".slide");

const slideImg = document.querySelector(".slide-bg")

	turnBtn.forEach((el)=>{
    el.addEventListener("click",()=>{
slide.forEach((item)=>{
	item.classList.remove('active');
	if (el.getAttribute("data-id")==item.getAttribute("id")) {
// setInterval(() => {
// 	item.classList.remove('active');
// 		item.classList.add("active")	
// }, 1000);
item.classList.remove('active');
item.classList.add("active")
      }
})
  
   
    })
})



// SWIPER IKI


const story = document.querySelector(".swiper-wrapper");

const API_URL = "http://127.0.0.1:3200/stories"

async function getStory(){
	try{
		const response = await fetch(API_URL);
		const data = await response.json();
		console.log(data);
		let result = "";
		data.forEach(el => {
			result+=

`
<div class="swiper-slide">


<div class="story-content">
	<div class="story-heding">
		<h2>${el.heading}</h2>
	</div>
	<div class="story-action-bottom">
		<div class="order-link">
			<a href="#">${el.orderLink}</a>
		</div>
		<div class="learn-more">
			<a href="#">${el.learnMore}</a>
		</div>
	</div>
</div>

<div class="story-img2">
<img src="${el.imgLink}" alt="">
</div>


</div>






`





		});
		story.innerHTML = result
	}
	catch(e){
		console.log(e);
	}
}
getStory();

// STORY SWIPER






// var swiperEl = document.querySelector('.swiper-container');

// swiperEl.addEventListener('mouseenter', function(event) {
	var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		autoplay: {
		delay: 5000,
			disableOnInteraction: false
	  },
		loop: true,
		watchSlidesProgress: true
	});
	
	// var swiperEl = document.querySelector('.swiper-container');
	
	// swiperEl.addEventListener('mouseenter', function(event) {
	document.addEventListener('mouseenter', event => {
		const el = event.target;
		if (el && el.matches && el.matches('.swiper-container')) {
			// console.log('mouseenter');
			// console.log('autoplay running', swiper.autoplay.running);
			el.swiper.autoplay.stop();
			el.classList.add('swiper-paused');
			
			const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
			activeNavItem.style.animationPlayState="paused";
		}
	}, true);
	
	document.addEventListener('mouseleave', event => {
		// console.log('mouseleave', swiper.activeIndex, swiper.slides[swiper.activeIndex].progress);
		// console.log('autoplay running', swiper.autoplay.running);
		const el = event.target;
		if (el && el.matches && el.matches('.swiper-container')) {
			el.swiper.autoplay.start();
			el.classList.remove('swiper-paused');
	
			const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
			
			activeNavItem.classList.remove('swiper-pagination-bullet-active');
			// activeNavItem.style.animation = 'none';
	
			setTimeout(() => {
				activeNavItem.classList.add('swiper-pagination-bullet-active');
				// activeNavItem.style.animation = '';
			}, 15);
		}
	}, true);


// const prev = document.querySelectorAll(".swiper-button-prev");
// const next  = document.querySelectorAll(".swiper-button-next")
// const storySlide = document.querySelectorAll(".swiper-slide")
// let i = 0
// next.addEventListener('click', ()=>{
//     i++
//    appearSlide()
    
// })
// prev.addEventListener('click', ()=>{
//     i--
//    appearSlide()
  
// })


// function appearSlide(){
//     i++
//     if (i > storySlide.length-1) {
//         i = 0
//     }
//     if (i < 0) {
//         i = storySlide.length-1
//     }
//     removeShow()
//     storySlide[i].classList.add('show')
// }

// setInterval(appearSlide, 5000)


// function removeShow(){
//     storySlide.forEach(element => {
//         element.classList.remove('show')
	
//     });
// }


const amount = document.querySelector(".amount")
const time = document.querySelector(".time")
const salary = document.querySelector(".salary");
const rangeSalary = document.getElementById("range_s")
const rangeAmount = document.getElementById("range_a")
const rangeTime = document.getElementById("range_t")

function rangeValuePair(){
	// rangeSalary.addEventListener("change", ()=>{
	// 	salary.value=rangeSalary.value

	// })
	rangeSalary.oninput = s;
	function s(){
		salary.value=this.value
	}
	
	// rangeAmount.addEventListener("change", ()=>{
	// 	amount.value=rangeAmount.value
	// })
	rangeAmount.oninput = a;
	function a(){
		amount.value=this.value
	}
	// rangeTime.addEventListener("change", ()=>{
	// 	time.value=rangeTime.value
	// })
	rangeTime.oninput = t;
	function t(){
		time.value=this.value
	}
}


function getResult(){
	const resulText = document.querySelector(".result")


	const wage = parseInt(salary.value)
	const duration = parseInt(time.value)
	const counts = parseInt(amount.value)
	const quantity = wage * duration * counts/1200;
	const totalQuantity = quantity *12;
	const emi = totalQuantity/duration;
	const consequence = emi.toFixed(2)
resulText.innerText = consequence 

}


const satiram = document.querySelector(".sell_input");
const aliram = document.querySelector(".aliram");


function conclusion(){
let total 
total= (satiram.value / 1.96) 
aliram.innerHTML = total.toFixed(2)


}



window.addEventListener("keyup", ()=>{
	rangeValuePair()
getResult()
conclusion();

})

