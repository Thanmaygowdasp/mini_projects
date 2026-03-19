let menu = document.getElementById("menu")
let menu_clicker = document.getElementById("menu-clicker")
let profile_pop = document.getElementById("profile-pop")

//profile_pop.addEventListener("click", function(){
//    profile_pop.className = "Popped"
//})

menu_clicker.addEventListener("click", function(){
    menu.classList.toggle("active")
    menu_clicker.style.background =""
})