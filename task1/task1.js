
window.addEventListener("scroll", ()=>{
    const navbar = document.querySelector(".navbar");
    const scrolldist = window.scrollY;
    if(scrolldist > 10){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});