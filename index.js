let menu = document.getElementById("menu")
let menu_clicker = document.getElementById("menu-clicker")
let profile_btn = document.getElementById("profile_btn")
let profile_pop = document.getElementById("profile_pop")
let dropdown = document.getElementById("dropdown")
let isOpen = false
menu_clicker.addEventListener("click", function(){
    if(isOpen){
        dropdown.style.opacity = "0"
        dropdown.style.marginTop = "-20px"
        isOpen = false
    } else {
        dropdown.style.opacity = "1"
        dropdown.style.marginTop = "0"
        isOpen = true
    }
})
let profileopen = false
profile_btn.addEventListener("click", function(){
    if(profileopen == false){
        profile_pop.style.display = "block"
        profileopen = true
    }else{
        profile_pop.style.display = "none"
        profileopen = false
    }
})

