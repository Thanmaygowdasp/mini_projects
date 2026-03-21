let menu = document.getElementById("menu")
let menu_clicker = document.getElementById("menu-clicker")
let profile_btn = document.getElementById("profile_btn")
let profile_pop = document.getElementById("profile_pop")
let dropdown = document.getElementById("dropdown")
let overlay = document.getElementById("overlay")
let profile_closer = document.getElementById("profile_closer")
let isOpen = false
menu_clicker.addEventListener("mouseover", function(){
        dropdown.style.opacity = "1"
        dropdown.style.marginTop = "0"
})
profile_btn.addEventListener("click", function(){
    profile_pop.style.display = "block"
    overlay.classList.toggle("active")
})
profile_closer.addEventListener("click", function(){
    profile_pop.style.display = "none"
    overlay.classList.toggle("active")
    dropdown.style.opacity = "0"
    dropdown.style.marginTop = "-20px"
})

