let sgpa_section = document.getElementById("sgpa-section")
let opensgpa = document.getElementById("opensgpa")
let backhome = document.getElementById("backhome")
let subjectinputs = document.getElementById("subjectInputs")
let subjectcount = document.getElementById("subjectcount")
let addExtra = document.getElementById("addExtra")

opensgpa.addEventListener("click", function(){
    sgpa_section.classList.add("show")
})

backhome.addEventListener("click", function(){
    sgpa_section.classList.remove("show")
})


function createinput(){
    let div = document.createElement("div")
    div.innerHTML = `
    <input type="number" placeholder="enter Your Marks">
    <input type="number" placeholder="enter Your credits">
    `;
    subjectinputs.appendChild(div)
}

subjectcount.onchange = function(){
    subjectinputs.innerHTML = ""
    let count = Number(this.value)
    for(let i = 0; i< count; i++){
        createinput()
    }
}

addExtra.addEventListener("click", function(){
    createinput()
})

console.log("Dropdown working:", this.value)

