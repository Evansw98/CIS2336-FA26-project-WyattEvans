let menuButton = document.querySelector(".menu-button");
let menuLinks = document.querySelector(".menu-links");

menuButton.addEventListener("click",function(){
    menuLinks.classList.toggle("active");
})