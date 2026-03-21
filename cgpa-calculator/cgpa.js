let subject_adding = document.getElementById("subject_adding")
let container = document.getElementById("subjects")
let calculator = document.getElementById("calculator")

subject_adding.addEventListener("click", function(){
    addsubjects()
})

calculator.addEventListener("click", function(){
    cgpacalculator()
})

// Subject Adding
let maxsubject = 8
let sub_count = 0
let warning = false
function addsubjects(){
    let inputs = document.createElement("input")
        inputs.type = "number"
        inputs.placeholder = "Enter the Grade"
        container.appendChild(inputs)
        sub_count++

        if (sub_count>maxsubject && !warning){
            alert("Warning")
            warning = true
        }
}

function cgpacalculator(){
    let inputnum = document.querySelectorAll("#subjects inputs")

    let total_cgpa = 0
    let count_cgpa = 0

    inputnum.forEach(function(input){
        let value = Number(input.value)

        if(inputnum.value !== ""){
            console.log(value)
        }
    })
}
