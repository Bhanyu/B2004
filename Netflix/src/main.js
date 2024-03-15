const faqs = document.querySelectorAll(".faq");

faqs.forEach(item =>{
    item.addEventListener("click", () =>{
        if(!item.classList.contains("active")){
            removeCont()
            item.classList.add("active");
            item.firstElementChild.firstElementChild.lastElementChild.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        }
        else{
            item.classList.remove("active");
            item.firstElementChild.firstElementChild.lastElementChild.innerHTML = '<i class="fa-solid fa-plus"></i>'
        }
    })

})

function removeCont(){
    faqs.forEach(item =>{
        item.classList.remove("active");
        item.firstElementChild.firstElementChild.lastElementChild.innerHTML = '<i class="fa-solid fa-plus"></i>'
    })
}