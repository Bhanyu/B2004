const headerTop = document.querySelector(".head-top");
const internetBank = document.querySelector(".internet-bank")
const header2 = document.getElementById("exchange-header");
const openLink = document.querySelector(".open");
const hiddenTitle = document.querySelectorAll(".hidden-title")
const hiddenText = document.querySelectorAll(".hidden-text")
function showContent(){
    openLink.addEventListener("click", ()=>{
        hiddenTitle.style.display = "block";
        hiddenText.style.display = "block"
        })
}

document.addEventListener("scroll", function(){

   
    if (window.scrollY > 30){
    header2.classList.add("sticky");
    headerTop.classList.add("hidden");
    internetBank.classList.add("delete")
    }
    
    else{
        header2.classList.remove('sticky')
        headerTop.classList.remove("hidden");
        internetBank.classList.remove("delete")
    }
    })


    const satiram = document.querySelector(".sell_input");
    const aliram = document.querySelector(".aliram");

 
function conclusion(){
   let total 
  if (satiram.value!="") {
    total= (satiram.value / 1.96) 
    aliram.innerHTML = total.toFixed(2)
  }
  else{
    aliram.innerHTML = "Aliram"
  }
 
  
 
}
      
    
  
    window.addEventListener("keyup", ()=>{
        conclusion()
    })