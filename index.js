let menu = document.getElementById("menu")
let menu_clicker = document.getElementById("menu-clicker")
let profile_pop = document.getElementById("profile-pop")

menu_clicker.addEventListener("click", function(){
    menu.classList.toggle("active")
    menu_clicker.style.background =""
})