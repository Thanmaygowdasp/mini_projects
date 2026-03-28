let sgpa_section = document.getElementById("sgpa-section")
let opensgpa = document.getElementById("opensgpa")
let backhome = document.getElementById("backhome")
let subjectinputs = document.getElementById("subjectInputs")
let subjectcount = document.getElementById("subjectcount")
let addExtra = document.getElementById("addExtra")
let calc_btn = document.querySelector(".calc-btn")
let sgpaResult = document.getElementById("sgpaResult")

opensgpa.addEventListener("click", function(){
    sgpa_section.classList.toggle("show")
    cgpa_section.classList.remove("showcgpa")
})
backhome.addEventListener("click", function(){
    sgpa_section.classList.remove("show")
})


function createinput(){
    let div = document.createElement("div")
    div.className = "userinput"
    div.innerHTML = `
    <input type="number" placeholder="Enter Your Marks" class="marks">
    <input type="number" placeholder="Enter Your credits" class="credits">
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

function gradepoints(marks){
    if(marks >= 90 && marks <= 100) return 10;
    else if(marks >= 80) return 9;
    else if(marks >= 70) return 8;
    else if(marks >= 60) return 7;
    else if(marks >= 50) return 6;
    else if(marks >= 40) return 5;
    else return 0;
}

calc_btn.addEventListener("click", function(){
    let userinputs = document.querySelectorAll(".userinput")

    let totalcredits = 0
    let totalpoints = 0;

    userinputs.forEach(userinputs =>{
        let marks = userinputs.querySelector(".marks").value
        let credits = userinputs.querySelector(".credits").value

        marks = Number(marks)
        credits = Number(credits)

        if(!marks || !credits) return;
        let gp = gradepoints(Number(marks))

        totalcredits += credits
        totalpoints += gp * credits
    })
    if(totalcredits === 0){
        console.log("enter the credits ")
    }

    let sgpa = totalpoints / totalcredits
    sgpaResult.innerHTML = "SGPA =" + sgpa.toFixed(2)
})


//cgpa calculation
let cgpa_section = document.getElementById("cgpa-section")
let opencgpa = document.getElementById("opencgpa")
let backhome2 = document.getElementById("backhome2")
let subjectinputscgpa = document.getElementById("subjectinputscgpa")
let subjectcountcgpa = document.getElementById("subjectcountcgpa")
let calc_btncgpa = document.getElementById("calc-btncgpa")

opencgpa.addEventListener("click", function(){
    cgpa_section.classList.toggle("showcgpa")
    sgpa_section.classList.remove("show")
})  
backhome2.addEventListener("click", function(){
    cgpa_section.classList.remove("showcgpa")
})

let sumcount = 8
function inputsforcgpa(semcount){
        for(let k = 1; k<=semcount; k++){
            let div = document.createElement("div")
        div.className = "inputcgpa"
        div.innerHTML = `
        <input type="number" placeholder="Enter sem ${k} cgps" class="cgpa">
        `
        subjectinputscgpa.appendChild(div)
        }
}

subjectcountcgpa.addEventListener("change", function(){
    subjectinputscgpa.innerHTML = ""
        inputsforcgpa(Number(this.value))
})


calc_btncgpa.addEventListener("click", function(){
    let ursercgpa = document.querySelectorAll(".inputcgpa")

    let totalcgpa = 0
    let totalsem = 0

    ursercgpa.forEach(ursercgpa =>{
        let cgpa = ursercgpa.querySelector(".cgpa")
        let value = Number(cgpa.value)
        if(!value)   return;

        totalcgpa += value
        totalsem = totalsem + 1
    })
    if(totalsem === 0){
        console.log("Enter CGPA values")
        return
    }
    let finalcgpa = totalcgpa/totalsem
    console.log(finalcgpa)
})