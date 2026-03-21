let subject_adding = document.getElementById("subject_adding")
let container = document.getElementById("subjects")

subject_adding.addEventListener("click", function(){
    addsubjects()
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


