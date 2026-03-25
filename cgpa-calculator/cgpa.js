let subjects = document.getElementById("subjects")
let subject_adding = document.getElementById("subject_adding")
let cgpacalculate = document.getElementById("calculator")
let result = document.getElementById("result")
let error = document.getElementById("error")
let menu_clicker = document.getElementById("menu-clicker")

subject_adding.addEventListener("click", function(){
    subject_add()
})

cgpacalculate.addEventListener("click", function(){
    cgpacalculator()
})

menu_clicker.addEventListener("click", function(){
    menu_clicker.classList.toggle = ""
})


let waringsubjects = 8
let subjects_added = 0
let alretmsgforsub = false
let subject_number = 1
function subject_add(){
    let container = document.getElementById("subjects")
    let input = document.createElement("input")

    input.type = "Number"
    input.placeholder = "Enter the Grade " + subject_number++

    container.append(input)
    subjects_added++

    if(subjects_added > waringsubjects){
        if(!alretmsgforsub){
            alert("Waring")
            alretmsgforsub = true
        }
    }
}

function cgpacalculator(){
    let inputs = document.querySelectorAll("#subjects input")

    let total_count = 0
    let subject_count = 0
    let haserror = false

    inputs.forEach(function(input){

        let value = Number(input.value)

        if(input.value === "") return

        if(value < 0 || value > 10){
            haserror = true
            return
        }

        total_count += value
        subject_count++
        
        })


        if(haserror){
            alert("Grade should be between 1-10")
            result.innerText = "Enter the Grade from 0 to 10"
            return
        }
        if(subject_count === 0){
            alert("Atleast input 1")
            result.innerText = "Enter Atleast 1 Input"
        }
    let cgpa = total_count/subject_count
    cgpa = cgpa.toFixed(2)
    result.innerText = cgpa
}   