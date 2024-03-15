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