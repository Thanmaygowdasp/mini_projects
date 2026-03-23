let subjects = document.getElementById("subjects")
let subject_adding = document.getElementById("subject_adding")
let cgpacalculate = document.getElementById("calculator")

subject_adding.addEventListener("click", function(){
    subject_add()
})

cgpacalculate.addEventListener("click", function(){
    cgpacalculator()
})

let waringsubjects = 8
let subjects_added = 0
let alretmsgforsub = false
function subject_add(){
    let container = document.getElementById("subjects")
    let input = document.createElement("input")

    input.type = "Number"
    input.placeholder = "Enter the Grade"

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

    let value = Number(inputs.value)

    inputs.forEach(function(input){
        if(inputs.value != ""){
            console.log(value)
        }
    })
}