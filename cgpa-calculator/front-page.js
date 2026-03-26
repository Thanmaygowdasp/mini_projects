let sgpa_section = document.getElementById("sgpa-section")
let opensgpa = document.getElementById("opensgpa")
let backhome = document.getElementById("backhome")

opensgpa.addEventListener("click", function(){
    sgpa_section.classList.add("show")
})

backhome.addEventListener("click", function(){
    sgpa_section.classList.remove("show")
})