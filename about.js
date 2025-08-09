const faqs= document.querySelectorAll(".faq")

faqs.forEach(faq =>{
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")
    })
})


window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })