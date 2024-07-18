function toggleMenu(){
    let menu = document.querySelector(".menu-items");
   
    let icon = document.querySelector(".ham-icon");
    
    // menu.classList.toggle("open");
   
    icon.classList.toggle("open");

    menu.classList.toggle("open");
}