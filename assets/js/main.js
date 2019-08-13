let menuTop = document.querySelector(".menu-top");
let faBars = document.querySelector(".fa-bars");

faBars.addEventListener("click",function(){
    menuTop.classList.toggle("open");
    this.classList.toggle("fa-times");
})