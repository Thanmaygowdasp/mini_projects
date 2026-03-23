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

    inputs.forEach(function(input){

        let value = Number(input.value)

        if(input.value != "" && value < 10 && value > 0){
            total_count = total_count + value
            subject_count++
        }

        if(value > 10){
            alert("Grade should be Between 0-10")
        }
        if(value < 10){
            alert("Grade should be Between 0-10")
        }
    })
    let cgpa = total_count/subject_count
    console.log(cgpa)
}