let menubar = document.querySelector("#menu-bar")
let navbar = document.querySelector(".nav-bar");

menubar.addEventListener("click" , () =>{
   menubar.classList.toggle("fa-times");
   navbar.classList.toggle("active");
})

menubar.addEventListener("onscroll", () =>{
   menubar.classList.remove("fa-times");
   navbar.classList.remove("active");

   if(window.scrollY > 60){
     document.querySelector("#scroll-top").classList.add("active");
   } else{
    document.querySelector("#scroll-top").classList.remove("active");
   }
})

